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
