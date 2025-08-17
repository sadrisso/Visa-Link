interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Visa Services", href: "/services" },
    { name: "Apply Now", href: "/apply" },
    { name: "Our Services", href: "/our-services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mb-8 flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="hover:text-blue-400 transition font-semi-bold"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
