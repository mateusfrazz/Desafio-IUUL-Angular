import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarSimbolosComponent } from './components/listar-simbolos/listar-simbolos.component';
import { ConverterMoedasComponent } from './components/converter-moedas/converter-moedas.component';
import { ConverterRealParaDolarComponent } from './components/converter-real-para-dolar/converter-real-para-dolar.component';
const routes: Routes = [
  {path:'ConversordeMoedas', component:HomeComponent},
  {path:'ListarSimbolos', component:ListarSimbolosComponent},//Rota de listar Simbolos
  {path: '', redirectTo: '/ConversordeMoedas', pathMatch: 'full' },
  {path:'ConverterMoedas', component:ConverterMoedasComponent},
  {path:'ConverterRealParaDolar', component:ConverterRealParaDolarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
