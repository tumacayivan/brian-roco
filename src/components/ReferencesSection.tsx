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
    <section id="references" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-5xl md:text-6xl mb-2">References</h2>
        <div className="w-16 h-1 bg-primary mb-12" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {references.map((ref, i) => (
          <motion.div
            key={ref.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-2xl mb-1">{ref.name}</h3>
            <p className="text-primary text-sm font-body mb-3">
              {ref.title}, {ref.company}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Phone className="w-4 h-4 text-primary" />
              {ref.phone}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReferencesSection;
