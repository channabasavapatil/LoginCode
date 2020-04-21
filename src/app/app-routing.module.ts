import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage',component: HomepageComponent },
  { path: '', redirectTo: '/login',  pathMatch: 'full'},
  { path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
