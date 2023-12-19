export function sideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay, duration: 0.5 },
    },
  };
}
