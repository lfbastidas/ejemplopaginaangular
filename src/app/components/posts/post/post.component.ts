import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { postI } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: postI;

  //public posts$: Observable<postI[]>;


  constructor(private postSvc: PostService) { }

  ngOnInit() {
    //this.posts$ = this.postSvc.getAllPosts();
  }


}
