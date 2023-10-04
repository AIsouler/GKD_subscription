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
   * 匹配桌面的 activityId, 因为 activityId 在某些机器/应用上获取概率不准确
   *
   * 有时当出现 开屏广告 时, activityId 还是桌面的
   *
   */
  matchLauncher?: boolean;

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
   * 延迟执行: 查询到节点->等待一段时间->再次查询到节点则执行对应 action
   *
   * 也许应该更名为 actionDelay
   *
   */
  delay?: number;

  /**
   *
   * 如果开启, 此规则下的所有 `末尾属性选择器`的`第一个属性选择表达式`符合下面的结构之一的选择器 将使用快速查找
   *
   * - [id='abc']
   * - [text='abc']
   * - [text^='abc']
   * - [text*='abc']
   * - [text$='abc']
   *
   * 比如 `A > B + C[id='x'][childCount=2]` 符合, 但 `A > B + C[childCount=2][id='x']` 不符合
   *
   * 它的底层原理是 跳过手动遍历所有节点 直接调用 [findAccessibilityNodeInfosByViewId](https://developer.android.google.cn/reference/android/view/accessibility/AccessibilityNodeInfo#findAccessibilityNodeInfosByViewId(java.lang.String)) / [findAccessibilityNodeInfosByText](https://developer.android.google.cn/reference/android/view/accessibility/AccessibilityNodeInfo#findAccessibilityNodeInfosByText(java.lang.String)) 得到可匹配节点
   *
   * 但是请注意在某些复杂结构下, 即使目标节点存在, 快速查询也无法查询到, 因此请实机测试后再使用
   *
   * 比如 [Image < &#64;View + View >2 [text*='广告']](https://github.com/gkd-kit/subscription/blob/1ae87452d287b558f58f9c4e4448a3190e212ca1/src/apps/com.zidongdianji.ts#L26) 虽然符合快速查询的条件但是使用 `findAccessibilityNodeInfosByText("广告")` 并不能查询到节点
   *
   * 它是优点是快速, 因为遍历所有节点是一个耗时行为, 虽然多数情况下这种耗时较低
   *
   * 但是在某些软件比如 哔哩哔哩 的开屏广告在这种耗时下延迟可达 1-2s, 这也是导致 [gkd-kit/gkd#60](https://github.com/gkd-kit/gkd/issues/60) 的原因
   *
   */
  quickFind?: boolean;

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
