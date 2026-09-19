import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import DriveImage from "@/components/DriveImage";

type Capability = {
  title: string;
  body: string;
  /** Drive id used as the tile background, when the tile carries a visual. */
  image?: string;
  to?: string;
  /** Desktop column span inside the 4-column grid. */
  span: string;
};

const capabilities: Capability[] = [
  {
    title: "Video editing",
    body: "Reels, podcasts, montages, music videos and sports highlights. Story first, then pacing, then polish.",
    image: "1btrXzlgmRtqjd4hHysknCiLxOwFiI1JX",
    span: "lg:col-span-2",
  },
  {
    title: "Motion & colour",
    body: "After Effects titles, lower thirds and grading that holds up across every platform crop.",
    span: "lg:col-span-1",
  },
  {
    title: "AI generated film",
    body: "Google Flow, Sora and Runway shots, voiced with ElevenLabs and finished in Premiere.",
    span: "lg:col-span-1",
  },
  {
    title: "Real estate video",
    body: "Property walkthroughs and listing films built to hold attention past the first five seconds.",
    span: "lg:col-span-1",
  },
  {
    title: "Illustration & print",
    body: "Apparel graphics, signage, postcards and packaging drawn in Illustrator and Photoshop.",
    image: "14E1CHWwKNuqwcE3Y5Os9DdJ3EDv_YA3Z",
    to: "/graphics",
    span: "lg:col-span-2",
  },
  {
    title: "Social & web",
    body: "Ad creative, content calendars, plus Shopify and WordPress builds that match the brand.",
    span: "lg:col-span-1",
  },
];

const PortfolioSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section">
      <div className="inner">
        <h2 className="section-title">
          What I
          <br />
          <span className="text-primary">Do</span>
        </h2>
      </div>

      {/* 6 items, 6 cells, 4-column rhythm: 2+1+1 then 1+2+1 */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) => {
          const inner = (
            <>
              {cap.image && (
                <>
                  <DriveImage
                    id={cap.image}
                    alt=""
                    width={1200}
                    fallbackLabel=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/35" />
                </>
              )}
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-display text-[clamp(1.35rem,2vw,1.85rem)] font-extrabold leading-[1.05] tracking-[-0.025em] ${
                      cap.image ? "text-white" : "text-foreground"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  {cap.to && <ArrowUpRight className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </div>
                <p
                  className={`mt-4 max-w-[46ch] text-[0.97rem] leading-relaxed ${
                    cap.image ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {cap.body}
                </p>
              </div>
            </>
          );

          const shell = `group relative block h-full min-h-[clamp(14rem,20vw,19rem)] overflow-hidden p-[clamp(1.5rem,2.4vw,2.4rem)] transition-colors duration-500 ${
            cap.image ? "bg-black" : "bg-background hover:bg-card"
          }`;

          return (
            <motion.div
              key={cap.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-background ${cap.span}`}
            >
              {cap.to ? (
                <Link to={cap.to} className={shell}>
                  {inner}
                </Link>
              ) : (
                <div className={shell}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
