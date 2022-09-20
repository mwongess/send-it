import Joi from "joi";

export const OrderSchema = Joi.object({
  name: Joi.string().required(),
  sender: Joi.string().required().email(),
  sendername: Joi.string().required(),
  receiver: Joi.string().required().email(),
  receivername: Joi.string().required(),
  destination: Joi.string().required(),
  weight: Joi.number().required(),
  price: Joi.number().required(),
});
