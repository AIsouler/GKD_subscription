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

/**
 * 此类型任意属性如果是 undefined 则使用上级属性, 例如 rule.cd 是 undefined, 则 rule.cd 使用 group.cd
 */
type CommonProps = {
  /**
   * 如果 设备界面Id startWith activityIds 的任意一项, 则匹配
   *
   * 如果要匹配所有界面: `undefined` (不填写) 或者 `[]` (避免使用上级属性)
   */
  activityIds?: IArray<string>;

  /**
   * 如果 设备界面Id startWith excludeActivityIds 的任意一项, 则排除匹配, 这个优先级更高
   */
  excludeActivityIds?: IArray<string>;

  /**
   * 单位: 毫秒
   *
   * 当前规则的冷却时间
   */
  cd?: number;

  /**
   * 单位: 毫秒
   *
   * 延迟执行
   *
   */
  delay?: number;

  /**
   * 后期估计会修改优化,暂不使用
   */
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
  /**
   * 如果设备没有安装这个 APP, 则使用这个 name 显示
   */
  name: string;
  groups?: GroupConfig[];
} & CommonProps;

export type AppConfigMudule = {
  default: AppConfig;
};

type GroupConfig = {
  /**
   * 当前规则组在列表中的唯一标识\
   * 也是客户端禁用/启用此规则组的依据
   */
  key: number;
  name: string;
  desc?: string;
  /**
   * 控制规则默认情况下是启用还是禁用, 默认启用
   */
  enable?: boolean;
  /**
   * string => { matches: string }
   *
   * string[] => { matches: string }[]
   */
  rules?: IArray<RuleConfig | string>;
  /**
   * 当前 规则/规则组 的快照链接, 最好填上, 增强订阅可维护性
   */
  snapshotUrls?: IArray<string>;
  /**
   * 当前 规则/规则组 的规则在手机上的运行示例, gif/mp4 都行
   *
   * 如果规则是多个规则组合起来的, 可以更好看懂规则到底在干啥, 比如 点击关闭按钮-选择关闭原因-确认关闭 这种广告用 gif 看着更清楚在干啥
   */
  exampleUrls?: IArray<string>;
} & CommonProps;

type RuleConfig = {
  /**
   * 当前规则在列表中的唯一标识
   */
  key?: number;
  name?: string;
  desc?: string;
  /**
   * 一个或者多个合法的 GKD 选择器, 如果每个选择器都能匹配上节点, 那么点击最后一个选择器的目标节点
   */
  matches?: IArray<string>;
  /**
   * 一个或者多个合法的 GKD 选择器, 如果存在一个选择器匹配上节点, 则停止匹配此规则
   */
  excludeMatches?: IArray<string>;
  /**
   * 要求当前列表里某个 key 刚刚执行
   *
   * 比如点击关闭按钮-选择关闭原因-确认关闭, key 分别是 1,2,3, preKeys 分别是 [],[1],[2]
   *
   * 那么 选择关闭原因 必须要求 比如点击关闭按钮 刚刚点击过才能执行, 确认关闭 也要求 选择关闭原因 刚刚点击过才执行
   *
   * 否则后面的规则不会触发, 也就是要求规则按顺序执行, 这是为了防止规则匹配范围太过广泛而误触
   *
   * 多数情况下 不需要设置
   *
   */
  preKeys?: IArray<number>;

  /**
   * @example
   * `click`
   * // 为默认值, 如果目标节点是 clickable 的, 则使用 `clickNode`, 反之使用 `clickCenter`
   *
   * @example
   * `clickNode`
   * // 向系统发起一个点击无障碍节点事件. 即使节点在屏幕外部/或者被其它节点遮挡,也依然能够正确触发点击目标节点
   * // 但是如果目标节点不是 clickable 的, 目标 APP 通常不响应这个点击事件, 也就是点击无效果
   * // 在极少数情况下, 即使节点是 clickable 的, APP 也不会响应节点点击事件, 此时需要手动设置 `clickCenter`
   *
   * @example
   * `clickCenter`
   * // 计算出此控件的中心的坐标并且如果这个坐标在屏幕内部，那么就向系统发起一个点击屏幕坐标事件
   * // 如果这个坐标不在屏幕内部, 当作未匹配
   * // 另外如果目标节点的位置被其它节点遮挡覆盖, 则会点击触发最上层的节点(可能不是目标节点)
   */
  action?: 'click' | 'clickNode' | 'clickCenter';

  snapshotUrls?: IArray<string>;
  exampleUrls?: IArray<string>;
} & CommonProps;

export type SubscriptionConfig = {
  /**
   * 当前订阅文件的标识, 如果新旧订阅文件id不一致则更新失败\
   * 范围: `[0, Number.MAX_SAFE_INTEGER]`\
   * 建议值: `new Date().getTime()`
   *
   * 官方默认订阅是 0, 负数 id APP 自己内部使用, APP 不允许用户添加负数 id 的订阅
   */
  id: number;
  /**
   * 规则的名称
   */
  name: string;
  /**
   * 必填, 此处有 ? 是因为本项目的 version 由 ts 校验自动生成
   *
   * 只有当新订阅的 version 大于本地旧订阅的 version 才执行更新替换本地
   */
  version?: number;
  author?: string;
  /**
   * APP 会定时或者用户手动请求这个链接, 如果返回的订阅的 version 大于 APP 订阅当前的 version , 则更新
   */
  updateUrl?: string;
  /**
   * https url, custom android schema url
   */
  supportUri?: string;
  apps: AppConfig[];
};

export const defineSubsConfig = (config: SubscriptionConfig) => {
  return JSON.stringify(config, undefined, 2);
};

export const defineAppConfig = (config: AppConfig) => {
  return config;
};
