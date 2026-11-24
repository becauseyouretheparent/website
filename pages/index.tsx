import Head from "next/head";
import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/components/home/Hero";
import FactsSection from "@/components/home/FactsSection";
import ResearchSnapshot from "@/components/home/ResearchSnapshot";
import TakeActionPreview from "@/components/home/TakeActionPreview";
import SiteFooter from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Because You&rsquo;re The Parent</title>
        <meta
          name="description"
          content="Quick, eye-opening facts and tools to help parents understand the risks of kids and phones, social media, and online games."
        />
      </Head>

      <SiteHeader />

      <main id="main-content" className="min-h-screen bg-slate-950">
        <Hero />
        <FactsSection />
        <ResearchSnapshot />
        <TakeActionPreview />
        <SiteFooter />
      </main>
    </>
  );
}
