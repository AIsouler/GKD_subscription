import { RawGlobalGroup } from '@gkd-kit/api';
import * as utils from './utils';
import * as appList from './globalDefaultApps';

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
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
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
    order: utils.UPDATE_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0 && width>0][(text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience") && text!*="自动" && text!*="自動" && (text!*="成功" && text!*="失败" && text!*="失敗" && (text!*="已" || text*="已知") && text!*="检查更新")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0 && width>0][(((text*="立即" || text*="马上" || text*="并" || text*="现在" || text*="立刻" || text*="抢先" || text*="在线")&&(text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验")) || text="更新" || text="下载" || text="安装" || text="升级" || text="确定" || text="好,升级") && text.length<6]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0 && width>0][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid^="close" || vid^="Close" || vid^="closeIv" || vid*="_close" || vid*="_Close" || vid$="close" || vid$="Close" || vid$="cancel" || vid$="Cancel" || vid$="cancle" || vid$="Cancle"]',
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
    order: utils.YOUNG_ORDER,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0 && width>0][((text*="青少年" || text*="未成年") && text*="模式" || text*="儿童模式") && text.length<15 || ((desc*="青少年" || desc*="未成年") && desc*="模式") && desc.length<15]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0 && width>0][text*="知道了" || text*="关闭" || text="我已知晓" || desc*="知道了" || desc*="关闭"]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
];
export default globalGroups;
