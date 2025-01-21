import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/components/services/servicio.service';

@Component({
  selector: 'app-editar-servicios',
  templateUrl: './editar-servicios.component.html',
  styleUrls: ['./editar-servicios.component.css']
})
export class EditarServiciosComponent {
  servicioId!: string;
  servicio: any = {}; // Ajusta el tipo según la estructura de tu modelo Servicio

  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService
  ) {}

  ngOnInit(): void {
    // Obtiene el ID del servicio de los parámetros de la URL
    this.route.params.subscribe(params => {
      this.servicioId = params['id'];
      // Llama a la función para cargar los datos del servicio
      this.cargarDatosServicio();
    });
  }

  cargarDatosServicio(): void {
    this.servicioService.getServicioById(this.servicioId).subscribe(
      (response) => {
        this.servicio = response;
      },
      (error) => {
        console.error('Error al obtener detalles del usuario:', error);
      }
    );
  }

  actualizarServicio(): void {
    // Llama al servicio para actualizar los datos del servicio
    this.servicioService.updateServicio(this.servicioId, this.servicio).subscribe(
      (response) => {
        console.log('Servicio actualizado con éxito:', response);
        // Puedes realizar acciones adicionales después de actualizar
      },
      (error) => {
        console.error('Error al actualizar servicio:', error);
        // Puedes manejar errores y mostrar mensajes al usuario si es necesario
      }
    );
  }

  cancelarEdicion(): void {
    // Puedes agregar lógica para redirigir a otra página o realizar otras acciones al cancelar
  }

}
