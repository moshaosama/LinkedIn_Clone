import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  postService = inject(PostService);
  profileService = inject(ProfileService);
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

  onCLickCommentContent(id: string) {
    const Element = document.getElementById(id);
    Element?.style.setProperty('opacity', '100');
    Element?.style.setProperty('margin-top', '0.75rem');
    Element?.style.setProperty('margin-bottom', '0.75rem');
  }
}
