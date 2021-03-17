import { Component } from '@angular/core';
 
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.authService.uid=this.authService.user.id

          console.log("user id is",this.authService.user.id)
          if(this.authService.user.email=="admin@gmail.com"){
      this.router.navigateByUrl("/admin")

          }
          else{
            this.router.navigate(['mainpage']);

          }


        } else {
          this.router.navigate(['home']);
        }
    });
 
   
    });
  }
}