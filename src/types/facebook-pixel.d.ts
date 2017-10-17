declare global {
  interface Window { fbq: (type: string, event: string, options?: any) => void }
}

export const fbpixel = "fbpixel";