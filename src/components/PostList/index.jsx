
export function PostList(props) {

  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}