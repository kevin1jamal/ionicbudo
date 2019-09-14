import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/services/actualite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-actualite',
  templateUrl: './liste-actualite.page.html',
  styleUrls: ['./liste-actualite.page.scss'],
})
export class ListeActualitePage implements OnInit {
  articles;
  constructor(private service : ActualiteService,private router :Router) { }

  ngOnInit() {
    this.service.getact().subscribe(data =>{
  console.log("je charge les donners")
      this.articles = data;
      console.log(this.articles);
    });
  }
  voir(id :number){

    console.log(id);
    this.router.navigate(['/detail-actualite/'+id]);
  }

}
