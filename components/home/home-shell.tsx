import type { ReactNode } from "react";

type HomeShellProps = {
  sidebar: ReactNode;
  mobileSidebar: ReactNode;
  children: ReactNode;
};

export function HomeShell({ sidebar, mobileSidebar, children }: HomeShellProps) {
  return (
    <div className="flex min-h-screen bg-[#f6ecdf] text-[#3f362e]">
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 border-r border-[#ece0d0] bg-[#fffdf9] px-4 py-6 lg:flex">
        {sidebar}
      </aside>

      <main className="min-w-0 flex-1 lg:h-screen lg:overflow-y-auto">
        <div className="border-b border-[#ece0d0] bg-[#fff7ef] px-4 py-3 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.4)] lg:hidden">
          {mobileSidebar}
        </div>
        <div className="mx-auto w-full max-w-[760px] px-4 py-6 pb-20 sm:px-6 sm:py-8 lg:px-10 lg:pt-[34px] lg:pb-20">
          {children}
        </div>
      </main>
    </div>
  );
}
