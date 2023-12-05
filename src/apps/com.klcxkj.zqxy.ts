import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.klcxkj.zqxy',
  name: '趣智校园',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
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
          name: '腾讯广告-1',
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            'ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12781461',
            'https://i.gkd.li/import/13488673',
          ],
        },
        {
          key: 2,
          name: '腾讯广告-2',
          activityIds: 'com.klcxkj.zqxy.ui.main.MainActivity',
          matches:
            'ImageView <(1,2) FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13546464',
            'https://i.gkd.li/import/13071301',
            'https://i.gkd.li/import/13274836',
          ],
        },
        {
          key: 3,
          name: '腾讯广告-3',
          activityIds:
            'com.klcxkj.zqxy.ui.device.apartment.ble.BathingBleActivity',
          matches:
            'ImageView -n FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13274836',
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
      name: '横幅广告',
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
