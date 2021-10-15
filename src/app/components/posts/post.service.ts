import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { postI } from '../../shared/models/post.interface';
import { FilesI } from '../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private filePath: any;
  private downloadURL: Observable<string>;
  private postsCollection: AngularFirestoreCollection<postI>;

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollection = afs.collection<postI>('posts');
  }




  public preAddAndUpdatePost(post: postI, image: FilesI): void {
    this.uploadImage(post, image);
  }

  public getAllPosts(): Observable<postI[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as postI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  private savePost(post: postI) {
    const postObj = {
      tituloPost: post.tituloPost,
      contenidoPost: post.contenidoPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    };

    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }

  }
  public getOnePost(id: postI): Observable<postI> {
    return this.afs.doc<postI>(`posts/${id}`).valueChanges();
  }

  public deletePostById(post: postI) {
    return this.postsCollection.doc(post.id).delete();

  }

  public editPostById(post: postI, newImage?: FilesI) {
    if (newImage) {
      this.uploadImage(post, newImage);
    } else {
      return this.postsCollection.doc(post.id).update(post);
    }
  }


  private uploadImage(post: postI, image: FilesI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }
}
