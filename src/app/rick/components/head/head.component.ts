import { Component, OnInit } from '@angular/core';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']

})
export class HeadComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Inicio() {
    this.router.navigate(['/Inicio'])
  }

  Nosotros(){
    this.router.navigate(['/Nosotros'])
  }

  welcome() {
    this.router.navigate([''])
  }


}
