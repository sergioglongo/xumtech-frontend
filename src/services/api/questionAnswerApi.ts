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

export const findBestAnswer = async (question: string): Promise<FindAnswerResponse> => {
  try {
    const response = await apiClient.get<FindAnswerResponse>('/question-answer/question', {
      params: { question }, // Envía la pregunta como query param
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    console.error('Error al buscar la respuesta:', error);
    throw new Error('Error de conexión al intentar buscar la respuesta.');
  }
};

export const createQuestionAnswer = async (data: QAParams) => {
  const response = await apiClient.post('/question-answer', data);
  return response.data;
};

export const getAllQuestionAnswers = async () => {
  const response = await apiClient.get('/question-answer');
  return response.data;
};
export const getQuestionAnswerById = async (id: number | string) => {
  const response = await apiClient.get(`/question-answer/${id}`);
  return response.data;
};
export const deleteQuestionAnswer = async (id: number | string) => {
  const response = await apiClient.delete(`/question-answer/${id}`);
  return response.data;
};
