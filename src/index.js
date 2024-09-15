import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/Usuarios.routes.js'

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', usuariosRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});