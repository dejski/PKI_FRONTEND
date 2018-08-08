import { Component, OnInit } from '@angular/core'

import { UzytkownikBranzowy } from '../models/uzytkownikBranzowy'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
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
}
