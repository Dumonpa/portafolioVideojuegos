import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html'
})
export class ConsolaComponent implements OnInit {

  consola: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _consolasService: ConsolasService) {
    this._activatedRoute.params.subscribe(params => {
      this.consola = this._consolasService.getConsola(params.id);
    });
  }

  ngOnInit(): void {
  }

}
