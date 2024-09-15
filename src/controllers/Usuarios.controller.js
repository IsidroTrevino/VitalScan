import { pool } from "../db.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe y la contraseña coincide
        const [result] = await pool.query('SELECT * FROM Usuario WHERE Correo = ? AND password = ?', [email, password]);

        if (result.length === 0) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        const user = result[0];

        // Verificar si es la primera vez que hace login
        const isFirstLogin = user.First === 1;  // Convertir el valor de First a booleano

        return res.status(200).json({
            idUsuario: user.idUsuario,
            firstLogin: isFirstLogin, 
            message: 'Login exitoso',
        });

    } catch (error) {
        console.error('Error en loginUser:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const formPost = async (req, res) => {
    const { idUsuario, peso, altura, nivel_estres, sueno, ejercicio, latidos, respira } = req.body;

    try {
        // Llamada al Stored Procedure para insertar en la tabla 'Computar'
        const [result] = await pool.query('CALL InsertForm(?, ?, ?, ?, ?, ?, ?, ?)', 
            [idUsuario, peso, altura, nivel_estres, sueno, ejercicio, latidos, respira]);

        // Actualizar el campo 'First' a false
        await pool.query('UPDATE Usuario SET First = FALSE WHERE idUsuario = ?', [idUsuario]);

        return res.status(200).json({
            message: 'Datos insertados en Computar y First actualizado a false exitosamente',
        });

    } catch (error) {
        console.error('Error en formPost:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

