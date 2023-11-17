import Link from "next/link";

export default function Posts({ posts = [] }) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <main className="container mx-auto grid grid-cols-1 py-36 h-full mb-60">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      {posts.map((post) => (
        <Link key={post._id} href={post.slug.current} className="p-4 hover:animate-pulse">
          <h2>{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}
