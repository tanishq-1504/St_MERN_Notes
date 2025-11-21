import EmptyState from "/components/EmptyState.jsx";

function ConditionalRendering3({ posts = [], loading, error }) {
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;

  if (posts.length === 0) {
    return <EmptyState message="No posts yet. Start sharing!" />;
  }

  return (
    <div>
      {posts.map((p) => (
        <article key={p.id}>{p.title}</article>
      ))}
    </div>
  );
}

export default ConditionalRendering3;
