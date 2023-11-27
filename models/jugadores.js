import mongoose from 'mongoose';

const jugadorSchema = new mongoose.Schema({
 
  nombre: {
    type: String,
    required: true
  },
  puntos: {
    type: Number,
    required: true,
    default: 0
  },
  asistencias: {
    type: Number,
    required: true,
    default: 0
  },
  ganados: {
    type: Number,
    required: true,
    default: 0
  },
  efectividad: {
    type: Number,
    required: true,
    default: 0
  },
  porcentajeAsistencia: {
    type: Number,
    required: true,
    default: 0
  }
});

const Jugador = mongoose.model('Jugador', jugadorSchema);

export default Jugador;
