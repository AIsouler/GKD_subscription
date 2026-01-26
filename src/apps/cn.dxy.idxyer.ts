import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.idxyer',
  name: '丁香园',
  groups: [
    {
      key: 0,
      name: '全屏广告-公开课-直播推荐窗口',
      fastQuery: true,
      activityIds: ['.biz.main.MainActivity'],
      rules: [
        {
          matches: [
            '@ImageView[clickable=true][childCount=0][text=null][desc=null][visibleToUser=true][width<80 && height<80] <<n ViewGroup < FrameLayout',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24852395',
            'https://i.gkd.li/i/24852398',
          ],
        },
      ],
    },
    {
      key: 1,      
      name: '局部广告-找工作-预约直播卡片广告',
      fastQuery: true,
      activityIds: ['.biz.job.JobHomeActivity'],
      rules: [
        {
          matches: '@TextView[width<32 && height<32][clickable=true][focusable=true][index=1] < ViewGroup',
          snapshotUrls: [
            'https://i.gkd.li/i/24858514',
            'https://i.gkd.li/i/24858531',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页卡片广告',
      fastQuery: true,
      activityIds: ['.biz.main.MainActivity'],
      rules: [
        {
          matches: '@ImageView[clickable=true][childCount=0][text=null][desc=null][visibleToUser=true][width<50 && height<50] <<n FrameLayout < RecyclerView',
          snapshotUrls: [
            'https://i.gkd.li/i/24851243',
            'https://i.gkd.li/i/24858118',
          ]
        },
      ],
    },
    {
      key: 3,
      name: "功能类-丁香园安全中心-自动点击继续访问",
      fastQuery: true,
      matchRoot: true,
      activityIds: ['.common.OuterWebViewActivity'],
      rules: [
        {
          matches: [
            '[text="你即将离开丁香园，请注意你的帐号和财产安全"]',
            '[text="继续访问"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24845324',
        },
      ],
    },
    {
      key: 4,
      name: "功能类-病例讨论-自动点击查看答案",
      fastQuery: true,
      activityIds: ['.biz.post.PostDetailActivity'],
      rules: [
        {
          key: 0,
          name: "点击查看答案按钮",
          matches: '@Button[clickable=true][focusable=true][width<200 && height<80][text=" 查看答案"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24857800',
            'https://i.gkd.li/i/24864697',
          ]
        },
        {
          key: 1,
          name: "执行返回操作",
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/24858066',
        },
      ],
    },
    {
      key: 5,
      name: "功能类-讨论评论区详情-自动点击查看答案",
      fastQuery: true,
      activityIds: ['.biz.post.PostDetailActivity'],
      rules: [
        {
          key: 0,
          name: "点击查看答案按钮",
          matches: '@Button[text=" 查看答案"][clickable=true][width<200 && height<80]',
          snapshotUrls: 'https://i.gkd.li/i/24864724',
        },
        {
          key: 1,
          name: "执行返回操作",
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/24864772',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-药品说明书-自动展开折叠部分',
      fastQuery: true,
      matchRoot: true, //考虑套Web情况，概率性无法识别?
      activityIds: ['cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity'],
      rules: [
        {
          matches: '[desc="展开"][clickable=true][width<60 && height<40][childCount=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/24863642', //40%概率无法获得完整信息树-概率性or权限?
            'https://i.gkd.li/i/24863694', //以下正常...
            'https://i.gkd.li/i/24863719',
            'https://i.gkd.li/i/24863715',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-药品说明书-表格全屏自动横屏观看',
      fastQuery: true,
      activityIds: ['cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity'],
      rules: [
        {
          matches: '@TextView[text="横屏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24860315',
            'https://i.gkd.li/i/24860318',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-药品说明书-表格全屏自动横屏观看',
      fastQuery: true,
      activityIds: ['cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity'],
      rules: [
        {
          matches: '@TextView[text="横屏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24860315',
            'https://i.gkd.li/i/24860318',
          ],
        },
      ],
    },
  ],
});
