import { Component, Input } from '@angular/core';
import { ComentarioService } from 'src/app/components/services/Comentarios/comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  @Input() comentarios!: any[];
  nuevoComentario: any = { idUsuario: '', idServicio: '', descripcionComentario: '' };

  constructor(private comentariosService: ComentarioService) {}

  agregarComentario() {
    this.comentariosService.agregarComentario(this.nuevoComentario).subscribe(
      (response) => {
        console.log('Comentario agregado:', response);
        // Actualiza la lista de comentarios después de agregar uno nuevo
        this.actualizarComentarios();
        // Reinicia el formulario después de agregar el comentario
        this.nuevoComentario = { idUsuario: '', idServicio: '', descripcionComentario: '' };
      },
      (error) => {
        console.error('Error al agregar comentario:', error);
      }
    );
  }

  buscarComentarioPorID(comentarioID: string) {
    this.comentariosService.buscarComentarioPorID(comentarioID).subscribe(
      (comentario) => {
        console.log('Comentario encontrado:', comentario);
        // Puedes hacer lo que necesites con el comentario encontrado
      },
      (error) => {
        console.error('Error al buscar comentario por ID:', error);
      }
    );
  }

  private actualizarComentarios() {
    this.comentariosService.getAllComentarios().subscribe(
      (comentarios) => {
        this.comentarios = comentarios;
      },
      (error) => {
        console.error('Error al obtener comentarios:', error);
      }
    );
  }
   }
