export type IArray<T> = T | T[];

type RawCommonProps = {
  /**
   * 单位: 毫秒
   *
   * 当前规则的冷却时间, 或者执行 action 最小间隔
   *
   * @default 1000
   */
  actionCd?: number;

  /**
   * 单位: 毫秒
   *
   * 延迟执行: 查询到节点->等待一段时间->再次查询到节点则执行对应 action
   *
   */
  actionDelay?: number;

  /**
   *
   * 如果开启, 此规则下的所有 `末尾属性选择器`的`第一个属性选择表达式`符合下面的结构之一的选择器 将使用快速查找
   *
   * - [id='abc']
   * - [vid='abc']
   * - [text='abc']
   * - [text^='abc']
   * - [text*='abc']
   * - [text$='abc']
   *
   * 比如 `A > B + C[id='x'][childCount=2]` 符合, 但 `A > B + C[childCount=2][id='x']` 不符合
   *
   * 它的底层原理是 跳过手动遍历所有节点 直接调用 [findAccessibilityNodeInfosByViewId](https://developer.android.google.cn/reference/android/view/accessibility/AccessibilityNodeInfo#findAccessibilityNodeInfosByViewId(java.lang.String)) / [findAccessibilityNodeInfosByText](https://developer.android.google.cn/reference/android/view/accessibility/AccessibilityNodeInfo#findAccessibilityNodeInfosByText(java.lang.String)) 得到可匹配节点
   *
   * 大多数情况下都能查询到, 在少数某些复杂结构下, 即使目标节点存在, 快速查询也不一定查询到
   *
   * 比如 [Image < &#64;View + View >2 [text*='广告']](https://github.com/gkd-kit/subscription/blob/1ae87452d287b558f58f9c4e4448a3190e212ca1/src/apps/com.zidongdianji.ts#L26) 虽然符合快速查询的条件但是使用 `findAccessibilityNodeInfosByText("广告")` 并不能查询到节点
   *
   * 它是优点是快速, 因为遍历所有节点是一个耗时行为, 虽然多数情况下这种耗时较低
   *
   * 但是在某些软件比如 哔哩哔哩 的开屏广告在这种耗时下延迟可达 1-2s, 这也是导致 [gkd-kit/gkd#60](https://github.com/gkd-kit/gkd/issues/60) 的原因
   *
   * ---
   *
   * v1.4.1 版本后生成的快照时将标识每个节点是否可 quickFind, 网页审查工具属性面板顶部会注明这个标识
   *
   * [![image](https://github.com/gkd-kit/subscription/assets/38517192/80cdbad1-fa8d-4415-81a1-cecaa7d69e33)](https://i.gkd.li/import/13316168)
   *
   */
  quickFind?: boolean;

  /**
   * 单位: 毫秒
   *
   * 匹配延迟
   *
   * 规则准备匹配/或被唤醒时, 等待一段时间, 使此规则参与查询屏幕节点
   *
   */
  matchDelay?: number;

  /**
   * 单位: 毫秒
   *
   * 规则匹配时间, 此规则参与查询屏幕节点时, 等待一段时间, 休眠此规则
   *
   * 例如某些应用的 开屏广告 的 activityId 容易误触/太广泛, 而开屏广告几乎只在应用切出来时出现, 设置一个有限匹配时间能避免后续的误触
   *
   */
  matchTime?: number;

  /**
   * 最大执行次数
   *
   * 规则的 action 被执行的最大次数, 达到最大次数时, 休眠此规则
   *
   * 功能类似 matchTime, 适用于只需要执行一次的: 开屏广告/更新弹窗/青少年弹窗 一类规则
   *
   * 当规则准备匹配/或被唤醒时, 将重新计算次数
   *
   */
  actionMaximum?: number;

  /**
   * 当规则因为 matchTime/actionMaximum 而休眠时, 如何唤醒此规则
   *
   * @default 'activity'
   *
   * @example
   * 'activity'
   * // 当 activity 刷新时, 唤醒规则
   * // 刷新 activity 并不代表 activityId 变化
   * // 如 哔哩哔哩视频播放页 底部点击推荐视频 进入另一个 视频播放页, 进入了新 activity 但是 activityId 并没有变化
   *
   * @example
   * 'app'
   * // 重新进入 app 时, 唤醒规则
   */
  resetMatch?: 'activity' | 'app';

  /**
   * 与这个 key 的 rule 共享 cd
   *
   * 比如开屏广告可能需要多个 rule 去匹配, 当一个 rule 触发时, 其它 rule 的触发是无意义的
   *
   * 如果你对这个 key 的 rule 设置 actionCd=3000, 那么当这个 rule 和 本 rule 触发任意一个时, 在 3000毫秒 内两个 rule 都将进入 cd
   */
  actionCdKey?: number;

  /**
   * 与这个 key 的 rule 共享次数
   *
   * 比如开屏广告可能需要多个 rule 去匹配, 当一个 rule 触发时, 其它 rule 的触发是无意义的
   *
   * 如果你对这个 key 的 rule 设置 actionMaximum=1, 那么当这个 rule 和 本 rule 触发任意一个时, 两个 rule 都将进入休眠
   */
  actionMaximumKey?: number;

  /**
   * 规则参与匹配的顺序, 数字越小越先匹配
   *
   * 如果两个规则 order 相同, 按照 groups 中的数组顺序匹配, app 类型规则顺序优先于 global 类型规则
   *
   * 属于不同订阅的规则按照订阅列表中顺序匹配, 长按订阅卡片可以拖动排序
   *
   * @default 0
   *
   */
  order?: number;

  /**
   * 当前 规则/规则组 的快照链接, 增强订阅可维护性
   */
  snapshotUrls?: IArray<string>;

  /**
   * 当前 规则/规则组 的规则在手机上的运行示例, 支持 jpg/png/webp/gif
   *
   * 如果规则是多个规则组合起来的, 可以更好看懂规则到底在干啥, 比如 点击关闭按钮-选择关闭原因-确认关闭 这种广告用 gif 看着更清楚在干啥
   */
  exampleUrls?: IArray<string>;
};

