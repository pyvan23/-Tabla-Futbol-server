import { Router } from "express";

import { getJugadores, putJugadores } from "../controllers/jugadores.js";


const jugadoresRouter = Router();

//all players - public

jugadoresRouter.get('/', getJugadores);

jugadoresRouter.put('/',putJugadores)

export default jugadoresRouter;
