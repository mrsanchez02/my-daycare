# SPEC 02 — Listado y perfil visual de niños

> **Status:** Approved
> **Depends on:** SPEC 01
> **Date:** 2026-07-20
> **Objective:** Agregar las rutas `/kids` y `/kids/[id]` en Next.js para reproducir con datos mock locales las pantallas visuales de listado y perfil de niños, enlazadas con el home existente y reutilizando los componentes compartidos necesarios sin incorporar autenticación, base de datos ni acciones funcionales fuera de la navegación básica.

## Scope

**In:**

- Crear la ruta `app/kids/page.tsx` para reproducir visualmente la pantalla `references/pantallas/ninos.dc.html`.
- Crear la ruta dinámica `app/kids/[id]/page.tsx` para reproducir visualmente la pantalla `references/pantallas/perfil-nino.dc.html`.
- Crear un archivo `data/mock-kids.ts` con los datos mock tipados necesarios para el listado y el detalle de niños.
- Definir para cada niño al menos un `slug` único y legible separado del nombre visible para soportar la navegación dinámica.
- Conectar el home existente con la nueva ruta `/kids` mediante navegación real.
- Hacer que la navegación lateral compartida funcione con enlaces reales y estado activo correcto al menos en `/` y `/kids`, sin duplicar una segunda sidebar.
- Hacer que cada tarjeta de niño en `/kids` navegue al perfil correspondiente en `/kids/[id]`.
- Implementar el enlace “Volver a niños” desde el perfil hacia `/kids`.
- Implementar búsqueda local sobre los datos mock del listado de niños.
- Mostrar un estado vacío con mensaje simple cuando la búsqueda no tenga coincidencias.
- Resolver un `id` inexistente en la ruta dinámica con `notFound()`.
- Mantener una fidelidad visual alta en escritorio respecto a las referencias dadas y una adaptación razonable en móvil, igual que en SPEC 01.
- Reutilizar y ajustar componentes existentes cuando convenga para mantener el flujo y evitar duplicación innecesaria.

**Out of scope (for future specs):**

- Implementar autenticación, sesión o control de acceso.
- Persistir niños, perfiles, búsqueda o cualquier otro dato entre sesiones.
- Conectar las pantallas a base de datos, API, Server Actions o backend.
- Hacer funcionales las acciones secundarias del perfil como `Editar`, `Resumen del día` o `Vincular otro padre`.
- Crear rutas nuevas para esas acciones secundarias.
- Incorporar formularios reales de alta, edición o vinculación de padres.
- Implementar filtros avanzados, ordenamiento o paginación del listado de niños.
- Resolver generación automática de slugs a partir del nombre visible; en esta spec los slugs viven definidos explícitamente en el mock.
- Extender navegación funcional completa a todas las entradas laterales como `Avisos` o `Mi cuenta` si esas rutas todavía no existen.

## Data model

```ts
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
```

Convenciones:

- `data/mock-kids.ts` contiene todo el contenido mock necesario para `/kids` y `/kids/[id]`.
- El segmento dinámico usa `slug` como valor real de la ruta aunque el archivo sea `app/kids/[id]/page.tsx`.
- `id` y `slug` son campos distintos: `id` sirve como identificador interno mock y `slug` como identificador legible de navegación.
- Los nombres internos del código se escriben en inglés.
- El texto visible para el usuario y el contenido mock pueden permanecer en español.
- Los estilos derivados de `avatarTone`, `alertTone` y `status` se resuelven en los componentes, no dentro del mock.
- La búsqueda filtra localmente sobre `name` y no persiste estado entre sesiones.

## Implementation plan

