import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ViajesFormComponent } from './pages/viajes-form/viajes-form.component';
import { ViajesListComponent } from './pages/viajes-list/viajes-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'viajes', component: ViajesListComponent },
  { path: 'viajes/edit', component: ViajesFormComponent },
  { path: 'viajes/edit/:id', component: ViajesFormComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
