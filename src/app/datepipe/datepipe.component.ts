import { Component } from '@angular/core';
import { DatePipe, CommonModule } from "@angular/common";

@Component({
  selector: 'app-datepipe',
  imports: [CommonModule],
  templateUrl: './datepipe.component.html',
  styleUrl: './datepipe.component.css'
})
export class DatepipeComponent {
  today: Date = new Date(); // Current date and time
  myObject: any = {
    "name": "satya"
  }
  ngOnInit(): void {
    console.log(this.today);
  }
}
