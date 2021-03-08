import { Component, OnInit } from '@angular/core';
//githubapi
import { ServapiService } from "../servapi.service";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  profile: any[];
  constructor(private appService: ServapiService) {
    this.profile = [],
      this.appService.getData().subscribe(data => {
        console.log(data)
        this.profile = data
      })
   }

  ngOnInit(): void {
  }

}


