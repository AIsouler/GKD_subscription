import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.translator',
  name: '有道翻译官',
  groups: [
    {
      key: 1,
      name: '局部广告-翻译界面-结果下方广告',
      desc: '点击卡片广告右上角x',
      quickFind: true,
      activityIds: ['com.youdao.translator.activity.trans.TransResultActivity'],
      rules: [
        {
          matches:
            '@ImageView[id="com.youdao.translator:id/close_iv"] + [id="com.youdao.translator:id/native_ad_flag_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/13259910',
        },
      ],
    },
  ],
});
