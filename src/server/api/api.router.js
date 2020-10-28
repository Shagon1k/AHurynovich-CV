import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/hello', (req, res) => {
  res.json({ hello: 'hello' });
});

export default apiRouter;