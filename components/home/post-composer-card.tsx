import type { FeedHomeMock } from "@/data/mock-feed";
import { CameraIcon } from "@/components/shared/icons";

type PostComposerCardProps = {
  teacher: FeedHomeMock["teacher"];
};

export function PostComposerCard({ teacher }: PostComposerCardProps) {
  return (
    <button
      type="button"
      className="mb-6 flex w-full items-center gap-[14px] rounded-[18px] border border-[#ece0d0] bg-[#fffdf9] px-[18px] py-[14px] text-left shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)]"
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-[#f2937a] font-[family:var(--font-geist-sans)] text-base font-semibold text-white">
        {teacher.initial}
      </div>
      <span className="flex-1 text-[15px] text-[#a89a8b]">Compartí un momento…</span>
      <span className="flex size-[38px] items-center justify-center rounded-xl bg-[#fbe3d8] text-[#e0654a]">
        <CameraIcon className="size-[19px]" />
      </span>
    </button>
  );
}
