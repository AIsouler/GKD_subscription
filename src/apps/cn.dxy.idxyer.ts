import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.idxyer',
  name: '丁香园',
  groups: [
    {
      key: 0,
      name: '局部广告-首页卡片广告',
      fastQuery: true,
      activityIds: '.biz.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="iv_image_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24851243',
            'https://i.gkd.li/i/24858118',
            'https://i.gkd.li/i/24868466',
            'https://i.gkd.li/i/24868496',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-找工作-预约直播卡片广告',
      fastQuery: true,
      activityIds: '.biz.job.JobHomeActivity',
      rules: [
        {
          key: 0,
          matches: '@ImageView <3 [vid="include_ad"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24858514',
            'https://i.gkd.li/i/24858531',
            'https://i.gkd.li/i/24868912',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-公开课-直播推荐窗口',
      fastQuery: true,
      activityIds: '.biz.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24852395',
            'https://i.gkd.li/i/24852398',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-开启通知权限',
      desc: '点击:x取消',
      fastQuery: true,
      activityIds: '.biz.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="iv_close_open_notification"]',
          snapshotUrls: 'https://i.gkd.li/i/24877703',
        },
      ],
    },
    {
      key: 4,
      name: '权限提示-开启悬浮小窗播放权限',
      desc: '点击取消',
      fastQuery: true,
      activityIds: '.common.WebViewActivity',
      rules: [
        {
          key: 0,
          matches: ['[text="开启悬浮小窗播放功能"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/24865283',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-丁香园安全中心-自动点击继续访问',
      activityIds: '.common.OuterWebViewActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '@Button',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/24845324',
            'https://i.gkd.li/i/24868816',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-病例讨论-自动点击查看答案',
      activityIds: [
        '.biz.post.PostDetailActivity',
        '.biz.post.ShowAnswerActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击查看答案按钮',
          matches: [
            '@Button[clickable=true][focusable=true][width<200 && height<80][text=" 查看答案"]',
          ],
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/24857800',
            'https://i.gkd.li/i/24864697',
            'https://i.gkd.li/i/24875801',
            'https://i.gkd.li/i/24875832',
            'https://i.gkd.li/i/24900598', //会出现没看到查看答案却提前点击情况。。。
          ],
        },
        {
          preKeys: [1],
          name: '执行返回操作',
          matches: '@ImageButton < [vid="toolbar"]',
          action: 'back',
          snapshotUrls: [
            'https://i.gkd.li/i/24858066',
            'https://i.gkd.li/i/24900979',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-讨论区详情-自动点击查看答案',
      fastQuery: true,
      activityIds: [
        '.biz.post.CommentDetailActivity',
        '.biz.post.ShowAnswerActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击查看答案按钮',
          matches:
            '@Button[text=" 查看答案"][clickable=true][width<200 && height<80]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/i/24864724',
            'https://i.gkd.li/i/24875839',
            'https://i.gkd.li/i/24875836',
            'https://i.gkd.li/i/24900598', //会出现没看到查看答案却提前点击情况。。。
          ],
        },
        {
          preKeys: [1],
          name: '执行返回操作',
          matches: '@ImageButton < [vid="toolbar"]',
          action: 'back',
          snapshotUrls: [
            'https://i.gkd.li/i/24864772',
            'https://i.gkd.li/i/24900885',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '功能类-药品说明书-自动展开折叠部分',
      fastQuery: true,
      actionCd: 300,
      activityIds: [
        'cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[desc="展开"][clickable=true][width<60 && height<40][childCount=1]',
          action: 'clickCenter',
          actionCd: 300,
          actionMaximum: 8,
          snapshotUrls: [
            'https://i.gkd.li/i/24863642',
            'https://i.gkd.li/i/24863694',
            'https://i.gkd.li/i/24863719',
            'https://i.gkd.li/i/24863715',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-药品说明书-表格全屏自动横屏观看',
      fastQuery: true,
      actionMaximum: 4,
      actionCd: 10000,
      activityIds: ['cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity'],
      rules: [
        {
          key: 0,
          matches: '@TextView[text="横屏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24860315',
            'https://i.gkd.li/i/24860318',
            'https://i.gkd.li/i/24868736',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-自动点击查看原图',
      fastQuery: true,
      activityIds: '.common.image.GalleryActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="iv_item_bottom_ll"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24865469',
            'https://i.gkd.li/i/24865435',
            'https://i.gkd.li/i/24865429',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '功能类-📋病例视频自动慢速x0.5_选你想要的但不要多选!',
      desc: '适合CT,MRI影像学深入分析',
      actionMaximum: 1,
      //activityIds: ['.biz.post.PostDetailActivity'], //考虑视频不止在一个界面id
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches:
            '@Button[text="Playback Rate"][clickable=true][width<80 && height<67]',
        },
        {
          key: 1,
          name: '使用x0.5',
          preKeys: [0],
          action: 'clickCenter',
          matches: '@MenuItem[text="0.5x"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24865795',
            'https://i.gkd.li/i/24865666',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-📋病例视频自动慢速x0.8_选你想要的但不要多选!',
      desc: '适合CT,MRI影像学深入分析',
      actionMaximum: 1,
      //activityIds: ['.biz.post.PostDetailActivity'], //考虑视频不止在一个界面id
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches:
            '@Button[text="Playback Rate"][clickable=true][width<80 && height<67]',
        },
        {
          key: 1,
          name: '使用x0.8',
          preKeys: [0],
          action: 'clickCenter',
          matches: '@MenuItem[text="0.8x"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24865795',
            'https://i.gkd.li/i/24865666',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '功能类-📋病例视频自动倍速x1.5_选你想要的但不要多选!',
      desc: '提高观看效率',
      actionMaximum: 1,
      //activityIds: ['.biz.post.PostDetailActivity'], //考虑视频不止在一个界面id
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches:
            '@Button[text="Playback Rate"][clickable=true][width<80 && height<67]',
        },
        {
          key: 1,
          name: '使用x1.5',
          preKeys: [0],
          action: 'clickCenter',
          matches: '@MenuItem[text="1.5x"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24865795',
            'https://i.gkd.li/i/24865666',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '功能类-📋病例视频自动倍速x2.0_选你想要的但不要多选!',
      desc: '极限观看效率',
      actionMaximum: 1,
      //activityIds: ['.biz.post.PostDetailActivity'], //考虑视频不止在一个界面id
      rules: [
        {
          key: 0,
          name: '调出倍速栏',
          action: 'clickCenter',
          matches:
            '@Button[text="Playback Rate"][clickable=true][width<80 && height<67]',
        },
        {
          key: 1,
          name: '使用x2.0',
          preKeys: [0],
          action: 'clickCenter',
          matches: '@MenuItem[text="2x"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24865795',
            'https://i.gkd.li/i/24865666',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '功能类-📖课程视频自动倍速x1.2⚠️选你想要的但不要多选!',
      desc: '我们导师再也不卡壳啦',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: ['.openclass.biz.video.detail.VideoDetailActivity'],
      rules: [
        {
          key: 0,
          matches: '[vid="play_speed"]',
          action: 'click',
          snapshotUrls: 'https://i.gkd.li/i/24866929',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-📖课程视频自动倍速x1.5⚠️选你想要的但不要多选',
      desc: '显著提高讲师效率',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: ['.openclass.biz.video.detail.VideoDetailActivity'],
      snapshotUrls: 'https://i.gkd.li/i/24866929',
      rules: [
        {
          key: 0,
          name: '第一次点击',
          matches: '[vid="play_speed"]',
          action: 'click',
          actionDelay: 100,
        },
        {
          key: 1,
          name: '第二次点击',
          preKeys: [0],
          matches: '[vid="play_speed"]',
          action: 'click',
          actionDelay: 100,
        },
      ],
    },
    {
      key: 17,
      name: '功能类-📖课程视频自动倍速x2.0⚠️选你想要的但不要多选',
      desc: '导师讲到冒烟不带停',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: ['.openclass.biz.video.detail.VideoDetailActivity'],
      snapshotUrls: 'https://i.gkd.li/i/24866758',
      rules: [
        {
          key: 0,
          name: '第一次点击',
          matches: '[vid="play_speed"]',
          action: 'click',
          actionDelay: 100,
        },
        {
          key: 1,
          name: '第二次点击',
          preKeys: [0],
          matches: '[vid="play_speed"]',
          action: 'click',
          actionDelay: 100,
        },
        {
          key: 2,
          name: '第三次点击',
          preKeys: [1],
          matches: '[vid="play_speed"]',
          action: 'click',
        },
      ],
    },
  ],
});
