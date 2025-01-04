// Libraries
import path from 'path';

export enum AppMode {
  development = 'development',
  production = 'production'
};

export const CHAT_WEB_URL = 'chat-web-service:8080';

export const CHAT_UI_CLIENT_PATH = path.join(__dirname, '../../chat-ui-client/build');

export const CHAT_UI_SERVER_PORT = 8080;
