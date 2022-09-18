export interface Iparcel {
  name?: string;
  id?: number  | string
  destination?: string;
  sender?: string;
  sendername: string
  receiver?: string;
  receivername: string
  weight: string
  price: string
  status?: string;
}