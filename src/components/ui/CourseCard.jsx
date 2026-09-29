export default function CourseCard({
  image,
  title,
  author,
  rating,
  level,
  avatars,
  extraCount,
  price,
}) {
  return (
    <div className="rounded-2xl border border-neutral-100 p-3">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-55 w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="body-xs rounded-full bg-black/60 px-2.5 py-1 text-white">
            17 Lessons
          </span>
          <span className="body-xs rounded-full bg-black/60 px-2.5 py-1 text-white">
            2 hours 16 mins
          </span>
          <span className="body-xs rounded-full bg-black/60 px-2.5 py-1 text-white">
            59 Comments
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="label-l text-neutral-950">{title}</h3>
          <p className="body-xs text-primary-600">{author}</p>
        </div>
        <span className="label-s flex items-center gap-1 text-neutral-950 text-lg">
          {rating} <img src="/icons/Star.svg" alt="" className="h-6 w-6" />
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="body-xs flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 py-1 text-neutral-600">
          <img src="/icons/level.svg" alt="" className="h-3.5 w-3.5" />
          {level}
        </span>
        <div className="flex items-center">
          {avatars.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}
          <span className="label-xs -ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary-500 text-neutral-950">
            {extraCount}
          </span>
        </div>
      </div>

      <p className="label-l mt-3 text-primary-600 font-semibold">
        ${price}{" "}
        <span className="body-xs font-normal text-neutral-500">/lifetime</span>
      </p>
    </div>
  );
}
