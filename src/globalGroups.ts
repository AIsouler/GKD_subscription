import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const YOUTH_MODE_ORDER = -8; // 青少年模式

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: OPEN_AD_ORDER,
    matchRoot: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        fastQuery: true,
        excludeMatches:
          '[(text*="搜索" && text.length<6) || vid~="(?is).*search.*" || (desc*="搜索" && desc.length<6)][visibleToUser=true]', // 防止在应用的搜索页面误触
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        excludeMatches:
          '[(text*="搜索" && text.length<6) || vid~="(?is).*search.*" || (desc*="搜索" && desc.length<6)][visibleToUser=true]', // 防止在应用的搜索页面误触
        matches:
          '[childCount=0][visibleToUser=true][((text*="跳过" || text*="跳過" || text~="(?is).*skip.*") && text.length<10) || ((desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*") && desc.length<10) || id~="(?is).*tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*" && text!~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")]',
      },
      {
        key: 2,
        fastQuery: true,
        matches:
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '更新提示',
    order: UPDATE_PROMPT_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience") && text!*="自动" && text!*="自動" && (text!*="成功" && text!*="失败" && text!*="失敗" && (text!*="已" || text*="已知") && text!*="检查更新")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(((text*="立即" || text*="马上" || text*="并" || text*="现在" || text*="立刻" || text*="抢先" || text*="在线" || text*="提醒")&&(text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验")) || text="更新" || text="下载" || text="安装" || text="升级" || text="确定" || text="好,升级") && text.length<6]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text^="稍后" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid^="close" || vid^="Close" || vid^="closeIv" || vid*="_close" || vid*="_Close" || vid$="close" || vid$="Close" || vid$="cancel" || vid$="Cancel" || vid$="cancle" || vid$="Cancle"]',
        ],
      },
    ],
    apps: [...appList.updateBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.updateWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '青少年模式',
    order: YOUTH_MODE_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][((text*="青少年" || text*="未成年" || text*="儿童") && (text*="模式" || text*="守护")) && text.length<15 || ((desc*="青少年" || desc*="未成年" || desc*="儿童") && (desc*="模式" || desc*="守护")) && desc.length<15]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满") && text.length<15 || (desc*="知道了" || desc*="关闭" || desc*="我已知晓" || desc*="已满") && desc.length<15]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
