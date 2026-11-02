
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

const contactItems = [
  {
    title: "Email Address",
    value: "support@nova.com",
    icon: FiMail,
  },
  {
    title: "Phone Number",
    value: "+1 234 567 890",
    icon: FiPhone,
  },
  {
    title: "Our Location",
    value: "New York, United States",
    icon: FiMapPin,
  },
  {
    title: "Working Hours",
    value: "Mon - Fri / 9AM - 6PM",
    icon: FiClock,
  },
];

const socialItems = [
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: FiFacebook,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: FiTwitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl">

        <span className="text-xs font-bold tracking-[0.25em] text-primary">
          CONTACT INFORMATION
        </span>

        <h2 className="mt-4 text-3xl font-black text-foreground">
          Get In Touch
        </h2>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Feel free to contact us whenever you need.
          We're happy to help you.
        </p>

      </div>

      {/* Contact Details */}
      <div className="space-y-3">

        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/15"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={21} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  {item.title}
                </p>

                <p className="mt-1 break-words text-sm font-semibold text-foreground">
                  {item.value}
                </p>
              </div>

            </div>
          );
        })}

      </div>

      {/* Social Media */}
      <div className="rounded-3xl border border-white/20 bg-primary/80 p-6 text-primary-foreground shadow-xl backdrop-blur-2xl">

        <h3 className="text-lg font-bold">
          Follow NOVA
        </h3>

        <p className="mt-2 text-sm leading-7 opacity-80">
          Stay connected with us and discover our latest collections.
        </p>

        <div className="mt-5 flex gap-3">

          {socialItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:-translate-y-1 hover:bg-white/20"
              >
                <Icon size={19} />
              </a>
            );
          })}

        </div>

      </div>

    </div>
  );
}
