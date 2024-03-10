import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  deprecatedKeys: [12, 20],
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击广告卡片右上角,直接关闭/出现菜单,确认关闭',
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      ],
      rules: [
        {
          key: -1,
          name: '点击广告卡片右上角',
          position: {
            left: 'width * 0.0569',
            top: 'width * 0.9083',
          },
          quickFind: true,
          excludeMatches:
            '@LinearLayout[clickable=true] > [text="广告" || text="Sponsored" || text="廣告"]',
          matches: '@RelativeLayout >7 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/829e1b0b-9fa2-4a31-9c36-542ad6bd7b6e',
          snapshotUrls: 'https://i.gkd.li/i/14476135',
        },
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            '@LinearLayout[clickable=true] > [text="广告" || text="Sponsored" || text="廣告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13000395', // text="广告"
            'https://i.gkd.li/i/12905837', // text="Sponsored"
            'https://i.gkd.li/i/13791200', // text="廣告"
          ],
        },
        // 以下是只出现二段的情况
        {
          preKeys: [-1, 0],
          key: 1,
          name: '点击关闭',
          quickFind: true,
          matches: '[text^="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12907642', // text="关闭该广告"
            'https://i.gkd.li/i/13926578', // text="关闭广告"
          ],
        },
        {
          preKeys: [-1, 0],
          key: 2,
          name: '点击"Close the ad"',
          quickFind: true,
          matches: '[text="Close the ad"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14207480',
        },
        {
          preKeys: [-1, 0],
          key: 3,
          name: '点击"關閉此廣告"',
          quickFind: true,
          matches: '[text="關閉此廣告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13791202',
        },

        // 预留key
        // 以下是出现三段的情况
        {
          preKeys: [-1, 0],
          key: 50,
          name: '点击"关闭该广告"',
          matches: '@LinearLayout[clickable=true] > [text="关闭该广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12642584',
        },
        {
          // 第三段
          preKeys: 50,
          key: 51,
          name: '点击"直接关闭"',
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12663984',
        },
        {
          preKeys: [-1, 0],
          key: 52,
          name: '点击"Close the ad"',
          matches: '@LinearLayout[clickable=true] > [text="Close the ad"]',
          snapshotUrls: 'https://i.gkd.li/i/12905838',
        },
        {
          // 第三段
          preKeys: 52,
          key: 53,
          name: '点击"Close"',
          matches: '[text="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12905846',
        },
      ],
    },
    {
      // Key1,2,3,4,11 均为授权类的规则
      key: 1,
      name: '功能类-电脑微信快捷自动登录',
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
        'https://i.gkd.li/i/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
        'https://i.gkd.li/i/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
      ],
    },
    {
      key: 2,
      name: '功能类-浏览器扫码微信登录自动授权',
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
      snapshotUrls: 'https://i.gkd.li/i/13065462', //com.tencent.mm.ui.LauncherUI
    },
    {
      key: 3,
      name: '功能类-第三方APP申请使用授权弹窗',
      desc: '自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.base.stub.UIEntryStub'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/i/12663602',
    },
    {
      key: 4,
      name: '功能类-微信读书网页版扫码登录自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
        },
        {
          matches: [
            '[text="登录成功"]',
            '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506201',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-微信红包自动领取',
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
          snapshotUrls: 'https://i.gkd.li/i/12567696',
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12567697',
            'https://i.gkd.li/i/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
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
          snapshotUrls: 'https://i.gkd.li/i/12567637',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-订阅号文章广告',
      desc: '⚠ 此规则有概率误触。自动点击关闭按钮，必须同时启用"订阅号文章广告反馈"规则',
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        'com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI',
      ],
      rules: [
        {
          key: 1,
          name: '广告类型1',
          matches: [
            'View[id="ad_container"] > View[childCount=1] >n @View > [id=null][text^="广告"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/i/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/i/12646837', // 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://i.gkd.li/i/12678937', // 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://i.gkd.li/i/12714427', // 优化规则，使用 View[id="ad_container"] 作为特征节点
            'https://i.gkd.li/i/14006180', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
          ],
        },
        {
          key: 2,
          name: '广告类型2',
          matches:
            'View[childCount=1] > @[id="feedbackTagContainer"][visibleToUser=true] > [id="feedbackTag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700183',
            'https://i.gkd.li/i/12701503', // 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://i.gkd.li/i/12714424',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
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
            'https://i.gkd.li/i/12686641', // 未选中
            'https://i.gkd.li/i/12840865', // 未选中
            'https://i.gkd.li/i/12686640', // 已选中
          ],
        },
      ],
    },
    {
      key: 8,
      name: '分段广告-订阅号文章广告反馈',
      desc: '⚠ 此规则有概率误触。自动点击反馈理由，配合"订阅号文章广告"规则使用',
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        'com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI',
      ],
      rules: [
        {
          key: 1,
          // preKeys: [1], 取消 preKeys 提高点击成功率
          name: '点击不感兴趣',
          matches:
            'View > [id="feedbackTagContainer"][visibleToUser=true] + [id^="menu"] > [id="dislike"][text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642234',
            'https://i.gkd.li/i/12722301',
            'https://i.gkd.li/i/12722331', // 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
            'https://i.gkd.li/i/14006203', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
          ],
          action: 'clickCenter', // 使用 clickCenter 事件点击，期望在快照 https://i.gkd.li/i/12745280 中成功点击 [与我无关]
        },
        {
          key: 2,
          // preKeys: [2], 取消 preKeys 提高点击成功率
          name: '点击与我无关',
          matches: 'View > [id^="menu"] > [id="isdismatch"][text="与我无关"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642238',
            'https://i.gkd.li/i/14006206', // com.tencent.mm.plugin.webview.ui.tools.fts.MMSosWebViewUI
          ],
        },
        {
          key: 3,
          name: '点击关闭此广告',
          matches: 'TextView[id="closeBtn"][text="关闭此广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12700191',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13523031',
    },
    {
      key: 10,
      name: '全屏广告-微信小程序-开屏广告',
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
            'https://i.gkd.li/i/12701979',
            'https://i.gkd.li/i/12777076',
            'https://i.gkd.li/i/12785012',
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/12785246',
            'https://i.gkd.li/i/13407275',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '功能类-网页版文件传输助手扫码自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/i/12793745',
    },
    {
      key: 13,
      name: '全屏广告-提瓦特助手小程序-弹窗广告',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          matches: [
            'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >5 [text="查看详情"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12926021',
        },
        {
          key: 1,
          quickFind: true,
          matches:
            'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >4 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13459614',
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-小程序-内部广告',
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI'],
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '"广告"0',
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/i/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
        },
        {
          key: 1,
          name: '"广告"1',
          matches: 'Image[text="feedback_icon"] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13378208',
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因"不感兴趣"',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200044',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因"与我无关"',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200048',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-小程序-京东购物',
      desc: '低价包邮广告',
      actionDelay: 500,
      actionMaximum: 1,
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: {
        matches:
          'View[childCount=8] > View[index=6] > View[childCount=4] > Image[visibleToUser=true]',
        action: 'clickCenter',
        snapshotUrls: [
          'https://i.gkd.li/i/13298294',
          'https://i.gkd.li/i/14156176', // 误触快照
        ],
      },
    },
    {
      key: 17,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[text^="为呵护未成年人健康成长，微信推出青少年模式"] +2 Button[text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13538145',
        'https://i.gkd.li/i/13575195', //activityIds: 'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI'
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
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
          snapshotUrls: 'https://i.gkd.li/i/13588338',
        },
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: ['View[text="申请今天临时访问"]', 'View[desc="验证密码"]'],
          snapshotUrls: 'https://i.gkd.li/i/13631987',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          name: '8.0.44以下',
          quickFind: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '[text="展开更早的消息"] < [id="com.tencent.mm:id/aqc"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
        },
        {
          key: 1,
          name: '8.0.44',
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-小程序-同程旅行',
      desc: '首页弹窗广告',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
          matches:
            '@Image[visibleToUser=true] <2 View[childCount=2] -2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13999900',
        },
      ],
    },
    {
      key: 22,
      name: '功能类-开启青少年模式后的每日验证',
      desc: '点击"验证密码"',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            'WebView[childCount=6] View[index=4] > [text="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14050004',
        },
      ],
    },
    {
      key: 23,
      name: '全屏广告-小程序-粤省事-投资弹窗',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          matches: [
            '[text="粤省事码"]',
            'WebView >n View[childCount=2] + View > View[childCount=2] > TextView + TextView[id=null][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/101449500/4e808d65-d8f7-4140-a03f-e840bf1c374d',
          snapshotUrls: [
            'https://i.gkd.li/i/14113750',
            'https://i.gkd.li/i/14157089', //在此快照误触
          ],
        },
      ],
    },
    {
      key: 24,
      name: '全屏广告-小程序-青桔单车-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
          matches: 'WebView > View > View > View[childCount=2] > View + Image',
          snapshotUrls: 'https://i.gkd.li/i/14392363',
        },
      ],
    },
    {
      key: 25,
      name: '局部广告-订阅号消息-推荐文章',
      desc: '自动点击“x”',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules:
        'View[childCount=2] > View[desc$="推​荐​"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/14392392',
    },
    {
      key: 26,
      name: '功能类-付款后自动点击完成',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
          matches:
            '@[vid="kinda_button_impl_wrapper"][clickable=true] > [text="完成"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14532946', // 避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 27,
      name: '分段广告-订阅号消息页面广告',
      desc: '点击[广告]-点击[不感兴趣]-点击[与我无关]-点击[确定]',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击[广告]',
          actionCd: 3000,
          position: {
            left: 'width * 0.8805',
            top: 'width * 0.0583',
          },
          excludeMatches: '[desc="订阅号消息"] +(2, 3) View[clickable=true]',
          matches:
            'View[visibleToUser=true] - View[desc!="常​看​的​号​"] > View[desc="广告"||desc=null][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/9fc6137e-b615-46cf-b22e-20c62e398f45',
          snapshotUrls: [
            'https://i.gkd.li/i/14544716',
            'https://i.gkd.li/i/14545735',
            'https://i.gkd.li/i/14548771', // 避免在此页面误触
            'https://i.gkd.li/i/14549306', // 避免在此页面误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不感兴趣]',
          position: {
            left: 'width * 0.5271',
            top: 'width * 0.3419',
          },
          matches: '[desc="订阅号消息"] +(2, 3) View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e69e887e-5093-4f2a-ad2e-15b3f0a92481',
          snapshotUrls: 'https://i.gkd.li/i/14544688',
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[与我无关]',
          position: {
            left: 'width * 0.1864',
            top: 'width * 0.3419',
          },
          matches: '[desc="订阅号消息"] +(2, 3) View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/ffc05f2d-e8ab-4f0d-a937-23c71f92e8b8',
          snapshotUrls: 'https://i.gkd.li/i/14544684',
        },
        {
          preKeys: 2,
          key: 3,
          name: '点击[确定]',
          position: {
            left: 'width * 0.8641',
            top: 'width * 0.1209',
          },
          matches: '[desc="订阅号消息"] +(2, 3) View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/c49a8bd0-c947-48b5-9381-d56f13257061',
          snapshotUrls: 'https://i.gkd.li/i/14544683',
        },
      ],
    },
    {
      key: 28,
      name: '分段广告-订阅号消息页面视频推荐',
      desc: '点击[X]-点击[不喜欢此类视频]-点击[确定]',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击[X]',
          matches:
            '[desc="订阅号消息"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475',
          snapshotUrls: 'https://i.gkd.li/i/14436176',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[不喜欢此类视频]',
          matches: '[desc="不喜欢此类视频"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4',
          snapshotUrls: 'https://i.gkd.li/i/14444654',
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击[确定]',
          matches: '[desc="确定"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10',
          snapshotUrls: 'https://i.gkd.li/i/14436190',
        },
      ],
    },
    {
      key: 29,
      name: '功能类-解锁 Windows 微信',
      desc: '点击[解锁]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.plugin.webwx.ui.WebWXUnlockUI',
          matches: '[text="解锁"]',
          exampleUrls:
            'https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca',
          snapshotUrls: 'https://i.gkd.li/i/14490116',
        },
      ],
    },
    {
      key: 30,
      name: '全屏广告-文档页面-腾讯文档APP弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [text="腾讯文档"] + [text^="使用 APP"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },
    {
      key: 31,
      name: '分段广告-订阅号消息页面-推荐阅读',
      desc: '点击关闭',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          matches:
            'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
        },
        {
          key: 1,
          preKeys: 0,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
        },
        {
          key: 2,
          preKeys: 1,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
        },
      ],
    },
  ],
});
