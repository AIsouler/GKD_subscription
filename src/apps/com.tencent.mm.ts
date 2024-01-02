import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      enable: false,
      key: 0,
      name: '朋友圈广告',
      desc: '点击广告卡片右上角广告,直接关闭/出现菜单,确认关闭',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            'ImageView - TextView[text="广告"][clickable=true][id!=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642588',
            'https://i.gkd.li/import/12888129', //ImageView - TextView[text="广告"][id!=null][index=0]这个规则无法匹配该广告，需要删除[index=0]
            'https://i.gkd.li/import/12907641',
            'https://i.gkd.li/import/13000395',
          ],
        },
        // 以下是[确认关闭按钮]出现的情况
        // 情况1 - 你觉得这条广告怎么样->直接关闭
        {
          preKeys: 0,
          key: 1,
          name: '你觉得这条广告怎么样-点击[关闭该广告]',
          matches:
            '@LinearLayout[clickable=true][childCount=2] > [text="关闭该广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12642584'],
        },
        {
          preKeys: 1,
          key: 2,
          name: '关闭该广告的原因-点击[直接关闭]',
          matches: '[text="关闭该广告的原因"] +(2) [text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12663984'],
        },
        // 情况2 - 关闭该广告
        {
          preKeys: 0,
          key: 3,
          name: '对这条广告不感兴趣-点击[关闭该广告]',
          matches:
            'TextView[text="你可以这样优化广告推荐"] + TextView[text="关闭该广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12907642',
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '朋友圈广告-英文版',
      desc: '点击广告卡片右上角[Sponsored],直接关闭/出现菜单点击[Close the ad],确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角[Sponsored]',
          matches:
            'ImageView - TextView[text="Sponsored"][clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12905837',
        },
        // 以下是[确认关闭按钮]出现的情况
        // 情况1 - 你觉得这条广告怎么样->直接关闭
        {
          preKeys: 0,
          key: 1,
          name: 'Sponsored story-点击[Close the ad]',
          matches:
            '@LinearLayout[clickable=true][childCount=2] > TextView[text="Close the ad"]',
          snapshotUrls: 'https://i.gkd.li/import/12905838',
        },
        {
          preKeys: 1,
          key: 2,
          name: 'Reason for closing the ad - 点击[Close]',
          matches: '[text="Reason for closing the ad"] +(2) [text="Close"]',
          snapshotUrls: 'https://i.gkd.li/import/12905846',
        },
      ],
    },
    {
      // Key1,2,3,4,11 均为授权类的规则
      enable: false,
      key: 1,
      name: '电脑微信快捷自动登录',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        '.plugin.webwx.ui.ExtDeviceWXLoginUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
        'https://i.gkd.li/import/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
      ],
    },
    {
      enable: false,
      key: 2,
      name: '浏览器扫码微信登录自动授权',
      desc: '自动允许使用头像昵称等',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13065462', //com.tencent.mm.ui.LauncherUI
    },
    {
      enable: false,
      key: 3,
      name: '第三方APP申请使用授权弹窗',
      desc: '自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.base.stub.UIEntryStub'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/12663602',
    },
    {
      enable: false,
      key: 4,
      name: '微信读书网页版扫码登录自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/import/12506197',
        },
        {
          matches: [
            '[text="登录成功"]',
            '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12506201',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '微信红包自动领取',
      desc: '自动领取私聊红包,群聊红包',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/32cfda78-b2e1-456c-8d85-bfb2bc4683aa',
      rules: [
        {
          name: '从红包结算界面返回',
          preKeys: [1, 2],
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: 'https://i.gkd.li/import/12567696',
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12567697',
            'https://i.gkd.li/import/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
          ],
        },
        {
          key: 2,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          // 第一个 LinearLayout[childCount=1] 区分是自己发的红包还是别人发的
          // 第二个 LinearLayout[childCount=1] 区分这个红包是否被领取过
          matches:
            'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12567637',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '订阅号文章广告',
      desc: '⚠ 此规则有概率误触。自动点击关闭按钮，必须同时启用【订阅号文章广告反馈】规则',
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
      ],
      rules: [
        {
          key: 1,
          name: '广告类型1',
          matches: [
            'View[id="ad_container"] > View[childCount=1] >n @View > [id=null][text^="广告"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/import/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/import/12646837', // 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://i.gkd.li/import/12678937', // 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://i.gkd.li/import/12714427', // 优化规则，使用 View[id="ad_container"] 作为特征节点
          ],
        },
        {
          key: 2,
          name: '广告类型2',
          matches:
            'View[childCount=1] > @[id="feedbackTagContainer"][visibleToUser=true] > [id="feedbackTag"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700183',
            'https://i.gkd.li/import/12701503', // 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://i.gkd.li/import/12714424',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12686641', // 未选中
            'https://i.gkd.li/import/12840865', // 未选中
            'https://i.gkd.li/import/12686640', // 已选中
          ],
        },
      ],
    },
    {
      enable: false,
      key: 8,
      name: '订阅号文章广告反馈',
      desc: '⚠ 此规则有概率误触。自动点击反馈理由，配合【订阅号文章广告】规则使用',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
      rules: [
        {
          key: 1,
          // preKeys: [1], 取消 preKeys 提高点击成功率
          name: '点击不感兴趣',
          matches:
            'View > [id="feedbackTagContainer"][visibleToUser=true] + [id^="menu"] > [id="dislike"][text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642234',
            'https://i.gkd.li/import/12722301',
            'https://i.gkd.li/import/12722331', // 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
          ],
          action: 'clickCenter', // 使用 clickCenter 事件点击，期望在快照 https://i.gkd.li/import/12745280 中成功点击 [与我无关]
        },
        {
          key: 2,
          // preKeys: [2], 取消 preKeys 提高点击成功率
          name: '点击与我无关',
          matches: 'View > [id^="menu"] > [id="isdismatch"][text="与我无关"]',
          snapshotUrls: ['https://i.gkd.li/import/12642238'],
        },
        {
          key: 3,
          name: '点击关闭此广告',
          matches: 'TextView[id="closeBtn"][text="关闭此广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12700191',
        },
      ],
    },
    {
      enable: false,
      key: 9,
      name: '自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13523031',
    },
    {
      key: 10,
      name: '微信小程序-开屏广告',
      quickFind: true,
      matchTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      // resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            'FrameLayout > TextView + FrameLayout > TextView[text="广告"]',
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12701979',
            'https://i.gkd.li/import/12777076',
            'https://i.gkd.li/import/12785012',
            'https://i.gkd.li/import/12785183',
            'https://i.gkd.li/import/13306883',
            'https://i.gkd.li/import/12785246',
            'https://i.gkd.li/import/13407275',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '网页版文件传输助手扫码自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/import/12793745',
    },
    {
      enable: false,
      key: 13,
      name: '提瓦特助手小程序-弹窗广告',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          matches: [
            'RelativeLayout[childCount=1][clickable=true] > [text="提瓦特小助手"]',
            'FrameLayout[childCount=5] + FrameLayout[childCount=2] >2 FrameLayout[childCount=1]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12926021',
        },
        {
          key: 1,
          matches: [
            'FrameLayout > FrameLayout > FrameLayout > TextView[text="广告"]',
            'FrameLayout[childCount=6] + FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13459614',
        },
      ],
    },
    {
      enable: false,
      key: 14,
      name: '小程序-内部广告',
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI'],
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '【广告】0',
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/import/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
        },
        {
          key: 1,
          name: '【广告】1',
          matches: 'Image[text="feedback_icon"] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13378208',
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200044',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200048',
        },
      ],
    },
    {
      enable: false,
      key: 16,
      name: '小程序-京东购物',
      desc: '低价包邮广告',
      actionDelay: 500,
      actionMaximum: 1,
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
      ],
      rules: {
        matches: '@Image -n * > View[text="可横向滚动"]',
        action: 'clickCenter',
        snapshotUrls: [
          'https://i.gkd.li/import/13298294', //com.tencent.mm.plugin.appbrand.ui.AppBrandUI01
          'https://i.gkd.li/import/13327022', //com.tencent.mm.plugin.appbrand.ui.AppBrandUI00
        ],
      },
    },
    {
      key: 17,
      name: '青少年模式弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.tencent.mm.plugin.finder.ui.FinderSelfUI',
        'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules:
        'TextView[text^="为呵护未成年人健康成长，微信推出青少年模式"] +2 Button[text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13538145',
        'https://i.gkd.li/import/13575195', //activityIds: 'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI'
      ],
    },
    {
      key: 18,
      name: '青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > [text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/import/13588338',
        },
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: ['View[text="申请今天临时访问"]', 'View[desc="验证密码"]'],
          snapshotUrls: 'https://i.gkd.li/import/13631987',
        },
      ],
    },
    {
      key: 19,
      name: '订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          name: '8.0.44以下',
          quickFind: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '[text="展开更早的消息"] < [id="com.tencent.mm:id/aqc"]',
          snapshotUrls: 'https://i.gkd.li/import/13790550',
        },
        {
          key: 1,
          name: '8.0.44',
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/import/13790949',
        },
      ],
    },
  ],
});
