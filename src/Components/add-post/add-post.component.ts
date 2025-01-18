import { Component } from '@angular/core';
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

}
