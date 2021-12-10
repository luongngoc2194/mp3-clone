import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as moment from "moment";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-play-current',
  templateUrl: './play-current.component.html',
  styleUrls: ['./play-current.component.css']
})
export class PlayCurrentComponent implements OnInit {

  // @ViewChild("cdrotate") cdRotate!: ElementRef;

  constructor() {

  }

  audioPlay = new Audio();
  audioEvent = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ]
  showPlayBtn = true;
  currentSong = 0;

  listSong = [
    {
      name: 'Bye Bye Beautifull',
      decription: "NIGHTWISH",
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/8/0/e/980ec002d28e69859438eb7fbfd5a82d.jpg',
      url: './././assets/music/NIGHTWISH - Bye Bye Beautiful (OFFICIAL MUSIC VIDEO).mp3'
    },
    {
      name: 'music1',
      decription: "decription 1",
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg',
      url: './././assets/music/2-Steps-From-Hell-Victory-Thang-Ethan.mp3'
    },
    {
      name: 'music2',
      decription: "decription 2",
      image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/d/5/c/7d5cc85b86cd632d0bfdc115aaebf6c7.jpg',
      url: './././assets/music/Star-Sky-Hobbit-Cinematic.mp3'
    },
    {
      name: 'music3',
      decription: "decription 3",
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/avatars/1/d/0/d/1d0d3f88a0ab911690cc0a3e9c23fff0.jpg',
      url: './././assets/music/live-Nu-Cuoi-Chau-Tham.mp3'
    },
    {
      name: 'music4',
      decription: "decription 4",
      image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/d/5/c/7d5cc85b86cd632d0bfdc115aaebf6c7.jpg',
      url: './././assets/music/Dat-lap-bang-ba-Tam-Vo.mp3'
    },

  ]
  volume: number = 50;
  currentTime = '00:00:00';
  duration = '00:00:00';
  seek!: number;
  seekMax!: number
  isDisorder = false
  isRepeat = false
  setVol=  false;

  ngOnInit(): void {
  }

  streamObserver(url: any) {
    return new Observable(obser => {
      this.audioPlay.src = url;
      this.audioPlay.load();
      this.audioPlay.play();

      const handler = (event: Event) => {

        if (event.type === "timeupdate") {
          this.showPlayBtn = false
        } else {
          this.showPlayBtn = true
        }

        this.seek = this.audioPlay.currentTime
        this.seekMax = this.audioPlay.duration
        this.duration = this.formatTime(this.audioPlay.duration)
        this.currentTime = this.formatTime(this.audioPlay.currentTime)

        if (this.seek === this.seekMax) {
          if (!this.isRepeat) {
            this.next()
          }else {
            this.audioPlay.play()
          }
        }
        // console.log(event.type);
      }

      this.addEvents(this.audioPlay, this.audioEvent, handler);

      return () => {
        this.audioPlay.pause();
        this.audioPlay.currentTime

        this.removeEvent(this.audioPlay, this.audioEvent, handler);
      }
    })
  }

  addEvents(obj: any, events: any, handler: any) {
    events.forEach((event: any) => {
      obj.addEventListener(event, handler);
    });
  }

  removeEvent(obj: any, events: any, handler: any) {
    events.forEach((event: any) => {
      obj.addEventListener(event, handler);
    });
  }

  checkCurrentSong() {
    if (this.currentSong > (this.listSong.length - 1)) {
      this.currentSong = 0
    } else if (this.currentSong < 0) {
      this.currentSong = this.listSong.length - 1
    }
  }

  loadUrl() {

    this.streamObserver(this.listSong[this.currentSong].url).subscribe()
  }

  play() {
    if(this.audioPlay.src===""){
      this.streamObserver(this.listSong[this.currentSong].url).subscribe()
    }
    this.audioPlay.play()
  }

  pause() {
    this.audioPlay.pause()
  }

  next() {
    if (this.isDisorder) {
      // const now =this.currentSong
      console.log("this song :" + this.currentSong);
      let next: number;
      do {
        next = Math.floor(Math.random() * this.listSong.length)
        console.log("random :" + next)
      }
      while (next === this.currentSong)
      console.log("next :" + next);

      this.currentSong = next
    } else {
      this.currentSong++
      this.checkCurrentSong()
    }
    this.streamObserver(this.listSong[this.currentSong].url).subscribe()

  }

  prev() {
    if (this.isDisorder) {
      let next: number;
      do {
        next = Math.floor(Math.random() * this.listSong.length)
      }
      while (this.currentSong === next)
      this.currentSong = next
    } else {
      this.currentSong--
      this.checkCurrentSong()
      console.log(this.isDisorder);
    }
    // this.loadUrl()
    // {
    this.streamObserver(this.listSong[this.currentSong].url).subscribe()
    // }
  }

  changeVolume() {
    this.audioPlay.volume = this.volume / 100
    console.log(this.volume)
  }

  setCurrentTime(ev: any) {
    this.audioPlay.currentTime = ev.target.value
  }

  setDisorder() {
    this.isDisorder = !this.isDisorder

  }

  formatTime(time: number, format: string = "HH:mm:ss") {

    const momentTime = time * 1000 | 0;
    return moment.utc(momentTime).format(format);
  }

  setRepeat() {
    this.isRepeat = !this.isRepeat
  }

  setVolume() {
    this.setVol=!this.setVol
  }
}
