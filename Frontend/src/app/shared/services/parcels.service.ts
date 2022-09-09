import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iparcel } from '../models/parcel.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  myorder!: any;

  constructor(private router: Router, private http: HttpClient) {}
  url = 'http://localhost:3000';
   // onseeMore(id: string | number) {
  //   this.myorder = this.allParcels.filter((order) => order.id == id);
  //   this.getOrder();
  //   this.router.navigate(['admin/dashboard/parcel/details']);
  // }
  // getOrder() {
  //   return this.myorder;
  // }
  gettAllParcels(): Observable<Iparcel[]> {
    return this.http.get<Iparcel[]>('http://localhost:3000/parcels');
  }
  newParcel(parcel: Iparcel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.url}/parcels/`,
      parcel
    );
  }

  deleteParcel(id: string | number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.url}/parcels/${id}`
    );
  }
}
