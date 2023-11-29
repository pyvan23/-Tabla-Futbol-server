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
        const { _id, puntos,gano } = jugadorData;
        
        const jugador = await Jugador.findById(_id); 
        console.log(jugador);// Encuentra el jugador por id.
        if (!jugador) {
          console.error('Jugador no encontrado: ', _id);
          continue; // Continúa con el siguiente jugador si uno no se encuentra.
        }
       if(gano){
        jugador.puntos += 3; 
        jugador.gano = false; }
        await jugador.save(); 
      }
  
      res.status(200).json({ message: "Jugadores actualizados con éxito", });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }