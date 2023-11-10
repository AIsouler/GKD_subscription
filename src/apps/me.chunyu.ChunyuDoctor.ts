import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.chunyu.ChunyuDoctor',
  name: '春雨医生',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'me.chunyu.ChunyuDoctor.Activities.WelcomeActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[id="me.chunyu.ChunyuDoctor:id/tv_ad_label"] +(2) [id="me.chunyu.ChunyuDoctor:id/welcome_tv_timer"][text^="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12661722',
            'https://i.gkd.li/import/12661937',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '应用评分弹窗',
      activityIds: [
        'me.chunyu.ChunyuDoctor.Activities.WelcomeActivity',
        'me.chunyu.ChunyuDoctor.Activities.MainActivity',
      ],
      rules: [
        {
          matches:
            '[text="给应用评分"] +(2) RelativeLayout > [text="下次再说"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12661907',
            'https://i.gkd.li/import/12661924',
          ],
        },
      ],
    },
  ],
});
