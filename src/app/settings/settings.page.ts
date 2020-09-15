import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city : string;
  state: string; 

  constructor(private storage : Storage, private router : Router) { 
    let location = null;

    this.storage.get('location').then( (val)=>{
      if ( val != null ){
        location = JSON.parse(val);
                  this.city  = location.city ;
          this.state = location.state ;
      }else{
          this.city  = "porto";
          this.state = "FL";
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  saveForm(){
    let location ={
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.router.navigate(["/tabs/welcome"]);
  }

}
