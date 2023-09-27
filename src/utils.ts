export const tryRun = <T>(fc: () => T, fallbackFc: (e: unknown) => T) => {
  try {
    return fc();
  } catch (e) {
    return fallbackFc(e);
  }
};
