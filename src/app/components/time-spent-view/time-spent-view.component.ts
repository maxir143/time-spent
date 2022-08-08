import { Component } from '@angular/core';

@Component({
  selector: 'app-time-spent-view',
  templateUrl: './time-spent-view.component.html',
  styleUrls: ['./time-spent-view.component.css']
})

export class TimeSpentViewComponent  {

  


  constructor() { 
  }

  getShift(date: Date, time:number){
    const startShift = new Date(date)
    const endShift = new Date()
    const offset = startShift.getTimezoneOffset()

    startShift.setHours(startShift.getHours() - (offset/60))
    endShift.setHours(startShift.getHours() + time)

    return {startShift, endShift}

  }

}
