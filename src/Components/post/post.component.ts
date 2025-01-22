import { Component, inject } from '@angular/core';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postService = inject(PostService);

  get getPostList() {
    return this.postService.PostsList;
  }

  public DeletePost(id: number) {
    this.postService.DeletePost(id);
  }
}
