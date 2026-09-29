const logos = [
  "/images/partners/logo-1.svg",
  "/images/partners/logo-2.svg",
  "/images/partners/logo-3.svg",
  "/images/partners/logo-4.svg",
  "/images/partners/logo-5.svg",
];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="container-1440 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 px-5">
        {logos.map((src) => (
          <img
            key={src}
            src={src}
            alt="Partner logo"
            className="h-10.25 w-auto opacity-60 grayscale"
          />
        ))}
      </div>
    </section>
  );
}