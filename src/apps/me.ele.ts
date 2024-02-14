import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.ele',
  name: '饿了么',
  deprecatedKeys: [3],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      // matchTime: 10000, 部分更新提示不在10s内
      actionMaximum: 1,
      resetMatch: 'app',
      // matchDelay: 3000, 想不起来为啥加的了，先删掉
      rules:
        '[text*="更新应用版本"] < ScrollView + [text="取消"][focusable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12650280',
        'https://i.gkd.li/import/13206819',
      ],
    },
    {
      key: 2,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          quickFind: true,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.component.webcontainer.view.AppUCWebActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.application.ui.GeneralSettingsActivity',
            'me.ele.shopdetailv2.ShopDetailV2Activity',
          ],
          matches:
            '[id="me.ele:id/id_magex_mistview"] >n ViewGroup + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12650238',
            'https://i.gkd.li/import/13294893',
            'https://i.gkd.li/import/13331361',
            'https://i.gkd.li/import/13362974',
            'https://i.gkd.li/import/13376008',
            'https://i.gkd.li/import/13710581',
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
      name: '全屏广告-活动弹窗',
      quickFind: true,
      rules: [
        {
          key: 1,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] - ImageView < [id="me.ele:id/id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/import/12726709',
            'https://i.gkd.li/import/13476719',
            'https://i.gkd.li/import/13523508',
            'https://i.gkd.li/import/13685037',
          ],
        },
        {
          key: 2,
          activityIds: ['me.ele.application.ui.Launcher.LauncherActivity'],
          matches:
            '[id="me.ele:id/fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
          snapshotUrls: [
            'https://i.gkd.li/import/13476611',
            'https://i.gkd.li/import/13523541',
          ],
        },
        {
          key: 3,
          activityIds: ['me.ele.application.ui.Launcher.LauncherActivity'],
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13710574',
            'https://i.gkd.li/import/13710591',
          ],
        },
        {
          key: 4,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '@ImageView <2 [vid="id_magex_mistview"]',
          snapshotUrls: 'https://i.gkd.li/import/14050401',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-付款后广告弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13205301',
    },
    {
      key: 6,
      name: '全屏广告-吃货卡续费弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
      rules: '@View + View >2 [text="买校园版超级吃货卡"]',
      snapshotUrls: 'https://i.gkd.li/import/13295007',
    },
    {
      key: 7,
      name: '局部广告-首页底部浮窗广告',
      activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
      rules:
        'LinearLayout >n FrameLayout >n ViewGroup[childCount=3] + ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13710588',
    },
    {
      key: 8,
      name: '定位提示',
      desc: '自动点击X',
      enable: false,
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13710588',
        },
        {
          key: 1,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
          snapshotUrls: 'https://i.gkd.li/import/13710585',
        },
      ],
    },
    {
      key: 9,
      quickFind: true,
      name: '通知提示-获取订单信息通知',
      desc: '点击X',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
          snapshotUrls: 'https://i.gkd.li/import/13931205',
        },
      ],
    },
  ],
});
