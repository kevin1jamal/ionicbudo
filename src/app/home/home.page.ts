import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles;
  constructor(private service : ApiService) {}

  ionViewDidEnter(){

    this.service.getact().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
