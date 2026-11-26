
import type { Fact } from "@/components/home/FactCard";

export const facts: Fact[] = [
  {
    id: "early-tablet-access",
    statistic: "40%",
    headline: "Digital devices start early",
    description:
      "40% of children have a tablet by age two, according to Common Sense Media.",
    context:
      "U.S. children; 2025 report. Device ownership alone does not establish harm.",
    sources: [
      {
        name: "Common Sense Media — 2025 Census",
        url: "https://about.commonsensemedia.org/research/reports/2025-common-sense-census-media-use-kids-zero-eight",
      },
    ],
  },
  {
    id: "smartphone-ownership",
    statistic: "Age 11",
    headline: "Most children have a smartphone by age 11",
    description:
      "57% of surveyed 11-year-olds own a smartphone.",
    context:
      "Common Sense Media, 2026; nationally representative survey of U.S. youth ages 9–17.",
    sources: [
      {
        name: "Common Sense Media — 2026 Census",
        url: "https://about.commonsensemedia.org/research/reports/2026-common-sense-media-census-tech-and-media-use-tweens-and-teens",
      },
    ],
  },
  {
    id: "entertainment-screen-time",
    statistic: "10+ hrs",
    headline: "Heavy screen use is common among teens",
    description:
      "43% of surveyed U.S. teens ages 13–17 reported spending at least 10 hours using entertainment screens the day before their survey.",
    context:
      "Common Sense Media, 2026; self-reported entertainment screen use, excluding schoolwork.",
    sources: [
      {
        name: "Common Sense Media — 2026 Census",
        url: "https://about.commonsensemedia.org/research/reports/2026-common-sense-media-census-tech-and-media-use-tweens-and-teens",
      },
    ],
  },
  {
    id: "social-media-sleep",
    statistic: "45%",
    headline: "Teens say social media hurts their sleep",
    description:
      "45% of U.S. teens say social media negatively affects how much sleep they get.",
    context:
      "Pew Research Center, 2025; ages 13–17. Self-reported impact, not proof of causation.",
    sources: [
      {
        name: "Pew Research Center — April 2025",
        url: "https://www.pewresearch.org/internet/2025/04/22/teens-social-media-and-mental-health/",
      },
    ],
  },
  {
    id: "online-harassment",
    statistic: "~30%",
    headline: "Online harassment affects teen Snapchat users",
    description:
      "Roughly 3 in 10 teen Snapchat users report offensive name-calling, rumors, or physical threats.",
    context:
      "Pew Research Center, 2026; U.S. users ages 13–17. At least one of these experiences.",
    sources: [
      {
        name: "Pew Research Center — April 2026",
        url: "https://www.pewresearch.org/internet/2026/04/15/teens-experiences-on-tiktok-instagram-and-snapchat/",
      },
    ],
  },
];
