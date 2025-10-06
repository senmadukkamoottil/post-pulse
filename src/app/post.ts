import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class Posts {

  private http = inject(HttpClient);

  private env = environment;

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.env.apiUrl}/posts`);
  }

}
