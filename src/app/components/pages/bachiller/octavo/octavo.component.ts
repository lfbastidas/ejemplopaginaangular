import { Component, OnInit } from '@angular/core';
import { ContenidosService } from 'src/app/components/uploads/contenidos.service';
import { uploadI } from 'src/app/shared/models/upload.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-octavo',
  templateUrl: './octavo.component.html',
  styleUrls: ['./octavo.component.scss']
})
export class OctavoComponent implements OnInit {

  panelOpenState = false;
  public contents$: Observable<uploadI[]>;
  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
    this.contents$ = this.contSvc.getAllContent();
  }

}
