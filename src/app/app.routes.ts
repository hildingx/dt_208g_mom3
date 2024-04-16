import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConverterComponent } from './pages/converter/converter.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'converter', component: ConverterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent} ,
    { path: '**', component: NotFoundComponent }
];
