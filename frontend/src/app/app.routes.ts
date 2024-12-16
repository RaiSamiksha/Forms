import { Routes } from '@angular/router';
import { MainComponent } from '../component/main/main.component';
import { UsersListComponent } from '../component/users-list/users-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'main', component: MainComponent},
];
