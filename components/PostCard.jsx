"use client";

import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <Link href={`/post/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert("Click funcionando")}>Click</button>
    </div>
  );
}

export default PostCard;
