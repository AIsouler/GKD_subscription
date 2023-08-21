export type IArray<T> = T | T[];

type NumberFilter = {
  minimum?: number;
  maximum?: number;
  enum?: number[];
};
type StringFilter = {
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  enum?: string[];
};

type CommonProps = {
  activityIds?: IArray<string>;
  excludeActivityIds?: IArray<string>;
  cd?: number;
  appFilter?: {
    name?: StringFilter;
    versionName?: StringFilter;
    versionCode?: NumberFilter;
  };
  deviceFilter?: {
    device?: StringFilter;
    model?: StringFilter;
    manufacturer?: StringFilter;
    brand?: StringFilter;
    sdkInt?: NumberFilter;
    release?: StringFilter;
  };
};

export type AppConfig = {
  id: string;
  groups?: GroupConfig[];
} & CommonProps;

export type AppConfigMudule = {
  default: AppConfig;
};

type GroupConfig = {
  key: number;
  name: string;
  desc?: string;
  rules?: IArray<RuleConfig | string>;
} & CommonProps;

type RuleConfig = {
  name?: string;
  desc?: string;
  matches?: IArray<string>;
  excludeMatches?: IArray<string>;
  preKeys?: IArray<number>;
} & CommonProps;

export type SubscriptionConfig = {
  /**
   * 当前订阅文件的标识, 如果新旧订阅文件id不一致则更新失败\
   * 范围: `[-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`\
   * 建议值: `new Date().getTime()`
   */
  id: number;
  name: string;
  version?: number;
  author: string;
  /**
   * https url
   * android file path
   */
  updateUrl?: string;
  /**
   * https url\
   * android schema url, qq group
   */
  supportUrl?: string;
  apps: AppConfig[];
};

export const defineSubsConfig = (config: SubscriptionConfig) => {
  return JSON.stringify(config, undefined, 2);
};
