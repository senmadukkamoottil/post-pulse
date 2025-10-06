import { Component, Signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from '../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { distinctUntilKeyChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts!: Signal<Post[]>;


  constructor(private http: HttpClient) {
    this.posts = this.fetchPostsWithConfig();
  }

  private fetchPostsWithConfig() {
    return toSignal(this.http.get<Post[]>(environment.apiUrl + '/posts'), { initialValue: [] });
  }

}
