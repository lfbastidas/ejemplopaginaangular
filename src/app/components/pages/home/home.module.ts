import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './../../../shared/components/slider/slider.component';
import { PostComponent } from './../../posts/post/post.component';
import { MaterialModule } from './../../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [HomeComponent,PostComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgbModule,
    MatCarouselModule.forRoot()
  ]
})
export class HomeModule { }
