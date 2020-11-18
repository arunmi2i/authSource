import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
// import { Library1Page } from '../tab2/library1/library1.page';
import { LibraryPage } from '../library/library.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'explore/category/:category',
        loadChildren: () => import('../explore/explore.module').then(m=> m.ExplorePageModule)
      },
      {
        path: 'explore/category/:category/subCategory/:subCategory',
        loadChildren: () => import('../explore/explore.module').then(m=> m.ExplorePageModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../library/library.module').then(m => m.LibraryPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/home/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
