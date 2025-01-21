import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getAllComentarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comentarios/buscarTodos`);
  }

  agregarComentario(comentario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comentarios/crear`, comentario);
  }

  buscarComentarioPorID(comentarioID: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/comentarios/buscar/${comentarioID}`);
  }
}
