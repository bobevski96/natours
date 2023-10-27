import {Router} from "express";
import {UserController} from "../mvs/controller/user.controller.js"

export const userRout = Router()


userRout.route('/').get(UserController.getAllUsers).post(UserController.createUser)
userRout.route('/:id').get(UserController.getUserByID ).patch(UserController.updateUserID).delete(UserController.deleteUserID)