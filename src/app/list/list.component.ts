import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../models/TodoDTO';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input() list: TodoDTO[];

  @Output() onDeleteHandler: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  onCompleteHandler: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  delete(event) {
    this.onDeleteHandler.emit(event);
  }

  complete(event) {
    this.onCompleteHandler.emit(event);
  }
}
