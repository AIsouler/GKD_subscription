import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dataoke.union',
  name: '大淘客联盟',
  groups: [
    {
      key: 1,
      name: '通知提示-请求消息通知弹窗',
      desc: '点击取消',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[text="取消"] <<n [id="com.dataoke.union:id/parentPanel"] [text^="你还没有打开通知哦"]',
      snapshotUrls: 'https://i.gkd.li/import/13446826',
    },
  ],
});
