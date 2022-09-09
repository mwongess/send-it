export interface Iparcel {
  name: string;
  id?: number  | string
  destination: string;
  from: string;
  to: string;
  status: string;
}