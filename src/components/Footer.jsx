import Button from "./ui/Button";

const footerLinks = {
  "Featured Courses": ["Featured Categories", "Business", "IT", "Design"],
  Development: ["Marketing", "Photography", "Finance", "Sport"],
  "Become a Creator": ["Affiliate Program", "Contact", "Help", "About"],
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white pt-16">
      <div className="container-1440 px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

          {/* left: logo + newsletter */}
          <div>
            <img src="/images/logo/footer_logo.svg" alt="ByteSpace" className="h-8 w-auto" />
            <p className="body-m mt-4 max-w-95 text-neutral-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-5 flex max-w-105 items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="body-m h-12 flex-1 rounded-full border border-neutral-200 px-5 outline-none placeholder:text-neutral-400 focus:border-primary-500"
              />
              <Button type="submit" className="h-12 shrink-0">
                Search
              </Button>
            </form>

            <p className="body-xs mt-4 max-w-95 text-neutral-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* right: link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="body-m text-neutral-700 hover:text-primary-700">{heading}</a>
                  </li>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="body-m text-neutral-700 hover:text-primary-700">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 py-6 sm:flex-row">
          <p className="body-s text-neutral-500">© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="body-s text-neutral-500 hover:text-primary-700">Privacy Policy</a>
            <a href="#" className="body-s text-neutral-500 hover:text-primary-700">Terms of Service</a>
            <a href="#" className="body-s text-neutral-500 hover:text-primary-700">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}