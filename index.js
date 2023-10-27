import "dotenv/config.js";
import mongoose from "mongoose";
import express from 'express';
import {tourRout} from "./dev-data/routs/tour.router.js"
import {userRout} from "./dev-data/routs/user.routs.js";
const {MONGO_CONFIG} = process.env, app=express(), port = 3000;
 


app.use(express.json());
app.use(express.static('./public'))


app.use('/api/v1/tours/',tourRout)
app.use('/api/v1/users/',userRout)

app.listen(port, async()=>{
    try {
        await mongoose.connect(MONGO_CONFIG,{
          useNewUrlParser:true
        })
    
        console.log('Connected to MongoDB')
        console.log(`Server is up at port:${port}`);
      } catch (error) {
        console.log(error)
      }
})