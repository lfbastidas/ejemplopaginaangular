import { ContenidosService } from './../contenidos.service';
import { uploadI } from './../../../shared/models/upload.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-contenidos',
  templateUrl: './details-contenidos.component.html',
  styleUrls: ['./details-contenidos.component.scss']
})
export class DetailsContenidosComponent implements OnInit {

  public cont$: Observable<uploadI>;

  constructor(private route: ActivatedRoute, private contSvc: ContenidosService) { }

  ngOnInit() {
    const idcont = this.route.snapshot.params.id;
    this.cont$ =this.contSvc.getOneConten(idcont);
  }

}
