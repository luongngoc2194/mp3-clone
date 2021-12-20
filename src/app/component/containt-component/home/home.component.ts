import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, EffectCoverflow, Pagination} from "swiper";
import {AudioService} from "../../../services/audio.service";
import {Audio, ListAudio} from "../../../models/audio";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  listAudios!: ListAudio[]
  newList: Audio[] = []
  idPlay!: number
  isRunming: boolean = false;

  constructor(private audioservice: AudioService) {
  }

  ngOnInit(): void {
    console.log(this.idPlay)
    this.audioservice.getAudioList().subscribe(
      data => {
        this.listAudios = data
        console.log(this.newList)
      }
    )
    this.audioservice.isPlay$.subscribe(data => {
      console.log(data)
      this.idPlay = data.id
      if (data.type === "timeupdate") {
        this.isRunming = true
      } else {
        this.isRunming = false
      }
    })

  }

  onSubmit(event: Event, item: Audio) {
    event.preventDefault()
    event.stopPropagation();
    if(this.idPlay===undefined||this.idPlay!==item.id){
    this.audioservice.setMusic$.next(item)
    }else {
      if(this.isRunming){
        this.audioservice.childPlay$.next("pause")
      }else {
        this.audioservice.childPlay$.next("play")
      }


    }
    // alert(1)
  }

  // onSubmit1(event: Event){
  //   event.preventDefault()
  //   event.stopPropagation();
  //   this.audioservice.childPlay$.next("pause")
  // }


  click($event: MouseEvent) {
    console.log($event);
    console.log(1);
  }
}
