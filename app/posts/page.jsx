import { sanityFetch } from "@/sanity/lib/sanityFetch";
import Posts from "@/app/components/Posts";
import { postsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await sanityFetch({ query: postsQuery });

  return <Posts posts={posts} />;
}
