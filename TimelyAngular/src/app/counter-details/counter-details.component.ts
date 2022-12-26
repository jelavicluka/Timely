import { Component, OnInit } from '@angular/core';
import { CounterDetailService } from '../shared/counter-detail.service';

@Component({
  selector: 'app-counter-details',
  templateUrl: './counter-details.component.html',
  styles: [
  ]
})
export class CounterDetailsComponent implements OnInit {

  constructor(public service: CounterDetailService){ }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
