import { UzytkownikBranzowy } from './../models/uzytkownikBranzowy'
import { Component, OnInit, Input } from '@angular/core'
import { UzytkownikBranzowyFull } from '../models/uzytkownikBranzowyFull'
import { USERS } from './../../services/usersUB-mock'

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  @Input()
  user: UzytkownikBranzowy
  userFull: UzytkownikBranzowyFull

  constructor() {}

  ngOnInit() {
    this.userFull = USERS[0]
  }
}
