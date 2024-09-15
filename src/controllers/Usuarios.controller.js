import { pool } from "../db.js";

export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Usuario');
        
        if (result.length === 0) {
            return res.status(404).json({ message: "Users not found" });
        }

        console.log(result[0]); 
        
        res.json({
            idUsuario: result[0].idUsuario,
            Nombre: result[0].Nombre,
            Apellido: result[0].Apellido,
            Edad: result[0].Edad,
            Puesto: result[0].Puesto,
            Ciudad: result[0].Ciudad,
        });
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}
