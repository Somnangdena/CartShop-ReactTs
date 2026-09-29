import { RiMailFill, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";

const list = [
  {
    id: 1,
    title: "Address",
    icon: <RiMapPin2Fill />,
    desc: "Cambodia",
  },
  {
    id: 2,
    title: "Phone",
    icon: <RiPhoneFill />,
    desc: "+855 123456789",
  },
  {
    id: 3,
    title: "Email",
    icon: <RiMailFill />,
    desc: "Hello@greenfarm.com",
  },
];

const From = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side */}
          <div
          >
            <span className="text-lg font-semibold uppercase tracking-wider dark:brightness-150">
              Get in touch
            </span>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us for products information farm visit, orders or any
              question
            </p>

            <div className="mt-8 space-y-5 text-gray-600">
              {list.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 dark:brightness-150"
                >
                  <div className="flex h-10 w-10 text-lg items-center justify-center rounded-lg bg-primary/20 text-primary/60">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-primary/15 p-6 shadow-lg sm:p-8"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg bg-white/50 dark:bg-white/20 text-black border border-gray-500 px-4 py-3 outline-none transition placeholder:text-gray-500 focus:bg-white/70 focus:border-primaryfocus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 "
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@example.com"
                className="w-full rounded-lg bg-white/50 text-black dark:text-gray-100 border border-gray-500 px-4 py-3 outline-none transition placeholder:text-gray-500 focus:bg-white/70  focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg bg-white/50  text-black  border border-gray-500 px-4 py-3 outline-none transition focus:border-primary placeholder:text-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-primary px-6 py-3 cursor-pointer font-semibold text-white transition hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default From;
