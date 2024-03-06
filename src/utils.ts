export const tryRun = <T>(fc: () => T, fallbackFc: (e: unknown) => T) => {
  try {
    return fc();
  } catch (e) {
    return fallbackFc(e);
  }
};

export const OPEN_AD_ORDER = -10; // 开屏广告

export const UPDATE_ORDER = -9; // 更新提示

export const YOUNG_ORDER = -8; // 青少年模式
