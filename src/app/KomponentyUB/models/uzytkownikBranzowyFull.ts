import { Adres } from './adres'
import { CertificateDto } from './certificateDto'
import { JednostkaOrganizacyjna } from './jednostkaOrganizacyjna'
import { Rola } from './rola'

export interface UzytkownikBranzowyFull {
  distinquishedName: string
  imie: string
  nazwisko: string
  nazwa: string
  opis: string
  status: string
  typ: string
  pesel: string
  nip: string
  adres: Adres
  organizacja: JednostkaOrganizacyjna
  uprawnienie: Rola[]
  certyfikat: CertificateDto[]
  login: string
}
