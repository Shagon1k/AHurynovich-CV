import fse from 'fs-extra';
import ReactDOMServer from 'react-dom/server';

import { SRC_APP_TEMPLATE } from '../../../../config/environment';

/**
 * Get rendering template
 * @return {Promise<*>}
 */
const getTemplate = async () => {
  try {
    const templateSrc = await fse.readFile(SRC_APP_TEMPLATE, 'utf-8');

    return templateSrc;
  } catch (err) {
    return err;
  }
};

/**
 * Process template with data to be rendered
 *
 * @param {String} tpl - template string
 * @param {Object} options
 * @param {String} options.app - stringified application
 */
const processTemplate = (tpl, options) => {
  const { app } = options;

  const processedTemplate = tpl.replace(/<!--TEMPLATE_APP-->/, app);

  return processedTemplate;
};

/**
 *
 * @param {Object} options
 * @param {Function} options.createApp - basic function to create application
 * @return {Function}
 */
const createRenderMiddleware = (options) => async (req, res, next) => {
  const { createApp } = options;
  const requestPath = req.path || (req.url && req.url.path);
  const app = createApp({
    isServer: true,
    path: requestPath,
  });

  const template = await getTemplate();

  const stringifiedApp = ReactDOMServer.renderToString(app);

  // Replace template placeholders with appropriate data
  const responseBody = processTemplate(template, {
    app: stringifiedApp,
  });

  res.setHeader('Content-Type', 'text/html');
  res.status(200);
  res.send(responseBody);
};

export default createRenderMiddleware;
