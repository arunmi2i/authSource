import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  
  private channel = new Subject<any>();

  public publish(data: any) {
    this.channel.next(data);
  }
  
  public subscribe(): Subject<any> {
    return this.channel;
  }
}
