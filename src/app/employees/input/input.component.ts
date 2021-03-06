import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() helperText!: string;
  @Input() control!: any;

  skill = {
    id: 0,
    name: '',
  };

  skillData = [{ id: 0, name: '' }];

  constructor() {}

  ngOnInit(): void {}

  // Triggers helper text telling the user the entered input is not valid.
  displayErrorHelperText() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
