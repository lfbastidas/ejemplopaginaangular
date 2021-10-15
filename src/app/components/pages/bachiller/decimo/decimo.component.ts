import { uploadI } from './../../../../shared/models/upload.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/components/posts/post.service';
import { ContenidosService } from 'src/app/components/uploads/contenidos.service';

@Component({
  selector: 'app-decimo',
  templateUrl: './decimo.component.html',
  styleUrls: ['./decimo.component.scss']
})
export class DecimoComponent implements OnInit {
  panelOpenState = false;
  public contents$: Observable<uploadI[]>;
  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
    this.contents$ = this.contSvc.getAllContent();
  }

}
