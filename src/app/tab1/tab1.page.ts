/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { SessionService } from '@uve/api-angular-client';
import { OverlayService } from '@uve/shared-domain';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private _ss: SessionService, private _os: OverlayService) {}

  ngOnInit(): void {
    console.debug(this._ss.getRootToken());
  }

  openModal() {
    this._os.createOverlay(ModalComponent, (c: ModalComponent) => {
      c.title = 'Esto es un Input';
      c.content = 'Esto tambien es un Input';
    });
  }
}
