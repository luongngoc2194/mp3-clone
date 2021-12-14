import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Audio, ListAudio} from "../models/audio";
import {fakeAudio, fakeList} from "../models/fakeAudio";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  getAudioList():Observable<ListAudio[]>{
    return of(fakeList)
  }

  setMusic$ = new BehaviorSubject<any>('');
  isPlay$ = new BehaviorSubject<any>({});
  childPlay$ = new BehaviorSubject<any>('')
  constructor() { }
}
