import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from "./posts-module/post-list/post-list.component";
import {PostFormComponent} from "./posts-module/post-form/post-form.component";


const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts', component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
