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
  newList : Audio[] =[]
  isPlay! :boolean

  constructor(private audioservice: AudioService) {
  }

  ngOnInit(): void {
    this.audioservice.getAudioList().subscribe(
      data => {
        this.listAudios = data
        // this.audios.forEach(item => {
        //   if (item.status === 'new') {
        //     this.newList.push(item)
        //   }
        // })
        console.log(this.newList)
      }
    )
  }

  onSubmit(event: Event,item :Audio) {
    event.preventDefault()
    event.stopPropagation();
    this.isPlay = true
    this.audioservice.setMusic$.next(item)
    // alert(1)
  }

  click($event: MouseEvent) {
    console.log($event);
    console.log(1);
  }
}
