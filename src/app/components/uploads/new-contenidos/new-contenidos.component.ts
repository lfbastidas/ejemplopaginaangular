import { ContenidosService } from './../contenidos.service';
import { uploadI } from './../../../shared/models/upload.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contenidos',
  templateUrl: './new-contenidos.component.html',
  styleUrls: ['./new-contenidos.component.scss']
})
export class NewContenidosComponent implements OnInit {
  
  private image: any;
  constructor(private contSvc: ContenidosService) { }

  public newContentForm = new FormGroup({
    tituloUp: new FormControl('', Validators.required),
    contenidoUp: new FormControl('', Validators.required),
    materiaUp: new FormControl('', Validators.required),
    gradoUp: new FormControl('', Validators.required),
    imageUp: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }

  addNewCont(datac: uploadI) {
    console.log('Add content', datac);
    this.contSvc.preAddAndUpdateContent(datac, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
