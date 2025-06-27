const {default:mongoose} =require("mongoose");
const mondbUrl ="mongodb://localhost:27017/E-commerce";

const connectDb =()=>{
  return mongoose.connect(mondbUrl);
}
module.exports={connectDb}