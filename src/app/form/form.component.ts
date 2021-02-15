import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formValue: string = '';
  constructor() {}

  @Output() onCreateItem: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  onClickMe() {
    if(this.formValue === "") return;
    this.onCreateItem.emit(this.formValue);
  }
}
