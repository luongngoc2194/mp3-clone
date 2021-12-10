import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow, Pagination,Navigation]);


@Component({
  selector: 'app-coverflow-slider',
  templateUrl: './coverflow-slider.component.html',
  styleUrls: ['./coverflow-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CoverflowSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
