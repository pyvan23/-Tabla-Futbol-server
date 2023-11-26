import Jugador from "../models/jugadores.js";


export const getJugadores = async (req, res) => {
    try {
      const jugadores = await Jugador.find()// Esto buscará todos los documentos en la colección de jugadores
      console.log(jugadores);
      res.status(200).json(jugadores); // Devuelve la lista de jugadores
    } catch (error) {
      res.status(500).json({ message: 'nada' }); // Manejo de errores
    }
  };