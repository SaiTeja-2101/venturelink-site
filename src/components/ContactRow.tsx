import { CONTACT } from "@/config/site";

/** Formats a bare 10-digit Indian number as "76003 71402" for display. */
function prettyPhone(raw: string) {
  const d = raw.replace(/\D/g, "");
  return d.length === 10 ? `${d.slice(0, 5)} ${d.slice(5)}` : raw;
}

type Item = { href: string; label: string; icon: React.ReactNode };

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M6.5 3.5c.4 0 .77.24.93.62l1.2 2.9a1 1 0 0 1-.23 1.1L7.1 9.4a12.5 12.5 0 0 0 5.9 5.9l1.28-1.3a1 1 0 0 1 1.1-.23l2.9 1.2c.38.16.62.53.62.93v3.1a1.5 1.5 0 0 1-1.6 1.5C9.8 20.9 3.1 14.2 2.5 5.1A1.5 1.5 0 0 1 4 3.5h2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 6.6 5a2.3 2.3 0 0 0 2.8 0L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M3.5 20.5 5 16.4A8 8 0 1 1 8.3 19l-4.8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.7-.4c-.4-.2-1.1-.5-1.3-.6-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2.1-1.6-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.3-.6-.3H9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContactRow() {
  const items: Item[] = [];

  if (CONTACT.phone) {
    items.push({
      href: `tel:${CONTACT.phone.replace(/\D/g, "")}`,
      label: prettyPhone(CONTACT.phone),
      icon: <PhoneIcon />,
    });
  }
  if (CONTACT.email) {
    items.push({
      href: `mailto:${CONTACT.email}`,
      label: CONTACT.email,
      icon: <MailIcon />,
    });
  }
  if (CONTACT.whatsapp) {
    items.push({
      href: `https://wa.me/${CONTACT.whatsapp}`,
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
    });
  }

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-text-muted-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:bg-white/[0.06] hover:text-text-on-dark"
        >
          <span className="text-blue-200 transition-colors duration-300 group-hover:text-gold-500">
            {item.icon}
          </span>
          <span className="tracking-wide">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
