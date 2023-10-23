import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
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
            'https://gkd-kit.gitee.io/import/12642588',
            'https://gkd-kit.gitee.io/import/12888129', //ImageView - TextView[text="广告"][id!=null][index=0]这个规则无法匹配该广告，需要删除[index=0]
            'https://gkd-kit.gitee.io/import/12907641',
            'https://gkd-kit.gitee.io/import/13000395',
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
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12642584'],
        },
        {
          preKeys: 1,
          key: 2,
          name: '关闭该广告的原因-点击[直接关闭]',
          matches: '[text="关闭该广告的原因"] +(2) [text="直接关闭"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12663984'],
        },
        // 情况2 - 关闭该广告
        {
          preKeys: 0,
          key: 3,
          name: '对这条广告不感兴趣-点击[关闭该广告]',
          matches:
            'TextView[text="你可以这样优化广告推荐"] + TextView[text="关闭该广告"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12907642',
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
      key: 1,
      name: '电脑微信快捷自动登录',
      activityIds: '.plugin.webwx.ui.ExtDeviceWXLoginUI',
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
    },
    {
      key: 2,
      name: '浏览器扫码微信登录自动授权',
      desc: '自动允许使用头像昵称等',
      activityIds: [
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13065462', //com.tencent.mm.ui.LauncherUI
    },
    {
      enable: false,
      key: 3,
      name: '第三方APP申请使用授权弹窗',
      desc: '自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用',
      activityIds: ['com.tencent.mm.plugin.base.stub.UIEntryStub'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12663602',
    },
    {
      key: 4,
      name: '微信读书网页版扫码登录自动授权',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          matches: 'Button[text="登 录"]',
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
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12567696',
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12567697',
            'https://gkd-kit.gitee.io/import/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
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
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12567637',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '订阅号文章广告',
      desc: '⚠ 此规则有概率误触。自动点击关闭按钮，必须同时启用【订阅号文章广告反馈】规则',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          name: '广告类型1',
          matches:
            'View[id="ad_container"] > View[childCount=1] >n @View > [id=null][text^="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642232',
            'https://gkd-kit.gitee.io/import/12646837', // 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://gkd-kit.gitee.io/import/12678937', // 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://gkd-kit.gitee.io/import/12714427', // 优化规则，使用 View[id="ad_container"] 作为特征节点
          ],
        },
        {
          key: 2,
          name: '广告类型2',
          matches:
            'View[childCount=1] > @[id="feedbackTagContainer"][visibleToUser=true] > [id="feedbackTag"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700183',
            'https://gkd-kit.gitee.io/import/12701503', // 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://gkd-kit.gitee.io/import/12714424',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches: '[text="原图"] - ImageButton[desc="未选中,原图,复选框"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12686641', // 未选中
            'https://i.gkd.li/import/12840865', // 未选中
            'https://gkd-kit.gitee.io/import/12686640', // 已选中
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
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          // preKeys: [1], 取消 preKeys 提高点击成功率
          name: '点击不感兴趣',
          matches:
            'View > [id="feedbackTagContainer"][visibleToUser=true] + [id^="menu"] > [id="dislike"][text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642234',
            'https://gkd-kit.gitee.io/import/12722301',
            'https://gkd-kit.gitee.io/import/12722331', // 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
          ],
          action: 'clickCenter', // 使用 clickCenter 事件点击，期望在快照 https://gkd-kit.gitee.io/import/12745280 中成功点击 [与我无关]
        },
        {
          key: 2,
          // preKeys: [2], 取消 preKeys 提高点击成功率
          name: '点击与我无关',
          matches: 'View > [id^="menu"] > [id="isdismatch"][text="与我无关"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12642238'],
        },
        {
          key: 3,
          name: '点击关闭此广告',
          matches: 'TextView[id="closeBtn"][text="关闭此广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700191',
        },
      ],
    },
    {
      enable: false,
      key: 9,
      name: '自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12706944',
    },
    {
      enable: false,
      key: 10,
      name: '微信小程序-开屏广告',
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      quickFind: true,
      rules: [
        {
          matches:
            '[text="广告"] < FrameLayout[childCount=1] <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] - FrameLayout[childCount=3] > FrameLayout[childCount=2] >  FrameLayout[childCount=1] > [text="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12701979',
            'https://gkd-kit.gitee.io/import/12777076',
            'https://gkd-kit.gitee.io/import/12785012',
            'https://gkd-kit.gitee.io/import/12785183',
          ],
        },
        {
          matches:
            '[text="广告"] < * <2 * <2 * <2 FrameLayout[childCount=2] - FrameLayout[childCount=2] >  FrameLayout[childCount=1] > [text="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12785246'],
        },
      ],
    },
    {
      key: 11,
      name: '网页版文件传输助手扫码自动授权',
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/import/12793745',
    },
    {
      enable: false,
      key: 13,
      name: '提瓦特助手小程序-弹窗广告',
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          matches: [
            'RelativeLayout[childCount=1][clickable=true] > [text="提瓦特小助手"]',
            'FrameLayout[childCount=5] + FrameLayout[childCount=2] >2 FrameLayout[childCount=1]',
          ],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12926021'],
        },
      ],
    },
  ],
});
