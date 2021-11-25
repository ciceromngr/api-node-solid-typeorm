import 'dotenv/config'
import 'reflect-metadata'
import './database'

import { app } from "./app";

app.listen(process.env.NODE_PORT, () => console.log('Server is Running.'))