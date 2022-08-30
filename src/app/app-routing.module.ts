import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { NovoItemComponent } from './novo-item/novo-item.component';

const routes: Routes = [
  {path: '', redirectTo:'lista', pathMatch:'full'},
  {path: 'lista', component: ListaItemComponent},
  {path: 'novo-item', component: NovoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
