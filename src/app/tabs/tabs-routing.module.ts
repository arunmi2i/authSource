import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { Library1Page } from '../tab2/library1/library1.page';
import { LibraryPage } from '../library/library.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'library',
        // children: [
        //   // {
        //   //   path: 'mylib',
        //   //   loadChildren: () => import('../library/mylibrary/mylibrary.module').then(m => m.MylibraryPageModule)
        //   // },
        //   {
        //     path: '',
        //     loadChildren: () => import('../library/library.module').then(m => m.LibraryPageModule)
        //   }
          
        // ]
        loadChildren: () => import('../library/library.module').then(m => m.LibraryPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
