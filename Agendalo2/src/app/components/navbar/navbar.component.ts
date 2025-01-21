import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators'
import { MensajeUserComponent } from '../shared/mensaje-user/mensaje-user/mensaje-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  color=""
  pagina=""


  constructor(private router : Router,public dialog: MatDialog){}


  ngOnInit():void {

    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.pagina=event.url;
        switch(this.pagina){
          case "/landing":
            this.color="bg-black"

          break

          case "/practica2":
            this.pagina="Práctica 2"
          break

        }
      }
    }) }

    seleccionar(){

      const dialogRef = this.dialog.open(MensajeUserComponent, {
        width: '500px',
        data: {mensaje: '¿Que quiere hacer?'}
      });
    }
}
