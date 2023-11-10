import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.guancha.app',
  name: '观察者',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏右上角“跳过”按钮',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'cn.guancha.app.ui.activity.WelcomeActivity',
      rules: [
        {
          matches: 'TextView[id="cn.guancha.app:id/tv_jump_btn"][text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12907063',
        },
      ],
    },
  ],
});
