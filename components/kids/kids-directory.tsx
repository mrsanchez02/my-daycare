"use client";

import Link from "next/link";
import { ChevronRightIcon, PlusIcon, SearchIcon } from "@/components/shared/icons";
import type { KidProfile, KidsPageMock } from "@/data/mock-kids";

type KidsDirectoryProps = {
  sectionLabel: KidsPageMock["sectionLabel"];
  addKidLabel: KidsPageMock["addKidLabel"];
  searchPlaceholder: KidsPageMock["searchPlaceholder"];
  classroomLabel: KidsPageMock["classroomLabel"];
  kids: KidProfile[];
};

const avatarToneClassNames: Record<KidProfile["avatarTone"], string> = {
  sky: "bg-[#a9d9e8] text-[#1f7a93]",
  pink: "bg-[#f4b8cc] text-[#c44a7a]",
  mint: "bg-[#b9dec4] text-[#3e8b62]",
  amber: "bg-[#f4dc8e] text-[#9a7b1e]",
  violet: "bg-[#c9b6e8] text-[#7b5fc0]",
};

const alertToneClassNames: Record<NonNullable<KidProfile["alertTone"]>, string> = {
  danger: "bg-[#fbd8cc] text-[#d9684a]",
  warning: "bg-[#fbd8cc] text-[#d9684a]",
  info: "bg-[#f9d2de] text-[#c56486]",
};

export function KidsDirectory({ sectionLabel, addKidLabel, searchPlaceholder, classroomLabel, kids }: KidsDirectoryProps) {
  return (
    <section>
      <header className="mb-5 flex flex-col gap-4 sm:mb-[22px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-1 text-[12.5px] font-extrabold tracking-[0.08em] text-[#d9583c]">{sectionLabel.toUpperCase()}</div>
          <h1 className="font-[family:var(--font-geist-sans)] text-[28px] font-semibold text-[#3f362e] sm:text-[30px]">Niños</h1>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 self-start rounded-[14px] bg-linear-to-b from-[#f4977e] to-[#ee8164] px-[18px] py-[11px] text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)]"
        >
          <PlusIcon className="size-[17px]" />
          {addKidLabel}
        </button>
      </header>

      <div className="mb-[22px] flex items-center gap-[11px] rounded-[14px] border border-[#ece0d0] bg-[#fffdf9] px-4 py-3">
        <SearchIcon className="size-[18px] shrink-0 text-[#b0a290]" />
        <input
          type="search"
          placeholder={searchPlaceholder}
          className="w-full border-none bg-transparent text-[15px] text-[#3f362e] placeholder:text-[#b6a99b] focus:outline-none"
        />
      </div>

      <div className="mb-[14px] flex items-center gap-3">
        <span className="text-[12.5px] font-extrabold tracking-[0.08em] text-[#3f362e]">{classroomLabel.toUpperCase()}</span>
        <span className="text-[13px] text-[#a89a8b]">{kids.length} niños</span>
        <span className="h-px flex-1 bg-[#e7dac8]" />
      </div>

      <div className="grid gap-[14px] md:grid-cols-2">
        {kids.map((kid) => {
          const hasAlert = Boolean(kid.alertTag && kid.alertTone);

          return (
            <Link
              key={kid.id}
              href={`/kids/${kid.slug}`}
              className="flex min-w-0 items-center gap-[14px] rounded-[18px] border border-[#ece0d0] bg-[#fffdf9] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)] transition duration-150 hover:-translate-y-0.5 hover:border-[#f2a78e]"
            >
              <div
                className={[
                  "flex size-12 shrink-0 items-center justify-center rounded-full font-[family:var(--font-geist-sans)] text-[19px] font-semibold",
                  avatarToneClassNames[kid.avatarTone],
                ].join(" ")}
              >
                {kid.initial}
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate font-[family:var(--font-geist-sans)] text-base font-semibold text-[#3f362e]">{kid.name}</div>
                <div className="truncate text-[13px] text-[#a89a8b]">
                  {kid.ageLabel} · {kid.linkedParentsCountLabel}
                </div>
              </div>

              {hasAlert ? (
                <span
                  className={[
                    "shrink-0 rounded-full px-[9px] py-[5px] text-[11px] font-extrabold",
                    alertToneClassNames[kid.alertTone!],
                  ].join(" ")}
                >
                  {kid.alertTag}
                </span>
              ) : (
                <ChevronRightIcon className="size-[18px] shrink-0 text-[#cbb89f]" />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
