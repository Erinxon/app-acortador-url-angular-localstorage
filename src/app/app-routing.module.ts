import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarUrlComponent } from './Components/generar-url/generar-url.component';
import { ListaUrlComponent } from './Components/lista-url/lista-url.component';

const routes: Routes = [
  { path: '', component: GenerarUrlComponent },
  { path: 'listaUrls', component: ListaUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
