import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoLibriComponent } from './components/elenco-libri/elenco-libri.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DettaglioLibroComponent } from './components/dettaglio-libro/dettaglio-libro.component';

const routes: Routes = [
  {path: '',component:ElencoLibriComponent},
  {path:'libro/:id',component:DettaglioLibroComponent},
  {path: 'about',component:AboutComponent},
  //per ultimo //tutti gli altri in not found
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
