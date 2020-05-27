import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMins'
})
export class SecondsToMinsPipe implements PipeTransform {

  transform(value?: number) {
    return this.durationFromSecondsHelper(value);
  }
  pad2(num: any) {
    if (num <= 99) {
      num = ('0' + num).slice(-2);
    }
    return num;
  }

  durationFromSecondsHelper(totalSeconds) {
    let x: number = totalSeconds;
    const seconds: number = this.pad2(Math.floor(x % 60));
    x /= 60;
    const minutes: number = this.pad2(Math.floor(x % 60));
    x /= 60;
    const hours: number = this.pad2(Math.floor(x % 24));
    if (hours > 0){
      return hours + ':' + minutes + ':' + seconds;
    } else{
      return minutes + ':' + seconds;
    }
  }

}
