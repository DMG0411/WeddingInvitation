import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
})
export class InvitationComponent {
onOpenResturant(): void {
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

onOpenChurch(): void {
  const lat = 44.4222131;
  const lng = 26.1321645;
  const label = encodeURIComponent('Biserica Sfânta Treime Dudești');

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
