"use client";

import { useParams } from 'next/navigation'
import { useLiveQuery } from "@sanity/preview-kit";
import { postQuery } from '@/sanity/lib/queries';
import Post from "@/app/components/Post";

export default function PreviewPost({ post }) {
  const params = useParams();
  const [data] = useLiveQuery(post, postQuery, params);

  return <Post post={data} />;
}
