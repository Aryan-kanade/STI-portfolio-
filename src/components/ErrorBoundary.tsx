import { Component, type ErrorInfo, type ReactNode } from "react"
import { RippleButton } from "@/components/ui/RippleButton"
import { CONTACT } from "../lib/data"

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("UI error caught:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-bg px-5 text-center">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-accent uppercase">
              // Something broke
            </p>
            <h1 className="font-display text-2xl font-bold tracking-tight">
              The page hit an error.
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm text-mut">
              Try reloading. If it keeps happening, reach me on{" "}
              <a className="text-accent underline underline-offset-2" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              .
            </p>
            <RippleButton
              onClick={() => window.location.reload()}
              rippleColor="rgba(245, 185, 69, 0.4)"
              className="mt-6 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white"
            >
              Reload
            </RippleButton>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
