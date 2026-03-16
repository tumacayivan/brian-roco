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
  // Top Row - Creative and Video Editing Tools (9 tools)
  { name: "Adobe Premiere Pro", image: toolImages[0] },
  { name: "Adobe After Effects", image: toolImages[1] },
  { name: "Adobe Audition", image: toolImages[2] },
  { name: "CapCut", image: toolImages[3] },
  { name: "Filmora", image: toolImages[4] },
  { name: "Audacity", image: toolImages[5] },
  { name: "Adobe Photoshop", image: toolImages[6] },
  { name: "Adobe Illustrator", image: toolImages[7] },
  { name: "Adobe InDesign", image: toolImages[8] },
  
  // Middle Row - Productivity, Marketing, and Communication Tools (7 tools)
  { name: "Google Docs", image: toolImages[9] },
  { name: "Google Sheets", image: toolImages[10] },
  { name: "HighLevel", image: toolImages[11] },
  { name: "Asana", image: toolImages[12] },
  { name: "Mailchimp", image: toolImages[13] },
  { name: "Slack", image: toolImages[14] },
  { name: "VistaSocial", image: toolImages[15] },
  
  // Bottom Row - Design, Project Management, and Communication Tools (4 tools)
  { name: "Canva", image: toolImages[16] },
  { name: "ClickUp", image: toolImages[17] },
  { name: "Monday.com", image: toolImages[18] },
  { name: "Discord", image: toolImages[19] },
];

const ToolsSection = () => {
  // Organize tools into rows (matching the image layout)
  const topRow = tools.slice(0, 9);
  const middleRow = tools.slice(9, 16);
  const bottomRow = tools.slice(16);

  return (
    <section id="tools" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">
            <span className="text-primary">Tools</span>
          </h2>
          <div className="w-24 h-2 bg-primary mb-8" />
          <p className="text-foreground font-semibold text-lg md:text-xl lg:text-2xl max-w-3xl font-body">
            <span className="font-bold">Professional software and platforms</span> I use to deliver <span className="highlight-text">high-quality creative work</span> and manage <span className="highlight-text">projects efficiently</span>.
          </p>
        </motion.div>

        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
          {/* Top Row - Creative and Video Editing Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4 mb-4 md:mb-6"
          >
            {topRow.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="rounded-lg overflow-hidden aspect-square bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 p-2"
                  title={tool.name}
                >
                  <img
                    src={`/tools/${tool.image}`}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground text-center mt-2 font-body truncate">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Row - Productivity, Marketing, and Communication Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 mb-4 md:mb-6"
          >
            {middleRow.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="rounded-lg overflow-hidden aspect-square bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 p-2"
                  title={tool.name}
                >
                  <img
                    src={`/tools/${tool.image}`}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground text-center mt-2 font-body truncate">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Row - Design, Project Management, and Communication Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {bottomRow.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="rounded-lg overflow-hidden aspect-square bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 p-2"
                  title={tool.name}
                >
                  <img
                    src={`/tools/${tool.image}`}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground text-center mt-2 font-body truncate">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
