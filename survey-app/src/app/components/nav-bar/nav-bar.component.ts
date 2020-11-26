import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories: any[]
  constructor(private categorySerivce: CategoryService, public authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.categorySerivce.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  logout(){
   this.authService.logout();
   this.router.navigate([""]);
  }
}
