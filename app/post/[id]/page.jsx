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
    </div>
  );
}

export default PostId;
