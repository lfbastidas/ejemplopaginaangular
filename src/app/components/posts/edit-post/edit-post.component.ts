import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { postI } from '../../../shared/models/post.interface';
import { PostService } from './../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: postI;

  constructor(private postSvc: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    tituloPost: new FormControl('', Validators.required),
    contenidoPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.image = this.post.imagePost;
    this.imageOriginal = this.post.imagePost;
    this.initValuesForm();
  }

  editPost(post: postI) {
    if (this.image === this.imageOriginal) {
      post.imagePost = this.imageOriginal;
      this.postSvc.editPostById(post);
    } else {
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      tituloPost: this.post.tituloPost,
      contenidoPost: this.post.contenidoPost,
      tagsPost: this.post.tagsPost
    });
  }

}