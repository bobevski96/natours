import { query } from 'express';
import { FsFunctions } from '../../fsFunctions.js';
// import { v4 as randomID } from 'uuid';// For tests
import { TourModelSchema as Tour } from '../model/tour.model.js';
// const toursJSONPath = 'dev-data/data/tours-simple.json';

export class TourService {
  static async getTourQuery(data) {
    // 1.Filtering
    // const excludedFilds = ['page', 'sort', 'limit', 'fields', 'price'];
    // excludedFilds.forEach((el) => delete data[el]);
    // const query = await Tour.find(JSON.parse(data));// Call the function
    //2. Advance Filter
    // let queryStrying = JSON.stringify(data);
    // queryStrying = queryStrying.replace(/\b(gte|gt|lre|lt)\b/g,(match) => `$${match}`);
    // console.log(JSON.parse(queryStrying));
    // let query = await Tour.find(JSON.parse(queryStrying));// Call the function
    //3. Sort filter
    // let {queryData} = data
    // console.log(`t.s QueryData: ${queryData}`)
    // const sortBy=queryData
    // const query=Tour.find({sortBy})
    
    // return query;
  }

  static async getAllTours(data) {
    // 1.Filtering
    // if(data){
    //   const excludedFilds = ['page', 'sort', 'limit', 'fields', 'price'];
    //   excludedFilds.forEach((el) => delete data[el]);
    //   let query = await Tour.find(JSON.parse(data));// Call the function
    //   console.log(`T.S line 33: ${query}`)
    //   return query
    // }
    
    
    
    const allTours = await Tour.find();
    return allTours;
  }
  static async getTourID(id) {
    try {
      const tourID = await Tour.findById(id);
      if (!tourID) throw new Error();
      return tourID;
    } catch (error) {
      console.error(`Error from T.S getByID ${error}`);
    }
  }
  static async postTour(userData) {
    try {
      const newTour = await Tour.create(userData);
      return newTour;
    } catch (error) {
      console.error(`Error at T.S: ${error}`);
      // req.status(400)
    }
  }
  static async patchTourID(id, data) {
    try {
      const tour = await Tour.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      return tour;
    } catch (error) {
      console.error(`Error from T.S: ${error}`);
    }
  }
  static async deleteTourID(id) {
    try {
      await Tour.findByIdAndDelete(id);
      if (!id) throw new Error();
    } catch (error) {
      console.error(`Error from T.S: ${error}`);
    }
  }
}
