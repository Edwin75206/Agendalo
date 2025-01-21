import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from 'src/app/models/servicio/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) {}

  saveServicioData(servicioData: Servicio): Observable<any> {
    const url = `${this.apiUrl}/servicios/crear`;
    return this.http.post(url, servicioData);
  }


  getAllServicios(): Observable<any> {
    const url = `${this.apiUrl}/servicios/buscarTodos`;
    return this.http.get(url);
  }
  getServicioById(serviceId: string): Observable<any>{
    const url = `${this.apiUrl}/servicios/buscar/${serviceId}`;
    return this.http.get(url);
  }

  updateServicio(serviceId: string, updatedServiceData: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios/actualizar/${serviceId}`;
    return this.http.put(url, updatedServiceData);
  }

}
