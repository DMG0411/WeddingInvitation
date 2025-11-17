import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isOpened = false;

  openEnvelope():void {
    if (this.isOpened) return;
    this.isOpened = true;
  }
}
