import 'reflect-metadata'
import express from 'express'
import routes from './routes'
var cors = require('cors')

import './database'
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes);

const port = 8000
app.listen(port, () => {
    console.log('server started on port' + ' ' + port);
});
