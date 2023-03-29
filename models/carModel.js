const mongoose = require("mongoose");
// Joi - מאפשר אימות של מידע שמגיע מצד לקוח בצד שרת
// לפני שהוא עובד לצד של המסד
const Joi = require("joi");

const carSchema = new mongoose.Schema({
  car:String,
  car_model:String,
  car_color:String,
  car_model_year:Number,
  price:String,
  availability:Boolean
})

exports.CarModel = mongoose.model("cars",carSchema);

exports.validateCar = (_reqBody) => {
  let joiSchema = Joi.object({
    car:Joi.string().min(2).max(150).required(),
    car_model:Joi.string().min(2).max(150).required(),
    car_color:Joi.string().min(2).max(150).required(),
    car_model_year:Joi.number().min(1800).max(3000).required(),
    price:Joi.string().min(2).max(150).required(),
    availability:Joi.boolean().allow(null,"")
  })
  return joiSchema.validate(_reqBody);
}