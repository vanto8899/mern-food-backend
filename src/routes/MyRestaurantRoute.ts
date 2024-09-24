import express from "express";
import multer from "multer";
import { validateMyRestaurantRequest } from "../middleware/validation";
import { jwtCheck, jwtParse } from "../middleware/auth";
import MyRestaurantController from "../controllers/MyRestaurantController";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
    "/",
    upload.single("imageFile"),
    validateMyRestaurantRequest,
    jwtCheck,
    jwtParse,
    MyRestaurantController.createMyRestaurant
  );


export default router;