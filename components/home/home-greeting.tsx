type HomeGreetingProps = {
  schoolLabel: string;
  classroomLabel: string;
  greeting: string;
  summary: string;
};

export function HomeGreeting({ schoolLabel, classroomLabel, greeting, summary }: HomeGreetingProps) {
  return (
    <header className="mb-6">
      <div className="mb-1 text-[12.5px] font-extrabold tracking-[0.08em] text-[#d9583c]">
        {schoolLabel.toUpperCase()} · {classroomLabel.toUpperCase()}
      </div>
      <h1 className="font-[family:var(--font-geist-sans)] text-[30px] font-semibold text-[#3f362e]">
        {greeting}
      </h1>
      <p className="mt-1 text-[14.5px] text-[#94887b]">{summary}</p>
    </header>
  );
}
