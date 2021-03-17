import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { MainpagePageRoutingModule } from './mainpage-routing.module';

import { MainpagePage } from './mainpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainpagePageRoutingModule,
    
  ],
 
    
  declarations: [MainpagePage],
  providers:[
    Geolocation
  ]
})

export class MainpagePageModule {}
