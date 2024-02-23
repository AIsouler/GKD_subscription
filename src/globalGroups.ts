import apps from './rawApps';
import type { RawGlobalGroup } from './types';
import { OPEN_AD_ORDER } from './utils';

const diabledAppIds = [
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
  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'li.songe.gkd',

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

// 如果应用规则已有开屏广告一类的规则, 则在全局规则禁用此应用
diabledAppIds.push(
  ...apps
    .filter((a) =>
      a.groups.some((g) => g.name.startsWith('开屏广告') && g.enable !== false),
    )
    .map((a) => a.id),
);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: OPEN_AD_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
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
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="load" &&  vid!*="hour" && vid!*="minute" && vid!*="second" && vid!*="add" && vid!*="ead")]',
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
