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
import { CoverflowSliderComponent } from './component/swiper-slider/coverflow-slider/coverflow-slider.component';
import {SwiperModule} from "swiper/angular";
import { DeitailSongComponent } from './component/containt-component/deitail-song/deitail-song.component';
import {AudioService} from "./services/audio.service";
import { HistoryPlayComponent } from './component/history-play/history-play.component';




@NgModule({
  declarations: [
    AppComponent,
    SidernavComponent,
    PlayCurrentComponent,
    HomeComponent,
    CoverflowSliderComponent,
    DeitailSongComponent,
    HistoryPlayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        SwiperModule,

    ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
