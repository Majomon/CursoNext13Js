import Post from "@/src/app/posts/page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
async function PostId({ params }) {
  const post = await loadPost(params.id);
  return (
    <div>
      <h1>Post ID: {post.id}</h1>
      <h3>Titulo: {post.title}</h3>
      <p>Descripción: {post.body}</p>
      <hr />
      <h4>Otras publicaciones</h4>
      <Suspense fallback={<div><h4>Cargando publicaciones...</h4></div>}>
        <Post />
      </Suspense>
    </div>
  );
}

export default PostId;
