import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { FormPostComponent } from '../Components/post/form-post/form-post.component';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'linkedIn_Clone';
  postService = inject(PostService);

  get ActiveCreatePost() {
    return this.postService.ActiveCreatePost();
  }

  router = inject(Router);
  public validateUrl() {
    if (this.router.url == '/') {
      return false;
    } else {
      return true;
    }
  }
}
