import { UzytkownikBranzowyFull } from './../KomponentyUB/models/uzytkownikBranzowyFull'

export const USERS: UzytkownikBranzowyFull[] = [
  {
    distinquishedName: 'distinquishedName',
    imie: 'Jan',
    nazwisko: 'Kowalski',
    nazwa: 'Nazwa',
    opis: 'OPis opis',
    status: 'AKTYWNY',
    typ: 'NACZELNIK',
    pesel: '72042784665',
    nip: '524-452-56-42',
    adres: {
      ulica: 'Oboźna',
      budynek: '56',
      lokal: '21',
      miejscowosc: 'Lublin',
      kod: '20-601',
      email: 'user@example.com',
      tel: '81 123 45 66',
    },
    organizacja: {
      name: 'ORganizacja',
      distinquishedName: 'distinquishedName',
      kategoria: 'KANCELARIA_KOMORNICZA',
      adres: {
        ulica: 'Zana',
        budynek: '32B',
        lokal: '301',
        miejscowosc: 'Lublin',
        kod: '20-576',
        email: 'user@example.com',
        tel: '503 503 145',
      },
    },
    uprawnienie: [
      {
        commonName: 'commonName',
        distinquishedName: 'distinquishedName',
        description: 'description',
      },
    ],
    certyfikat: [
      {
        idStrCAConfig: 0,
        serialNumber: '123456789',
        distinquishedName: 'distinquishedName',
        notBefore: '2018-08-08T19:55:18.296Z',
        notAfter: '2018-08-08T19:55:18.296Z',
        revokedEffectiveWhen: '2018-08-08T19:55:18.296Z',
        revokedReason: 0,
        lastChange: '2018-08-08T19:55:18.296Z',
        idRawCerticate: 0,
      },
    ],
    login: 'loginasdwdc',
  },
]
