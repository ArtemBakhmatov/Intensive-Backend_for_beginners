import dotenv from 'dotenv';
import morgan from 'morgan';
import 'colors';
import express from "express";
import authRoutes from './app/auth/auth.routes.js';
import { prisma } from './app/prisma.js';
import { errorHandler, notFound } from './app/middleware/error.middleware.js';

dotenv.config(); // инициализируем файл .env

/* 
    TODO: 
        [] - Async error handling for method
        [] - App.use notFound, errorHandler
        [] - 
*/

const app = express();

async function main() {
    if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
    // morgan -> позволяет делать логирование внутри консоли (какие запросы ушли и какие пришли)
    // morgan -> будет логировать наши запросы

    app.use(express.json); // в формате json
    app.use('/api/auth', authRoutes);

    app.use(notFound);
    app.use(errorHandler);

    const PORT = 5000;

    app.listen(
        PORT, 
        console.log(
            `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT }`.blue
                .bold
        )
    )
}

/* 
    use() -> используется для создания промежуточных обработчиков - Middleware.
    Middleware -> функция промежуточной обработки, используется для выполнения каких-либо 
    действий на основе данных объекта запроса и ответа и передает обработку следующей функции. 
    listen() ->  используется для привязки и прослушивания соединений на указанном хосте и порту. 
*/

main() // отключение БД
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})