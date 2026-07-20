import Link from "next/link";
import { AlertTriangleIcon, ChevronLeftIcon, PlusIcon, SunIcon } from "@/components/shared/icons";
import type { KidProfile } from "@/data/mock-kids";

type KidProfileProps = {
  kid: KidProfile;
};

const avatarToneClassNames: Record<KidProfile["avatarTone"], string> = {
  sky: "bg-[#a9d9e8] text-[#1f7a93]",
  pink: "bg-[#f4b8cc] text-[#c44a7a]",
  mint: "bg-[#b9dec4] text-[#3e8b62]",
  amber: "bg-[#f4dc8e] text-[#9a7b1e]",
  violet: "bg-[#c9b6e8] text-[#7b5fc0]",
};

const linkedParentToneClassNames: Record<KidProfile["linkedParents"][number]["tone"], string> = {
  sky: "bg-[#a9c7e8] text-white",
  indigo: "bg-[#c9b6e8] text-white",
  mint: "bg-[#b9dec4] text-white",
  amber: "bg-[#e6c98b] text-white",
};

const linkedParentStatusClassNames: Record<KidProfile["linkedParents"][number]["status"], string> = {
  active: "bg-[#cfebd8] text-[#3e9b6c]",
  pending: "bg-[#f7e7a6] text-[#9a7b1e]",
};

const linkedParentStatusLabels: Record<KidProfile["linkedParents"][number]["status"], string> = {
  active: "ACTIVA",
  pending: "PENDIENTE",
};

export function KidProfileView({ kid }: KidProfileProps) {
  return (
    <section>
      <Link href="/kids" className="mb-5 inline-flex items-center gap-[7px] text-sm font-bold text-[#94887b]">
        <ChevronLeftIcon className="size-[18px]" />
        Volver a niños
      </Link>

      <div className="flex flex-wrap items-start gap-[26px]">
        <div className="flex min-w-[300px] flex-1 flex-col gap-[18px]">
          <div className="flex flex-wrap items-center gap-[18px]">
            <div
              className={[
                "flex size-[84px] shrink-0 items-center justify-center rounded-full font-[family:var(--font-geist-sans)] text-[34px] font-semibold",
                avatarToneClassNames[kid.avatarTone],
              ].join(" ")}
            >
              {kid.initial}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="font-[family:var(--font-geist-sans)] text-[28px] font-semibold text-[#3f362e]">{kid.name}</h1>
              <p className="mt-[3px] text-[15px] text-[#94887b]">
                {kid.ageLabel} · {kid.classroomLabel}
              </p>
            </div>

            <button
              type="button"
              className="rounded-xl border-[1.5px] border-[#ece0d0] bg-[#fffdf9] px-4 py-[9px] text-sm font-bold text-[#6e6359]"
            >
              Editar
            </button>
          </div>

          {kid.notesLabel ? (
            <div className="flex gap-[14px] rounded-2xl bg-[#fbdad6] px-[18px] py-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#f4a8a0] text-white">
                <AlertTriangleIcon className="size-[22px]" />
              </div>

              <div>
                <div className="mb-0.5 text-[15px] font-extrabold text-[#c5413a]">Alergias y notas</div>
                <div className="text-[14.5px] leading-[1.5] text-[#b25249]">{kid.notesLabel}</div>
              </div>
            </div>
          ) : null}

          <div className="overflow-hidden rounded-2xl border border-[#ece0d0] bg-[#fffdf9]">
            <div className="flex items-center justify-between gap-4 border-b border-[#f0e6d8] px-[18px] py-[15px]">
              <span className="text-[14.5px] text-[#94887b]">Fecha de nacimiento</span>
              <span className="text-[14.5px] font-extrabold text-[#3f362e]">{kid.birthDateLabel}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-[#f0e6d8] px-[18px] py-[15px]">
              <span className="text-[14.5px] text-[#94887b]">Sala</span>
              <span className="text-[14.5px] font-extrabold text-[#3f362e]">{kid.classroomLabel.replace("Sala ", "")}</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-[18px] py-[15px]">
              <span className="text-[14.5px] text-[#94887b]">Ingreso</span>
              <span className="text-[14.5px] font-extrabold text-[#3f362e]">{kid.joinedAtLabel}</span>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[300px] flex-col gap-[14px]">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#3f362e] px-4 py-[13px] text-[15px] font-extrabold text-white"
          >
            <SunIcon className="size-[18px]" />
            Resumen del día
          </button>

          <div className="rounded-2xl border border-[#ece0d0] bg-[#fffdf9] px-[18px] py-4">
            <div className="mb-[14px] text-[12.5px] font-extrabold tracking-[0.08em] text-[#8a7c6d]">PADRES VINCULADOS</div>

            <div className="flex flex-col gap-[14px]">
              {kid.linkedParents.map((parent) => (
                <div key={parent.id} className="flex items-center gap-3">
                  <div
                    className={[
                      "flex size-10 shrink-0 items-center justify-center rounded-full font-[family:var(--font-geist-sans)] text-base font-semibold",
                      linkedParentToneClassNames[parent.tone],
                    ].join(" ")}
                  >
                    {parent.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14.5px] font-extrabold text-[#3f362e]">{parent.name}</div>
                    <div className="truncate text-[12.5px] text-[#a89a8b]">
                      {parent.relationLabel} · {parent.status === "active" ? "activa" : "invitación enviada"}
                    </div>
                  </div>

                  <span
                    className={[
                      "shrink-0 rounded-full px-[9px] py-1 text-[10.5px] font-extrabold",
                      linkedParentStatusClassNames[parent.status],
                    ].join(" ")}
                  >
                    {linkedParentStatusLabels[parent.status]}
                  </span>
                </div>
              ))}

              <button type="button" className="flex items-center gap-3 pt-2 text-left">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#d8cbba] text-[#b0a290]">
                  <PlusIcon className="size-[18px]" />
                </span>
                <span className="text-[14.5px] font-extrabold text-[#c5503a]">Vincular otro padre</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
