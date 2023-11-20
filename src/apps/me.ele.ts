import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.ele',
  name: '饿了么',
  deprecatedKeys: [3],
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
      name: '版本更新',
      quickFind: true,
      // matchTime: 10000, 部分更新提示不在10s内
      actionMaximum: 1,
      resetMatch: 'app',
      matchDelay: 3000,
      rules:
        '[text*="更新应用版本"] < ScrollView + [text="取消"][focusable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12650280',
        'https://i.gkd.li/import/13206819',
      ],
    },
    {
      key: 2,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.component.webcontainer.view.AppUCWebActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.application.ui.GeneralSettingsActivity',
            'me.ele.shopdetailv2.ShopDetailV2Activity',
          ],
          matches:
            '[id="me.ele:id/id_magex_mistview"][childCount=2] > ViewGroup + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12650238',
            'https://i.gkd.li/import/13294893',
            'https://i.gkd.li/import/13331361',
            'https://i.gkd.li/import/13362974',
            'https://i.gkd.li/import/13376008',
          ],
        },
        {
          key: 1,
          name: '红包弹窗2',
          activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
          matches: '[desc$="今日红包"] +(n) [desc$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12650713',
        },
      ],
    },
    {
      key: 4,
      name: '活动弹窗',
      rules: [
        {
          key: 1,
          name: '天天特价',
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity',
          ],
          matches:
            '[id="me.ele:id/id_magex_mistview"][childCount=2] > ImageView + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12726709',
            'https://i.gkd.li/import/13362878',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '付款后广告弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13205301',
    },
    {
      key: 6,
      name: '吃货卡续费弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
      rules: '@View + View >2 [text="买校园版超级吃货卡"]',
      snapshotUrls: 'https://i.gkd.li/import/13295007',
    },
  ],
});
