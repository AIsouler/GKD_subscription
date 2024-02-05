import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          ],
          matches: '[id="com.klcxkj.zqxy:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13195649',
            'https://i.gkd.li/import/12781415',
          ],
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.klcxkj.zqxy.ui.main.MainActivity',
            'com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity',
          ],
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/import/12781461', //腾讯-1，原'ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
            'https://i.gkd.li/import/13488673',
            'https://i.gkd.li/import/13546464', //腾讯-2，原'ImageView <(1,2) FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
            'https://i.gkd.li/import/13071301',
            'https://i.gkd.li/import/13274836',
            'https://i.gkd.li/import/13274836', //腾讯-3，原'ImageView -n FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
            'https://i.gkd.li/import/13707849', //腾讯-4
          ],
        },
        {
          key: 4,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
        },
        {
          key: 5,
          name: '吉欣广告',
          activityIds: 'com.klcxkj.zqxy.ui.splash.SplashActivity',
          matches: '@ViewGroup < ViewGroup +2 ViewGroup > [text="吉欣广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13274838',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.klcxkj.zqxy.ui.device.drink.ble.DrinkingBleActivity',
          ],
          matches:
            '[id="com.klcxkj.zqxy:id/bathing_adv_layout"] >n FrameLayout[childCount=1] > ImageView',
          snapshotUrls: ['https://i.gkd.li/import/13488870'],
        },
      ],
    },
  ],
});
