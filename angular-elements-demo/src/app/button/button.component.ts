import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input('buttonLabel') buttonLabel: string = 'Default';
  @Output('customEvent') customEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  onClick(){
    this.customEvent.emit('Emmiting');
  }
  ngOnInit(): void {
  }

}
