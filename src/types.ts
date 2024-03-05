import * as api from '@gkd-kit/api';

export type RawAppAddProp = api.RawApp & {
  /**
   * 某些规则组被移除不使用时, 为了避免 key 在后续被复用, 需要将已经删除的规则组的 key 填入此数组做校验使用
   */
  deprecatedKeys?: number[];
};

export const defineSubsConfig = (config: api.RawSubscription) => {
  return JSON.stringify(config, undefined, 2);
};

export const defineAppConfig = (config: RawAppAddProp) => {
  return config;
};
