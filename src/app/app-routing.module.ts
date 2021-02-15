import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from "./Client/client-detail/client-detail.component"
import { HomeComponent } from "src/app/home/home.component"


const routes: Routes = [{ path: 'client_detail', component: ClientDetailComponent }, { path: 'home', component: HomeComponent }];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//,