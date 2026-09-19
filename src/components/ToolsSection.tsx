const shots = [
  "Screenshot 2026-02-28 152603.png",
  "Screenshot 2026-02-28 152607.png",
  "Screenshot 2026-02-28 152609.png",
  "Screenshot 2026-02-28 152612.png",
  "Screenshot 2026-02-28 152614.png",
  "Screenshot 2026-02-28 152616.png",
  "Screenshot 2026-02-28 152618.png",
  "Screenshot 2026-02-28 152621.png",
  "Screenshot 2026-02-28 152623.png",
  "Screenshot 2026-02-28 152627.png",
  "Screenshot 2026-02-28 152630.png",
  "Screenshot 2026-02-28 152632.png",
  "Screenshot 2026-02-28 152636.png",
  "Screenshot 2026-02-28 152638.png",
  "Screenshot 2026-02-28 152641.png",
  "Screenshot 2026-02-28 152655.png",
  "Screenshot 2026-02-28 152659.png",
  "Screenshot 2026-02-28 152701.png",
  "Screenshot 2026-02-28 152704.png",
  "Screenshot 2026-02-28 152708.png",
];

const tools = [
  { name: "Adobe Premiere Pro", image: shots[0] },
  { name: "Adobe After Effects", image: shots[1] },
  { name: "Adobe Audition", image: shots[2] },
  { name: "CapCut", image: shots[3] },
  { name: "Filmora", image: shots[4] },
  { name: "Audacity", image: shots[5] },
  { name: "Adobe Photoshop", image: shots[6] },
  { name: "Adobe Illustrator", image: shots[7] },
  { name: "Adobe InDesign", image: shots[8] },
  { name: "Google Workspace", image: shots[9] },
  { name: "HighLevel", image: shots[11] },
  { name: "Asana", image: shots[12] },
  { name: "Mailchimp", image: shots[13] },
  { name: "Slack", image: shots[14] },
  { name: "VistaSocial", image: shots[15] },
  { name: "Canva", image: shots[16] },
  { name: "ClickUp", image: shots[17] },
  { name: "Monday.com", image: shots[18] },
  { name: "Discord", image: shots[19] },
];

/*
  The only marquee on the page. Nineteen logos would either wrap into a wall of
  tiles or need a "view all" disclosure; a single continuous strip shows the
  breadth without asking anyone to read each one.
*/
const ToolsSection = () => {
  const strip = [...tools, ...tools];

  return (
    <section id="tools" className="section alt overflow-hidden">
      <div className="inner">
        <h3 className="font-display text-[clamp(1.4rem,2.6vw,2.2rem)] font-extrabold tracking-[-0.03em]">
          Software I work in
        </h3>
      </div>

      <div className="relative mt-[clamp(2rem,4vw,3rem)] border-y border-border py-8">
        <div className="marquee-track flex w-max items-center gap-10 pr-10 md:gap-14 md:pr-14">
          {strip.map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="flex shrink-0 items-center gap-3.5">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-white p-2">
                <img
                  src={`/tools/${tool.image}`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </span>
              <span className="whitespace-nowrap font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Soft edges so the strip reads as continuous rather than cut off */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(var(--panel))] to-transparent md:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[hsl(var(--panel))] to-transparent md:w-32"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ToolsSection;
