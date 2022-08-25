import { RoomController } from "./../controllers/RoomController";
import { SubjectController } from "./../controllers/SubjectController";
import { Router } from "express";

const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.get("/room", new RoomController().list);
routes.post("/room/:idAula/create", new RoomController().createVideo);
routes.put("/room/:idAula/subject", new RoomController().roomSubject);

export default routes;
