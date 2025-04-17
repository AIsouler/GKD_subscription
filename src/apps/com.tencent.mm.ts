import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击卡片广告右上角,直接关闭/出现菜单,确认关闭',
      activityIds: [
        '.plugin.sns.ui.SnsTimeLineUI',
        '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
        '.plugin.profile.ui.ContactInfoUI',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: [
            '@LinearLayout[clickable=true] > [text="广告" || text="廣告" || text="Sponsored"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13000395',
            'https://i.gkd.li/i/12905837',
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/16568338',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          position: {
            left: 'width * 0.9223',
            top: 'height * 0.5',
          },
          anyMatches: [
            '@LinearLayout >2 [text="广告"][visibleToUser=false]',
            'RecyclerView > FrameLayout[childCount=1] > RelativeLayout > FrameLayout > LinearLayout > LinearLayout > LinearLayout > @LinearLayout[childCount=2][getChild(0).getChild(0).text!=null] > LinearLayout[index=1][clickable=false][visibleToUser=false]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',
            'https://i.gkd.li/i/19665911',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/19717709',
        },
        {
          key: 2,
          matches:
            '[name$="RecyclerView"||name$="ListView"] >(1,2) RelativeLayout >3 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14647413',
            'https://i.gkd.li/i/19633571',
          ],
        },

        // 预留key
        // 第二段
        {
          preKeys: [0, 1, 2],
          key: 25,
          name: '点击[关闭]',
          fastQuery: true,
          anyMatches: [
            '[text^="关闭" || text*="Close" || text="關閉此廣告"][clickable=true][visibleToUser=true]', //1
            '@LinearLayout[clickable=true] > [text="关闭该广告" || text*="Close"][visibleToUser=true]', //2
            '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]', //3
            '@[text="关闭该广告"] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]', //4
          ],
          snapshotUrls: [
            //1
            'https://i.gkd.li/i/13926578',
            'https://i.gkd.li/i/15531274',
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
            'https://i.gkd.li/i/13791202',
            //2
            'https://i.gkd.li/i/14783820',
            'https://i.gkd.li/i/15284966',
            //3
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/19666176',
            //4
            'https://i.gkd.li/i/19633486',
          ],
        },

        // 预留key
        // 第三段
        {
          preKeys: [25],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭" || text="Close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12663984',
            'https://i.gkd.li/i/12905846',
            'https://i.gkd.li/i/14647940',
            'https://i.gkd.li/i/14783534',
          ],
        },

        // 预留key
        // 第四段
        {
          preKeys: [50],
          key: 75,
          name: '点击[确认]',
          fastQuery: true,
          matches:
            '@[text="确认"][visibleToUser=true] -2 [text="不感兴趣原因"]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-电脑微信快捷自动登录',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: [
            '.plugin.webwx.ui.ExtDeviceWXLoginUI',
            '.ui.LauncherUI',
          ],
          matches: 'TextView[text="取消登录"] - Button[text="登录"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13522625',
            'https://i.gkd.li/i/13522577',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动授权登录',
      desc: '自动允许使用头像昵称等',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: [
            '.plugin.base.stub.UIEntryStub',
            '.ui.LauncherUI',
            '.plugin.webview.ui.tools.MMWebViewUI',
          ],
          matches: [
            '[text^="获取你的" || text^="取得你的" || text^="你的昵称"]',
            '[text="允许" || text="允許"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12663602',
            'https://i.gkd.li/i/13065462',
            'https://i.gkd.li/i/15271716',
            'https://i.gkd.li/i/19496823',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-微信读书网页版扫码登录自动授权',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
      rules: [
        {
          key: 1,
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: '[text="登录成功"]',
          snapshotUrls: 'https://i.gkd.li/i/12506201',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-自动领取微信红包',
      desc: '自动领取私聊红包,群聊红包',
      fastQuery: true,
      rules: [
        {
          key: 3,
          name: '点击别人发的红包',
          activityIds: '.ui.LauncherUI',
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
          snapshotUrls: 'https://i.gkd.li/i/18134826',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18134823', // 自己发的， LinearLayout[childCount=1] 区分
            'https://i.gkd.li/i/18134833', // 已领取的， getChild(1).childCount=1 区分
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '点击红包-开',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          matches: '@Button[desc="开"] -3 LinearLayout >2 [text$="红包"]',
          snapshotUrls: 'https://i.gkd.li/i/18134828',
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698', // 金币动画的快照
        },
        {
          preKeys: [3, 4],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          matches: '@ImageView[desc="返回"] +2 LinearLayout >8 [text$="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18134829',
            'https://i.gkd.li/i/18135031',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '自动选中底部中间的发送原图，可手动取消勾选',
      actionMaximum: 1,
      activityIds: [
        '.plugin.gallery.ui.AlbumPreviewUI',
        '.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          fastQuery: true,
          anyMatches: [
            '@ImageButton[desc="未选中,原图,复选框"][visibleToUser=true] + [text="原图"]',
            '@[desc="未选中,原图,复选框"][visibleToUser=true]',
          ],
          exampleUrls: [
            'https://e.gkd.li/32dc0943-e85f-416d-bb01-6ed610d4bdd8',
            'https://e.gkd.li/93d41161-ab69-4c2d-83bb-637d7292f5e6',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16987145', // 未选中
            'https://i.gkd.li/i/16987144', // 未选中
            'https://i.gkd.li/i/19625049', // 无法快速查询
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16987141', // 已选中
            'https://i.gkd.li/i/16987147', // 已选中
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图]按钮',
      activityIds: ['.ui.chatting.gallery.ImageGalleryUI', '.ui.LauncherUI'],
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            'Button[text^="查看"][clickable=true][visibleToUser=true]',
            'Button[clickable=true][text^="查看"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/6bb9e68a-43f5-4482-96b1-899cc86fef32',
          snapshotUrls: [
            'https://i.gkd.li/i/13523031',
            'https://i.gkd.li/i/17698956',
            'https://i.gkd.li/i/19515095',
            'https://i.gkd.li/i/19645122', // 无法快速查询
          ],
        },
      ],
    },
    {
      key: 10,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      priorityTime: 10000,
      activityIds: [
        '.plugin.appbrand.ui.AppBrandUI',
        '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '功能类-网页版文件传输助手扫码自动授权',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: '.ui.LauncherUI',
          matches: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
          snapshotUrls: 'https://i.gkd.li/i/12793745',
        },
      ],
    },
    {
      key: 17,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: ['.plugin.finder.', '.ui.LauncherUI'],
          matches:
            '@[text="我知道了"][index=parent.childCount.minus(1)] <n LinearLayout > [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13538145',
            'https://i.gkd.li/i/13575195',
            'https://i.gkd.li/i/14735456',
            'https://i.gkd.li/i/14896723',
            'https://i.gkd.li/i/18135103',
            'https://i.gkd.li/i/19683937',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > TextView[text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
        },
        {
          key: 1,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: 'View[desc="验证密码"][clickable=true]',
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
          fastQuery: true,
          activityIds: '.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
        },
        {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
        },
      ],
    },
    {
      key: 22,
      name: '功能类-开启青少年模式后的每日验证',
      desc: '点击"验证密码"',
      rules: [
        {
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            'WebView[childCount=6] View[index=4] > [text="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14050004',
        },
      ],
    },
    {
      key: 25,
      name: '局部广告-订阅号消息-推荐文章',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
          matches:
            'View[childCount=2] > View[desc$="推​荐​"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14392392',
        },
      ],
    },
    {
      key: 26,
      name: '功能类-付款后自动点击完成/返回商家',
      rules: [
        {
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches:
            '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14662147',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
        },
      ],
    },
    {
      key: 28,
      name: '分段广告-订阅号消息-视频推荐',
      desc: '点击[X]-点击[不喜欢此类视频]-点击[确定]',
      activityIds:
        '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
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
          fastQuery: true,
          activityIds: '.plugin.webwx.ui.WebWXUnlockUI',
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
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },
    {
      key: 31,
      name: '分段广告-订阅号消息-推荐阅读',
      desc: '点击关闭',
      activityIds:
        '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
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
          preKeys: [0],
          key: 1,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
        },
      ],
    },
    {
      key: 32,
      name: '权限提示-权限申请弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.pluginsdk.permission.PermissionActivity',
          matches: ['[text="权限申请"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
        },
      ],
    },
    {
      key: 34,
      name: '功能类-付款时自动点击[支付]',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: '.framework.app.UIPageFragmentActivity',
      rules: [
        {
          key: 0,
          matches:
            'ViewGroup + ViewGroup > ViewGroup > [vid="kinda_button_impl_wrapper"][desc="支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15144570',
            'https://i.gkd.li/i/15144571',
            'https://i.gkd.li/i/15360745',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '分段广告-订阅号消息内容-广告',
      desc: '点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]',
      activityIds: [
        '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
        '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
        '.plugin.webview.ui.tools.MMWebViewUI',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            // 防止在第二段、第三段出现时触发，防止在文章末尾广告关闭后触发
            '[text="不感兴趣" || text="与我无关" || text="感谢你的反馈"][visibleToUser=true]',
          ],
          matches:
            '@[clickable=true][visibleToUser=true] > TextView[text^="广告"][visibleToUser=true]', // 某些微信版本上该节点的`clickable=false`
          exampleUrls: [
            'https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37',
            'https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/i/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/i/14006180', // .plugin.webview.ui.tools.fts.MMSosWebViewUI
            'https://i.gkd.li/i/17093010', // .plugin.webview.ui.tools.MMWebViewUI
            'https://i.gkd.li/i/16796663', // 内容尾部广告
            'https://i.gkd.li/i/16796725', // 内容中部广告
            'https://i.gkd.li/i/16798663', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198455', // 无id
            'https://i.gkd.li/i/17276697', // text="广告 "，有空格
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15198464', // 防止在文章末尾广告关闭后误触
          ],
        },
        {
          // 第二段-有“关闭此广告”按钮，则直接关闭该广告
          preKeys: [0],
          key: 20,
          matches: '[text="关闭此广告"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796729', // 内容中部广告
            'https://i.gkd.li/i/17113565', // 在某些情况下，点击“不感兴趣”会导致无法执行下一步操作，因此点击“关闭此广告”
          ],
        },
        {
          // 第二段-无“关闭此广告”按钮，则点击“不感兴趣”，需继续执行第三段
          preKeys: [0],
          key: 25,
          excludeMatches: [
            '[text="感谢你的反馈"][visibleToUser=true]',
            '[text="关闭此广告"][clickable=true][visibleToUser=true]',
          ],
          matches: '[text="不感兴趣"][clickable=true][visibleToUser=true]', // 为确保能够关闭尾部广告，此处点击“不感兴趣”而非“关闭此广告”
          snapshotUrls: [
            'https://i.gkd.li/i/16796666', // 内容尾部广告
            'https://i.gkd.li/i/16798661', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198459', // 无id
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15061424', // 使用excludeMatches防止在文章末尾广告关闭后误触'
            'https://i.gkd.li/i/16796729', // 内容中部广告，若同时存在“关闭此广告”与“不感兴趣”，则点击前者
          ],
        },
        {
          // 第三段
          preKeys: [25],
          key: 50,
          matches: '[text="与我无关"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16796674', // 内容尾部广告
            'https://i.gkd.li/i/16796732', // 内容中部广告
            'https://i.gkd.li/i/16798658', // clickable=false，使用clickable=true避免误触
            'https://i.gkd.li/i/15198461', // 无id
          ],
        },
      ],
    },
    {
      key: 36,
      name: '功能类-自动点击[查看原视频]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.chatting.gallery.ImageGalleryUI',
          matches: '[text^="查看原视频"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5332aff9-05bb-4b44-b832-5e2d9b1c1270',
          snapshotUrls: 'https://i.gkd.li/i/16833732',
        },
      ],
    },
    {
      key: 37,
      name: '全屏广告-小程序弹窗广告',
      desc: '点击关闭',
      matchTime: 20000,
      // actionMaximum: 1,
      actionCd: 300, // 有时候需要点击多次
      actionDelay: 300, // 过早触发有概率无效
      rules: [
        {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          excludeMatches: '[text="跳过"][visibleToUser=true]', // 防止提前触发
          matches:
            '@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31',
          snapshotUrls: [
            'https://i.gkd.li/i/13459614',
            'https://i.gkd.li/i/16943989',
            'https://i.gkd.li/i/16920797',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
        },
      ],
    },
    {
      key: 38,
      name: '功能类-自动语音转文字',
      desc: '点击语音旁边的转文字',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.ui.LauncherUI', '.ui.chatting.ChattingUI'],
          matches: '@[clickable=true] > [text="转文字"]',
          snapshotUrls: 'https://i.gkd.li/i/18135057',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18135054',
        },
      ],
    },
    {
      key: 39,
      name: '功能类-语音通话呼入10秒后自动点击接听',
      rules: [
        {
          matchTime: 15000,
          actionDelay: 10000,
          activityIds: '.plugin.voip.ui.VideoActivity',
          matches: 'Button[desc="接听"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fbfea6ba-ce43-4641-a919-9c21fa49dc73',
          snapshotUrls: 'https://i.gkd.li/i/18225086',
        },
      ],
    },
    {
      key: 40,
      name: '功能类-点击语音条菜单里的转文字',
      desc: '点击 长按语音条后弹出的菜单 中的转文字',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.ui.LauncherUI', '.ui.chatting.ChattingUI'],
          matches: '@[clickable=true] >2 [text="转文字"]',
          exampleUrls: 'https://e.gkd.li/c35fafc8-9d96-4178-9aac-f16394d2c666',
          snapshotUrls: [
            'https://i.gkd.li/i/19774491',
            'https://i.gkd.li/i/19792042',
          ],
        },
      ],
    },
  ],
});
