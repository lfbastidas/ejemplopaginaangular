import { PostService } from './../../posts/post.service';
import { postI } from './../../../shared/models/post.interface';
import {  Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public posts$: Observable<postI[]>;
  constructor(private postSvc:PostService){
     
  }
  ngOnInit(){
    this.posts$ = this.postSvc.getAllPosts();
  }
}
