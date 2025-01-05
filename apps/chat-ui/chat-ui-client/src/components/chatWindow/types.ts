// Types
import type { Author } from './constants';

export interface ChatMessage {
  id: number;
  conversationId: number;
  message: string;
  author: Author;
}
