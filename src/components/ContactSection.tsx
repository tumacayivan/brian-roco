import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-6xl md:text-7xl lg:text-8xl mb-4">Get in Touch</h2>
          <div className="w-24 h-2 bg-primary mx-auto mb-8" />
          <p className="text-foreground font-semibold text-lg md:text-xl lg:text-2xl mb-12 font-body max-w-2xl mx-auto">
            <span className="font-bold">Interested in working together?</span> Feel free to reach out — I'm always open
            to <span className="highlight-text">new projects</span> and <span className="highlight-text">creative collaborations</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {[
            { icon: Mail, label: "rocobrian06@gmail.com", href: "mailto:rocobrian06@gmail.com" },
            { icon: Phone, label: "+63 964 170 5633", href: "tel:+639641705633" },
            { icon: MapPin, label: "Cavite, Philippines", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass-card p-6 md:p-8 flex items-center gap-4 hover:border-primary/50 transition-colors group"
            >
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
              <span className="text-base md:text-lg font-body font-bold text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
