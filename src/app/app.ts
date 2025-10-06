import { Component, inject, Inject, OnInit, signal, Signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from '../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { distinctUntilKeyChanged, Observable } from 'rxjs';
import { Posts } from './post';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  postData!: Signal<Post[]>;

  private postService = inject(Posts);

  constructor() {
    this.postData = toSignal(this.postService.getPosts(), {initialValue: []});
  }

  ngOnInit() {
    // this.getAllPosts();

  }

  getAllPosts() {

  }

}
