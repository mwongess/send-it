export interface Iparcel {
  name?: string;
  id?: number  | string
  destination?: string;
  lat: number
  lng: number
  sender?: string;
  sendername: string
  receiver?: string;
  receivername: string
  weight: number
  price: number
  status?: string;
}