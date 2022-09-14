export interface Iparcel {
  name?: string;
  id?: number  | string
  destination?: string;
  sender?: string;
  receiver?: string;
  weight: string
  price: string
  status?: string;
}