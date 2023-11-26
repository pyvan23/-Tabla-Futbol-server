import { Router } from "express";

import { getJugadores } from "../controllers/jugadores.js";


const jugadoresRouter = Router();

//all players - public

jugadoresRouter.get('/', getJugadores);

export default jugadoresRouter;
