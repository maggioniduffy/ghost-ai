import { RefreshCw, Share2, FileText } from "lucide-react"

const features = [
  {
    icon: RefreshCw,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export function AuthSidebar() {
  return (
    <div className="hidden lg:flex lg:w-[45%] shrink-0 flex-col bg-surface border-r border-surface-border px-12 py-10 font-sans">
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-accent-dim flex items-center justify-center">
          <span className="text-brand text-xs font-bold tracking-tight">G</span>
        </div>
        <span className="text-sm font-semibold text-copy-primary tracking-tight">Ghost AI</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[2.6rem] font-bold leading-[1.15] tracking-tight text-copy-primary">
          Design systems at the<br />speed of thought.
        </h1>
        <p className="mt-4 text-copy-secondary text-[0.95rem] leading-relaxed max-w-sm">
          Describe your architecture in plain English. Ghost AI maps it to a
          shared canvas your whole team can refine in real time.
        </p>

        <ul className="mt-10 space-y-6">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-start gap-4">
              <div className="shrink-0 h-9 w-9 rounded-xl bg-accent-dim flex items-center justify-center">
                <Icon className="h-4 w-4 text-brand" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-copy-primary leading-snug">{title}</p>
                <p className="text-sm text-copy-muted mt-0.5 leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-copy-muted">© 2026 Ghost AI. All rights reserved.</p>
    </div>
  )
}
