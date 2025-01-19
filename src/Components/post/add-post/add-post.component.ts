import { Component, effect, inject } from '@angular/core';
import { PostComponent } from '../post.component';
import { PostService } from '../../../Services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [PostComponent, ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  postService = inject(PostService);

  

  form = new FormGroup({
    Title: new FormControl(''),
  });

  public createPost() {
    this.postService.createPost(this.form.controls.Title.value!);
  }
}
