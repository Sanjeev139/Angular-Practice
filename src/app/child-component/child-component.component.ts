import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {

  @Input() NewData = "";

  @Output() newEvent = new EventEmitter<any>();

  addNewItme(value:any) {
    this.newEvent.emit(value);
  }

}
