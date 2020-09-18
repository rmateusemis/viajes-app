import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajesModelService {

  constructor(private http: HttpClient) { }

  cargarViajes(): Observable<Viaje[]> {
    return this.http.get<any[]>('https://api-coches.herokuapp.com/viajes');
  }
}
