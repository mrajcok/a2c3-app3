import {Component}            from '@angular/core';
import {UaNavComponent}       from './ua-nav.component';
import {HTTP_PROVIDERS}       from '@angular/http';
import {ROUTER_DIRECTIVES}    from '@angular/router';

@Component({
  selector:   'my-app',
  providers:  [HTTP_PROVIDERS],
  directives: [UaNavComponent, ROUTER_DIRECTIVES],
  template: `
    <ua-nav [myTitle]="appTitle" [name]="username"></ua-nav>
    <router-outlet></router-outlet>
    <footer>
      Angular version: {{angularVersion}}<br>
      Router  version: {{routerVersion}}
    </footer>`,
  styles: ['footer { margin: 3em 1em; font-size: 75%;  text-align: right; }']
})
export class AppComponent {
  appTitle = 'Udemy Course - Q&A App3';
  // versions are from package.json
  angularVersion = '2.0.0-rc.4';
  routerVersion  = '3.0.0-beta.2';
  username = 'Mark';  // TBD, get this from a service
   constructor() {
      console.clear();
   }
}
