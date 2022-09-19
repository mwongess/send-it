import Joi from "joi";

export const OrderSchema = Joi.object({
  name: Joi.string().required(),
  sender: Joi.string().required().email(),
  sendername: Joi.string().required(),
  receiver: Joi.string().required().email(),
  receiverName: Joi.string().required(),
  destination: Joi.string().required(),
  status: Joi.string().required(),
  weight: Joi.string().required(),
  price: Joi.string().required(),
});
