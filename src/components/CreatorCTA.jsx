const shapes = [
  {
    src: "/images/cta/shape-lime-squiggle-lg.png",
    w: 385,
    h: 385,
    top: -162,
    left: -118,
    rotate: 0,
  },
  {
    src: "/images/cta/shape-white-squiggle-sm.png",
    w: 175,
    h: 175,
    top: -50,
    left: 120,
    rotate: -180,
  },
  {
    src: "/images/cta/shape-lime-triangle.png",
    w: 188,
    h: 188,
    top: -80,
    left: 1080,
    rotate: 0,
  },
  {
    src: "/images/cta/shape-white-cylinder.png",
    w: 370,
    h: 370,
    top: 6,
    left: 1226,
    rotate: 0,
  },
  {
    src: "/images/cta/shape-white-cone.png",
    w: 188,
    h: 188,
    top: 225,
    left: -118,
    rotate: 0,
  },
  {
    src: "/images/cta/shape-lime-ring.png",
    w: 342,
    h: 342,
    top: 299,
    left: 20,
    rotate: 0,
  },
  {
    src: "/images/cta/shape-lime-squiggle-sm.png",
    w: 330,
    h: 330,
    top: 189,
    left: 1110,
    rotate: 0,
  },
];

export default function CreatorCTA() {
  return (
    <section className="bg-grid relative overflow-hidden bg-primary-800 py-24">
      <div className="container-1440 relative px-5">
        {shapes.map(({ src, w, h, top, left, rotate }) => (
          <img
            key={src}
            src={src}
            alt=""
            className="pointer-events-none absolute z-10 hidden lg:block"
            style={{
              width: w,
              height: h,
              top,
              left,
              transform: rotate ? `rotate(${rotate}deg)` : undefined,
            }}
          />
        ))}

        <div className="relative z-20 mx-auto max-w-180 text-center text-white">
          <h2 className="heading-s">
            Unlock Your Potential as a <br className="hidden md:block" />
            Creator with ByteSpace
          </h2>
          <p className="body-m mt-5 text-white/90">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <button className="label-m mt-8 h-11.5 rounded-full bg-secondary-500 px-6 text-neutral-950 hover:bg-secondary-400">
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
