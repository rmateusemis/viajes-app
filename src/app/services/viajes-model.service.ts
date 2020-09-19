import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root',
})
export class ViajesModelService {
  constructor(private http: HttpClient) {}

  cargarViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>('https://api-coches.herokuapp.com/viajes');
  }

  guardarViaje(viaje: Viaje): Observable<Viaje> {
    if (viaje) {
      if (viaje.id) {
        return this.http.put<Viaje>(`https://api-coches.herokuapp.com/viajes/${viaje.id}`, viaje);
      }
      else {
        return this.http.post<Viaje>('https://api-coches.herokuapp.com/viajes', viaje);
      }
    }
  }

  deleteViaje(id: string): Observable<Viaje> {
    return this.http.delete<Viaje>(`https://api-coches.herokuapp.com/viajes/${id}`);
  }

  getViaje(id: string): Observable<Viaje> {
    return this.http.get<Viaje>(`https://api-coches.herokuapp.com/viajes/${id}`);
  }
}
