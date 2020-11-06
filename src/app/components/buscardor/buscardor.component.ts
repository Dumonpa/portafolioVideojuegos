import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../servicios/consolas.service';



@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html'
})
export class BuscardorComponent implements OnInit {

  consolas: any[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _consolasService: ConsolasService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.consolas = this._consolasService.buscarConsola(params.termino);
    });
  }


}
