import PostCard from "@/components/common/PostCard";

const PostsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>

      <PostCard
        title="First Post"
        description="This is a sample post to show the PostCard component."
      />
    </div>
  );
};

export default PostsPage;
