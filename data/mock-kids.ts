export type SidebarNavItem = {
  id: "feed" | "children" | "announcements" | "account";
  label: string;
  href?: string;
};

export type LinkedParent = {
  id: string;
  name: string;
  relationLabel: string;
  status: "active" | "pending";
  initial: string;
  tone: "sky" | "indigo" | "mint" | "amber";
};

export type KidProfile = {
  id: string;
  slug: string;
  name: string;
  initial: string;
  ageLabel: string;
  classroomLabel: string;
  birthDateLabel: string;
  joinedAtLabel: string;
  linkedParentsCountLabel: string;
  notesLabel?: string;
  alertTag?: string;
  alertTone?: "danger" | "warning" | "info";
  avatarTone: "sky" | "pink" | "mint" | "amber" | "violet";
  linkedParents: LinkedParent[];
};

export type KidsPageMock = {
  schoolLabel: string;
  classroomLabel: string;
  teacher: {
    name: string;
    roleLabel: string;
    initial: string;
  };
  navItems: SidebarNavItem[];
  sectionLabel: string;
  searchPlaceholder: string;
  addKidLabel: string;
  kids: KidProfile[];
};

export const kidsPageMock: KidsPageMock = {
  schoolLabel: "Guardería",
  classroomLabel: "Sala Soles",
  teacher: {
    name: "Caro Giménez",
    roleLabel: "Maestra · Soles",
    initial: "C",
  },
  navItems: [
    {
      id: "feed",
      label: "Feed",
      href: "/",
    },
    {
      id: "children",
      label: "Niños",
      href: "/kids",
    },
    {
      id: "announcements",
      label: "Avisos",
    },
    {
      id: "account",
      label: "Mi cuenta",
    },
  ],
  sectionLabel: "Gestión",
  searchPlaceholder: "Buscar niño…",
  addKidLabel: "Agregar niño",
  kids: [
    {
      id: "kid-01",
      slug: "mateo-fernandez",
      name: "Mateo Fernández",
      initial: "M",
      ageLabel: "3 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "12 mar 2022",
      joinedAtLabel: "feb 2025",
      linkedParentsCountLabel: "2 padres vinculados",
      notesLabel: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
      alertTag: "MANÍ",
      alertTone: "danger",
      avatarTone: "sky",
      linkedParents: [
        {
          id: "parent-01",
          name: "Lucía Fernández",
          relationLabel: "Mamá",
          status: "active",
          initial: "L",
          tone: "indigo",
        },
        {
          id: "parent-02",
          name: "Diego Fernández",
          relationLabel: "Papá",
          status: "pending",
          initial: "D",
          tone: "sky",
        },
      ],
    },
    {
      id: "kid-02",
      slug: "sofia-mendez",
      name: "Sofía Méndez",
      initial: "S",
      ageLabel: "2 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "04 sep 2022",
      joinedAtLabel: "mar 2025",
      linkedParentsCountLabel: "1 padre vinculado",
      avatarTone: "pink",
      linkedParents: [
        {
          id: "parent-03",
          name: "Ana Méndez",
          relationLabel: "Mamá",
          status: "active",
          initial: "A",
          tone: "mint",
        },
      ],
    },
    {
      id: "kid-03",
      slug: "benjamin-ruiz",
      name: "Benjamín Ruiz",
      initial: "B",
      ageLabel: "3 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "20 ene 2022",
      joinedAtLabel: "ene 2025",
      linkedParentsCountLabel: "2 padres vinculados",
      avatarTone: "mint",
      linkedParents: [
        {
          id: "parent-04",
          name: "Carla Ruiz",
          relationLabel: "Mamá",
          status: "active",
          initial: "C",
          tone: "amber",
        },
        {
          id: "parent-05",
          name: "Marcos Ruiz",
          relationLabel: "Papá",
          status: "active",
          initial: "M",
          tone: "sky",
        },
      ],
    },
    {
      id: "kid-04",
      slug: "valentina-soto",
      name: "Valentina Soto",
      initial: "V",
      ageLabel: "2 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "18 nov 2022",
      joinedAtLabel: "abr 2025",
      linkedParentsCountLabel: "sin padres vinculados",
      alertTag: "VINCULAR",
      alertTone: "info",
      avatarTone: "amber",
      linkedParents: [],
    },
    {
      id: "kid-05",
      slug: "tomas-diaz",
      name: "Tomás Díaz",
      initial: "T",
      ageLabel: "3 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "07 jul 2022",
      joinedAtLabel: "feb 2025",
      linkedParentsCountLabel: "1 padre vinculado",
      notesLabel: "Intolerancia a la lactosa. Enviar colación alternativa cuando haya lácteos.",
      alertTag: "LACTOSA",
      alertTone: "warning",
      avatarTone: "violet",
      linkedParents: [
        {
          id: "parent-06",
          name: "Julia Díaz",
          relationLabel: "Mamá",
          status: "active",
          initial: "J",
          tone: "mint",
        },
      ],
    },
    {
      id: "kid-06",
      slug: "emma-castro",
      name: "Emma Castro",
      initial: "E",
      ageLabel: "2 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "29 dic 2022",
      joinedAtLabel: "may 2025",
      linkedParentsCountLabel: "1 padre vinculado",
      avatarTone: "pink",
      linkedParents: [
        {
          id: "parent-07",
          name: "Paula Castro",
          relationLabel: "Mamá",
          status: "active",
          initial: "P",
          tone: "indigo",
        },
      ],
    },
    {
      id: "kid-07",
      slug: "lucas-romero",
      name: "Lucas Romero",
      initial: "L",
      ageLabel: "3 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "15 abr 2022",
      joinedAtLabel: "ene 2025",
      linkedParentsCountLabel: "1 padre vinculado",
      avatarTone: "sky",
      linkedParents: [
        {
          id: "parent-08",
          name: "Nicolás Romero",
          relationLabel: "Papá",
          status: "active",
          initial: "N",
          tone: "sky",
        },
      ],
    },
    {
      id: "kid-08",
      slug: "olivia-vega",
      name: "Olivia Vega",
      initial: "O",
      ageLabel: "2 años",
      classroomLabel: "Sala Soles",
      birthDateLabel: "09 oct 2022",
      joinedAtLabel: "jun 2025",
      linkedParentsCountLabel: "1 padre vinculado",
      avatarTone: "mint",
      linkedParents: [
        {
          id: "parent-09",
          name: "Marina Vega",
          relationLabel: "Mamá",
          status: "active",
          initial: "M",
          tone: "amber",
        },
      ],
    },
  ],
};

export const kidsBySlug = new Map(kidsPageMock.kids.map((kid) => [kid.slug, kid]));

export function getKidBySlug(slug: string) {
  return kidsBySlug.get(slug);
}
