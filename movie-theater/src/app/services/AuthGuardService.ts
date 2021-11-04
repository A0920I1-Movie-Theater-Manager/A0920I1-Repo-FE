import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './authe.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorageService} from './token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {NotificationRegisterComponent} from '../guest/register/notification-register/notification-register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  private isLoggedIn: boolean;
  private currentUser: any;
  currentRole: any;
  message = 'Không Thể Truy Cập';
  constructor(private router: Router,
              private authService: AuthService, private jwtHelper: JwtHelperService,
              private tokenStorageService: TokenStorageService,
              private dialog: MatDialog) {
  }

  // phan quyen
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
    }
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    // console.log(expectedRole);
    const token = sessionStorage.getItem('auth-token');
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    // console.log(tokenPayload.role);
    console.log(this.authService.isUserLoggedIn());
    if (!this.authService.isUserLoggedIn()) {
      console.log('chua login');
      this.router.navigateByUrl('/login');
      // return false;
    }
    console.log('role');
    console.log(this.currentUser);
    console.log(this.currentUser.roles);
    // console.log(route.data.expectedRole.indexOf(['ROLE_ADMIN', 'ROLE_USER']));
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.currentUser.roles.length; i++ ){
      console.log(this.currentUser.roles.length);
      this.currentRole = this.currentUser.roles.pop();
      console.log(this.currentRole);
      // this.currentUser.roles.
      console.log(route.data.expectedRole.indexOf(this.currentRole) === -1);
      if (route.data.expectedRole.indexOf(this.currentUser.roles.pop()) === -1){
        const message = this.message;
        const dialogRef = this.dialog.open(NotificationRegisterComponent,
          {
            data: {
              message
            }
            ,
            width: '400px'
          }
        );
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
          this.router.navigateByUrl('/cinema');
        });
        console.log('ko du quyen');
        return false;
      }
    }
    return true;
  }
}
