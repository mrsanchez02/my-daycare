# SPEC 01 — Home visual inspirado en feed de OpenDayCare

> **Status:** Implementado
> **Depends on:** jose Sanchez
> **Date:** 2026-07-20
> **Objective:** Reemplazar el home actual en `/` por una versión visual en Next.js y Tailwind que replique lo más fielmente posible la pantalla `references/pantallas/feed.dc.html`, usando datos mock locales y una UI componetizada dentro de `components/` con subcarpetas explícitas por dominio y piezas compartidas, sin implementar autenticación, base de datos ni navegación funcional.

## Scope

**In:**

- Reemplazar el contenido actual de `app/page.tsx` por el home visual del feed.
- Ajustar `app/layout.tsx` para cargar `Fredoka` y `Nunito` y actualizar el `metadata` básico del sitio.
- Ajustar `app/globals.css` solo en lo necesario para soportar la nueva identidad visual global.
- Crear un archivo `data/mock-feed.ts` con todo el contenido ficticio necesario para renderizar el home.
- Crear una estructura de componentes dentro de `components/` con subcarpetas semánticas, incluyendo piezas compartidas en `components/shared/` y piezas del home en `components/home/`.
- Implementar una versión responsive donde la sidebar de escritorio se compacte u oculte en móvil.
- Renderizar acciones y enlaces como elementos visuales sin navegación funcional real.
- Mantener el bloque de foto como placeholder visual sin imágenes reales ni subida de archivos.

**Out of scope (for future specs):**

- Crear rutas adicionales para `ninos`, `avisos`, `mi-cuenta`, detalle de publicación o creación de publicación.
- Implementar autenticación, sesión de usuario o cierre de sesión real.
- Persistir datos en base de datos, localStorage o cualquier almacenamiento entre sesiones.
- Conectar el home a APIs, Server Actions o fuentes de datos externas.
- Agregar interacciones funcionales como likes, comentarios, edición o publicación real.
- Incorporar imágenes reales en `public/` o URLs remotas para las tarjetas del feed.

## Data model

```ts
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
```

Convenciones:

- `data/mock-feed.ts` contiene todo el contenido mock del home en una sola exportación.
- Tipos, variables, funciones, enums, props, claves internas y nombres de componentes se escriben en ingles.
- El texto visible para el usuario y el contenido mock pueden permanecer en espanol.
- Los colores visuales derivados de `tag` y `authorTone` se resuelven en los componentes, no dentro del mock.
- Ningún dato del mock implica navegación funcional ni estado persistido.

## Implementation plan

1. Actualizar `app/layout.tsx` para cargar `Fredoka` y `Nunito`, definir un `metadata` acorde al proyecto y dejar intacta la base del App Router. Verificación manual: la app sigue levantando y las fuentes cargan sin errores.
2. Crear `data/mock-feed.ts` con la estructura tipada del home y contenido ficticio centralizado. Verificación manual: `app/page.tsx` puede importar el mock sin duplicar strings inline.
3. Crear la base de `components/shared/` y `components/home/` con componentes pequeños y semánticos para layout, navegación lateral, saludo, compositor visual y tarjetas del feed. Verificación manual: cada bloque del home se renderiza desde componentes separados, no desde un único JSX grande.
4. Reescribir `app/page.tsx` para ensamblar el home usando los componentes y el mock local. Verificación manual: `/` muestra el contenido completo del feed con la jerarquía visual esperada.
5. Ajustar `app/globals.css` y clases Tailwind para acercar paleta, espaciado, bordes, sombras y comportamiento responsive al HTML de referencia. Verificación manual: en escritorio aparece la sidebar completa y en móvil se muestra una versión compacta sin desbordes ni solapamientos.
6. Revisar detalles visuales finales del home sin ampliar alcance funcional. Verificación manual: `npm run lint`, `npx tsc --noEmit` y `npm run build` pasan, y la pantalla principal conserva el look objetivo con acciones solo visuales.

## Acceptance criteria

