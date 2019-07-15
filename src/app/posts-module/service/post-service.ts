import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import {Observable} from "rxjs";


@Injectable()
export class PostService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/posts';
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.usersUrl);
  }

  public save(post: Post) {
    return this.http.post<Post>(this.usersUrl, post);
  }

  delete(id): Observable<Post[]>{
    return this.http.delete<Post[]>(this.usersUrl +"/"+ id);
  }
}
