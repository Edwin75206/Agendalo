import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from '../../shared/dialog-error/dialog-error/dialog-error.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: any;

  constructor(private dialog: MatDialog) {}

  setLoggedInUser(user: any): void {
    this.usuario = user;
  }

  getLoggedInUser(): any {
    return this.usuario;
  }

  isLoggedIn(): boolean {
    return !!this.usuario; // Devuelve true si hay un usuario almacenado
  }

  logout(): void {
    this.usuario = null;
  }


  login(email: string, password: string): void {
    // Lógica de autenticación, por ejemplo, una llamada a un servicio web
    // Si las credenciales no son válidas, mostrar el cuadro de diálogo
    const isValid = this.authenticateUser(email, password);

    if (!isValid) {
      this.openErrorDialog('Credenciales incorrectas o no existentes.');
    } else {
      // Lógica de autenticación exitosa
      // Puedes redirigir al usuario a la página principal, por ejemplo
      console.log('Autenticación exitosa');
      this.setLoggedInUser({ email, /*...otras propiedades...*/ });
    }
  }

  private authenticateUser(email: string, password: string): boolean {
    // Aquí implementa tu lógica de autenticación
    // Retorna true si las credenciales son válidas, false en caso contrario
    return email === 'usuario@example.com' && password === 'password';
  }

  private openErrorDialog(errorMessage: string): void {
    this.dialog.open(DialogErrorComponent, {
      width: '300px',
      data: { errorMessage },
    });
  }
}
