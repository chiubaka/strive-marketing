declare global {
  interface Window { gtag: (command: string, type: string, options?: any) => void }
}

// TODO: This is a hacky work-around. The global window augmentation above isn't taken without an export making this
// module external.
export const gtag = "gtag";