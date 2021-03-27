import { Component, Input, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ListTestComponent implements OnInit {
  @Input('labelList') labelList: string = 'Minha Lista Legal';
  @Output('customEventList') customEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  onClick(){
    this.customEvent.emit('Disparando um evento Angular');
  }
  ngOnInit(): void {
  }

}
