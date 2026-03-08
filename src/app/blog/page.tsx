import { client } from "@/sanity/lib/client";
import BlogClient from "./BlogClient";

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)`);
  
  return <BlogClient initialPosts={posts} />;
}
