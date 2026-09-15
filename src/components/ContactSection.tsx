import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const contactInfo = [
  { label: "Email", value: "rocobrian06@gmail.com", href: "mailto:rocobrian06@gmail.com" },
  { label: "Phone", value: "+63 964 170 5633", href: "tel:+639641705633" },
  { label: "Location", value: "Cavite, Philippines" },
];

const reveal = {
  initial: { opacity: 0, y: 38 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const ContactSection = () => {
  return (
    <section id="contact" className="section alt text-center">
      <div className="inner">
        <motion.div {...reveal}>
          <span className="eyebrow">Let's Work Together</span>
          <h2 className="mt-6 font-display font-extrabold text-[clamp(2.8rem,11vw,9rem)] leading-[0.9] tracking-[-0.04em]">
            <a href="mailto:rocobrian06@gmail.com" className="hover:text-primary transition-colors">
              Get in
              <br />
              Touch.
            </a>
          </h2>
          <p className="section-lead mx-auto">
            <span className="text-foreground font-semibold">Interested in working together?</span> Feel free to reach out — I'm
            always open to new projects and creative collaborations.
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="mailto:rocobrian06@gmail.com" className="btn btn-primary">
            Send an Email <ArrowRight />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1xXgQ1eK4WCOx4VclNvhADPYerI8_F6YS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View Portfolio on Google Drive <ArrowUpRight />
          </a>
        </motion.div>

        <motion.div {...reveal} className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-8">
          {contactInfo.map((item) => (
            <div key={item.label}>
              <span className="block mb-1.5 text-[0.78rem] uppercase tracking-[0.18em] text-primary font-semibold">
                {item.label}
              </span>
              {item.href ? (
                <a href={item.href} className="text-[1.05rem] text-foreground hover:text-primary transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-[1.05rem] text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
