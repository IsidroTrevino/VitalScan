import { pool } from "../db.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [result] = await pool.query('CALL VerifyUser(?, ?)', [email, password]);

        if (result[0].length === 0) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        const user = result[0][0];

        return res.status(200).json({
            idUsuario: user.idUsuario,
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

        // Verificar si result[0] existe
        if (result && result[0] && result[0].length > 0 && result[0][0].insertId) {
            return res.status(200).json({
                message: 'Datos insertados en Computar exitosamente',
            });
        } else {
            return res.status(400).json({ message: 'No se pudo insertar en Computar' });
        }

    } catch (error) {
        console.error('Error en formPost:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}
