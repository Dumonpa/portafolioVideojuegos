import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
import { ConsolasService } from './servicios/consolas.service';
import { VideojuegosService } from './servicios/videojuegos.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ConsolasComponent } from './components/consolas/consolas.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ConsolaComponent } from './components/consola/consola.component';
import { BuscardorComponent } from './components/buscardor/buscardor.component';
import { ConsolaTarjetaComponent } from './components/consola-tarjeta/consola-tarjeta.component';
import { StringSlicePipe } from './pipes/string-slice.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ConsolasComponent,
    VideojuegosComponent,
    VideojuegoComponent,
    ConsolaComponent,
    BuscardorComponent,
    ConsolaTarjetaComponent,
    StringSlicePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ConsolasService,
    VideojuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
