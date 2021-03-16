import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('src/app/features/guest-list/guest-list.module').then(m => m.GuestListModule)
  },
  {
    path: 'add-guest',
    loadChildren: () => import('src/app/features/add-guest/add-guest.module').then(m => m.AddGuestModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('src/app/features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
