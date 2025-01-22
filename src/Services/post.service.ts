import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';

interface PostList {
  id: number;
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
  activeCreatePost = signal(false);
  public ActiveCreatePost() {
    if (this.activeCreatePost()) {
      return true;
    } else {
      return false;
    }
  }

  ChangeStateactive() {
    this.activeCreatePost.set(!this.activeCreatePost());
  }

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

  public DeletePost(id: number) {
    this.httpClient.delete(`http://localhost:8080/deletePost/${id}`).subscribe({
      next: (val) => {},
    });
    window.location.reload();
  }

  public updatePost(id: number) {
    this.httpClient.put(`http://localhost:8080/EditLike/${id}`, id).subscribe({
      next: (val) => console.log(val),
    });
    window.location.reload();
  }
}
