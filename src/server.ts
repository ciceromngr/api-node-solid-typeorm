import 'dotenv/config'
import { app } from "./app";

app.listen(process.env.NODE_PORT, () => console.log('Server is Running.'))