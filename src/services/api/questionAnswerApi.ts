import axios from 'axios';
import { apiClient } from './apiClient';

export interface QAParams {
  question_text: string;
  answer_text: string;
  synonyms?: Record<string, string[]>;
}

export interface FindAnswerResponse {
  answer?: string;
  message?: string;
}

// --- Funciones de la API ---

/**
 * Llama al endpoint para encontrar la mejor respuesta a una pregunta.
 * @param question La pregunta del usuario.
 * @returns Una promesa que se resuelve con la respuesta del bot.
 */
export const findBestAnswer = async (question: string): Promise<FindAnswerResponse> => {
  try {
    const response = await apiClient.get<FindAnswerResponse>('/question-answer/question', {
      params: { question }, // Envía la pregunta como query param
    });
    return response.data;
  } catch (error) {
    // Si el backend devuelve un 404 con un mensaje, axios lo tratará como un error.
    // Aquí capturamos ese caso para devolver el mensaje de "No pude encontrar respuesta".
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    console.error('Error al buscar la respuesta:', error);
    throw new Error('Error de conexión al intentar buscar la respuesta.');
  }
};

/**
 * Crea un nuevo registro de pregunta y respuesta.
 * @param data Los datos para el nuevo registro.
 */
export const createQuestionAnswer = async (data: QAParams) => {
  const response = await apiClient.post('/question-answer', data);
  return response.data;
};

/**
 * Obtiene todos los registros de la base de datos.
 */
export const getAllQuestionAnswers = async () => {
  const response = await apiClient.get('/question-answer');
  return response.data;
};

/**
 * Obtiene un registro específico por su ID.
 * @param id El identificador del registro.
 */
export const getQuestionAnswerById = async (id: number | string) => {
  const response = await apiClient.get(`/question-answer/${id}`);
  return response.data;
};

/**
/**
 * Elimina un registro por su ID.
 * @param id El identificador del registro a eliminar.
 */
export const deleteQuestionAnswer = async (id: number | string) => {
  const response = await apiClient.delete(`/question-answer/${id}`);
  return response.data;
};

// Es necesario importar axios para usar isAxiosError