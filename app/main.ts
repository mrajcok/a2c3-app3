import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
//import {enableProdMode} from '@angular/core';

//enableProdMode();
bootstrap(AppComponent, [
   APP_ROUTER_PROVIDERS,
   disableDeprecatedForms(),
   provideForms()
])
.catch((err: any) => console.error(err));
