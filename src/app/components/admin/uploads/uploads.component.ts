import { FileSizePipe } from './file-size.pipe';
import { Observable } from 'rxjs';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL: Observable<string>;

  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {


    const file = event.item(0)

    if (file.type.split('/')[0] !== 'application') {
      console.error('archivo no sportado')
      return;
    }

    const path = `ufiles/${new Date().getTime()}_${file.name}`;


    const customMetadata = { app: 'Content SagradaF' };

    this.task = this.storage.upload(path, file, { customMetadata })

    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.byteTransferred === snap.totalBytes) {
          this.db.collection('photos').add({
            path, size: snap.totalBytes
          })
        }
      })
    )


    // The file's download URL
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())
    )
      .subscribe();

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }


  ngOnInit(): void {
  }

}
