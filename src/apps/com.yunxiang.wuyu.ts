import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yunxiang.wuyu',
  name: '特狗APP',
  groups: [
    {
      key: 2,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yunxiang.wuyu.MainActivity',
      rules: '[desc^="人生嘛"] +4 ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13455634',
    },
    {
      key: 3,
      name: '全屏广告-广告弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yunxiang.wuyu.MainActivity',
      rules: [
        {
          name: '【x】型',
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13455628',
        },
        {
          name: '【跳过】型',
          matches: [
            'TextView[text="广告"]',
            '@ViewGroup > TextView[text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13455629',
        },
      ],
    },
  ],
});
