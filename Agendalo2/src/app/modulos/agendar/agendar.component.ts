import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/components/services/auth/auth.service';
import { CitasService } from 'src/app/components/services/citas/citas.service';
import { ServicioService } from 'src/app/components/services/servicio.service';
import { Cita } from 'src/app/models/cita/cita.model';
import { Servicio } from 'src/app/models/servicio/servicio.model';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent {
  citaData: Cita = {
    usuarioID: '', // Se llenará con el idUsuario actual
    servicioID: '',
    horario: '',
    dia: '',
  };

  servicios: Servicio[] = [];
  mensajeRegistro!: string;

  constructor(
    private citaService: CitasService,
    private servicioService: ServicioService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.servicioService.getAllServicios().subscribe(
      (response) => {
        this.servicios = response;
      },
      (error) => {
        console.error('Error al obtener la lista de servicios:', error);
      }
    );
  }

  crearCita() {
    this.citaService.crearCita(this.citaData).subscribe(
      (response) => {
        console.log('Cita creada con éxito:', response);
        this.mensajeRegistro = 'Cita registrada con éxito';
      },
      (error) => {
        console.error('Error al crear la cita:', error);
      }
    );
  }
}
