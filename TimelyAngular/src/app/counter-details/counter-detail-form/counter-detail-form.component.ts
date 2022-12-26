import { CounterDetailService } from './../../shared/counter-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CounterDetail } from 'src/app/shared/counter-detail.model';

@Component({
  selector: 'app-counter-detail-form',
  templateUrl: './counter-detail-form.component.html',
  styles: [
  ]
})
export class CounterDetailFormComponent implements OnInit {

  constructor(public service:CounterDetailService) { }


  ngOnInit(): void {

  }

  stopTime(){
    this.service.formData.stopTime = new Date();
    const interval = this.service.formData.stopTime.getTime() - this.service.formData.startTime.getTime();

    const duration = convertMsToTime(interval);
    this.service.formData.duration=duration;
  }

  onSubmit(form: NgForm){
    this.service.postCounterDetail().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new CounterDetail();
  }
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;}