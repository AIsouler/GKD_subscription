import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.openai.chatgpt',
  name: 'ChatGPT',
  groups: [
    {
      key: 1,
      name: '通知提示',
      rules: [
        {
          key: 0,
          desc: 'GPT免费额度用尽底部悬浮提示',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="获取 Plus"] < View[index=2] - View[index=1] > [desc="关闭"][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/i/24996012'
        },
      ],
    },
  ],
});
