import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `<div class="card">
      <nav>
         <a [routerLink]="['activity']" routerLinkActive="active">Activity</a>
         <a [routerLink]="['profile']"  routerLinkActive="active">Profile</a>
      </nav>
      <router-outlet></router-outlet>
   </div>`,
  styles: [`nav { margin-bottom: 1.5rem; }
    a { border-radius: 6px; padding: 6px; text-decoration: none; }
    .active { background-color: #bcd7ff; }`]
})
export class UserComponent {
}