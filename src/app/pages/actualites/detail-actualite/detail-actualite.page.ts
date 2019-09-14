import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/services/actualite.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-actualite',
  templateUrl: './detail-actualite.page.html',
  styleUrls: ['./detail-actualite.page.scss'],
})
export class DetailActualitePage implements OnInit {
  article;
  id;
  constructor(private route: ActivatedRoute,private service : ActualiteService,private location :Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getCoiffureById(this.id).subscribe(data =>{
      this.article = data ;
    })
  }

}
