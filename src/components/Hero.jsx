import Button from "./ui/Button";

const shapes = [
  {
    src: "/images/hero/shape-squiggle-green.png",
    w: 385,
    h: 385,
    top: 221,
    left: -118,
    rotate: 0,
  },
  {
    src: "/images/hero/shape-squiggle-white-sm.png",
    w: 175,
    h: 175,
    top: 477,
    left: 183,
    rotate: -180,
  },
  {
    src: "/images/hero/shape-ring-white.png",
    w: 342,
    h: 342,
    top: 682,
    left: 18,
    rotate: 0,
  },
  {
    src: "/images/hero/shape-wedge-green.png",
    w: 370,
    h: 370,
    top: 221,
    left: 1231,
    rotate: 0,
  },
  {
    src: "/images/hero/shape-triangle-white.png",
    w: 188,
    h: 188,
    top: 464,
    left: 1106,
    rotate: 0,
  },
  {
    src: "/images/hero/shape-squiggle-white-lg.png",
    w: 330,
    h: 330,
    top: 672,
    left: 1127,
    rotate: 0,
  },
];

const students = Array.from(
  { length: 7 },
  (_, i) => `/images/avatars/student-${i + 1}.jpg`,
);

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800">
      <div className="container-1440 relative px-5 pt-37.5 md:pt-43.5">
        {shapes.map(({ src, w, h, top, left, rotate }) => (
          <img
            key={src}
            src={src}
            alt=""
            className="pointer-events-none absolute z-20 hidden lg:block"
            style={{
              width: w,
              height: h,
              top,
              left,
              transform: rotate ? `rotate(${rotate}deg)` : undefined,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto text-center text-white">
          <h1 className="heading-l">
            Get Access to Hundreds <br className="hidden md:block" />
            Courses Available
          </h1>

          <p className="body-l mt-6 text-white/90">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <form className="mx-auto mt-14 flex max-w-145 items-center gap-4">
            <label className="flex h-13 flex-1 items-center gap-3 rounded-full bg-white px-5">
              <img src="/icons/search_icon.svg" alt="" className="h-5 w-5" />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="body-m w-full bg-transparent text-neutral-950 outline-none placeholder:text-neutral-400"
              />
            </label>

            <Button type="submit">Search</Button>
          </form>
        </div>

        <div className="relative z-10 mx-auto mt-9 h-80 w-full max-w-280 md:h-118.75">
          <div className="absolute inset-x-0 bottom-0 h-75 overflow-hidden md:h-110">
            <div className="relative left-1/2 h-280 w-280 max-w-none -translate-x-1/2 rounded-full bg-secondary-500" />
          </div>

          <img
            src="/images/persons/man.png"
            alt="Smiling student with headset and laptop"
            className="absolute bottom-0 left-1/2 h-80 w-auto -translate-x-1/2 md:h-118.75"
          />

          <div className="absolute left-61 top-22.25 hidden rounded-xl bg-white px-4 py-3 text-left md:block">
            <p className="label-m text-neutral-950">UI/UX Design</p>
            <p className="body-xs text-neutral-500">
              200 Courses • 1000+ Students
            </p>
          </div>

          <div className="absolute left-170.5 top-25.25 hidden w-58 rounded-xl bg-white p-4 text-left md:block">
            <p className="label-s text-neutral-950">Learning Progress</p>

            <p className="heading-m mt-2 text-neutral-950">55%</p>

            <div className="mt-3 h-2 rounded-full bg-neutral-100">
              <div className="h-full w-[55%] rounded-full bg-secondary-500" />
            </div>
          </div>

          <div className="absolute left-42 top-71.75 hidden rounded-xl bg-white p-4 text-left md:block">
            <p className="label-m text-neutral-950">Happy Students</p>

            <p className="body-xs mb-2 text-neutral-500">
              4.5 (240) <span className="text-secondary-500">★</span>
            </p>

            <div className="flex items-center">
              {students.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}

              <span className="label-xs -ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-secondary-500 text-neutral-950">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
