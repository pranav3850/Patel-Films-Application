import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  homeclr:any='#f8f9fa';
  tvclr:any='#f8f9fa';
  movieclr:any='#f8f9fa';
  kidsclr:any='#f8f9fa';
  showHome:boolean=true;
  showTv:boolean=false;
  showMovie:boolean=false;
  showKids:boolean=false
  BannerOption = {
    initialSlide: 1,
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
    speed: 1200,
    spaceBetween:0,
  
  }
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.homeclr='black';
  }
  openhome(){
    this.homeclr='black';
    this.movieclr='#f8f9fa';
    this.kidsclr='#f8f9fa';
    this.tvclr='#f8f9fa';
    this.showHome=true;
    this.showKids=false;
    this.showMovie=false;
    this.showTv=false;
  }
  opentvshow(){ 
    this.homeclr='#f8f9fa';
    this.movieclr='#f8f9fa';
    this.kidsclr='#f8f9fa';
    this.tvclr='black';
    this.showHome=false;
    this.showKids=false;
    this.showMovie=false;
    this.showTv=true;
  }
  openmovie(){
    this.homeclr='#f8f9fa';
    this.movieclr='black';
    this.kidsclr='#f8f9fa';
    this.tvclr='#f8f9fa';
    this.showHome=false;
    this.showKids=false;
    this.showMovie=true;
    this.showTv=false;
  }
  openkid(){
    this.homeclr='#f8f9fa';
    this.movieclr='#f8f9fa';
    this.kidsclr='black';
    this.tvclr='#f8f9fa';
    this.showHome=false;
    this.showKids=true;
    this.showMovie=false;
    this.showTv=false;

  }
  openDetails(){
    this.router.navigate(['detail']);
  }

}
