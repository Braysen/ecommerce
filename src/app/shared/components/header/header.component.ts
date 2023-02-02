import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    const elem = document.getElementById("nav");
    const rect = elem?.getBoundingClientRect();
    
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if(rect?.height){
        if(scrollHeight > rect?.height){
          elem?.classList.add("fix-nav");
        }else{
          elem?.classList.remove("fix-nav");
        }
      }
    })
  }
}
