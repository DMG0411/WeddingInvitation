import { APP_ID, Component, OnInit } from '@angular/core';
import { EnvelopeLandingComponent } from './envelope-landing';
import { InvitationComponent } from './invitation';

declare var YT: any;

@Component({
  imports:[EnvelopeLandingComponent, InvitationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  showInvitation = false;

  onEnvelopeOpened() {
    this.showInvitation = true;
  }
  
  onMusicPlay() {
    let audio = new Audio('song.wav');
    audio.load();
    audio.play();
  }
}
