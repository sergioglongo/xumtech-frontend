# frontend/Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --include=dev

# Copiar código fuente
COPY . .

# Construir la app (aquí se inyectan las variables de entorno de Vite)
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# Etapa de ejecución: Servir la app estática con Nginx
FROM nginx:alpine

# Copiar la app construida
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de Nginx (opcional, para SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]