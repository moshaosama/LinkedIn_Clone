import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { PostService } from '../../Services/post.service';
import { AddAboutComponent } from "../About/add-about/add-about.component";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, AddAboutComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent {
  ActiveElement = signal('1');
  length = signal(0);
  leftSlice = signal(0);
  rightSlice = signal(2);

  profileService = inject(ProfileService);
  postService = inject(PostService);
  get ProfileList() {
    return this.profileService.profileData();
  }

  get ActiveStateAddPost() {
    return this.postService.ActiveCreatePost();
  }

  changeActiveAddPost() {
    this.postService.ChangeStateactive();
  }

  constructor() {
    this.ProfileList.map((el) => this.length.set(el.post.length));
  }

  clickLeftSlice = () => {
    this.rightSlice.update((prev) => prev - 1);
    this.leftSlice.update((prev) => prev - 1);
  };
  clickReftSlice = () => {
    this.leftSlice.update((prev) => prev + 1);
    this.rightSlice.update((prev) => prev + 1);
  };
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
