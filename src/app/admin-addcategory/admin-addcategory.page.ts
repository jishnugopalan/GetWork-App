import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-addcategory',
  templateUrl: './admin-addcategory.page.html',
  styleUrls: ['./admin-addcategory.page.scss'],
})
export class AdminAddcategoryPage implements OnInit {
  jobForm:FormGroup
  cat=""
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router,public toastController: ToastController) { 

   this.jobForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(100)]],
      
    });
  }
  get category(){
    return this.jobForm.get('category');
  }
  public errorMessages = {
    category: [
      { type: 'required', message: 'category is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    
  };
  
  public submit(){
    console.log(this.jobForm.value);
    console.log(this.cat)
    this.authService.category({"category":this.cat.toUpperCase()}).subscribe(async res=>{
      console.log(res)
      const toast = await this.toastController.create({
        message: 'Job added successfully',
        duration: 2000
      });
      toast.present();
      this.cat=""

      // var uid=res._id;
      // console.log(uid)
      // this.authService.phone=this.registrationForm.value.phone;
      // this.authService.uid=uid;
      // this.router.navigateByUrl("/password");
       
    })
  }
  ngOnInit() {
  }

}
