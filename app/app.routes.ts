import { provideRouter, RouterConfig } from '@angular/router';
import { UaQandAListComponent }        from './ua-q-and-a-list.component';
import { UserRoutes}                   from './user/user.routes';

export const routes: RouterConfig = [
  { path: '', component: UaQandAListComponent },
  ...UserRoutes
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];
