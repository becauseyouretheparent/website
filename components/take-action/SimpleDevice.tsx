
const phones = [
  {
    name: "Bark Phone — Starter Plan",
    description:
      "Calls and texts without games, browsers, or an app store.",
    note: "Restrictions depend on the Starter Plan.",
    location: "Real-time parental GPS tracking included in Starter Plan.",
    url: "https://www.bark.us/learn/starter-plan-bark-phone/",
  },
  {
    name: "Sunbeam F1 Pro Redwood",
    description:
      "Traditional flip phone with calls, texts, and basic offline tools.",
    note: "No web browser or app store.",
    location: "Parental GPS tracking not verified; ask about SOS location features.",
    url: "https://sunbeamwireless.com/product/sunbeam-f1-pro-redwood-rugged-dumbphone-classic-flip-phone/",
  },
  {
    name: "Sunbeam F1 Pro Cedar",
    description:
      "An especially simple flip phone intended primarily for calling.",
    note: "No texting, browser, or app store.",
    location: "Parental GPS tracking not verified.",
    url: "https://sunbeamwireless.com/product/sunbeam-f1-pro-cedar-rugged-dumbphone-with-talk-only/",
  },
  {
    name: "Punkt MP02",
    description:
      "Minimalist phone focused on calls and SMS messaging.",
    note: "No on-device browser or app store. Supports internet tethering.",
    location: "GPS hardware present; no parental location-tracking service.",
    url: "https://www.punkt.ch/products/mp02-4g-minimalist-phone",
  },
  {
    name: "Light Phone II",
    description:
      "Minimalist phone for calls and texts without social media or browsing.",
    note: "Offers optional utilities such as maps, music, and podcasts.",
    location: "GPS navigation available; no parental location monitoring.",
    url: "https://www.thelightphone.com/lightii",
  },
] as const;

const watches = [
  {
    name: "Bark Watch",
    description:
      "Connected watch offering calling, texting, and GPS location features.",
    note: "No browser, social media, or games.",
    location: "Real-time parental GPS tracking.",
    url: "https://www.bark.us/bark-watch/",
  },
  {
    name: "TickTalk 5",
    description:
      "Kid-focused smartwatch with calling, messaging, and GPS.",
    note: "No web browser, app store, or games.",
    location: "Real-time parental GPS tracking and location history.",
    url: "https://www.myticktalk.com/products/ticktalk-5",
  },
] as const;

const groups = [
  { title: "Dumbphones & Restricted Phones", devices: phones },
  { title: "Connected Smartwatches", devices: watches },
] as const;

const pulseClass = `
  group relative isolate mt-5 inline-flex w-fit items-center gap-2
  font-semibold text-sky-400 transition-colors hover:text-sky-300
  before:pointer-events-none before:absolute
  before:-inset-x-3 before:-inset-y-2 before:-z-10
  before:rounded-lg before:bg-sky-400/20 before:blur-md
  before:content-[''] motion-safe:before:animate-pulse
  focus-visible:outline-2 focus-visible:outline-offset-4
  focus-visible:outline-sky-400
`;

export default function SimpleDevices() {
  return (
    <section
      id="simple-devices"
      aria-labelledby="simple-devices-heading"
      className="mt-12 scroll-mt-6"
    >
      <h3
        id="simple-devices-heading"
        className="text-2xl font-bold text-white"
      >
        Explore Simpler Devices
      </h3>

      <p className="mt-4 max-w-3xl leading-7 text-slate-300">
        Staying connected doesn&apos;t have to mean
        unrestricted internet access. Explore these
        phones and watches designed for simpler
        communication.
      </p>

      {groups.map((group) => (
        <div key={group.title} className="mt-10">
          <h4 className="mb-5 text-xl font-semibold text-white">
            {group.title}
          </h4>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {group.devices.map((device) => (
              <article
                key={device.name}
                className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
              >
                <h5 className="text-lg font-semibold text-white">
                  {device.name}
                </h5>

                <p className="mt-3 leading-7 text-slate-300">
                  {device.description}
                </p>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {device.note}
                </p>

                <p className="mt-3 text-sm leading-6 text-sky-300">
                    <strong>Location:</strong> {device.location}
                </p>

                <a
                  href={device.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pulseClass}
                >
                  Explore Device
                  <span
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-400">
        Features, service plans, and availability may
        change. Some devices require dedicated cellular
        plans or parent-managed companion apps.
        Review the manufacturer&apos;s current specifications
        before purchasing.
      </p>
    </section>
  );
}
