import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListafacturaComponent } from './components/listafactura/listafactura.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { FalloverificaComponent } from './components/falloverifica/falloverifica.component';

const routes: Routes = [
  { path: "factura/lista", component: ListafacturaComponent },
  { path: "factura/pagos", component: PagosComponent },
  { path: "factura/login", component: LoginComponent },
  { path: "factura/encuesta", component: EncuestaComponent },
  { path: "factura/falloverifica", component: FalloverificaComponent },
  { path: "", redirectTo: "/factura/login", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/factura/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
