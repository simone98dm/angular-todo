import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../models/TodoDTO';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() item: TodoDTO;
  @Output() onDeleteHandler: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  onCompleteHandler: EventEmitter<number> = new EventEmitter<number>();

  delete() {
    this.onDeleteHandler.emit(this.item.id);
  }

  complete() {
    this.onCompleteHandler.emit(this.item.id);
  }
}
