import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth/auth.service';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: any;
  servicios: any[] = [];
  comentarios: any[] = [];
  comentariosMessage: string = '';
  serviciosMessage: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    // Obtén el usuario almacenado en el servicio de autenticación
    const storedUser = this.authService.getLoggedInUser();

    // Si hay un usuario almacenado, obtén y muestra sus datos
    if (storedUser) {
      const userId = storedUser.idUsuario;

      // Obtener datos del usuario por ID
      this.userService.getUserById(userId).subscribe(
        (data: any) => {
          this.usuario = data;
        },
        (error) => {
          console.error('Error al obtener datos del usuario', error);
        }
      );

      // Obtener servicios del usuario por ID
      this.userService.getUserServices(userId).subscribe(
        (data: any) => {
          this.servicios = data;
          this.serviciosMessage = this.servicios.length ? '' : 'El usuario no cuenta con servicios.';
        },
        (error) => {
          console.error('Error al obtener servicios del usuario', error);
        }
      );

      // Obtener comentarios del usuario por ID
      this.userService.getUserComments(userId).subscribe(
        (data: any) => {
          this.comentarios = data;
          this.comentariosMessage = this.comentarios.length ? '' : 'El usuario no cuenta con comentarios.';
        },
        (error) => {
          console.error('Error al obtener comentarios del usuario', error);
        }
      );
    } else {
      console.error('No hay un usuario almacenado');
    }
  }
}