- [x] La ruta `/` deja de mostrar el contenido por defecto de Next.js y pasa a renderizar un home inspirado en `references/pantallas/feed.dc.html`.
- [x] La UI del home está dividida en componentes dentro de `components/` con subcarpetas semánticas, incluyendo al menos `components/shared/` y `components/home/`.
- [x] El contenido ficticio del home vive en `data/mock-feed.ts` y no está duplicado inline en múltiples componentes.
- [x] `app/layout.tsx` carga `Fredoka` y `Nunito` para aproximar la tipografía del diseño de referencia.
- [x] En escritorio el layout muestra sidebar lateral, cabecera de saludo, compositor visual y lista de publicaciones con estilo coherente al mock.
- [x] En móvil la sidebar no se mantiene fija ocupando el lateral completo y se presenta en una variante compacta usable.
- [x] Los botones, enlaces y acciones visibles del home no intentan navegar a rutas inexistentes ni ejecutar lógica de negocio.
- [x] La tarjeta con foto se representa como placeholder visual sin depender de imágenes reales.
- [x] `npm run lint` finaliza sin errores.
- [x] `npx tsc --noEmit` finaliza sin errores.
- [x] `npm run build` finaliza sin errores.

## Decisions

- **Yes:** limitar esta spec solo a la ruta `/`. Mantiene el alcance centrado en el home visual solicitado.
- **No:** incluir rutas secundarias del mock. `ninos`, `avisos`, `mi-cuenta` y otras pantallas quedan para specs futuras.
- **Yes:** implementar la UI con Tailwind y valores visuales lo más cercanos posibles al HTML de referencia. Prioriza fidelidad sin salir del stack del proyecto.
- **No:** buscar una réplica pixel-perfect estricta. Se permiten pequeños ajustes para que el resultado responda bien en el App Router actual.
- **Yes:** cargar `Fredoka` y `Nunito` en `app/layout.tsx`. La tipografía es parte importante del look objetivo.
- **No:** mantener solo Geist para esta pantalla. Se descartó porque alejaba demasiado el resultado visual del diseño base.
- **Yes:** centralizar el contenido mock en `data/mock-feed.ts`. Evita strings dispersos y facilita futuros cambios de copy.
- **No:** dejar el mock dentro de `app/page.tsx`. Se descartó para sostener una composición limpia.
- **Yes:** mantener toda la nomenclatura interna del codigo en ingles, incluyendo tipos como `FeedTag` y sus valores. Sigue la convencion de clean code del proyecto.
- **No:** usar etiquetas internas en espanol como `"logro"`, `"actividad"` o `"anuncio"`. Se descartó para no mezclar idioma de dominio visible con nombres tecnicos del codigo.
- **Yes:** organizar la UI en `components/shared/` y `components/home/`. La estructura debe comunicar qué piezas son compartidas y cuáles pertenecen al home.
- **No:** resolver todo el home en un único archivo JSX. Se descartó por mantenimiento y legibilidad.
- **Yes:** tratar acciones y enlaces como elementos solo visuales. Evita abrir alcance funcional fuera de esta spec.
- **No:** crear navegación placeholder hacia rutas inexistentes. Se descartó para no introducir enlaces rotos.
- **Yes:** usar placeholder visual para la tarjeta de foto. Cumple el objetivo visual sin sumar assets ni integración de imágenes.

## Risks

| Risk | Mitigation |
| --- | --- |
| La fidelidad visual se aleja del HTML de referencia al traducir estilos inline a Tailwind. | Revisar espaciado, radios, sombras y jerarquía tipográfica directamente contra `references/pantallas/feed.dc.html` durante la implementación. |
| La versión móvil puede degradarse si se intenta conservar la sidebar de escritorio casi intacta. | Diseñar una variante compacta específica para móvil en vez de escalar linealmente el layout desktop. |
| La composición en demasiados componentes puede fragmentar estilos simples. | Mantener componentes pequeños pero pragmáticos, agrupados por dominio y sin abstracciones compartidas prematuras. |
| Las nuevas fuentes pueden alterar estilos globales fuera del home. | Limitar el ajuste global a lo necesario y validar visualmente el resultado del layout principal después del cambio. |

## What is **not** in this spec

- Rutas internas adicionales del producto.
- Autenticación o sesiones.
- Persistencia de datos.
- Integraciones con backend.
- Interacciones reales de publicación, edición, likes o comentarios.
- Imágenes reales o carga de archivos.

Cada uno de esos puntos, si entra después, debe ir en su propia spec.
