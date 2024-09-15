import { pool } from "../db.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Llamada al procedimiento almacenado para verificar usuario
        const [result] = await pool.query('CALL VerifyUser(?, ?)', [email, password]);

        // Verificar si el usuario existe
        if (result[0].length === 0) {
            return res.status(400).json({ message: 'Correo o contraseña incorrectos' });
        }

        const user = result[0][0];

        // Enviar los datos de idUsuario, si es Admin y si es el primer login
        return res.status(200).json({
            idUsuario: user.idUsuario,
            isAdmin: user.isAdmin,        // Indicador de si es admin
            firstLogin: user.First,       // Indicador de si es su primer login
            message: 'Login exitoso',
        });

    } catch (error) {
        console.error('Error en loginUser:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Controlador para manejar el envío del formulario
export const formPost = async (req, res) => {
    const { idUsuario, peso, altura, nivel_estres, sueno, ejercicio, latidos, respira } = req.body;

    try {
        // Llamar al Stored Procedure InsertForm con los parámetros correspondientes
        const [result] = await pool.query('CALL InsertForm(?, ?, ?, ?, ?, ?, ?, ?)', 
            [idUsuario, peso, altura, nivel_estres, sueno, ejercicio, latidos, respira]);

        // Verificar si la inserción fue exitosa
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
};
