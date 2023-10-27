import mongoose from 'mongoose';

const { Schema } = mongoose;

const tourSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Tour must have name'],
    unique: true,
    trim:true
  },
  duration:{
    type:Number,
    require:[true,'A tour must have duration']
  },
  maxGrupSize:{
    type:Number,
    require:[true,'A tour must have a grup size']
  },
  difficulty:{
    type:String,
    require:[true,'must have']
  },
  ratingsAverage: {
    type: Number,
    default: 3,
  },
  ratingsQuantaty:{
    type:Number,
    default:0
  },
  price: {
    type: Number,
    require: [true, 'Tour must have a price'],
  },
  priceDiscount:Number,
  summary:{
    type:String,
    trim:true,
    require:[true,'must have']
  },
  description:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
    trim:true,
    require:[true,'must have a cover image']
  },
  images:[String],
  createdAt:{
    type:Date,
    default:Date.now(),
    select:false
  },
  startDates:[Date]
  
});

export const TourModelSchema = mongoose.model('Tour', tourSchema);
