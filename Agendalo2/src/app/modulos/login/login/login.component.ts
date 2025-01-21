import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth/auth.service';
import { LoginService } from 'src/app/components/services/login/login.service';
import { Login } from 'src/app/models/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: Login = {
    correoElectronico: '',
    password: ''
  };


  error: string = '';  // Variable para almacenar mensajes de error

  constructor(private loginService: LoginService, private router: Router, public authService:AuthService) {}

  onSubmit() {
    this.loginService.login(this.loginData).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response);

        // Verificar si 'idUsuario' está presente en la respuesta del servidor
        if (response.idUsuario) {
          const userId = response.idUsuario;

          // Almacena el usuario en el servicio de autenticación
          this.authService.setLoggedInUser(response);

          // Redirigir a la página correspondiente según el userId
          this.redirectBasedOnUserId(userId);
        } else {
          console.error('La respuesta del servidor no contiene idUsuario:', response);
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
        this.authService.logout(); // Asegurarse de cerrar sesión en caso de error
        this.error = 'Credenciales incorrectas o no existentes.';
        this.openErrorDialog(this.error);
      }
    );
  }

  private openErrorDialog(errorMessage: string): void {
    // Puedes agregar aquí la lógica para mostrar un cuadro de diálogo de error
    // utilizando MatDialog o cualquier otro mecanismo que prefieras.
    console.error(errorMessage);
  }

  private redirectBasedOnUserId(userId: string): void {
    console.log('UserID:', userId);

    const userIdNumber = parseInt(userId, 10); // Convertir userId a número

    if (userIdNumber === 1) {
      console.log('Redirigiendo a /administrador');
      setTimeout(() => {
        this.router.navigate(['/administrador']);
      }, 0);
    } else {
      console.log('Redirigiendo a /perfil-usuario');
      this.router.navigate(['/perfil-usuario']);
    }
}
 }
