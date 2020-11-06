import { Component, OnInit } from '@angular/core';
import { VideojuegosService, Videojuego } from '../../servicios/videojuegos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent implements OnInit {

  videojuegos: Videojuego[] = [];

  constructor( private _videojuegosService: VideojuegosService,
               private _router: Router) { }

  ngOnInit(): void {
    this.videojuegos = this._videojuegosService.getVideojuegos();
  }

  verVideojuego(idx:number){
    this._router.navigate( ['/videojuego', idx] );
  }

}
