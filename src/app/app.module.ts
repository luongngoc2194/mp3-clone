import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material/material.module";
import { SidernavComponent } from './component/sidernav/sidernav.component';
import { PlayCurrentComponent } from './component/play-current/play-current.component';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './component/containt-component/home/home.component';
import { CoverflowSliderComponent } from './component/containt-component/home/swiper-slider/coverflow-slider/coverflow-slider.component';
import {SwiperModule} from "swiper/angular";
import { DeitailSongComponent } from './component/containt-component/deitail-song/deitail-song.component';
import {AudioService} from "./services/audio.service";
import { HistoryPlayComponent } from './component/history-play/history-play.component';
import { HighChartComponent } from './component/containt-component/home/high-chart/high-chart.component';
import {HighchartsChartModule} from "highcharts-angular";




@NgModule({
  declarations: [
    AppComponent,
    SidernavComponent,
    PlayCurrentComponent,
    HomeComponent,
    CoverflowSliderComponent,
    DeitailSongComponent,
    HistoryPlayComponent,
    HighChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SwiperModule,
    HighchartsChartModule,

  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
