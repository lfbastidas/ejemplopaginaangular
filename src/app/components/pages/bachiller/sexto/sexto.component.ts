import { uploadI } from './../../../../shared/models/upload.interface';
import { ContenidosService } from './../../../uploads/contenidos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sexto',
  templateUrl: './sexto.component.html',
  styleUrls: ['./sexto.component.scss']
})
export class SextoComponent implements OnInit {
  panelOpenState = false;
  public contents$: Observable<uploadI[]>;
  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
    this.contents$ = this.contSvc.getAllContent();
  }

  
}
