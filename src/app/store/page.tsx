import { client } from "@/sanity/lib/client";
import StorefrontClient from "./StorefrontClient";

export default async function StorePage() {
  const products = await client.fetch(`*[_type == "product"] | order(title asc)`);
  
  return <StorefrontClient initialProducts={products} />;
}
