import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chaozh.iReaderFree',
  name: '掌阅',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.chaozh.iReader.ui.activity.WelcomeActivity',
      rules:
        'RelativeLayout[childCount=1] > [text^="跳过"][text.length<=4][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12872346',
    },
  ],
});
