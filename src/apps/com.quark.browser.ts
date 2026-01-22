import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克浏览器',
  groups: [
    {
      key: 2,
      name: '其他-设置默认浏览器提示',
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ucpro.BrowserActivity',
          matches: '@Button[text="取消"] + Button[text="去设置"]',
          snapshotUrls: 'https://i.gkd.li/i/13249469',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      desc: '点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches: [
            '[text*="版本更新" || text^="优化升级" || text^="发现新版本"]',
            '[text="取消" || text="暂不更新"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13292512',
            'https://i.gkd.li/i/13455360',
            'https://i.gkd.li/i/24786251',
            'https://i.gkd.li/i/16643051', // 避免误触
          ],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13292571',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            '[vid="ad_close_layout_container" || vid="rel_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/77db7983-bfe0-4701-a580-d5d77a017624',
          snapshotUrls: [
            'https://i.gkd.li/i/21967140',
            'https://i.gkd.li/i/21967204',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches:
            '[vid="append_element_view_remove_ad_ll"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3a89486e-83c4-4032-bc07-4531921c9d09',
          snapshotUrls: 'https://i.gkd.li/i/21967126',
        },
      ],
    },
  ],
});
