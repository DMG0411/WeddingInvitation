import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-envelope-landing',
  templateUrl: './envelope-landing.component.html',
  styleUrls: ['./envelope-landing.component.scss'],
})
export class EnvelopeLandingComponent {
  isOpened = false;

  @Output() opened = new EventEmitter<void>();

  openEnvelope() {
    if (this.isOpened) return;
    this.isOpened = true;

    setTimeout(() => {
      this.opened.emit();
    }, 4000);
  }
}
