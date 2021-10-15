import { Observable } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

AngularFireModule
AngularFirestoreModule


@Component({
  selector: 'app-uploads-form',
  templateUrl: './uploads-form.component.html',
  styleUrls: ['./uploads-form.component.scss']
})
export class UploadsFormComponent implements OnInit {


  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL: Observable<string>;

  isHovering: boolean;

  constructor(private storage: AngularFireStorage) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.error('Error!, Archivo no soportado.')
    }

    const path = `test/${new Date().getTime()}_${file.name}`;

    const customMetadata = { app: 'My Angular' };

    this.task = this.storage.upload(path, file, { customMetadata })

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())
    )
    .subscribe();
  }

  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred <snapshot.totalBytes
  }
  ngOnInit(): void {
  }

}
