import { createServer } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import 'dotenv/config';
import createDebug from 'debug';

const debug = createDebug('app:server');

const PORT = process.env.PORT || 3000;

const createHtmlString = (title: string, content:string)

const getController () => {}

const appRouter = (request: IncomingMessage, response: ServerResponse) => {
    const { url, method } = request;

    if (!url) {
        response.statusCode = 404;
        response.end('Not found');
        return;
    }

    debug(method, url);

switch (url) {
    case 'GET':
        response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end('Node server, Página de inicio');
    break;

    case 'POST':
    case 'PUT':
    case 'PATCH':
    case 'DELETE':
        default:
            response.statusCode = 405;
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            response.end('Método no permitido')

        
}

    
};

const server = createServer(appRouter);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    debug(`Server running on http://localhost:${PORT}`);
});
