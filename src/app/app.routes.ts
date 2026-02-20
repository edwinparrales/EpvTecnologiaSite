import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', redirectTo: '' }
];
