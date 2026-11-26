export const SectionId = {
  Home: 'home',
  About: 'about',
  WhyMe: 'why-me',
  Projects: 'projects',
  Contact: 'contact',
} as const

export type SectionId = (typeof SectionId)[keyof typeof SectionId]

export const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: SectionId.Home, label: 'Home' },
  { id: SectionId.About, label: 'About me' },
  { id: SectionId.WhyMe, label: 'Why me' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Contact, label: 'Contact' },
]
