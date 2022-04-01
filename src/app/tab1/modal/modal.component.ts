/* eslint-disable no-console */
import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@uve/translations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  constructor(private ts: TranslocoService) {}

  ngOnInit() {}

  ex(str: string) {
    console.debug(this.ts.getAvailableLangs());
  }
}
