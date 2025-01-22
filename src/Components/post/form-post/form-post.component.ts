import { Component, inject, Input, OnChanges } from '@angular/core';
import { PostService } from '../../../Services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css',
})
export class FormPostComponent {
  postService = inject(PostService);
  form = new FormGroup({
    Title: new FormControl(''),
  });
  public createPost() {
    this.postService.createPost(this.form.controls.Title.value!);
  }
  onCLick() {
    this.postService.ChangeStateactive();
  }
}
