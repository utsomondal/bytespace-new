const testimonials = [
  {
    avatar: "/images/testimonials/testimonials-3.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "BytesSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    avatar: "/images/testimonials/testimonials-2.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    avatar: "/images/testimonials/testimonials-1.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative overflow-hidden bg-white
        bg-[radial-gradient(circle_at_24%_8%,rgba(220,255,40,0.38),transparent_28%),radial-gradient(circle_at_5%_48%,rgba(75,110,255,0.18),transparent_24%),radial-gradient(circle_at_18%_96%,rgba(205,255,45,0.38),transparent_24%),radial-gradient(circle_at_92%_91%,rgba(65,105,245,0.28),transparent_30%)]
        py-24
      "
    >
      <div className="container-1440 px-5">
        {/* heading left, paragraph right */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="heading-s text-neutral-950">
            Discover What Our <br className="hidden md:block" />
            Community Is Saying
          </h2>
          <p className="body-m text-neutral-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* testimonial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ avatar, name, role, quote }) => (
            <div
              key={name}
              className="rounded-2xl bg-white p-6 shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
            >
              <img
                src={avatar}
                alt={name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <p className="label-l mt-4 text-neutral-950">{name}</p>
              <p className="body-s text-primary-600">{role}</p>
              <p className="body-m mt-4 text-neutral-600">"{quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
