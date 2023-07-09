export type IArray<T> = T | T[];

export type SubscriptionConfig = {
  name?: string;
  version?: number;
  author?: string;
  /**
   * https url
   * android file path
   */
  updateUrl?: string;
  /**
   * https url
   * android schema url, qq group
   */
  supportUrl?: string;
  apps?: AppConfig[];
};

type NumberFilter = {};
type StringFilter = {};

type CommonProps = {
  activityIds?: IArray<string>;
  excludeActivityIds?: IArray<string>;
  cd?: number;
  // https://github.com/ajv-validator/ajv
  appFilter?: {
    versionName: StringFilter;
    versionCode: NumberFilter;
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

export const defineSubsConfig = (config: SubscriptionConfig) => {
  return JSON.stringify(config, undefined, 2);
};
