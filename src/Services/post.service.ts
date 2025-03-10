import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { ProfileService } from "./profile.service";

interface PostList {
  id: number;
  title: string;
  likes: Number;
  userName: string;
  image: string;
  comments: {
    id: number;
    userName: string;
    text: string;
  }[];
}

@Injectable({
  providedIn: "root",
})
export class PostService {
  httpClient = inject(HttpClient);
  profileService = inject(ProfileService);
  PostsList: WritableSignal<PostList[]> = signal([]);
  postById: WritableSignal<PostList | {}> = signal({});

  profileLogin = JSON.parse(window.localStorage.getItem("Profile")!);

  activeCreatePost = signal(false);
  public ActiveCreatePost() {
    if (this.activeCreatePost()) {
      return true;
    } else {
      return false;
    }
  }
  ChangeStateactive() {
    this.activeCreatePost.set(!this.activeCreatePost());
  }

  get profileDataAsObject() {
    return this.profileService.profilDataasObject();
  }

  constructor() {
    this.httpClient
      .get<PostList[]>("http://localhost:8080/Posts")

      .subscribe({
        next: (data) => this.PostsList.set(data),
      });
  }

  public createPost(Title: string, image: string) {
    this.httpClient
      .post("http://localhost:8080/createPost", {
        title: Title,
        userName: this.profileDataAsObject?.userName,
        image: image,
        profile: {
          id: this.profileDataAsObject?.id,
        },
      })
      .subscribe({
        next: (data) => {},
      });

    window.location.reload();
  }

  public DeletePost(id: number) {
    this.httpClient.delete(`http://localhost:8080/deletePost/${id}`).subscribe({
      next: (val) => {},
    });
    window.location.reload();
  }

  public updatePost(id: number) {
    this.httpClient.put(`http://localhost:8080/EditLike/${id}`, id).subscribe({
      next: (val) => console.log(val),
    });
    window.location.reload();
  }

  public CreateComment(userName: string, Text: string, id: number) {
    this.httpClient
      .post("http://localhost:8080/createComment", {
        userName: this.profileLogin.userName,
        text: Text,
        post: {
          id: id,
        },
      })
      .subscribe({
        next: (val) => console.log(val),
      });
    window.location.reload();
  }

  public getPostById(id: number) {
    this.httpClient
      .get<PostList>(`http://localhost:8080/postById/${id}`)
      .subscribe({
        next: (val) => {
          this.postById.set(val);
        },
      });
  }
  get PostById() {
    return this.postById();
  }
}
