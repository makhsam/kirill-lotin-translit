import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TransliterationComponent } from './transliteration/transliteration.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'lotin-kirill',
    component: TransliterationComponent,
    data: { input: 0, output: 1 } // 0 => Lotin; 1 => Kirill
  },
  {
    path: 'kirill-lotin',
    component: TransliterationComponent,
    data: { input: 1, output: 0 } // 0 => Lotin; 1 => Kirill
  },
  {
    path: 'lotin-lotin',
    component: TransliterationComponent,
    data: { input: 0, output: 0 } // 0 => Lotin; 1 => Kirill
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
