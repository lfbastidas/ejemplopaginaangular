import { uploadI } from './../../../shared/models/upload.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private filePath: any;
  private downloadURL: Observable<string>;
  private postsCollection: AngularFirestoreCollection<uploadI>;
  constructor() { }
}
