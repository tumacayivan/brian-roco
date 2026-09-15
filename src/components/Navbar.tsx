import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Graphics", href: "/#graphics" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        solid
          ? "bg-background/80 backdrop-blur-xl border-border py-3"
          : "border-transparent py-[1.1rem]"
      }`}
    >
      <div className="flex items-center justify-between px-[clamp(1.25rem,5vw,5rem)]">
        <a href="/#" className="font-display font-extrabold text-[1.3rem] tracking-[-0.02em] text-foreground">
          Brian<span className="text-primary">.</span>Roco
        </a>

        {/* Desktop */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.92rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-[clamp(1.25rem,5vw,5rem)] pt-4 pb-6 space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-display font-extrabold text-2xl tracking-[-0.02em] text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
