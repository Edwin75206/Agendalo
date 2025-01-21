import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  userId!: string;
  usuario: any = {}; // Inicializamos como objeto vacío

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.obtenerDetallesUsuario();
    });
  }

  obtenerDetallesUsuario() {
    this.userService.getUserById(this.userId).subscribe(
      (response) => {
        this.usuario = response;
      },
      (error) => {
        console.error('Error al obtener detalles del usuario:', error);
      }
    );
  }

  actualizarUsuario() {
    // Utiliza la función del servicio para actualizar los datos
    this.userService.updateCompleteUser(this.userId, this.usuario).subscribe(
      (response) => {
        console.log('Usuario actualizado con éxito:', response);
        // Puedes redirigir a una página específica después de la actualización
        this.router.navigate(['/administrador']);
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }

  cancelarEdicion() {
    // Redirige de nuevo a la lista de usuarios o a la página que desees
    this.router.navigate(['/administrador']);
  }
}
