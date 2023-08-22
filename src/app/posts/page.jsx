import PostCard from "@/src/components/PostCard";
import styles from "./Post.module.css";
async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
}

async function PostPage() {
  const posts = await loadPost();

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPage;
