export interface CertificateDto {
  idStrCAConfig: number
  serialNumber: string
  distinquishedName: string
  notBefore: string
  notAfter: string
  revokedEffectiveWhen: string
  revokedReason: number
  lastChange: string
  idRawCerticate: number
}
