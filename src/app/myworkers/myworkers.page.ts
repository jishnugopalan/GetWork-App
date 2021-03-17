import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var s;
@Component({
  selector: 'app-myworkers',
  templateUrl: './myworkers.page.html',
  styleUrls: ['./myworkers.page.scss'],
})
export class MyworkersPage implements OnInit {
 workerslist=[];
 workersdetails=[];
 w
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  async ionViewWillEnter(){
    console.log("oninit")
    this.authService.viewmyworkers({"category":this.authService.cat}).subscribe(async (res:any)=>{
      console.log(res)
     
     
      if(res.length!=0)
      {
        
        s=res
        this.workerslist=s
        this.authService.myworkers=res;
        console.log(this.authService.myworkers)
      }
      else{
        const toast = await this.toastController.create({
          message: 'No workers found...',
          duration: 2000
        });
        toast.present();
      }
    });
  

}
ionViewWillLeave(){
this.authService.myworkers=""
}
public bookworker(id){
  console.log(id)
  this.authService.workerid=id;
  this.router.navigateByUrl("/bookworker");

  

}
 

  async ngOnInit() {
   
  //   var n=this.authService.myworkers
  // console.log("myworkers",this.authService.myworkers)

  
  }

}
