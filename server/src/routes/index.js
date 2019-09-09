import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';
import tasks from '../controllers/tasksController.js';

const router = express.Router();

const swaggerDefinition = {
  info: {
    title: 'ElifTechSchool API',
    version: '0.0.0',
    description: 'Documentation about all ElifTechSchool API calls',
  },
  basePath: '/api',
  definitions: {
    400: {
      description: 'Validation exception.',
      type: 'object',
      required: ['message'],
      properties: { message: { type: 'string', default: 'Validation exception' } },
    },
    401: {
      description: 'Unauthorized access.',
      type: 'object',
      required: ['message'],
      properties: { message: { type: 'string', default: 'Unauthorized access' } },
    },
    404: {
      description: 'Page not found.',
      type: 'object',
      required: ['message'],
      properties: { message: { type: 'string', default: 'Page not found' } },
    },
    500: {
      description: 'Server error.',
      type: 'object',
      required: ['message'],
      properties: { message: { type: 'string', default: 'Server error' } },
    },
  },
};

const swaggerSpec = swaggerJSDoc({ swaggerDefinition, apis: ['./src/controllers/*.js'] });

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec));
/*router.use('/api/v1/examples', example);*/
router.use('api/v1/tasks', tasks);

export default router;
