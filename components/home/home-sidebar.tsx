import Link from "next/link";
import type { FeedHomeMock } from "@/data/mock-feed";
import {
  BellIcon,
  ChildrenIcon,
  HomeIcon,
  LogoutIcon,
  PlusIcon,
  SunIcon,
  UserIcon,
} from "@/components/shared/icons";

type HomeSidebarProps = {
  schoolLabel: FeedHomeMock["schoolLabel"];
  classroomLabel: FeedHomeMock["classroomLabel"];
  teacher: FeedHomeMock["teacher"];
  navItems: FeedHomeMock["navItems"];
  activeItemId: FeedHomeMock["navItems"][number]["id"];
  compact?: boolean;
};

const navIcons = {
  feed: HomeIcon,
  children: ChildrenIcon,
  announcements: BellIcon,
  account: UserIcon,
};

export function HomeSidebar({
  schoolLabel,
  classroomLabel,
  teacher,
  navItems,
  activeItemId,
  compact = false,
}: HomeSidebarProps) {
  return (
    <div className={["flex w-full flex-col", compact ? "gap-3" : "gap-4"].join(" ")}>
      <div className={compact ? "flex items-center justify-between gap-3" : "flex items-center gap-3 px-2 pb-2"}>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-[#f8c3a8] to-[#f2937a] text-white">
            <SunIcon className="size-5" />
          </div>

          <div>
            <div className="font-[family:var(--font-geist-sans)] text-[17px] font-semibold leading-none text-[#3f362e]">
              OpenDayCare
            </div>
            <div className="mt-0.5 text-[11.5px] text-[#a89a8b]">{classroomLabel}</div>
          </div>
        </div>

        {compact ? (
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-xl bg-[#fbe3d8] text-[#e0654a]"
            aria-label="Nueva publicación"
          >
            <PlusIcon className="size-4" />
          </button>
        ) : null}
      </div>

      {compact ? null : (
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-linear-to-b from-[#f4977e] to-[#ee8164] px-4 py-3 text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)]"
        >
          <PlusIcon className="size-[17px]" />
          Nueva publicación
        </button>
      )}

      <nav className={compact ? "flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "flex flex-1 flex-col gap-1"} aria-label="Navegación principal">
        {navItems.map((item) => {
          const Icon = navIcons[item.id as keyof typeof navIcons];
          const className = [
            "flex items-center gap-3 rounded-xl px-3 py-[11px] text-[14.5px]",
            compact ? "shrink-0 whitespace-nowrap border border-[#ead9c6] bg-[#fffdf9]" : "w-full",
            item.id === activeItemId
              ? "bg-[#fbe3d8] font-extrabold text-[#d9583c]"
              : "bg-transparent font-semibold text-[#6e6359]",
          ].join(" ");
          const content = (
            <>
              <Icon className="size-[19px]" />
              <span>{item.label}</span>
            </>
          );

          if (!item.href) {
            return (
              <button key={item.id} type="button" className={className}>
                {content}
              </button>
            );
          }

          return (
            <Link key={item.id} href={item.href} className={className}>
              {content}
            </Link>
          );
        })}
      </nav>

      {compact ? null : (
        <div className="mt-2 border-t border-[#ece0d0] pt-4">
          <div className="flex items-center gap-[11px] px-2 py-1.5">
            <div className="flex size-[38px] items-center justify-center rounded-full bg-[#f2937a] font-[family:var(--font-geist-sans)] text-base font-semibold text-white">
              {teacher.initial}
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-extrabold text-[#3f362e]">{teacher.name}</div>
              <div className="truncate text-xs text-[#a89a8b]">{teacher.roleLabel}</div>
            </div>

            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-[10px] bg-[#f6ecdf] text-[#94887b]"
              aria-label="Cerrar sesión"
            >
              <LogoutIcon className="size-4" />
            </button>
          </div>
        </div>
      )}

      {compact ? <div className="px-0.5 text-[11px] font-extrabold tracking-[0.08em] text-[#b59c84]">{schoolLabel.toUpperCase()}</div> : null}
    </div>
  );
}
