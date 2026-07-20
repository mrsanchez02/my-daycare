export type FeedTag = "milestone" | "activity" | "announcement";

export type FeedPost = {
  id: string;
  authorName: string;
  authorInitial: string;
  authorTone: "mint" | "sky" | "indigo";
  publishedAt: string;
  publishedBy: string;
  audienceLabel: string;
  tag: FeedTag;
  body: string;
  likes: number;
  comments: number;
  hasPhotoPlaceholder?: boolean;
  photoLabel?: string;
  canEdit: boolean;
};

export type FeedHomeMock = {
  schoolLabel: string;
  classroomLabel: string;
  greeting: string;
  summary: string;
  teacher: {
    name: string;
    roleLabel: string;
    initial: string;
  };
  navItems: Array<{
    id: string;
    label: string;
    isActive: boolean;
  }>;
  posts: FeedPost[];
};

export const feedHomeMock: FeedHomeMock = {
  schoolLabel: "Guardería",
  classroomLabel: "Sala Soles",
  greeting: "Buenas, Caro",
  summary: "12 niños · martes 17 jun",
  teacher: {
    name: "Caro Giménez",
    roleLabel: "Maestra · Soles",
    initial: "C",
  },
  navItems: [
    {
      id: "feed",
      label: "Feed",
      isActive: true,
    },
    {
      id: "children",
      label: "Niños",
      isActive: false,
    },
    {
      id: "announcements",
      label: "Avisos",
      isActive: false,
    },
    {
      id: "account",
      label: "Mi cuenta",
      isActive: false,
    },
  ],
  posts: [
    {
      id: "mateo-milestone-potty",
      authorName: "Mateo",
      authorInitial: "M",
      authorTone: "sky",
      publishedAt: "14:20",
      publishedBy: "publicado por vos",
      audienceLabel: "Para: familia de Mateo",
      tag: "milestone",
      body: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
      likes: 3,
      comments: 1,
      canEdit: true,
    },
    {
      id: "mateo-activity-painting",
      authorName: "Mateo",
      authorInitial: "M",
      authorTone: "sky",
      publishedAt: "09:40",
      publishedBy: "publicado por vos",
      audienceLabel: "Para: familia de Mateo",
      tag: "activity",
      body: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
      likes: 5,
      comments: 2,
      hasPhotoPlaceholder: true,
      photoLabel: "Foto · pintando con témperas",
      canEdit: true,
    },
    {
      id: "general-announcement-park",
      authorName: "Anuncio general",
      authorInitial: "A",
      authorTone: "indigo",
      publishedAt: "07:50",
      publishedBy: "publicado por vos",
      audienceLabel: "Para: toda la sala",
      tag: "announcement",
      body: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
      likes: 8,
      comments: 0,
      canEdit: true,
    },
  ],
};
