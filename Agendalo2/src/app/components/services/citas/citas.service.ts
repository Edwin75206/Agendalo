import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  crearCita(cita: any): Observable<any> {
    // Convierte horario a cadena si es un array
    if (Array.isArray(cita.horario)) {
      cita.horario = cita.horario.join(', '); // Puedes usar el separador que prefieras
    }

    if (Array.isArray(cita.dia)) {
      cita.dia = cita.dia.join(', '); // Puedes usar el separador que prefieras
    }

    return this.http.post<any>(`${this.apiUrl}/citas/crear`, cita);
  }


  getAllCitas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/citas/buscarTodos`);
  }
}
