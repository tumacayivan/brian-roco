const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50 text-center">
      <p className="text-foreground text-base md:text-lg font-body font-semibold tracking-wider">
        © {new Date().getFullYear()} <span className="font-bold text-primary">Brian Roco</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
