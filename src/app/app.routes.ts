import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Tasks } from './pages/tasks/tasks';

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
        path: '**',
        redirectTo: ''
    }
];
