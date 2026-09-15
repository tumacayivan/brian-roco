import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const references = [
  {
    name: "Audrean Dan Lamoste",
    title: "CEO",
    company: "ExoSkill Creatives",
    phone: "+63 803-265-5762",
  },
  {
    name: "Mac Neil Ivan Tumacay",
    title: "COO",
    company: "Rovawork Philippines",
    phone: "+63 991-686-8942",
  },
];

const ReferencesSection = () => {
  return (
    <section id="references" className="section !pt-0">
      <div className="inner">
        <h3 className="mb-6 font-display font-extrabold text-[clamp(1.7rem,4vw,3rem)] tracking-[-0.02em]">
          References
        </h3>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-[18px] overflow-hidden">
          {references.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card p-[clamp(1.6rem,3vw,2.6rem)]"
            >
              <p className="text-[0.78rem] uppercase tracking-[0.18em] text-primary font-semibold">
                {ref.title}, {ref.company}
              </p>
              <h4 className="mt-3 font-display font-extrabold text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em] leading-[1.05]">
                {ref.name}
              </h4>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                {ref.phone}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
