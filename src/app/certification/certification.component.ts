import { Component, OnInit } from '@angular/core';

//Models
import { Certyficate } from './../models/certyficate';

//Services
import { AreaService } from './../service/area.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  certyficate: Certyficate[] = [];
  editItem: Certyficate = {id:0, name:'', active:false};
  areas: any[] = [];
  areaService: AreaService

  constructor(_areaService: AreaService) {
    this.areaService = _areaService;
  }

  ngOnInit() {
    this.certyficate.push({id:1, name:'Krzysztof Bogucki', active: false });
    this.certyficate.push({id:2, name:'Jan Kowalski', active: true });
    this.certyficate.push({id:3, name:'Adam Nowak', active: false });
    this.certyficate.push({id:4, name:'Piotr Adamczyk', active: true });
    this.certyficate.push({id:5, name:'Jakub Inny', active: false });
    console.log(this.certyficate);

    this.areaService.getAreas((res)=>{  
      this.areas = res.Data;
      
      console.log(res.Data);
    })
  }

  onEdit(item){
    this.editItem = item;
  }


}
