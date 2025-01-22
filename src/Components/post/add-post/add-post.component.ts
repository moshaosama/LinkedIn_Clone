import { Component, inject } from '@angular/core';
import { PostComponent } from '../post.component';
import { PostService } from '../../../Services/post.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  postService = inject(PostService);

  onChangeStateActive() {
    this.postService.ChangeStateactive();
  }
}
