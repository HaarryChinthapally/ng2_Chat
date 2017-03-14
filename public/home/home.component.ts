import { Component, OnInit } from '@angular/core';
// import { SocketService } from '../shared/socket.service';
import * as io from 'socket.io-client';

@Component({
    moduleId: module.id,
    selector: 'ch-home',
    styleUrls: ['home.styles.css'],
    templateUrl: 'home.template.html'
})

export class HomeComponent implements OnInit {
    messageText: string;
    messages: Array<any>;
    socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:8000');
  }

  ngOnInit() {
      this.socket.emit('event1', {
          msg: 'Client to server, can you hear me server?'
      });

      this.socket.on('event2', (data: any) => {
        console.log(data.msg);
        this.socket.emit('event3', {
            msg: 'Yes, its working for me!!'
        });
      });

      this.socket.on('event4', (data: any) => {
          console.log(data.msg);
      });
  }
    // sendMessage() {
    //   console.log(this.messageText);
    //   this.messageText = '';
    // }

    // sendMessage() {
    //     const message = {
    //       text: this.messageText
    //     };
    //     this._socketService.emit('send-message', m.messageText);
    //     console.log(m.messageText);
    //     this.messages.push(m.messageText);
    //     this.messageText = ''
    //   }

    // ngOnDestroy() {
    //   this._socketService.removeListener('send-message');
    // }

}
