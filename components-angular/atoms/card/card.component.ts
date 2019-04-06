import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() imageSrc: string;
  @Input() showImage = true;
  @Input() showMenuButton = true;
  @Output() clickImage = new EventEmitter<Event>();


  @ContentChild('editMenu') editMenu: TemplateRef<any>;
}
