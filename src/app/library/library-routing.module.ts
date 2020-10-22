import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPage } from './library.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryPage,
    children: [
      // {
      //   path:'mylib',
      //   loadChildren: () => import('../mylib/mylib.module').then(m => m.MylibPageModule)
      // },
      {
        path: 'mylibrary',
        loadChildren: () => import('../library/mylibrary/mylibrary.module').then(m => m.MylibraryPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryPageRoutingModule {}
