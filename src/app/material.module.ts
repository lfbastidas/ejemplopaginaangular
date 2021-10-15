import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {BidiModule} from '@angular/cdk/bidi';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CarouselComponent} from './shared/components/carousel/carousel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MySheetComponent } from './shared/components/my-sheet/my-sheet.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MicrosoftSheetComponent } from './shared/components/microsoft-sheet/microsoft-sheet.component';
import {MatTabsModule} from '@angular/material/tabs';


const mymaterial = [
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatProgressBarModule,
  MatDividerModule,
  MatExpansionModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatIconModule,
  LayoutModule,
  BidiModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatChipsModule,
  CdkTreeModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatTreeModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule
]
@NgModule({
  declarations: [CarouselComponent, MySheetComponent, MicrosoftSheetComponent],
  imports: [CommonModule,mymaterial],
  exports:[mymaterial]
})
export class MaterialModule { }
