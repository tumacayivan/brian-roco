const footerLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="inner flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <a href="/#" className="font-display font-extrabold text-[1.2rem] tracking-[-0.02em] text-foreground">
          Brian<span className="text-primary">.</span>Roco
        </a>
        <p>© {new Date().getFullYear()} Brian Roco. All rights reserved.</p>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
