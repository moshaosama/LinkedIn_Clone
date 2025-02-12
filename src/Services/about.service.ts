import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";

interface About {
  id: number;
  about: string;
}

@Injectable({
  providedIn: "root",
})
export class AboutService {
  activeFormAbout = signal(false);
  User = JSON.parse(window.localStorage.getItem("Profile")!);
  HttpClient = inject(HttpClient);
  AboutMessages: WritableSignal<About[]> = signal([]);
  AboutMessagesssss = signal("");

  chnageActiveFromAbout() {
    this.activeFormAbout.set(!this.activeFormAbout());
  }
  constructor() {
    // this.HttpClient.get<About[]>("http://localhost:8080/getAbout").subscribe({
    //   next: (val) => {
    //     console.log(val);
    //     this.AboutMessages.set(val);
    //   },
    // });
  }

  public createAbout(Title: string) {
    this.HttpClient.post("http://localhost:8080/createAbout", {
      title: Title,
      profile: {
        id: this.User?.id,
      },
    }).subscribe({
      next: (val) => console.log(val),
    });
    window.location.reload();
  }
}
