const {default:mongoose} =require("mongoose");
const mondbUrl ="mongodb+srv://sakshissuk35:EohB3CboTLfYNeFG@cluster0.kd2cjjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb =()=>{
  return mongoose.connect(mondbUrl);
}
module.exports={connectDb}
