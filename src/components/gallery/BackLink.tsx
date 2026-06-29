import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
}

const BackLink = ({ href, label }: BackLinkProps) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
  >
    <ArrowLeft size={14} />
    {label}
  </a>
);

export default BackLink;
