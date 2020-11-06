import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideojuegosService } from '../../servicios/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit {

  videojuego: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _videojuegosService: VideojuegosService) {
    this._activatedRoute.params.subscribe(params => {
      this.videojuego = this._videojuegosService.getVideojuego(params.id);
    });
   }

  ngOnInit(): void {
  }

}
