import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsolasComponent } from './components/consolas/consolas.component';
import { AboutComponent} from './components/about/about.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ConsolaComponent } from './components/consola/consola.component';
import { BuscardorComponent } from './components/buscardor/buscardor.component';




const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'consolas', component: ConsolasComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'home', component: HomeComponent },
    { path: 'videojuego/:id', component: VideojuegoComponent },
    { path: 'consola/:id', component: ConsolaComponent },
    { path: 'buscar/:termino', component: BuscardorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);