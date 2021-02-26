import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from "./Client/client-detail/client-detail.component";
import { HomeComponent } from "src/app/home/home.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';


const routes: Routes = [{ path: "client-detail", component: ClientDetailComponent }, { path: "", component: HomeComponent }, { path: "formulario", component: ReactiveFormsComponent }];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//,