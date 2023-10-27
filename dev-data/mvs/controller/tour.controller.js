import { TourService } from '../service/tour.service.js';

export class TourController {
  static async getTourQuery(req, res) {
    const queryObj = { ...req.query };
    const dataQuery = await TourService.getTourQuery(queryObj);
    
    // console.log(`Resoult list:${queryObj}`)
    res.status(200).json({
      message:'Succses',
      dataQuery,
    });
  }

  static async getAllTours(req, res) {
    // const queryObj = { ...req.query };
    // console.log(`Log from T.C, line 17:${queryObj}`)
    const allTours = await TourService.getAllTours(req.query);
    res.status(200).json({
      results: allTours.length,
      allTours,
    });
  }
  static async getTourID(req, res, next) {
    try {
      const id = req.params.id;
      const tourID = await TourService.getTourID(id);
      if (!tourID) throw new Error();
      res.status(200).json({ tourID });
    } catch (error) {
      console.error(`Error from T.C getByID ${error}`);
    }
    next();
  }
  static async postTour(req, res, next) {
    const newTour = await TourService.postTour(req.body);
    try {
      res.status(201).json({
        status: 'sucsses',
        data: { newTour },
      });
    } catch (error) {
      console.error(`Bad request: ${error} `);
      res.status(400).json({
        status: 'Fail',
        message: 'Bad request',
      });
    }
    next();
  }
  static async patchTourID(req, res, next) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedTour = await TourService.patchTourID(id, data);
      console.log(updatedTour);
      res.status(201).json({ updatedTour });
    } catch (error) {
      console.error(`Error at T.C ${error}`),
        res.status(400).json({
          message: 'Bad request !',
        });
    }
    next();
  }
  static async deleteTourID(req, res, next) {
    try {
      await TourService.deleteTourID(req.params.id);
      res.status(204);
    } catch (error) {
      console.error(`Error from T.C ${error}`);
    }
    next();
  }
}
