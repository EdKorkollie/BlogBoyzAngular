import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post-service';
import { Post } from '../post';
import {PostListComponent} from "../post-list/post-list.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  post: Post;
  posts: Post[];

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {
    this.post = new Post();
  }

  onSubmit() {
    this.postService.save(this.post).subscribe( ()=> console.log("success"));
    this.postService.findAll().subscribe(data => {
      this.posts = data;
    });  }

}
