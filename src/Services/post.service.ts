import { HttpClient } from '@angular/common/http';
import {
  effect,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { map } from 'rxjs';

interface PostList {
  title: string;
  likes: Number;
  comment: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpClient = inject(HttpClient);
  PostsList: WritableSignal<PostList[]> = signal([]);

  constructor() {
    this.httpClient
      .get<PostList[]>('http://localhost:8080/Posts')

      .subscribe({
        next: (data) => this.PostsList.set(data),
      });
  }

  public createPost(Title: string) {
    this.httpClient
      .post('http://localhost:8080/createPost', {
        title: Title,
      })
      .subscribe({
        next: (data) => {},
      });

    window.location.reload();
  }
}
