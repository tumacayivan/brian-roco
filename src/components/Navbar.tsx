import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Work", href: "/#portfolio" },
  { label: "Illustration", href: "/#graphics" },
  { label: "About", href: "/#about" },
  { label: "Career", href: "/#experience" },
  { label: "Toolkit", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

/*
  Reads as a Premiere Pro menu bar: a thin fixed app strip with a project chip
  on the left and mono workspace labels on the right.
*/
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between gap-6 pl-[var(--gutter)] pr-2 sm:pr-3">
        <a href="/#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center bg-primary font-display text-[0.8rem] font-extrabold leading-none text-primary-foreground">
            Br
          </span>
          <span className="truncate font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
            Brian Roco
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground">Editor</span>
          </span>
        </a>

        <div className="flex items-center">
          <div className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-l border-border px-4 py-[1.15rem] font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-card hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-1 flex items-center gap-1 border-l border-border pl-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center text-foreground transition-colors hover:text-primary lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-border px-[var(--gutter)] py-4 font-display text-2xl font-extrabold tracking-[-0.02em] text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
