import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import * as R from 'ramda';


const moveFromTo = (fromIndex, toIndex) => (array) => {
  const movedElement = array[fromIndex];

  return R.pipe(
    R.remove(fromIndex, 1),
    R.insert(toIndex, movedElement),
  )(array);
};

const getIndex = (data: any) => R.findIndex(R.equals(data));

const move = (draggedItem, overItem, arrayData) => {
  const fromIndex = getIndex(draggedItem)(arrayData);
  const toIndex = getIndex(overItem)(arrayData);
  return moveFromTo(fromIndex, toIndex)(arrayData);
};


@Component({
  selector: 'app-dnd-wrapper',
  templateUrl: './dnd-wrapper.component.html',
  styleUrls: ['./dnd-wrapper.component.scss'],
})
export class DndWrapperComponent {

  @Input() readonly dataList: any[];
  @Output() dataChanges = new EventEmitter<any[]>();
  @ContentChild(TemplateRef) item: TemplateRef<any>;

  draggedItem = null;


  dragStart(__, data) {
    this.draggedItem = data;
  }

  dragEnter(__, overItem) {
    if (!R.equals(this.draggedItem, overItem)) {
      const newData = move(this.draggedItem, overItem, this.dataList);
      this.dataChanges.emit(newData);
    }
  }

  dragEnd() {
    this.draggedItem = null;
  }

  dragOver(event, __) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    return false;
  }

  drop(event, __) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    return false;
  }

}
