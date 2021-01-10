import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  
  ngOnInit(): void {

    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });

    menu_item.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });
    });
    
    document.addEventListener('scroll', () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 700) {;
        document.getElementById("header").style.backgroundColor = "#29323c";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
      }
    });
  }



  toHome(){
    document.getElementById("main").scrollIntoView({behavior:"smooth"});
  }
  toService(){
    document.getElementById("services").scrollIntoView({behavior:"smooth"})
  }
  toProject(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"})
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
  }

}
