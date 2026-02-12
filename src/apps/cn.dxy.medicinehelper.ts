import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.medicinehelper',
  name: '用药助手',
  groups: [
    {
      key: 1,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cn.dxy.medicinehelper.activity.MainComposeActivity',
          matches: '[vid="blankForClose"] + [vid="iv_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告',
      rules: [
        {
          key: 0,
          activityIds:
            'cn.dxy.medicinehelper.article.dailylearn.DailyLearnComposeActivity',
          matches: '[text="去学习"] + [text^="+"][text$="丁当"]',
          snapshotUrls: 'https://i.gkd.li/i/25246837',
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          key: 0,
          activityIds: [
            '.article.dailylearn.DailyLearnComposeActivity',
            'cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity',
            'cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity',
          ],
          matches: ['[text="展开"][visibleToUser=true]'],
          snapshotUrls: [
            'https://i.gkd.li/i/25246982', //展开完整信息
            'https://i.gkd.li/i/25247361',
            'https://i.gkd.li/i/25247525',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-药品说明书-表格全屏自动横屏观看',
      rules: [
        {
          key: 0,
          activityIds:
            'cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity',
          matches: '@TextView[text="横屏"]',
          snapshotUrls: 'https://i.gkd.li/i/25247591',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity',
          matches:
            '[text*="有帮助吗"] + [text*="参与反馈"] +n ImageView[clickable=true][width<100 && height<100]',
          snapshotUrls: 'https://i.gkd.li/i/25247634',
        },
        {
          key: 1,
          activityIds:
            'cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width<102 && height<102] - View < View[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/25247624',
        },
        {
          key: 2,
          activityIds:
            'cn.dxy.drugscomm.business.guide.detail.GuideDetailComposeActivity',
          matches:
            '@ImageView[desc="用药助手"][clickable=true][visibleToUser=true][width<102 && height<102] - ImageView < View[childCount=5]',
          snapshotUrls: 'https://i.gkd.li/i/25247659',
        },
      ],
    },
  ],
});
