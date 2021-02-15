import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from "./Client/client-detail/client-detail.component"


const routes: Routes = [{ path: 'client_detail', component: ClientDetailComponent }];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//,