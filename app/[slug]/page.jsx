import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Post from "@/app/components/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }) {
  const post = await sanityFetch({ query: postQuery, params });
  return <Post post={post} />;
}
