export interface CertData {
  id: string
  athlete: string
  rank: string
  beltColor: string
  issuedBy: string
  academy: string
  date: string
  discipline: string
  country: string
}

export const mockCerts: Record<string, CertData> = {
  'BP-2024-BLK-00001': {
    id: 'BP-2024-BLK-00001',
    athlete: 'Carlos Machado',
    rank: 'Black Belt — 4th Degree',
    beltColor: '#1a1a1a',
    issuedBy: 'Prof. Renzo Gracie',
    academy: 'Gracie Humaitá Brasil',
    date: 'March 10, 2019',
    discipline: 'Brazilian Jiu-Jitsu',
    country: 'Brazil',
  },
  'BP-2024-BRW-00847': {
    id: 'BP-2024-BRW-00847',
    athlete: 'João Silva',
    rank: 'Brown Belt — 1st Degree',
    beltColor: '#4a2800',
    issuedBy: 'Prof. Ricardo Santos',
    academy: 'Alliance BJJ Lisboa',
    date: 'February 14, 2024',
    discipline: 'Brazilian Jiu-Jitsu',
    country: 'Portugal',
  },
  'BP-2024-PUR-01203': {
    id: 'BP-2024-PUR-01203',
    athlete: 'Ana Costa',
    rank: 'Purple Belt — 2nd Degree',
    beltColor: '#4b0082',
    issuedBy: 'Prof. Marcelo Garcia',
    academy: 'MG in Action NYC',
    date: 'November 5, 2023',
    discipline: 'Brazilian Jiu-Jitsu',
    country: 'United States',
  },
}

export const FOUNDING_SLOTS_TOTAL = 50
export const FOUNDING_SLOTS_LEFT = 37
