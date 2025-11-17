import { Component } from '@angular/core';
import { EnvelopeLandingComponent } from './envelope-landing';
import { InvitationComponent } from './invitation';

@Component({
  imports:[EnvelopeLandingComponent, InvitationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showInvitation = false;

  onEnvelopeOpened() {
    this.showInvitation = true;
  }
}
