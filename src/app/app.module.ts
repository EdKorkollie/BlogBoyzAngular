import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts-module/post-list/post-list.component';
import {PostFormComponent} from "./posts-module/post-form/post-form.component";
import {FormsModule} from "@angular/forms";
import {PostService} from "./posts-module/service/post-service";
import { PostsModuleComponent } from './posts-module/posts-module.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    PostsModuleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
