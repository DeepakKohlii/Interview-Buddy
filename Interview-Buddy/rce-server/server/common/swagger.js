import middleware from 'swagger-express-middleware';
import * as path from 'path';
import errorHandler from '../api/middlewares/error.handler';

export default function swagger(app, routes) {
  return new Promise((resolve, reject) => {
   

      routes(app);

    
      app.use(errorHandler);
      return resolve();
    
  });
}