type RawRuleProps = RawCommonProps & {
  /**
   * 当前规则在列表中的唯一标识
   *
   * key 没有顺序大小之分, 可以是任意数字
   *
   * 设置后不可更改, 否则造成点击记录错乱
   */
  key?: number;

  name?: string;

  /**
   * 要求当前列表里某个 key 刚刚执行
   *
   * 比如点击关闭按钮-选择关闭原因-确认关闭, key 分别是 1,2,3, preKeys 分别是 [],[1],[2]
   *
   * 那么 选择关闭原因 必须要求 比如点击关闭按钮 刚刚点击过才能执行, 确认关闭 也要求 选择关闭原因 刚刚点击过才执行
   *
   * 否则后面的规则不会触发, 也就是要求规则按顺序执行, 这是为了防止规则匹配范围太过广泛而误触
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
   *
   * @example
   * `back`
   * // 向系统发起一个返回事件, 相当于按下返回键
   *
   * @example
   * `longClick`
   * // 如果目标节点是 longClickable 的, 则使用 `longClickNode`, 反之使用 `longClickCenter`
   *
   * @example
   * `longClickNode`
   * // 向系统发起一个长按无障碍节点事件，与 clickNode 类似
   *
   * @example
   * `longClickCenter`
   * // 与 clickCenter 类似, 长按时间为 400 毫秒
   */
  action?:
    | 'click'
    | 'clickNode'
    | 'clickCenter'
    | 'back'
    | 'longClick'
    | 'longClickNode'
    | 'longClickCenter';

  /**
   * 一个或者多个合法的 GKD 选择器, 如果每个选择器都能匹配上节点, 那么点击最后一个选择器的目标节点
   */
  matches?: IArray<string>;

  /**
   * 一个或者多个合法的 GKD 选择器, 如果存在一个选择器匹配上节点, 则停止匹配此规则
   */
  excludeMatches?: IArray<string>;
};

type RawGroupProps = RawCommonProps & {
  /**
   * 当前规则组在列表中的唯一标识
   *
   * 也是客户端禁用/启用此规则组的依据
   *
   * 设置后不可更改, 否则造成客户端启用/禁用错乱
   *
   * key 没有顺序大小之分, 可以是任意数字
   */
  key: number;

  name: string;
  desc?: string;

  /**
   * 控制规则默认情况下是启用还是禁用, 默认启用
   *
   * 仅对于本仓库的规则而言, 除开屏广告外, 其它规则默认禁用
   */
  enable?: boolean;

  /**
   * 其它 group 的 key, 允许将目标组的所有 rule 添加到当前组的作用域
   *
   * 假设 group1{key=1} 有一个 rule1{key=11}, group2{key=2} 有 rule2{key=22}, rule3{key=23}
   *
   * 如果 group1 的 scopeKeys=[2] 并且 group2 没有被禁用, 那么 rule1 的 preKeys/actionCdKey/actionMaximumKey 可以是 11/22/23
   *
   * 如果存在相同 key 的 rule, 优先使用本组的 rule, 其次按 scopeKeys 的顺序查找其它组的 rule
   *
   */
  scopeKeys?: IArray<number>;

  // rules: RawRuleProps[];
};

