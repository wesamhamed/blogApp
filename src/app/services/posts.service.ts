import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
  getPost(id){
    return this.http.get(`http://localhost:3000/posts/${id}`)
  }
  createPost(post){
    return this.http.post("http://localhost:3000/posts" , post);
  }
  editPost(post){
    return this.http.put(`http://localhost:3000/posts/${post.id}` , post);
  }

}
