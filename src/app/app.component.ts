import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sobre Mim', url: 'sobre-mim', icon: 'person' },
    { title: 'Clube Desportivo', url: 'clube-desportivo', icon: 'football' },
    { title: 'Gastronomia', url: 'gastronomia', icon: 'pizza' },
    { title: 'Turismo', url: 'turismo', icon: 'location' },
  ];
  constructor() {}
}
