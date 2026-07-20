type FeedSectionHeadingProps = {
  label: string;
};

export function FeedSectionHeading({ label }: FeedSectionHeadingProps) {
  return (
    <div className="mb-[14px] flex items-center gap-[14px]">
      <span className="text-[12.5px] font-extrabold tracking-[0.08em] text-[#8a7c6d]">{label}</span>
      <span className="h-px flex-1 bg-[#e7dac8]" />
    </div>
  );
}
