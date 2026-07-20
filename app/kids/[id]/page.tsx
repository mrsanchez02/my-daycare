import { notFound } from "next/navigation";
import { HomeShell } from "@/components/home/home-shell";
import { HomeSidebar } from "@/components/home/home-sidebar";
import { KidProfileView } from "@/components/kids/kid-profile";
import { getKidBySlug, kidsPageMock } from "@/data/mock-kids";

type KidProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function KidProfilePage({ params }: KidProfilePageProps) {
  const { id } = await params;
  const kid = getKidBySlug(id);

  if (!kid) {
    notFound();
  }

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
      <KidProfileView kid={kid} />
    </HomeShell>
  );
}
