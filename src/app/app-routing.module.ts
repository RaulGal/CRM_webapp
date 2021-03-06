import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from "./Client/client-detail/client-detail.component";
import { HomeComponent } from "src/app/home/home.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
{ path: "client-detail", component: ClientDetailComponent },
{ path: "", component: HomeComponent },
{ path: "formulario", component: ReactiveFormsComponent },
{ path:"client-info", component: ClientInfoComponent },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "register", component: RegisterComponent, pathMatch: "full"}
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//,