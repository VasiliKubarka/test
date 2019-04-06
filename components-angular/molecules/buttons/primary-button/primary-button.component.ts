import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent {

  @Input() iconLink: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() shape: 'default' | 'round' = 'default';
  @Input() color: 'primary' | 'accent' | 'error' = 'primary';
  @Output() clickEvent = new EventEmitter<undefined>();

}
