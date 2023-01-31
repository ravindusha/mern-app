import express from "express";
import {
  addRemoveFriend,
  getUserFriends,
  getUser,
} from "../controllers/users.mjs";
import { verifyToken } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