type RawAppRuleProps = {
  /**
   * 如果 设备界面Id startWith activityIds 的任意一项, 则匹配
   *
   * 如果要匹配所有界面: `undefined` (不填写) 或者 `[]` (避免使用上级属性)
   */
  activityIds?: IArray<string>;

  /**
   * 如果 设备界面Id startWith excludeActivityIds 的任意一项, 则排除匹配
   *
   * 优先级高于 activityIds
   */
  excludeActivityIds?: IArray<string>;
};

// <--全局规则相关--
type RawGlobalApp = RawAppRuleProps & {
  id: string;
  /**
   * 默认值: `true`
   *
   * true => 在此 APP 启用此规则
   *
   * false => 在此 APP 禁用此规则
   */
  enable?: boolean;
};
type RawGlobalRuleProps = {
  /**
   * 默认值: `true`
   *
   * true => 匹配任意 APP
   *
   * false => 仅匹配 apps 里面的 app
   */
  matchAnyApp?: boolean;

  /**
   * 默认值: `false`
   *
   * 是否匹配桌面, 仅全局规则可用
   *
   * 如果你切换了桌面, 你需要打开 GKD 的界面触发识别新桌面
   */
  matchLauncher?: boolean;

  /**
   * 默认值: `false`
   *
   * 是否匹配系统应用, 仅全局规则可用
   */
  matchSystemApp?: boolean;

  apps?: RawGlobalApp[];
};

type RawGlobalRule = RawRuleProps & RawGlobalRuleProps;

export type RawGlobalGroup = RawGroupProps &
  RawGlobalRuleProps & {
    apps: RawGlobalApp[];
    rules: RawGlobalRule[];
  };
// --全局规则相关-->

// <--APP规则相关--
export type RawCategory = {
  /**
   * 当前分类在列表中的唯一标识
   *
   * 也是客户端禁用/启用此分类组的依据
   */
  key: number;

  /**
   * 分类名称
   *
   * 同时也是分类的依据, 捕获以 name 开头的所有 APP 规则组, 不捕获全局规则组
   *
   * 示例: `开屏广告` 将捕获 `开屏广告-1` `开屏广告-2` `开屏广告-233` 这类 APP 规则组
   */
  name: string;

  /**
   * null => 跟随捕获的规则组的 enable 的默认值
   *
   * true => 全部启用捕获的规则组
   *
   * false => 全部禁用捕获的规则组
   */
  enable?: boolean;
};

type RawAppRule = RawRuleProps & RawAppRuleProps;
export type RawAppGroup = RawGroupProps &
  RawAppRuleProps & {
    /**
     * string => { matches: string }
     *
     * string[] => { matches: string }[]
     */
    rules: IArray<RawAppRule | string>;
  };

export type RawApp = {
  id: string;

  /**
   * 如果设备没有安装这个 APP, 则使用这个 name 显示
   */
  name?: string;

  groups: RawAppGroup[];

  /**
   * 某些规则组被移除不使用时, 为了避免 key 在后续被复用, 需要将已经删除的规则组的 key 填入此数组做校验使用
   */
  deprecatedKeys?: number[];
};
// --APP规则相关-->

export type RawSubscription = {
  /**
   * 当前订阅文件的标识, 如果新旧订阅文件id不一致则更新失败\
   * 范围: `[0, Number.MAX_SAFE_INTEGER]`\
   * 建议值: `new Date().getTime()`
   *
   * GKD默认订阅是 0, 负数 id APP 自己内部使用, APP 不允许用户添加负数 id 的订阅
   *
   * 负数订阅由 APP 内部使用, 如本地订阅是 -2, 内存订阅是 -1
   */
  id: number;

  /**
   * 订阅的名称
   */
  name: string;

  /**
   * 订阅的版本号, 用于检测更新
   *
   * 只有当新订阅的 version 大于本地旧订阅的 version 才执行更新替换本地
   */
  version: number;

  author?: string;

  /**
   * GKD 会定时或者用户手动刷新请求这个链接, 如果返回的订阅的 version 大于 APP 订阅当前的 version , 则更新
   *
   * 如果这个字段不存在, 则使用添加订阅时填写的链接
   */
  updateUrl?: string;

  /**
   * 一个自定义 uri 链接, 用户点击[用户反馈]时, 打开此链接
   *
   * 可以是一个网页链接, 也可以是一个 APP 内部的 uri 链接
   */
  supportUri?: string;

  /**
   * 一个只需要 id 和 version 的 json 文件链接, 检测更新时, 优先检测此链接, 如果 id 相等并且 version 增加, 则再去请求 updateUrl
   *
   * 目的是防止订阅文件过大而消耗过多的流量
   */
  checkUpdateUrl?: string;

  globalGroups?: RawGlobalGroup[];
  categories?: RawCategory[];
  apps?: RawApp[];
};

export const defineSubsConfig = (config: RawSubscription) => {
  return JSON.stringify(config, undefined, 2);
};

export const defineAppConfig = (config: RawApp) => {
  return config;
};
