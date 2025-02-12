import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent {
  ActiveElement = signal('1');
  postService = inject(PostService);
  profileService = inject(ProfileService);

  get PostList() {
    return this.postService.PostsList();
  }
  BtnList = [
    {
      id: '1',
      Title: 'Posts',
    },
    {
      id: '2',
      Title: 'Comments',
    },
    {
      id: '3',
      Title: 'Videos',
    },
    {
      id: '4',
      Title: 'Images',
    },
  ];

  setActiveElement = (id: string) => {
    this.ActiveElement.set(id);
  };
}
