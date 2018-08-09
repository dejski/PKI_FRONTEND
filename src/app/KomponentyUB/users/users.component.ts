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
      login: 'CN=NOTA200000000000001,OU=NOTA,OU=PDCBDKW,DC=rejestrpd,DC=ms,DC=gov,DC=pl',
    },
    {
      nazwisko: 'Nowak',
      pesel: '12345679812',
      login: 'CN=NOTA200000000000002,OU=NOTA,OU=PDCBDKW,DC=rejestrpd,DC=ms,DC=gov,DC=pl',
    },
    {
      nazwisko: 'Wydźga',
      pesel: '12345679813',
      login: 'CN=NOTA200000000000003,OU=NOTA,OU=PDCBDKW,DC=rejestrpd,DC=ms,DC=gov,DC=pl',
    },
  ]

  constructor() {}

  ngOnInit() {}

  onSelect(user: UzytkownikBranzowy): void {
    this.selectedUser = user
    // console.log(USERS[0])
  }
}
