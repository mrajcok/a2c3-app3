import { RouterConfig }          from '@angular/router';
import { UserComponent }         from './user.component';
import { UserActivityComponent } from './user-activity.component';
import { UserProfileComponent }  from './user-profile.component';

export const UserRoutes: RouterConfig = [
  { path: '',     redirectTo: '/user/activity', pathMatch: 'full' },
  { path: 'user', component: UserComponent,
    children: [
      { path: 'activity', component: UserActivityComponent },
      { path: 'profile',  component: UserProfileComponent }
    ]
  }
];

