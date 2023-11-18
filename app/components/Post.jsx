"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
import { TbArrowBackUp } from "react-icons/tb";

const builder = imageUrlBuilder(client);

export default function Post({ post }) {
  return (
    <main className="container mx-auto prose prose-lg py-36 mb-56">
      <motion.h2 
      variants={fadeIn ('down', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex items-center justify-center my-12" >{post && post.title}</motion.h2>
      <motion.div 
      variants={fadeIn ('down', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mx-2 my-2 text-gray-200">
      {post?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
      </motion.div>
      <div className="flex items-center justify-center mt-28 pt-10">
        <Link href="/posts" className="bg-[rgba(89,65,169,0.40)] text-sky-400 border border-sky-400 border-b-4 h-[80px] w-[200px] flex items-center justify-center text-xl font-bold overflow-hidden absolute px-4 py-2 rounded-3xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none group animate-pulse duration-300">
        <TbArrowBackUp className="mr-4 flex" />
          <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] items-center justify-center"></span> Nazad   

        </Link>
      </div>
    </main>
  );
}
