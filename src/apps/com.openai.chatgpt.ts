import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.openai.chatgpt',
  name: 'ChatGPT',
  groups: [
    {
      key: 1,
      name: '通知提示-套餐限额提示',
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '[text*="套餐限额"] + @View[clickable=true] > [desc="关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24996012',
        },
      ],
    },
  ],
});
