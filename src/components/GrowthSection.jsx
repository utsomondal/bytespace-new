export default function GrowthSection() {
  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  const studentAvatars = [
    "/images/avatars/student-1.jpg",
    "/images/avatars/student-2.jpg",
    "/images/avatars/student-3.jpg",
    "/images/avatars/student-4.jpg",
    "/images/avatars/student-5.jpg",
    "/images/avatars/student-6.jpg",
  ];

  return (
    <section
      className="
        relative overflow-hidden bg-white
        bg-[radial-gradient(circle_at_24%_8%,rgba(220,255,40,0.38),transparent_28%),radial-gradient(circle_at_5%_48%,rgba(75,110,255,0.18),transparent_24%),radial-gradient(circle_at_18%_96%,rgba(205,255,45,0.38),transparent_24%),radial-gradient(circle_at_92%_91%,rgba(65,105,245,0.28),transparent_30%)]
        py-0
      "
    >
      <div className="mx-auto max-w-300 px-5">
        <div className="grid items-center gap-6 pt-25 lg:grid-cols-[480px_1fr] lg:gap-6.25">
          <div className="relative z-10">
            <h2 className="heading-s text-neutral-950">
              Your Path to Professional
              <br className="hidden md:block" />
              Growth Starts Here!
            </h2>

            <p className="body-m mt-5 max-w-125 text-neutral-500">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-8 flex gap-10">
              <div>
                <p className="heading-xs text-primary-700">12K</p>
                <p className="body-s text-neutral-500">Students</p>
              </div>
              <div>
                <p className="heading-xs text-primary-700">70+</p>
                <p className="body-s text-neutral-500">Courses</p>
              </div>
              <div>
                <p className="heading-xs text-primary-700">16</p>
                <p className="body-s text-neutral-500">Creators</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-125 w-125">
            <img
              src="/images/growth/shape-squiggle-lime-2.png"
              alt=""
              className="pointer-events-none absolute -right-4.5 top-19 z-50 w-30"
            />

            <div className="absolute left-3.75 top-0 z-10 h-81.25 w-78.75 rounded-[18px] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
              <div className="relative h-41.5 overflow-hidden rounded-[13px]">
                <img
                  src="/images/courses/course-6.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 z-20 flex gap-2">
                  <span className="body-xs rounded-full bg-black/60 px-2.5 py-1 text-white">
                    17 Lessons
                  </span>
                  <span className="body-xs rounded-full bg-black/60 px-2.5 py-1 text-white">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="label-l text-neutral-950">
                  Learn Figma from Basic
                </p>
                <p className="body-xs text-primary-600">by purepearl studio</p>

                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 py-1">
                  <img
                    src="/icons/level.svg"
                    alt=""
                    className="h-3.5 w-3.5"
                  />
                  <span className="body-xs text-neutral-600">Beginner</span>
                </div>

                <p className="label-l mt-2 text-primary-700">
                  $25{" "}
                  <span className="body-xs font-normal text-neutral-500">
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            <img
              src="/images/persons/man.png"
              alt=""
              className="pointer-events-none absolute -right-5 top-8.75 z-30 h-132.5 w-auto max-w-none object-contain"
            />

            <div className="absolute left-76.25 top-44.75 z-40 w-49.5 rounded-[17px] bg-white p-4 shadow-[0_15px_30px_rgba(0,0,0,0.10)]">
              <p className="label-s text-neutral-950">Learning Progress</p>
              <p className="heading-xs mt-1 text-neutral-950">55%</p>
              <div className="mt-2 h-1.75 rounded-full bg-neutral-100">
                <div className="h-full w-[55%] rounded-full bg-secondary-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-15 grid items-center gap-6 lg:grid-cols-[480px_1fr] lg:gap-6.25">
          <div className="relative -ml-5 h-130 w-125">
            <img
              src="/images/growth/shape-squiggle-lime-1.png"
              alt=""
              className="pointer-events-none absolute right-4.5 top-23.75 z-0 w-27.5"
            />

            <img
              src="/images/persons/woman.png"
              alt="Course creator"
              className="pointer-events-none absolute left-9.5 top-0 z-10 h-125 w-auto max-w-none object-contain"
            />

            <div className="absolute left-0 top-2.5 z-20 w-42.5 rounded-[15px] bg-primary-800 p-3 text-white shadow-[0_12px_25px_rgba(0,0,0,0.10)]">
              <p className="body-xs text-white/70">Total Revenue</p>
              <p className="body-xs text-white/50">July 1-28</p>
              <p className="heading-xs mt-1">$120.29</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/20">
                <div className="h-full w-[55%] rounded-full bg-secondary-500" />
              </div>
            </div>

            <div className="absolute left-0 top-34 z-20 w-33.75 rounded-[15px] bg-primary-800 p-3 text-white shadow-[0_12px_25px_rgba(0,0,0,0.10)]">
              <p className="body-xs text-white/70">Year to Date</p>
              <p className="body-xs text-white/50">2023</p>
              <p className="heading-xs mt-1">$1,200.38</p>
              <span className="label-xs mt-2 inline-block rounded-full bg-secondary-500 px-2 py-0.5 text-neutral-950">
                +12$
              </span>
            </div>

            <div className="absolute bottom-13 -right-1.25 z-20 w-55 rounded-2xl bg-white p-4 shadow-[0_15px_30px_rgba(0,0,0,0.10)]">
              <p className="label-s text-neutral-950">Happy Students</p>
              <p className="body-xs mb-3 text-neutral-500">
                4.5 (240) <span className="text-secondary-500">★</span>
              </p>

              <div className="flex items-center">
                {studentAvatars.map((src,idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                  />
                ))}
                <span className="label-xs -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary-500 text-neutral-950">
                  2K+
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 -mt-2">
            <h2 className="heading-s text-neutral-950">
              Create &amp; Manage
              <br className="hidden md:block" />
              Courses Easily.
            </h2>

            <p className="body-m mt-5 max-w-125 text-neutral-500">
              <strong className="text-neutral-950">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="body-m flex items-center gap-3 text-neutral-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-700 text-white">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path
                        d="M2 6l2.5 2.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
