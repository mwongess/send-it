import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iparcel } from '../models/parcel.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ParcelsService {
  myorder!: any;

  constructor(private router: Router, private http: HttpClient) {}
  token = localStorage.getItem('token') as string;
  url = 'http://localhost:4003';

  onseeMore(id: string | number) {
    this.gettAllParcels().subscribe((parcels) => {
      this.myorder = parcels.filter((parc) => parc.id == id);
      alert(this.myorder);
      this.getOrder();
      this.router.navigate(['admin/dashboard/parcel/details']);
      return this.myorder;
    });
  }
  getOrder() {
    return this.myorder;
  }
  newParcel(parcel: Iparcel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.url}/orders/`, parcel, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }

  gettAllParcels(): Observable<Iparcel[]> {
    return this.http.get<Iparcel[]>(`${this.url}/orders/`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }

  deleteParcel(id: string | number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.url}/orders/${id}`, {
      headers: new HttpHeaders({ token: this.token }),
    });
  }
  updateParcel(
    id: string | number,
    updatedParcel: Iparcel
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      `${this.url}/orders/update/${id}`,
      updatedParcel,
      {
        headers: new HttpHeaders({ token: this.token }),
      }
    );
  }
}