1. Crear `data/mock-kids.ts` con tipos y contenido mock centralizado para el listado y los perfiles de niños, incluyendo `slug` único por registro. Verificación manual: ambas rutas pueden consumir los datos sin duplicar objetos inline.
2. Ajustar la navegación compartida del layout lateral para soportar `href` reales y estado activo reutilizable entre el home y la nueva sección de niños. Verificación manual: desde `/` se puede navegar a `/kids` y en cada pantalla el item activo correcto aparece destacado sin duplicar la sidebar.
3. Crear la ruta `app/kids/page.tsx` ensamblando la pantalla de listado con componentes reutilizados y nuevas piezas mínimas para encabezado, buscador, grid y tarjetas de niños. Verificación manual: `/kids` reproduce la referencia visual, muestra todos los niños mock y cada tarjeta enlaza a su perfil.
4. Incorporar búsqueda local en `/kids` sobre los datos mock y mostrar un estado vacío simple cuando no haya coincidencias. Verificación manual: al escribir un término coincidente la lista se reduce, y al escribir uno inexistente aparece el mensaje vacío sin errores.
5. Crear la ruta dinámica `app/kids/[id]/page.tsx` para renderizar el perfil visual resolviendo el registro por `slug` y usando `notFound()` cuando no exista. Verificación manual: `/kids/mateo-fernandez` carga un perfil completo y un slug inexistente muestra la página 404 de Next.js.
6. Completar los ajustes visuales y responsive finales para que `/kids` y `/kids/[id]` mantengan alta fidelidad en escritorio y adaptación razonable en móvil, sin ampliar el alcance funcional de botones secundarios. Verificación manual: `npm run lint`, `npx tsc --noEmit` y `npm run build` pasan, y el flujo `/` → `/kids` → `/kids/[id]` → `/kids` funciona con la navegación acordada.

## Acceptance criteria

- [ ] La ruta `/` mantiene el home existente y ahora permite navegar realmente a `/kids`.
- [ ] La ruta `/kids` renderiza una versión visual en Next.js inspirada en `references/pantallas/ninos.dc.html`.
- [ ] La ruta `/kids/[id]` renderiza una versión visual en Next.js inspirada en `references/pantallas/perfil-nino.dc.html`.
- [ ] La navegación lateral reutiliza el componente compartido existente y muestra el estado activo correcto al menos en `/` y `/kids`.
- [ ] El contenido mock de niños vive en `data/mock-kids.ts` y no queda duplicado inline en múltiples componentes o rutas.
- [ ] Cada niño mock tiene un `slug` único y legible separado del nombre visible.
- [ ] Cada tarjeta de `/kids` navega al perfil correcto usando su `slug`.
- [ ] El enlace “Volver a niños” desde `/kids/[id]` navega a `/kids`.
- [ ] La búsqueda en `/kids` filtra localmente por nombre sobre los datos mock.
- [ ] Cuando una búsqueda no encuentra coincidencias, la pantalla muestra una lista vacía con un mensaje simple y sin errores de render.
- [ ] Si se accede a un `slug` inexistente en `/kids/[id]`, la ruta responde con `notFound()`.
- [ ] Las acciones secundarias del perfil como `Editar`, `Resumen del día` y `Vincular otro padre` se muestran solo como elementos visuales y no abren nuevas rutas funcionales dentro de esta spec.
- [ ] En escritorio, `/kids` y `/kids/[id]` conservan una fidelidad visual alta respecto a las referencias provistas.
- [ ] En móvil, `/kids` y `/kids/[id]` presentan una adaptación usable sin desbordes ni solapamientos graves.
- [ ] `npm run lint` finaliza sin errores.
- [ ] `npx tsc --noEmit` finaliza sin errores.
- [ ] `npm run build` finaliza sin errores.

## Decisions

