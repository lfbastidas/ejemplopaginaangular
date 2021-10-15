import { Component, OnInit } from '@angular/core';
import { uploadI } from 'src/app/shared/models/upload.interface';
import { ContenidosService } from 'src/app/components/uploads/contenidos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-once',
  templateUrl: './once.component.html',
  styleUrls: ['./once.component.scss']
})
export class OnceComponent implements OnInit {

  panelOpenState = false;
  public contents$: Observable<uploadI[]>;
  constructor(private contSvc: ContenidosService) { }

  ngOnInit(): void {
    this.contents$ = this.contSvc.getAllContent();
  }

}
