import type { FeedPost, FeedTag } from "@/data/mock-feed";
import { HeartIcon, MegaphoneIcon, MessageIcon, PhotoPlaceholderIcon } from "@/components/shared/icons";

type FeedPostCardProps = {
  post: FeedPost;
};

const tagStyles: Record<
  FeedTag,
  {
    label: string;
    badgeClassName: string;
    dotClassName: string;
    textClassName: string;
  }
> = {
  milestone: {
    label: "LOGRO",
    badgeClassName: "bg-[#cfebd8]",
    dotClassName: "bg-[#3e9b6c]",
    textClassName: "text-[#3e9b6c]",
  },
  activity: {
    label: "ACTIVIDAD",
    badgeClassName: "bg-[#c7e7f1]",
    dotClassName: "bg-[#2e89a6]",
    textClassName: "text-[#2e89a6]",
  },
  announcement: {
    label: "ANUNCIO",
    badgeClassName: "bg-[#ccd8f4]",
    dotClassName: "bg-[#4e72c8]",
    textClassName: "text-[#4e72c8]",
  },
};

const authorToneStyles = {
  mint: "bg-[#cfe8d4] text-[#3a8e5f]",
  sky: "bg-[#a9d9e8] text-[#1f7a93]",
  indigo: "bg-[#ccd8f4] text-[#4e72c8]",
};

export function FeedPostCard({ post }: FeedPostCardProps) {
  const tagStyle = tagStyles[post.tag];
  const usesAnnouncementIcon = post.tag === "announcement";

  return (
    <article className="rounded-[20px] border border-[#ece0d0] bg-[#fffdf9] px-[22px] py-5 shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <div className="mb-[14px] flex items-center gap-3">
        <div
          className={[
            "flex size-11 shrink-0 items-center justify-center rounded-full font-[family:var(--font-geist-sans)] text-[17px] font-semibold",
            authorToneStyles[post.authorTone],
          ].join(" ")}
        >
          {usesAnnouncementIcon ? <MegaphoneIcon className="size-5" /> : post.authorInitial}
        </div>

        <div className="flex-1">
          <div className="font-[family:var(--font-geist-sans)] text-[16.5px] font-semibold text-[#3f362e]">
            {post.authorName}
          </div>
          <div className="text-[12.5px] text-[#a89a8b]">
            {post.publishedAt} · {post.publishedBy}
          </div>
        </div>

        <div className={["flex items-center gap-[7px] rounded-full px-3 py-1.5", tagStyle.badgeClassName].join(" ")}>
          <span className={["size-2 rounded-full", tagStyle.dotClassName].join(" ")} />
          <span className={["text-xs font-extrabold tracking-[0.04em]", tagStyle.textClassName].join(" ")}>
            {tagStyle.label}
          </span>
        </div>
      </div>

      <div className="mb-[10px] text-[12.5px] text-[#a89a8b]">{post.audienceLabel}</div>
      <p className="text-[15.5px] leading-[1.55] text-[#4a4038]">{post.body}</p>

      {post.hasPhotoPlaceholder ? (
        <div className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-[#dbcdbA] bg-[#f4ece1] text-[#b0a290]">
          <PhotoPlaceholderIcon className="size-[30px]" />
          <span className="text-[13.5px]">{post.photoLabel}</span>
        </div>
      ) : null}

      <div className="mt-4 flex items-center gap-[18px] border-t border-[#f0e6d8] pt-[14px]">
        <span className="flex items-center gap-[7px] text-sm font-bold text-[#e0654a]">
          <HeartIcon className="size-[19px]" />
          {post.likes}
        </span>

        <span className="flex items-center gap-[7px] text-sm font-bold text-[#94887b]">
          <MessageIcon className="size-[18px]" />
          {post.comments}
        </span>

        <span className="flex-1" />

        {post.canEdit ? <button type="button" className="text-sm font-extrabold text-[#c5503a]">Editar</button> : null}
      </div>
    </article>
  );
}
