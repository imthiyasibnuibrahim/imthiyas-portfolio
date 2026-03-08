import { client } from "@/sanity/lib/client";
import HeroClient from "./HeroClient";

export default async function Hero() {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{
    ...,
    "resumeUrl": resume.asset->url
  }`);
  return <HeroClient settings={settings} />;
}
