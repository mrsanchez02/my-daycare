import { FeedPostList } from "@/components/home/feed-post-list";
import { FeedSectionHeading } from "@/components/home/feed-section-heading";
import { HomeGreeting } from "@/components/home/home-greeting";
import { HomeShell } from "@/components/home/home-shell";
import { HomeSidebar } from "@/components/home/home-sidebar";
import { PostComposerCard } from "@/components/home/post-composer-card";
import { feedHomeMock } from "@/data/mock-feed";

export default function Home() {
  return (
    <HomeShell
      sidebar={
        <HomeSidebar
          schoolLabel={feedHomeMock.schoolLabel}
          classroomLabel={feedHomeMock.classroomLabel}
          teacher={feedHomeMock.teacher}
          navItems={feedHomeMock.navItems}
        />
      }
      mobileSidebar={
        <HomeSidebar
          schoolLabel={feedHomeMock.schoolLabel}
          classroomLabel={feedHomeMock.classroomLabel}
          teacher={feedHomeMock.teacher}
          navItems={feedHomeMock.navItems}
          compact
        />
      }
    >
      <HomeGreeting
        schoolLabel={feedHomeMock.schoolLabel}
        classroomLabel={feedHomeMock.classroomLabel}
        greeting={feedHomeMock.greeting}
        summary={feedHomeMock.summary}
      />

      <PostComposerCard teacher={feedHomeMock.teacher} />

      <FeedSectionHeading label="PUBLICADO HOY" />

      <FeedPostList posts={feedHomeMock.posts} />
    </HomeShell>
  );
}
