import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Pessoa', url: 'pessoas', icon: 'person-add' }
    
 
  
  ];

  constructor( ) {}
}
