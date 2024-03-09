import * as api from '@gkd-kit/api';

export interface RawApp extends api.RawApp {
  /**
   * 某些规则组被移除不使用时, 为了避免 key 在后续被复用, 需要将已经删除的规则组的 key 填入此数组做校验使用
   */
  deprecatedKeys?: api.Integer[];
}

export const defineAppConfig = (config: RawApp) => {
  return config;
};
