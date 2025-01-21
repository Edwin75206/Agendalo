import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000'; // Actualiza con la URL de tu API

  constructor(private http: HttpClient) {}

  saveUserData(userData: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios/crear`;
    return this.http.post(url, userData);
  }

  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/buscar/${userId}`;
    return this.http.get(url);
  }


  getAllUsers(): Observable<any> {
    const url = `${this.apiUrl}/usuarios/buscarTodos`;
    return this.http.get(url);
  }

  updateCompleteUser(userId: string, updatedUserData: any): Observable<any> {
    const url = `${this.apiUrl}/usuarios/actualizar/${userId}`;
    return this.http.put(url, updatedUserData);
  }


  deleteUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/borrar/${userId}`;
    return this.http.delete(url);
  }



  getUserComments(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/comentarios/usuario/${userId}`);
  }

  getUserServices(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/servicios/usuarios/${userId}/servicios`);
  }
}
//http://localhost:3000/servicios/usuarios/6/servicios
//http://localhost:3000/comentarios/usuario/6
