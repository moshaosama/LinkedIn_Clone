import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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
  @ViewChild('myInput') inputElement!: ElementRef;
  form = new FormGroup({
    Title: new FormControl(''),
  });

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }

  public createPost() {
    this.postService.createPost(this.form.controls.Title.value!);
  }
  public ChangeStateactive() {
    this.postService.ChangeStateactive();
  }
}
