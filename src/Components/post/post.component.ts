import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postService = inject(PostService);
  ActiveComment = signal(false);
  form = new FormGroup({
    Comment: new FormControl(''),
  });

  get getPostList() {
    return this.postService.PostsList;
  }

  public DeletePost(id: number) {
    this.postService.DeletePost(id);
  }

  public updatePost(id: number) {
    this.postService.updatePost(id);
  }

  public CreateComment(id: number) {
    this.postService.CreateComment(
      'Mohamed Osama',
      this.form.controls.Comment.value!,
      id
    );
  }

  public getPostById(id: number) {
    this.postService.getPostById(id);
    this.ActiveComment.set(!this.ActiveComment());
  }

  get PostById() {
    return this.postService.PostById;
  }
}
