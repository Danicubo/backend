import mongoose from "mongoose"
import colors from 'colors'
import { exit } from 'node:process'

export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.connection.host}: ${connection.connection.port}`
        console.log(colors.green.bold(`MongoDB conectado en: ${url}`))
    } catch (error) {
        /* console.log(error.message) */
        console.log(colors.red.bold('Error al conectar a MongoDB'))
        
        exit(1)
    }
}