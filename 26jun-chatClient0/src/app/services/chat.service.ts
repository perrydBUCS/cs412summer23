import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:8080'; // todo: configure this
  private  socket = null;

  public sendMessage(message) {
    this.socket.emit('add-a-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('a-new-message', (message) => {
        observer.next(message);
      });
      this.socket.on('deleted-message', (message) => {
        // delete from local model
      });
    });
  };
  public deleteMessage = (message) => {
    this.socket.emit('delete-message', message);
  };

  constructor() {
    if (!this.socket) {
      this.socket = io(this.url);
    }
  }
}
