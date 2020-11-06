import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consola-tarjeta',
  templateUrl: './consola-tarjeta.component.html'
})
export class ConsolaTarjetaComponent implements OnInit {

  @Input() consola: any = {};
  @Input() index: number;

  @Output() consolaSeleccionada: EventEmitter<number>;

  constructor(private _router: Router) {
    this.consolaSeleccionada = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verConsola(){
    this._router.navigate(['/consola', this.index]);
    // this.consolaSeleccionada.emit(this.index);
  }

}
