import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="section alt">
      <div className="inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="mailto:rocobrian06@gmail.com"
            className="group block font-display text-[clamp(2.6rem,12vw,11rem)] font-extrabold leading-[0.86] tracking-[-0.045em]"
          >
            Let&rsquo;s cut
            <br />
            <span className="text-primary transition-colors group-hover:text-accent">
              something.
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-12 gap-y-10 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <dl className="grid gap-x-12 gap-y-7 sm:grid-cols-3">
            {[
              { k: "Email", v: "rocobrian06@gmail.com", href: "mailto:rocobrian06@gmail.com" },
              { k: "Phone", v: "+63 964 170 5633", href: "tel:+639641705633" },
              { k: "Based in", v: "Cavite, Philippines" },
            ].map((row) => (
              <div key={row.k}>
                <dt className="meta text-primary">{row.k}</dt>
                <dd className="mt-2 text-[1.02rem] font-medium">
                  {row.href ? (
                    <a href={row.href} className="transition-colors hover:text-primary">
                      {row.v}
                    </a>
                  ) : (
                    row.v
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a href="mailto:rocobrian06@gmail.com" className="btn btn-primary w-full md:w-auto">
            Email me <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
