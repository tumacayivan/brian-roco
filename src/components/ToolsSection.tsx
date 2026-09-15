import { motion } from "framer-motion";

// Tool images from public/tools folder (in order)
const toolImages = [
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
  { name: "Adobe Premiere Pro", image: toolImages[0] },
  { name: "Adobe After Effects", image: toolImages[1] },
  { name: "Adobe Audition", image: toolImages[2] },
  { name: "CapCut", image: toolImages[3] },
  { name: "Filmora", image: toolImages[4] },
  { name: "Audacity", image: toolImages[5] },
  { name: "Adobe Photoshop", image: toolImages[6] },
  { name: "Adobe Illustrator", image: toolImages[7] },
  { name: "Adobe InDesign", image: toolImages[8] },
  { name: "Google Workspace", image: toolImages[9] },
  { name: "HighLevel", image: toolImages[11] },
  { name: "Asana", image: toolImages[12] },
  { name: "Mailchimp", image: toolImages[13] },
  { name: "Slack", image: toolImages[14] },
  { name: "VistaSocial", image: toolImages[15] },
  { name: "Canva", image: toolImages[16] },
  { name: "ClickUp", image: toolImages[17] },
  { name: "Monday.com", image: toolImages[18] },
  { name: "Discord", image: toolImages[19] },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="section alt">
      <div className="inner">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Toolkit</span>
            <h2 className="section-title">Tools</h2>
          </motion.div>
          <p className="section-lead">
            <span className="text-foreground font-semibold">Professional software and platforms</span> I use to deliver
            high-quality creative work and manage projects efficiently.
          </p>
        </div>

        {/* Hairline grid of tool tiles */}
        <div className="mt-[clamp(3rem,6vw,5rem)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border border border-border rounded-[18px] overflow-hidden">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.05 }}
              className="group flex flex-col items-center justify-center gap-4 bg-card p-6 md:p-8 transition-colors duration-500 hover:bg-background"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-2xl p-2.5">
                <img
                  src={`/tools/${tool.image}`}
                  alt={tool.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-sm md:text-[0.95rem] font-medium text-muted-foreground group-hover:text-foreground text-center leading-tight transition-colors">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
