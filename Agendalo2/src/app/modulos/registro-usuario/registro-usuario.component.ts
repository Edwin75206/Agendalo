import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  userData: any = {}; // Modelo para los datos del formulario

  constructor(private userService: UserService, public router:Router) {}

  onSubmit() {
    // Llama al servicio para enviar los datos del usuario al servidor
    this.userService.saveUserData(this.userData).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Aquí puedes manejar la respuesta del servidor según tus necesidades
      this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al enviar los datos:', error);
        // Maneja los errores según tus necesidades
      }
    );
  }
}
