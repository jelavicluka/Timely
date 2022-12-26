import { CounterDetailFormComponent } from './counter-details/counter-detail-form/counter-detail-form.component';
import { CounterDetailService } from './shared/counter-detail.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from "@angular/forms";
import { CounterDetail } from 'src/app/shared/counter-detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TimelyAngular';

  time: Date;

  constructor(private dialogRef : MatDialog, public service : CounterDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  openDialog(){
    this.dialogRef.open(CounterDetailFormComponent);
  }

  startTime(){
    this.service.formData.startTime = new Date();
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
