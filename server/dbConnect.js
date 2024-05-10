import mongoose from "mongose"

async function connectDB(){
    try {
       await mongoose.connect(`mongodb+srv://numan:Numan@projects.rcpzybc.mongodb.net/contact-form`) 
       console.log("Connected to Mongo DB");
    } catch (error) {
        console.log(error);
    }
}
connectDB()