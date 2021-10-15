import { ModalwindowComponent } from './shared/components/modalwindow/modalwindow.component';
import { LinksComponent } from './shared/components/links/links.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


/*Firebase*/
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileSizePipe } from './components/admin/uploads/file-size.pipe';
import { EditContenidosComponent } from './components/uploads/edit-contenidos/edit-contenidos.component';
import { NewContenidosComponent } from './components/uploads/new-contenidos/new-contenidos.component';
import { DetailsContenidosComponent } from './components/uploads/details-contenidos/details-contenidos.component';
import { ModalcComponent } from './shared/components/modalc/modalc.component';





@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    ToolbarComponent,
    FooterComponent,
    LinksComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent,
    DropZoneDirective,
    FileSizePipe,
    EditContenidosComponent,
    NewContenidosComponent,
    DetailsContenidosComponent,
    ModalcComponent,
    ModalwindowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewPostModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule,
    AngularFireStorageModule,
    MaterialModule,
    ReactiveFormsModule,
    
   
  ],

  entryComponents:[ModalComponent],
  
  providers: [
    {
      provide: BUCKET, useValue:'gs://sagradafam-c5bd1.appspot.com',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