- **Yes:** crear las rutas `app/kids/page.tsx` y `app/kids/[id]/page.tsx`. Responden directamente a las dos pantallas solicitadas.
- **No:** mantener la navegación de `Niños` como acción solo visual. Se descartó porque el flujo pedido requiere enlace real con el home actual.
- **Yes:** reutilizar la sidebar existente y ajustarla para enlaces reales y estado activo compartido. Evita duplicación y mantiene coherencia visual entre secciones.
- **No:** crear una segunda sidebar específica para `/kids`. Se descartó para no repetir estructura ya implementada en SPEC 01.
- **Yes:** centralizar el dominio de niños en `data/mock-kids.ts`. Separa claramente los mocks del feed respecto a los mocks de listado y perfil de niños.
- **No:** extender `data/mock-feed.ts` con la información de niños. Se descartó para no mezclar dominios distintos en un mismo archivo.
- **Yes:** usar perfiles distintos por registro mock. Justifica la ruta dinámica y hace verificable que cada tarjeta abra su detalle correcto.
- **No:** reutilizar una sola ficha visual para todos los niños sin diferenciar datos. Se descartó porque debilita el objetivo de la navegación dinámica.
- **Yes:** definir un campo `slug` explícito, único y legible dentro del mock. Permite rutas estables sin depender del nombre visible.
- **No:** derivar automáticamente el slug desde `name`. Se descartó porque puede romper unicidad o estabilidad si en el futuro aparecen nombres repetidos o cambian los apellidos visibles.
- **Yes:** separar `name` y `slug` en el modelo. Mantiene claro qué valor es UI y cuál es routing.
- **No:** usar solo `name` como identificador de ruta. Se descartó por fragilidad y ambigüedad futura.
- **Yes:** resolver slugs inexistentes con `notFound()`. Sigue el comportamiento esperado de una ruta dinámica en Next.js.
- **No:** redirigir slugs inexistentes a `/kids`. Se descartó porque oculta el error de ruta y dificulta distinguir un detalle válido de uno inexistente.
- **Yes:** implementar búsqueda local por nombre con estado vacío explícito. Agrega una interacción simple y verificable sin abrir alcance de persistencia o backend.
- **No:** dejar el buscador como elemento puramente decorativo. Se descartó porque el diseño ya lo expone como control principal del listado.
- **Yes:** dejar `Editar`, `Resumen del día` y `Vincular otro padre` como elementos visuales no funcionales. Mantiene fidelidad visual sin abrir más rutas o lógica.
- **No:** volver funcionales esas acciones secundarias en esta spec. Se descartó por alcance y porque requerirían nuevas pantallas o reglas de negocio.
- **Yes:** priorizar alta fidelidad visual en escritorio y adaptación razonable en móvil. Sigue la misma línea acordada en SPEC 01.
- **No:** exigir réplica pixel-perfect también en móvil. Se descartó porque la referencia principal está pensada para escritorio y el objetivo sigue siendo una adaptación usable.

## Risks

| Risk | Mitigation |
| --- | --- |
| La sidebar compartida puede romper el comportamiento visual actual del home al pasar de acciones visuales a enlaces reales. | Limitar el ajuste a soporte de `href` y estado activo, validando que `/` conserve su layout y estilo después del cambio. |
| La fidelidad visual puede alejarse de las referencias al traducir estilos inline a componentes reutilizados y Tailwind. | Comparar directamente contra `references/pantallas/ninos.dc.html` y `references/pantallas/perfil-nino.dc.html` durante la implementación, priorizando jerarquía visual, espaciado, tipografía y estados clave. |
| La adaptación móvil puede degradarse si se intenta conservar demasiado la estructura desktop del listado o del perfil. | Diseñar variantes móviles razonables para grid, sidebar y bloques laterales, en vez de escalar linealmente el layout de escritorio. |
| El uso de `slug` explícito en mocks puede desalinearse con el nombre visible si se edita uno y no el otro. | Mantener `slug` como dato estable de routing y tratar `name` como texto visible independiente, documentado en el modelo mock. |
| El buscador puede introducir estados inconsistentes si el listado vacío no se diseña desde el inicio. | Definir desde la spec un mensaje vacío explícito y verificarlo manualmente como parte del flujo de `/kids`. |

## What is **not** in this spec

- Autenticación o control de acceso.
- Persistencia de datos entre sesiones.
- Integración con base de datos, API o backend.
- Formularios reales para alta o edición de niños.
- Flujo funcional para `Editar`, `Resumen del día` o `Vincular otro padre`.
- Nuevas rutas para acciones secundarias del perfil.
- Navegación funcional completa para `Avisos` o `Mi cuenta`.
- Generación automática de slugs desde nombres visibles.
- Filtros avanzados, ordenamiento o paginación del listado.

Cada uno de esos puntos, si entra después, debe ir en su propia spec.
