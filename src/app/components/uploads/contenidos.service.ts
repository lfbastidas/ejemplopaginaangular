import { uploadI } from './../../shared/models/upload.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { FilesI } from '../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class ContenidosService {

  private filePath: any;
  private downloadURL: Observable<string>;
  private uploadCollection: AngularFirestoreCollection<uploadI>;


  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.uploadCollection = afs.collection<uploadI>('contents');
  }

  public preAddAndUpdateContent(cont: uploadI, image: FilesI): void {
    this.uploadImage(cont, image);
  }

  public getAllContent(): Observable<uploadI[]> {
    return this.uploadCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const datac = a.payload.doc.data() as uploadI;
            const id = a.payload.doc.id;
            return { id, ...datac };
          })
        )
      );
  }



  private saveContent(cont: uploadI) {
    const upObj = {
      tituloUp: cont.tituloUp,
      contenidoUp: cont.contenidoUp,
      materiaUp: cont.materiaUp,
      imageUp: this.downloadURL,
      fileRef: this.filePath,
      gradoUp: cont.gradoUp,

    };

    if (cont.id) {
      return this.uploadCollection.doc(cont.id).update(upObj);
    } else {
      return this.uploadCollection.add(upObj);
    }

  }
  public getOneConten(id: uploadI): Observable<uploadI> {
    return this.afs.doc<uploadI>(`contents/${id}`).valueChanges();
  }

  public deleteContenById(cont: uploadI) {
    return this.uploadCollection.doc(cont.id).delete();

  }

  public editContenById(cont: uploadI, newImage?: FilesI) {
    if (newImage) {
      this.uploadImage(cont, newImage);
    } else {
      return this.uploadCollection.doc(cont.id).update(cont);
    }
  }


  private uploadImage(cont: uploadI, image: FilesI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.saveContent(cont);
          });
        })
      ).subscribe();
  }
}
