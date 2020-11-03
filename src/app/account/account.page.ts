import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {

  constructor(private apiService: ApiService, private router: Router) {}

  logout() {
    this.apiService.logout().subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/login']);
      localStorage.clear();
    });
  }

}
