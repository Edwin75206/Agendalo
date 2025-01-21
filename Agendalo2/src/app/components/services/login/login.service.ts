import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from 'src/app/models/login/login.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/usuarios/login'; // Cambia esto según tu API

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  login(credentials: Login): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, credentials)
      .pipe(
        // Usa el operador tap para almacenar el usuario en el servicio de autenticación después del inicio de sesión
        tap((user: any) => this.authService.setLoggedInUser(user))
      );
  }
}
