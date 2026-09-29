const categories = [
  { icon: "/icons/categories/design.svg", label: "Design" },
  { icon: "/icons/categories/development.svg", label: "Development" },
  { icon: "/icons/categories/it-software.svg", label: "IT & Software" },
  { icon: "/icons/categories/business.svg", label: "Business" },
  { icon: "/icons/categories/marketing.svg", label: "Marketing" },
  { icon: "/icons/categories/photography.svg", label: "Photography" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="container-1440 px-5 text-center">
        <h2 className="heading-s text-neutral-950">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="body-m mx-auto mt-4 max-w-175 text-neutral-500">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-100 px-4 py-8 transition-shadow hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-500">
                <img src={icon} alt="" className="h-6 w-6" />
              </span>
              <p className="label-m text-neutral-950">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
