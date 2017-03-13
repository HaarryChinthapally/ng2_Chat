import { Component, OnInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';
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
    this.socket.on("connection", () => console.log("this is only a test"));
  }

  ngOnInit() {
      this.socket.on('event1', (data: any) => {
        console.log(data.msg);
        this.socket.emit('event2', {
            msg: 'Yes, its working for me !!'
        });
      });
      this.socket.emit('event3', {
          msg: 'Hello from client'
      });
  }
    // constructor(private _socketService: SocketService) {}

    // this._socketService.on('event1', function (data) {
    //   console.log(data.msg);
    //   this._socketService.emit('event2', { msg: 'Yes, its working for me !!' });
    // });

    // ngOnInit() {
    //   this._socketService.on('event1', (data: any) => {
    //     console.log(data.msg);
    //     this._socketService.emit('event2', {
    //         msg: 'Yes, its working for me !!'
    //     });
    //   });
    //   this._socketService.emit('event3', {
    //       msg: 'Hello from client'
    //   });
    // }

    // ngOnInit() {
    //   this.socket.on('event1', (data: any) => {
    //     console.log(data.msg);
    //     this.socket.emit('event2', {
    //         msg: 'Yes, its working for me !!'
    //     });
    //   });
    //   this.socket.emit('event3', {
    //       msg: 'Hello from client'
    //   });
    // }

    // ngOnInit() {
    //   this.messages = new Array();
    //     this._socketService.on('message-received', (msg: any) => {
    //       this.messages.push(msg);
    //     });
    //   }

    // _socketService.on('event1', (data) => {
    //     console.log(data.msg);
    //     _socketService.emit('event2', { msg: 'Yes, its working for me !!' });
    //   });

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
