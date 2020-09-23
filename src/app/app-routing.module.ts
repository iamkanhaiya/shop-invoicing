import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {kanhaiyaComponent} from "./view/view.component"
import {AddComponentComponent} from "./add/add.component"
import {EditComponent} from "./edit/edit.component"

const routes: Routes = [

  {
    path:"",
    component:kanhaiyaComponent
  },
  {
    path: "add",
    component:AddComponentComponent
  },
  {
    path: "edit",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
