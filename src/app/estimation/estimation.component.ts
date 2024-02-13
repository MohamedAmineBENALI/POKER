import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ServiceDataService} from 'src/app/service-data.service'
@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {

  constructor(public service:ServiceDataService,private cdr: ChangeDetectorRef){}
  data:any;
  aux:boolean=false;

  isTimerFinished: boolean = false;
   

  ngOnInit() {
    this.startTimer(10000);
    this.service.apiValue$.subscribe((data) => {
      this.data = data ; 
      




    
    


      if(this.data.users.length==this.data.num ||this.isTimerFinished==true )
        {this.aux=true;}

    });
  }


  startTimer(duration: number): void {
    setTimeout(() => {
      this.timerFinished();
    }, duration);
  }


  timerFinished(): void {
    this.isTimerFinished = true;

  }

}
