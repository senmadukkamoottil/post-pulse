import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'X-Custom-Header': 'myValue'
    });

    const params = new HttpParams().set('userId', 1);

    return this.http.get<Post[]>(`${this.env.apiUrl}/posts`, {headers: headers, params: params});
  }

}
