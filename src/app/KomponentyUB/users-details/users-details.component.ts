import { Component, Input, OnInit } from '@angular/core'

import { PkiSvcAdregistryService } from '../../services/pki-svc-adregistry.service'
import { UzytkownikAD } from '../models/uzytkownikAD'
import { UzytkownikBranzowyFull } from '../models/uzytkownikBranzowyFull'
import { UzytkownikBranzowy } from './../models/uzytkownikBranzowy'

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  @Input()
  user: UzytkownikBranzowy
  userFull: UzytkownikAD
  userFull2: UzytkownikBranzowyFull

  constructor(private adRegistryService: PkiSvcAdregistryService) {}

  ngOnInit() {
    // this.loadUserAD(this.user.login)
    // this.loadUserBranzowyFull(this.user.login)
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    // this.loadUserAD(this.user.login)
    this.loadUserBranzowyFull(this.user.login)
  }

  loadUserAD(nazwa): void {
    this.adRegistryService.getUser(nazwa).subscribe(userFull => {
      this.userFull = userFull
    })
  }

  loadUserBranzowyFull(nazwa: string) {
    this.adRegistryService.getUserFull(nazwa).subscribe(userFull => {
      this.userFull2 = userFull
    })
  }
}
