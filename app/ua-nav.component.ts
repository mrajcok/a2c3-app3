import {Component, Input}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'ua-nav',
  directives: [ROUTER_DIRECTIVES],
  template: `<header>
    <button md-button class="md-icon-button md-primary">
      <i md-icon class="material-icons">menu</i>
    </button>
    <h1><a [routerLink]="['/']">{{title}}</a></h1>
    <a [routerLink]="['/user/activity']" id="user">{{name}}</a>
  </header>`,
  styles: [`header { background-color: rgba(0,0,139,.83); margin: 0; padding: 10px; }
     h1 { font-size: 120%; display: inline; }
     h1, h1 a:visited { color: #D4BD87; }
     a  { text-decoration: none; }
     #user { position: absolute; top: 1.5rem; right: 2.5rem; font-size: 80%; color: #a2badd; }
     a#user { padding: 7px; border-radius: 6px; }
     a:hover#user { background-color: #171826; transition: background-color 300ms linear; }`]
})
export class UaNavComponent {
  @Input('myTitle') title:string;
  @Input()           name:string;
}