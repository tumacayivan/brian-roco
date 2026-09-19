const links = [
  { label: "Work", href: "/#portfolio" },
  { label: "Illustration", href: "/#graphics" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="inner flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-8">
      <a href="/#top" className="flex items-center gap-3">
        <span className="grid h-7 w-7 place-items-center bg-primary font-display text-[0.8rem] font-extrabold leading-none text-primary-foreground">
          Br
        </span>
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
          Brian Roco
        </span>
      </a>

      <nav className="flex flex-wrap gap-x-7 gap-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
        &copy; {new Date().getFullYear()} Brian Roco
      </p>
    </div>
  </footer>
);

export default Footer;
