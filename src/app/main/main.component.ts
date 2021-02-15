import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TodoDTO } from '../models/TodoDTO';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  list: TodoDTO[] = [
    { id: 1, text: 'txt1', state: false },
    { id: 2, text: 'txt2', state: false },
    { id: 3, text: 'txt3', state: false },
  ];

  ngOnInit(): void {}

  delete(event) {
    this.list = this.list.filter((x) => x.id !== event);
  }

  complete(event) {
    this.list.map((x) => {
      if (x.id === event) {
        x.state = true;
      }
    });
  }

  add(event) {
    this.list.push({
      text: event,
      id: this.list.length + 1,
      state: false,
    });
  }
}
