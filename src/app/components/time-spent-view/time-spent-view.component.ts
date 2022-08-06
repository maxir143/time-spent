import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-spent-view',
  templateUrl: './time-spent-view.component.html',
  styleUrls: ['./time-spent-view.component.css']
})

export class TimeSpentViewComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  data = Array;

  getShift(date: Date, time:number){
    const startShift = new Date(date)
    const endShift = new Date()
    const offset = startShift.getTimezoneOffset()

    startShift.setHours(startShift.getHours() - (offset/60))
    endShift.setHours(startShift.getHours() + time)

    return { startShift, endShift}

  }

  fakeFetch () {
    const {startShift, endShift} = this.getShift(new Date(), 8)
    return (
      [{
        teleop_1: {
          name: 'maximiliano',
          startShift,
          endShift
        }
      }]
    )
  }

  constructor() { 
    console.log(this.fakeFetch())
  }

}
