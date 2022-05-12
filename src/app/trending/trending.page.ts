import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {

  BannerOption = {
    initialSlide: 0,
    slidesPerView:1,
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
    speed: 1500,
    spaceBetween:0,
  
  }
  constructor() { }

  ngOnInit() {
  }

}
