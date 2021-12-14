export class Audio {
  id! : number;
  name! : String;
  image!:String
  url! : String;
  singer! :String;
  discription! :String;
  status! :String;
  isPlay! : boolean;
}

export class ListAudio {
  listname! : string;
  list! : Audio[]
}
