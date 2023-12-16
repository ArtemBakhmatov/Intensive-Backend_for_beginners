import 'colors';
import express from "express";
import authRoutes from './app/auth/auth.routes.js';

const app = express();

async function main() {
    //if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
    // morgan -> позволяет делать логирование внутри консоли (какие запросы ушли и какие пришли)

    app.use(express.json); // в формате json
    app.use('/api/auth', authRoutes);

    const PORT = 5000;

    app.listen(
        PORT, 
        console.log(
            `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT }`.green
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

main();