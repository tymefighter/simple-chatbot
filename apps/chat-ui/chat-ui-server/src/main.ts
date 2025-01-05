// Libraries
import express from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';

// Constants
import { AppMode, CHAT_WEB_URL, CHAT_UI_CLIENT_PATH, CHAT_UI_SERVER_PORT } from './constants';

// Types
import type { Express } from 'express';

export const main = (app: Express): void => {
  if (isProductionMode()) {
    console.log('Running production mode');
  } else {
    console.log('Running development mode');
  }

  if (!isProductionMode()) {
    setupCors(app);
  }

  setupAPIProxy(app);

  if (isProductionMode()) {
    serveUIApp(app);
  }

  app.listen(CHAT_UI_SERVER_PORT, () => {
    console.log(`chat-ui-server listening on port ${CHAT_UI_SERVER_PORT}`);
  });
}

const setupAPIProxy = (app: Express): void => {
  app.use('/api', proxy(CHAT_WEB_URL))
}

const isProductionMode = () => process.env.NODE_ENV === AppMode.production;

const setupCors = (app: Express): void => {
  app.use(cors());
}

const serveUIApp = (app: Express): void => {
  app.use(express.static(CHAT_UI_CLIENT_PATH));
}
