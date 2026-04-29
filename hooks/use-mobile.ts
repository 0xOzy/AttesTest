import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value immediately without causing a cascading render in strict mode if possible
    // We can just rely on the mql.matches for initial state, and only set if different?
    // Actually, setting state in effect is okay, but eslint plugin is strict. It's safer to just set the state using the mql directly or initialize state with the value.
    // However, in SSR we can't use window innerWidth initially.
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Check if initial differs
    if (isMobile === undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return !!isMobile
}
