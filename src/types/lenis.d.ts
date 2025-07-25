declare global {
  interface Window {
    lenis?: {
      scrollTo: (target: HTMLElement | string, options?: { duration?: number }) => void;
      destroy: () => void;
      raf: (time: number) => void;
    };
  }
}

export {};