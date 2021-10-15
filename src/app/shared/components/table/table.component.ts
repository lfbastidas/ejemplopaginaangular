import { Subscription } from 'rxjs';
import { postI } from './../../models/post.interface';
import Swal from 'sweetalert2';
import { PostService } from './../../../components/posts/post.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
MatDialog

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['tituloPost', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postSvc: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.postSvc.getAllPosts().subscribe(posts => this.dataSource.data = posts);
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

  openDialog(post?: postI): void {
    const config = {
      data: {
        message: post ? 'Edit Post' : 'New Post',
        content: post
      }
    };
    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    })
  }

  onNewPost() {
    this.openDialog();
  }

  onEditPost(post: postI) {
    console.log('editar', post);
    this.openDialog(post);
  }


  onDeletePost(post: postI) {
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
        this.postSvc.deletePostById(post).then(() => {
          Swal.fire('Archivo eliminado.', 'El archivo seleccionado se ha elimiando', 'success');
        }).catch((error) => {
          Swal.fire('Error!', 'Ocurrio un error intentando eliminar el archivo', 'error');
        });
      }
    });

  }


}

