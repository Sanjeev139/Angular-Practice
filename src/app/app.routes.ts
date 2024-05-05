
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';

export const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path : "child", component: ChildComponentComponent}
  ];

