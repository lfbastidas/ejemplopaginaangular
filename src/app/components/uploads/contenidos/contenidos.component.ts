import { ContenidosService } from './../contenidos.service';
import { uploadI } from './../../../shared/models/upload.interface';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contenidos',
  templateUrl: './contenidos.component.html',
  styleUrls: ['./contenidos.component.scss']
})
export class ContenidosComponent implements OnInit {

 
  @Input() cont: uploadI;

  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
  }

}
