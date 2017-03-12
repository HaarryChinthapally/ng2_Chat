import { Component, OnInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';

@Component({
    moduleId: module.id,
    selector: 'ch-home',
    styleUrls: ['home.styles.css'],
    templateUrl: 'home.template.html'
})

export class HomeComponent {
    messageText: string;
    messages: Array < any >;

    constructor(private _socketService: SocketService) {}

    ngOnInit() {
      this.messages = new Array();
        this._socketService.on('chatMessage', (msg: any) => {
          this.messages.push(msg);
        });
      }

    sendMessage() {
        const message = {
          text: this.messageText
        };
        this._socketService.emit('chatMessage', message);
        this.messageText = ''
      }

    ngOnDestroy() {
      this._socketService.removeListener('chatMessage');
    }

}
