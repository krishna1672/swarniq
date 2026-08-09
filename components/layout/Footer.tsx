import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerColumns, footerTagline, copyright } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo width={170} />
            <p className="mt-3 text-sm text-ink-muted">{footerTagline}</p>
            <div className="mt-4 flex gap-4 text-ink">
              <Link href="#" aria-label="Instagram" className="hover:text-gold">
                <Icon name="instagram" size={22} />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-gold">
                <Icon name="facebook" size={22} />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-gold">
                <Icon name="youtube" size={22} />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-serif text-base font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-serif text-base font-semibold text-ink">Stay Updated</h3>
            <p className="mt-4 text-sm text-ink-muted">
              Sign up and get 10% off on your first order.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line py-6 text-center">
          <p className="text-xs text-ink-soft">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
