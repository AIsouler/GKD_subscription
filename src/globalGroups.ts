import apps from './rawApps';
import type { RawGlobalGroup } from '@gkd-kit/api';
import * as utils from './utils';

// 全局禁用
const diabledAppIds: string[] = [
  'com.android.systemui', // 通知栏界面/下拉开关/控制中心
  'com.android.settings', // 系统设置
  'com.android.mms', // 短信/信息
  'com.android.phone', // 拨号
  'com.android.incallui', // 通话
  'com.android.contacts', // 联系人/电话簿
  'com.android.providers.Telephony', // 电话和短信存储
  'com.android.phone.recorder', // 录音
  'com.android.soundrecorder', // 录音机
  'com.android.server.telecom', // 来电拒接短信服务

  // 排除软件包安装程序
  'com.android.packageinstaller',
  'com.google.android.packageinstaller', // Google Play
  'com.miui.packageinstaller', // 小米系
  'com.samsung.android.packageinstaller', // 三星系
  'com.oplus.appdetail', // 一加系

  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝

  'com.google.ar.core', // 谷歌AR服务
  'com.google.android.syncadapters.calendar', // 谷歌日历同步

  // 小米系
  'com.miui.aod', // miui 锁屏界面
  'miui.systemui.plugin', // miui 状态栏界面
  'com.miui.securityadd', // 系统服务组件
  // 华为系
  'com.huawei.android.launcher', // 桌面
  'com.huawei.mediacontroller', // 音频播控中心
  // 荣耀系
  'com.hihonor.android.launcher', // 桌面
  // OPPO 系
  'com.oppo.launcher', // 桌面
  // VIVO 系
  'com.bbk.launcher2', // 桌面
  // 一加系
  'net.oneplus.launcher', // 桌面
  // 三星系
  'com.sec.android.app.launcher', // 桌面

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器
];

// 如果应用规则已有全局规则中的某一类的规则, 则在对应全局规则禁用此应用
function filterAppsByGroup(apps: any[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length === 1,
    )
    .map((a) => a.id);
}

// 设置单独禁用
const uniqueAppIdsAD = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const uniqueAppIdsUP = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '更新提示'),
]);
const uniqueAppIdsYM = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '青少年模式'),
]);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: utils.OPEN_AD_ORDER,
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead")]',
      },
    ],
    apps: [...uniqueAppIdsAD].map((id) => ({ id, enable: false })),
  },
  {
    key: 1,
    name: '更新提示',
    order: utils.UPDATE_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches:
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text$="新版本" || text$="更新" || text$="升级" || text$="体验" || text$="升級" || text$="體驗" || text$="Update" || text$="Upgrade" || text$="Experience"] <n * > [name!$=".CheckBox"][childCount=0][visibleToUser=true][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel"]',
      },
      {
        key: 1,
        matches:
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][desc$="新版本" || desc$="更新" || desc$="升级" || desc$="体验" || desc$="升級" || desc$="體驗" || desc$="Update" || desc$="Upgrade" || desc$="Experience"] <n * > [name!$=".CheckBox"][childCount=0][visibleToUser=true][desc^="不再" || desc$="再说" || desc$="拒绝" || desc$="再想想" || desc^="忽略" || desc^="暂不" || desc^="放弃" || desc^="取消" || desc$="不要" || desc$="再說" || desc$="暫不" || desc$="拒絕" || desc$="Later" || desc^="Ignore" || desc^="Not now" || desc^="Cancel"]',
      },
    ],
    apps: [...uniqueAppIdsUP].map((id) => ({ id, enable: false })),
  },
  {
    key: 2,
    name: '青少年模式',
    order: utils.YOUNG_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][((text*="青少年" || text*="未成年") && text*="模式" || text*="儿童模式") || ((desc*="青少年" || desc*="未成年") && desc*="模式")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text*="知道了" || text*="关闭" || text="我已知晓" || desc*="知道了" || desc*="关闭"]',
        ],
      },
    ],
    apps: [...uniqueAppIdsYM].map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
