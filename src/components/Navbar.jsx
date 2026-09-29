import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="relative mx-auto flex h-29.5 max-w-300 items-center justify-between px-5 xl:px-0">
        <a href="/">
          <img
            src="/images/logo/Header_Logo.svg"
            alt="ByteSpace"
            className="h-9 w-auto"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className={i === 0 ? "label-m" : "body-m"}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="body-m">
            Sign In
          </a>
          <a href="#" className="body-m">
            Join Us
          </a>
          <button aria-label="Cart">
            <img src="/icons/cart_icon.svg" alt="" className="h-5 w-5" />
          </button>
        </div>

        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mx-5 flex flex-col gap-4 rounded-2xl bg-primary-950 p-5 md:hidden">
          {[
            ...links,
            { label: "Sign In", href: "#" },
            { label: "Join Us", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="body-m"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
