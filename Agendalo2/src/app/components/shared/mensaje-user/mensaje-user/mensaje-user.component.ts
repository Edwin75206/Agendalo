import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth/auth.service';

@Component({
  selector: 'app-mensaje-user',
  templateUrl: './mensaje-user.component.html',
  styleUrls: ['./mensaje-user.component.css']
})
export class MensajeUserComponent {


  mensaje!: string;
  btn = 'aceptar';
  isLoggedIn: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MensajeUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,

    private router: Router
  ) {
    this.mensaje = data.mensaje;
    // Verifica si el usuario está autenticado al inicializar el componente
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onButtonClick() {
    if (this.isLoggedIn) {
      // Si está autenticado, realizar cierre de sesión
      this.authService.logout();
      this.router.navigate(['/landing']);
    } else {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
      this.dialogRef.close();
    }
  }
  }

