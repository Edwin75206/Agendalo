import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ServicioService } from 'src/app/components/services/servicio.service';
import { Servicio } from 'src/app/models/servicio/servicio.model';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent {
  mensajeRegistro: string = '';
  servicioData: Servicio = {
    idServicio: '',
    usuarioID: '',
    nombreServicio: '',
    tipoServicio: '',
    terminos: '',
    condiciones: '',
    costo: '',
    descripcion: ''
  };

  constructor(private servicioService: ServicioService, public router: Router) {}
  onSubmit() {
    this.servicioService.saveServicioData(this.servicioData).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        this.mensajeRegistro = 'Empresa registrada con éxito';
        this.router.navigate(['/registroEmpresa']);
        // También puedes mostrar un mensaje de éxito usando alguna biblioteca de notificaciones como ngx-toastr
      },
      error => {
        console.error('Error al enviar los datos:', error);
        // Maneja los errores según tus necesidades
      }
    );
  }
   }
