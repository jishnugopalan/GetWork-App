import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var a:any;
var l:any;
var b:any;
@Component({
  selector: 'app-viewchat',
  templateUrl: './viewchat.page.html',
  styleUrls: ['./viewchat.page.scss'],
})
export class ViewchatPage implements OnInit {
  pages = []
  m=this.authService.uid
  f=this.authService.fid
  constructor(private authService:AuthService,private router:Router) { }
newMsg='';
name=this.authService.fname;
pic=this.authService.fpic;
ionViewWillEnter(){
 this.authService.viewchat({"myid":this.authService.uid,"friendid":this.authService.fid,"myid1":this.authService.fid,"friendid1":this.authService.uid}).subscribe(res=>{
   console.log(res)
   a=res;
   l=a.length;
   for(var i=0;i<a.length;i++)
   {
    
    this.pages.push(a[i]);
   }
    
 })
}
public sendmsg()
{
  var Dt = Date.now();
  console.log(this.newMsg)
  this.authService.chatmsg({"myid":this.authService.uid,"friendid":this.authService.fid,"message":this.newMsg,"datetime":Dt}).subscribe(res=>{
    console.log(res)
    b=[res]
   
       this.pages.push(b[0]);
      this.newMsg=''
    
  })
  
  
  
}


  ngOnInit() {
  }

}
