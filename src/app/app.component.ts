import { Component } from '@angular/core';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';
  openUserLoginDialog(): void {
    // Logic to open the user login dialog, for example:
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}