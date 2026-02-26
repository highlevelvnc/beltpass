/**
 * BeltPass Image Registry
 * All images from Unsplash (free, commercial use, no attribution required)
 * and Pexels (free, commercial use).
 *
 * Format: ?w=WIDTH&q=80&fit=crop&crop=faces,entropy for smart cropping
 */

const U = 'https://images.unsplash.com/photo'
const P = 'https://images.pexels.com/photos'

export const IMAGES = {
  // ─── HERO ────────────────────────────────────────────────────────────────
  // BJJ women training - dark, cinematic
  heroBg: `${U}-1585421514738-01798e348b17?w=1920&q=80&fit=crop&crop=top`,
  // BJJ action shot alternative
  heroBg2: `${U}-1544717305068-9d5f4f9b2f85?w=1920&q=80&fit=crop`,

  // ─── PROBLEM SECTION CARDS ───────────────────────────────────────────────
  // Lone athlete - fragmentation metaphor
  problemFragmentation: `${U}-1517838277536-f5f99be501cd?w=800&q=80&fit=crop&crop=entropy`,
  // Belt on tatami - fraud risk
  problemFraud: `${U}-1599058945522-3b9c26c69ddb?w=800&q=80&fit=crop`,
  // Athlete traveling/airport - no portability
  problemPortability: `${U}-1436491865332-7a61a109cc05?w=800&q=80&fit=crop`,

  // ─── HOW IT WORKS ────────────────────────────────────────────────────────
  // Academy training room with students
  howAcademy: `${U}-1544717305068-9d5f4f9b2f85?w=900&q=80&fit=crop`,
  // Close up graduation / belt tying
  howGraduation: `${U}-1617040619263-21d6d4f9d27a?w=900&q=80&fit=crop`,
  // Athlete with phone / digital
  howAthlete: `${U}-1571019613454-1cb2f99b2d8b?w=900&q=80&fit=crop`,

  // ─── COUNCIL / MASTERS ───────────────────────────────────────────────────
  // Master 1 - black belt profile
  council1: `${U}-1552058373-f6d60c3823e5?w=300&h=300&q=80&fit=crop&crop=faces`,
  // Master 2 - confident instructor
  council2: `${U}-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&fit=crop&crop=faces`,
  // Master 3 - academy director
  council3: `${U}-1580489944761-15a19d654956?w=300&h=300&q=80&fit=crop&crop=faces`,

  // ─── GALLERY / SOCIAL PROOF ──────────────────────────────────────────────
  // BJJ sparring 1 - horizontal
  gallery1: `${U}-1585421514738-01798e348b17?w=800&q=80&fit=crop`,
  // BJJ training group
  gallery2: `${U}-1544717305068-9d5f4f9b2f85?w=800&q=80&fit=crop`,
  // Belt ceremony / graduation
  gallery3: `${U}-1617040619263-21d6d4f9d27a?w=800&q=80&fit=crop`,
  // Close up BJJ gi
  gallery4: `${U}-1599058945522-3b9c26c69ddb?w=800&q=80&fit=crop`,
  // Athlete portrait
  gallery5: `${U}-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop`,
  // Academy exterior / dojo
  gallery6: `${U}-1517838277536-f5f99be501cd?w=800&q=80&fit=crop`,

  // ─── FOUNDING / CTA SECTION ──────────────────────────────────────────────
  // Academy photo for founding offer
  foundingAcademy: `${U}-1544717305068-9d5f4f9b2f85?w=1200&q=80&fit=crop`,

  // ─── ABOUT PAGE ──────────────────────────────────────────────────────────
  aboutHero: `${U}-1585421514738-01798e348b17?w=1400&q=80&fit=crop&crop=top`,

  // ─── PEXELS EXTRAS (BJJ specific) ───────────────────────────────────────
  // BJJ training Pexels (verified free)
  pexelsBjj1: `${P}/6253305/pexels-photo-6253305.jpeg?w=800&h=600&fit=crop`,
  pexelsBjj2: `${P}/6253300/pexels-photo-6253300.jpeg?w=800&h=600&fit=crop`,
  pexelsBjj3: `${P}/6253302/pexels-photo-6253302.jpeg?w=800&h=600&fit=crop`,
  pexelsBjj4: `${P}/6253316/pexels-photo-6253316.jpeg?w=800&h=600&fit=crop`,
  pexelsBelt: `${P}/4761663/pexels-photo-4761663.jpeg?w=800&h=600&fit=crop`,
  pexelsAcademy: `${P}/5067745/pexels-photo-5067745.jpeg?w=1200&h=700&fit=crop`,
  pexelsMaster: `${P}/4761660/pexels-photo-4761660.jpeg?w=400&h=400&fit=crop`,
  pexelsMaster2: `${P}/5067748/pexels-photo-5067748.jpeg?w=400&h=400&fit=crop`,
  pexelsMaster3: `${P}/4761671/pexels-photo-4761671.jpeg?w=400&h=400&fit=crop`,
  pexelsGi: `${P}/6253308/pexels-photo-6253308.jpeg?w=800&h=500&fit=crop`,
  pexelsGallery1: `${P}/6253314/pexels-photo-6253314.jpeg?w=600&h=400&fit=crop`,
  pexelsGallery2: `${P}/6253298/pexels-photo-6253298.jpeg?w=600&h=400&fit=crop`,
  pexelsGallery3: `${P}/6253319/pexels-photo-6253319.jpeg?w=600&h=400&fit=crop`,
} as const

export type ImageKey = keyof typeof IMAGES
