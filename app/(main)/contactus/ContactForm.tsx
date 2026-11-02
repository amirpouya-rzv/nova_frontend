
import {
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="lg:col-span-2">

      <div className="relative h-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative">

          {/* Form Heading */}
          <div className="mb-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <FiMessageCircle size={25} />
            </div>

            <span className="mt-6 block text-xs font-bold tracking-[0.25em] text-primary">
              SEND US A MESSAGE
            </span>

            <h2 className="mt-3 text-3xl font-black text-foreground">
              We'd Love To Hear From You
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Fill out the form below and let us know how we can help.
            </p>

          </div>

          {/* Form */}
          <form className="space-y-6">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-foreground"
                >
                  Full Name
                </label>

                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="h-12 rounded-xl border-white/20 bg-background/40 backdrop-blur-md"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  Email Address
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                  className="h-12 rounded-xl border-white/20 bg-background/40 backdrop-blur-md"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-foreground"
              >
                Subject
              </label>

              <Input
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
                className="h-12 rounded-xl border-white/20 bg-background/40 backdrop-blur-md"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-foreground"
              >
                Your Message
              </label>

              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
                className="min-h-40 resize-none rounded-xl border-white/20 bg-background/40 py-4 backdrop-blur-md"
              />
            </div>

            <Button
              type="button"
              className="h-13 w-full cursor-pointer gap-3 rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90 sm:w-auto sm:px-10"
            >
              Send Message
              <FiSend size={17} />
            </Button>

          </form>

        </div>
      </div>
    </div>
  );
}
