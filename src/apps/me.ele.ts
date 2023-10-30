import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="me.ele:id/skip_button"]',
      snapshotUrls: 'https://i.gkd.li/import/12534930',
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchDelay: 3000,
      rules:
        '[text*="更新应用版本"] < ScrollView + [text="取消"][focusable=true]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12650280',
        'https://gkd-kit.gitee.io/import/13206819',
      ],
    },
    {
      enable: false,
      key: 2,
      name: '开屏红包弹窗',
      activityIds: 'me.ele.component.pops2.Pops2MistDialog',
      rules:
        '@ImageView[id=null][clickable=true] - ViewGroup >(5) ViewGroup[childCount=5]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12650238',
    },
    {
      enable: false,
      key: 3,
      name: '超市便利页面-红包弹窗',
      activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
      rules: '[desc$="今日红包"] +(n) [desc$="关闭"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12650713',
    },
    {
      key: 4,
      name: '首页活动弹窗',
      activityIds: 'me.ele.component.pops2.Pops2MistDialog',
      rules:
        '[id="me.ele:id/id_magex_mistview"] > ImageView + ImageView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12726709',
    },
    {
      key: 5,
      name: '付款后广告弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13205301',
    },
  ],
});
