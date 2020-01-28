import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() receivedfriend1Message: string;

  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = "Hello Friend1 !";


  constructor() { }

  ngOnInit() {
  }

  sendMessageTofriend1(message: string) {
    this.messageToEmit.emit(message)
  }

}
