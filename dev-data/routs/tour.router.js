import {Router} from "express";
import {TourController} from "../mvs/controller/tour.controller.js"

export const tourRout = Router()

tourRout.route('/').get(TourController.getAllTours).post(TourController.postTour)
tourRout.route('/:id').get(TourController.getTourID).patch(TourController.patchTourID).delete(TourController.deleteTourID)
