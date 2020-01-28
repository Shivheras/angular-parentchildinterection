import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  receivedfriend2Message: string;
  messageToSendP: string = '';

  constructor() { }

  ngOnInit() {
  }



  sendTofriend2(message: string) {
    this.messageToSendP = message;
  }



  getMessage(message: string) {
    this.receivedfriend2Message = message;
  }



}
