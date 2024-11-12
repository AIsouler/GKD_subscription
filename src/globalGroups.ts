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
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    priorityTime: 10000,
    rules: [
      {
        key: 0,
        excludeMatches: '[text*="搜索"][text.length<6][visibleToUser=true]', // 防止在应用的搜索页面误触
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        excludeMatches: '[text*="搜索"][text.length<6][visibleToUser=true]', // 防止在应用的搜索页面误触
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text~="(?is).*skip.*")) || id$="tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*timing.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*" && text!~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]") || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]',
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/16742932', // vid!~="(?is).*timing.*"
        ],
      },
      {
        key: 2,
        action: 'clickCenter',
        matches:
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]', // 字节SDK
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
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience"][text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验" || text*="确定" || text*="确认"][text.length<6][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="不再提醒" || text$="再说" || text$="拒绝" || text$="再想想" || text*="再看看" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="关闭" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid="iv_close" || vid="iv_cancel" || vid="img_close" || vid="iv_upgrade_close" || vid="btn_close" || vid="update_undo" || vid="upgrade_dialog_close_btn" || vid="ivCancel" || vid="ivClose" || vid="imgClose" || vid="iv_negative" || vid="iv_close_update_dialog"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
        ],
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/17710149', // text!*="卸载"
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
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满"][text.length<8][childCount=0][visibleToUser=true]',
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
