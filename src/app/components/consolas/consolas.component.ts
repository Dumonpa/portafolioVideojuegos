import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html'
})
export class ConsolasComponent implements OnInit {

  consolas: Consola[] = [];

  constructor( private _consolasService: ConsolasService,
              private _router: Router) { }

  ngOnInit(): void {
    this.consolas = this._consolasService.getConsolas();
  }

  verConsola(idx: number){
    this._router.navigate(['/consola', idx]);
  }

}
