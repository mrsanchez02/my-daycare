import type { FeedPost } from "@/data/mock-feed";
import { FeedPostCard } from "@/components/home/feed-post-card";

type FeedPostListProps = {
  posts: FeedPost[];
};

export function FeedPostList({ posts }: FeedPostListProps) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <FeedPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
