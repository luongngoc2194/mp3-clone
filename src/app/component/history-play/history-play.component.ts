import {Component, OnInit} from '@angular/core';
import {AudioService} from "../../services/audio.service";
import {Audio, ListAudio} from "../../models/audio";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-history-play',
  templateUrl: './history-play.component.html',
  styleUrls: ['./history-play.component.css']
})
export class HistoryPlayComponent implements OnInit {

  historyAudios: Audio[] = []
  idPlay!: number
  isRunming: boolean = false;
  showHistory: boolean=true;
  audio!: Audio;
  constructor(private audioSv: AudioService) {
  }

  ngOnInit(): void {
    console.log(this.historyAudios);
    this.audioSv.setMusic$.pipe(
      map(data => {
        if (data != '') {
          this.audio = data
          for(let i = 0 ;i<this.historyAudios.length;i++){
            if(this.historyAudios[i].id===data.id){
              this.historyAudios.splice(i,1)
            }
          }
          this.historyAudios = [data, ...this.historyAudios]
          if(this.historyAudios.length>5){
            this.historyAudios.pop()
          }
        }
      })
    ).subscribe()
    this.audioSv.isPlay$.subscribe(data => {
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
      this.audioSv.setMusic$.next(item)
    }else {
      if(this.isRunming){
        this.audioSv.childPlay$.next("pause")
      }else {
        this.audioSv.childPlay$.next("play")
      }


    }
    // alert(1)
  }

}
