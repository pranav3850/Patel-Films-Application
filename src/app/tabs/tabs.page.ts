import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  homesel:any='selected';
  trendingsel:any='';
  findsel:any='';
  favsel:any='';
  profilesel:any='';
  BannerOption = {
    initialSlide: 0,
    slidesPerView:5,
    loop: true,
    centeredSlides: false,
    autoplay:true,
    speed: 400,
    spaceBetween:0,
  
  }
  BannerOption1 = {
    initialSlide: 1,
    slidesPerView:1,
    loop: true,
    centeredSlides: false,
    autoplay:true,
    speed: 800,
    spaceBetween:0,
  
  }
  BannerOption2 = {
    initialSlide: 1,
    slidesPerView:1,
    loop: true,
    centeredSlides: false,
    autoplay:true,
    speed: 1200,
    spaceBetween:0,
  
  }

  constructor(
    public router:Router
  ) {
    
  }

  profile(){
    this.profilesel='selected';
    this.homesel='';
    this.findsel='';
    this.favsel='';
    this.trendingsel='';
    this.router.navigate(['tabs/profile']);
  }
  home(){
    this.profilesel='';
    this.homesel='selected';
    this.findsel='';
    this.favsel='';
    this.trendingsel="";
    this.router.navigate(['tabs/home']);
  }
  find(){
    this.profilesel='';
    this.homesel='';
    this.findsel='selected';
    this.favsel='';
    this.trendingsel='';
  }
  fav(){
    this.favsel='selected';
    this.profilesel='';
    this.homesel='';
    this.findsel='';
    this.trendingsel='';
    this.router.navigate(['tabs/favourite']);
  }
  trending(){
    this.trendingsel="selected";
    this.profilesel='';
    this.homesel='';
    this.findsel='';
    this.favsel='';
    this.router.navigate(['tabs/trending']);
   
  }


}
