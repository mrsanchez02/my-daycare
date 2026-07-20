import { KidsDirectory } from "@/components/kids/kids-directory";
import { HomeShell } from "@/components/home/home-shell";
import { HomeSidebar } from "@/components/home/home-sidebar";
import { kidsPageMock } from "@/data/mock-kids";

export default function KidsPage() {
  return (
    <HomeShell
      sidebar={
        <HomeSidebar
          schoolLabel={kidsPageMock.schoolLabel}
          classroomLabel={kidsPageMock.classroomLabel}
          teacher={kidsPageMock.teacher}
          navItems={kidsPageMock.navItems}
          activeItemId="children"
        />
      }
      mobileSidebar={
        <HomeSidebar
          schoolLabel={kidsPageMock.schoolLabel}
          classroomLabel={kidsPageMock.classroomLabel}
          teacher={kidsPageMock.teacher}
          navItems={kidsPageMock.navItems}
          activeItemId="children"
          compact
        />
      }
    >
      <KidsDirectory
        sectionLabel={kidsPageMock.sectionLabel}
        addKidLabel={kidsPageMock.addKidLabel}
        searchPlaceholder={kidsPageMock.searchPlaceholder}
        classroomLabel={kidsPageMock.classroomLabel}
        kids={kidsPageMock.kids}
      />
    </HomeShell>
  );
}
