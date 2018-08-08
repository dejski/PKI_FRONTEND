import { UzytkownikBranzowyFull } from './../models/uzytkownikBranzowyFull'
import { Component, OnInit } from '@angular/core'

import { UzytkownikBranzowy } from '../models/uzytkownikBranzowy'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  selectedUser: UzytkownikBranzowy

  users: UzytkownikBranzowy[] = [
    {
      nazwisko: 'Kowalski',
      pesel: '12345679811',
      login: 'asdqwezxcasd',
    },
    {
      nazwisko: 'Nowak',
      pesel: '12345679812',
      login: 'asdqwezxcasd',
    },
    {
      nazwisko: 'Wydźga',
      pesel: '12345679813',
      login: 'asdqwezxcasd',
    },
  ]
  constructor() {}

  ngOnInit() {}

  onSelect(user: UzytkownikBranzowy): void {
    this.selectedUser = user
    // console.log(USERS[0])
  }
}
