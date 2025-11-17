import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
})
export class InvitationComponent {
onOpenLocation(): void {
  const lat = 44.4171237;
  const lng = 26.028437;
  const label = encodeURIComponent('Zocalo Ballroom');

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  const webUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  if (isIOS) {
    const appUrl = `comgooglemaps://?q=${lat},${lng}(${label})`;
    window.location.href = appUrl;

  } else if (isAndroid) {
    const appUrl = `geo:${lat},${lng}?q=${lat},${lng}(${label})`;
    window.location.href = appUrl;

  } else {
    window.open(webUrl, '_blank');
  }
}

}
