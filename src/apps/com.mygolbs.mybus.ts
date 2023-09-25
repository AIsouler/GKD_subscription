import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【取消】',
      activityIds: 'com.mygolbs.mybus.defines.CustomDialog',
      rules: [
        {
          matches: [
            '[text$="开启通知权限"]',
            '@[id="com.mygolbs.mybus:id/view_neg"] > [text="取消"]',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12715980',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '签到成功弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.mygolbs.mybus.guligold.SignSuccessActivity',
      rules:
        '@[id="com.mygolbs.mybus:id/iv_close"] < RelativeLayout - LinearLayout >n [text="签到成功"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716035',
    },
  ],
});
