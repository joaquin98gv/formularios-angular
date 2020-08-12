import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReactivoConImagenComponent } from './pages/reactivo-con-imagen/reactivo-con-imagen.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactivo-imagen', component: ReactivoConImagenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
