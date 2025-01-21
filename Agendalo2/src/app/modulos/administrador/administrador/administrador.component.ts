import { Component } from '@angular/core';
import { ComentarioService } from 'src/app/components/services/Comentarios/comentario.service';
import { CitasService } from 'src/app/components/services/citas/citas.service';
import { ServicioService } from 'src/app/components/services/servicio.service';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  currentTab: string = 'users';
  users: any[] = [];

  servicios: any[] = [];
  comments: any[] = [];
  citas:any[]=[]
  showUsersTable = true;
  showServicesTable = false;

  constructor(
    private userService: UserService,

    private servicioService: ServicioService ,
    private commentService: ComentarioService,
    private citaService:CitasService
  ) {}

  switchToUsersTable() {
    this.showUsersTable = true;
    this.showServicesTable = false;
  }

  switchToServicesTable() {
    this.showUsersTable = false;
    this.showServicesTable = true;
  }
  ngOnInit(): void {
    this.loadUsers();
    this.loadServices();
    this.loadComments();
    this.loadCitas()
  }
  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  loadCitas(): void {
    this.citaService.getAllCitas().subscribe(
      (data: any) => {
        this.citas = data;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  loadServices(): void {
    console.log('Cargando servicios...');
    this.servicioService.getAllServicios().subscribe(
      (data: any) => {
        this.servicios = data;
        console.log('Servicios cargados:', this.servicios);
      },
      (error) => {
        console.error('Error al obtener servicios:', error);
      }
    );
  }

  eliminarUsuario(userId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.userService.deleteUserById(userId).subscribe(
        (response) => {
          console.log('Usuario eliminado con éxito:', response);
          // Vuelve a cargar la lista de usuarios u realiza otras acciones necesarias
          this.loadUsers();
        },
        (error) => {
          console.error('Error al eliminar usuario:', error);
          // Puedes manejar errores y mostrar mensajes al usuario si es necesario
        }
      );
    }

 }

 loadComments(): void {
  this.commentService.getAllComentarios().subscribe(
    (data: any) => {
      this.comments = data;
    },
    (error) => {
      console.error('Error al obtener comentarios:', error);
    }
  );
}

}
