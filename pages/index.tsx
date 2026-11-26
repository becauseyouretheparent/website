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
        <title>Because You&apos;re the Parent</title>

        <meta
          name="description"
          content="Research and practical resources to help parents navigate smartphones, social media, online gaming, and safer device alternatives."
        />

        <meta
          property="og:title"
          content="Their Childhood. Your Decision."
        />
        <meta
          property="og:description"
          content="Research and practical resources for parents navigating the digital world."
        />
        <meta
          property="og:image"
          content="https://www.becauseyouretheparent.com/bytpShield.png"
        />
        <meta
          property="og:image:alt"
          content="Because You're the Parent — Their Childhood. Your Decision."
        />
        <meta
          property="og:url"
          content="https://www.becauseyouretheparent.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Because You're the Parent"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.becauseyouretheparent.com/bytpShield.png"
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
