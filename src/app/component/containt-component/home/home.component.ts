import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, EffectCoverflow, Pagination} from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination,Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  // @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault()
    event.stopPropagation();
    // alert(1)
  }

    click($event: MouseEvent) {
      console.log($event);
      console.log(1);
    }
}
