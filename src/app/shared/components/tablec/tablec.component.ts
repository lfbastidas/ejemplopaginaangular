import { ModalcComponent } from './../modalc/modalc.component';
import { ContenidosService } from './../../../components/uploads/contenidos.service';
import { uploadI } from './../../models/upload.interface';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';




export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-tablec',
  templateUrl: './tablec.component.html',
  styleUrls: ['./tablec.component.scss']
})
export class TablecComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  displayedColumns: string[] = ['tituloUp', 'materiaUp','gradoUp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private contSvc: ContenidosService, public dialogc: MatDialog) { }

  ngOnInit() {
    this.contSvc.getAllContent().subscribe(cont => this.dataSource.data = cont);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(cont?: uploadI): void {
    const config = {
      data: {
        message: cont ? 'Edit Content' : 'New Content',
        content: cont
      }
    };
    const dialogRef = this.dialogc.open(ModalcComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    })
  }

  onNewCont() {
    this.openDialog();
  }

  onEditPost(post: uploadI) {
    console.log('editar', post);
    this.openDialog(post);
  }


  onDeletePost(post: uploadI) {
    console.log('Delete', post);
    Swal.fire({
      title: 'Este archivo sera eliminado',
      text: 'La accion no se podra deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3122',
      cancelButtonColor: '#888as8',
      confirmButtonText: 'Continuar'

    }).then(result => {

      if (result.value) {
        this.contSvc.deleteContenById(post).then(() => {
          Swal.fire('Archivo eliminado.', 'El archivo seleccionado se ha elimiando', 'success');
        }).catch((error) => {
          Swal.fire('Error!', 'Ocurrio un error intentando eliminar el archivo', 'error');
        });
      }
    });

  }

}
