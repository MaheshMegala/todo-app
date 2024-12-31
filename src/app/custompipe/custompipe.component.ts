import { Component } from '@angular/core';
import { ReversePipe } from "../pipes/reverse.pipe";

@Component({
  selector: 'app-custompipe',
  imports: [ReversePipe],
  templateUrl: './custompipe.component.html',
  styleUrl: './custompipe.component.css'
})
export class CustompipeComponent {

}
