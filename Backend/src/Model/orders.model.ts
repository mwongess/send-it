interface Iorders {
  id: number | string;
  name: string;
  sender: string;
  receiver: string;
  destination: string;
  lat: number;
  lng: number;
  status: string;
  isDeleted: boolean;
}
