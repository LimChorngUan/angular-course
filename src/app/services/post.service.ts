import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

// httpOptions
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Define root url
  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  // inject HttpClient into the constructor
  constructor(private http: HttpClient) {}

  // GET request
  // all HttpClient methods return an observable
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  // POST request
  savePost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, newPost, httpOptions);
  }

  // PUT request
  updatePost(updatePost: Post): Observable<Post> {
    const url = `${this.postsUrl}/${updatePost.id}`;

    return this.http.put<Post>(url, updatePost, httpOptions);
  }

  // DELETE request
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;

    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
