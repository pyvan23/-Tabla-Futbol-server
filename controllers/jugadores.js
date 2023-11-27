import Jugador from "../models/jugadores.js";


export const getJugadores = async (req, res) => {
    try {
      const jugadores = await Jugador.find()// Esto buscará todos los documentos en la colección de jugadores
     
      res.status(200).json(jugadores); // Devuelve la lista de jugadores
    } catch (error) {
      res.status(500).json({ message: 'nada' }); // Manejo de errores
    }
  };

  export const putJugadores = async (req, res) => {
    try {
      const jugadores = req.body; // Asumiendo que envías un arreglo de jugadores en el cuerpo de la solicitud.
      console.log('req body',req.body);
      if (!Array.isArray(jugadores) || jugadores.length === 0) {
        return res.status(400).send('Se requiere un arreglo de jugadores');
      }
  
      for (let jugadorData of jugadores) {
        const { _id, puntos } = jugadorData;
        console.log(jugadorData);
        
        const jugador = await Jugador.findById(_id); // Encuentra el jugador por id.
        if (!jugador) {
          console.error('Jugador no encontrado: ', _id);
          continue; // Continúa con el siguiente jugador si uno no se encuentra.
        }
  
        jugador.puntos += puntos; // Añade los puntos al jugador.
        await jugador.save(); // Guarda el documento actualizado en la base de datos.
      }
  
      res.status(200).json({ message: "Jugadores actualizados con éxito" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }