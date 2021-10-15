import { Component, OnInit } from '@angular/core';
import { uploadI } from 'src/app/shared/models/upload.interface';
import { Observable } from 'rxjs';
import { ContenidosService } from 'src/app/components/uploads/contenidos.service';

@Component({
  selector: 'app-septimo',
  templateUrl: './septimo.component.html',
  styleUrls: ['./septimo.component.scss']
})
export class SeptimoComponent implements OnInit {

  panelOpenState = false;
  public contents$: Observable<uploadI[]>;
  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
    this.contents$ = this.contSvc.getAllContent();
  }
}
