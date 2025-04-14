import { app } from './app'
import { env } from './env'
// GET, POST , PUT , PATCH E DELETE

// http://localhost:3333/hello

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
