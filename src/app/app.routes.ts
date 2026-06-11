import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Tasks } from './pages/tasks/tasks';
import { Contacts } from './pages/contacts/contacts';
import { Statistics } from './pages/statistics/statistics';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: "Main"
    },
    {
        path: 'tasks',
        component: Tasks,
        title: "Tasks"
    },
    {
        path: 'about',
        component: About,
        title: "About Me"
    },
    {
        path: 'contacts',
        component: Contacts,
        title: "Contacts"
    },
    {
        path: 'statistics',
        component: Statistics,
        title: "Statistics"
    },
    {
        path: '**',
        redirectTo: ''
    }
];
