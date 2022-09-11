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

   onseeMore(id: string | number) {
      this.gettAllParcels().subscribe(parcels => {
      this.myorder = parcels.filter((parc) => parc.id == id);
      alert(this.myorder)
      this.getOrder();
        this.router.navigate(['admin/dashboard/parcel/details']);
        return this.myorder
      });
  }
  getOrder() {
    return this.myorder;
  }
  newParcel(parcel: Iparcel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.url}/parcels/`,
      parcel
      );
  }
  
    gettAllParcels(): Observable<Iparcel[]> {
      return this.http.get<Iparcel[]>('http://localhost:3000/parcels');
    }

  deleteParcel(id: string | number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.url}/parcels/${id}`
    );
  }
}
