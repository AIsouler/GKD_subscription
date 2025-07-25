import { RawApp } from '@gkd-kit/api';

interface RawDeprecatedKeysSetting {
  /**
   * 应用ID
   */
  id: string;

  /**
   * 应用名称
   */
  name: string;

  /**
   * 废弃的key值，不可使用
   */
  deprecatedKeys: number[];
}

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((app) => {
    const deprecatedKeys = appDeprecatedKeysMap.get(app.id);
    if (deprecatedKeys) {
      app.groups.forEach(({ key, name }) => {
        if (deprecatedKeys.includes(key)) {
          console.error({
            configName: app.name,
            appId: app.id,
            groupName: name,
            groupKey: key,
          });
          throw new Error('invalid deprecated group key');
        }
      });
    }
  });
};

const appDeprecatedKeys: RawDeprecatedKeysSetting[] = [
  {
    id: 'air.tv.douyu.android',
    name: '斗鱼',
    deprecatedKeys: [0, 1, 2],
  },
  {
    id: 'android.zhibo8',
    name: '直播吧',
    deprecatedKeys: [0, 2],
  },
  {
    id: 'bubei.tingshu',
    name: '懒人听书',
    deprecatedKeys: [0],
  },
  {
    id: 'chuxin.shimo.shimowendang',
    name: '石墨文档',
    deprecatedKeys: [0],
  },
  {
    id: 'client.android.yixiaotong',
    name: '乐校通',
    deprecatedKeys: [0, 3],
  },
  {
    id: 'cmb.pb',
    name: '招商银行',
    deprecatedKeys: [0],
  },
  {
    id: 'cmccwm.mobilemusic',
    name: '咪咕音乐',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.ccspeed',
    name: 'CC加速器',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.com.hkgt.gasapp',
    name: '易捷加油',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.com.livelab',
    name: '纷玩岛',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.com.spdb.mobilebank.per',
    name: '浦发银行',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.emagsoftware.gamehall',
    name: '咪咕快游',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.missevan',
    name: '猫耳FM',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.TuHu.android',
    name: '途虎养车',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.wps.moffice_eng',
    name: 'WPS',
    deprecatedKeys: [0, 7],
  },
  {
    id: 'cn.xiaochuankeji.tieba',
    name: '最右',
    deprecatedKeys: [0, 2, 11],
  },
  {
    id: 'cn.xiaochuankeji.zuiyouLite',
    name: '皮皮搞笑',
    deprecatedKeys: [0, 1],
  },
  {
    id: 'cn.yonghui.hyd',
    name: '永辉生活',
    deprecatedKeys: [0],
  },
  {
    id: 'com.able.wisdomtree',
    name: '知到',
    deprecatedKeys: [1],
  },
  {
    id: 'com.ai.obc.cbn.app',
    name: '中国广电',
    deprecatedKeys: [0],
  },
  {
    id: 'com.alibaba.ailabs.tg',
    name: '天猫精灵',
    deprecatedKeys: [0],
  },
  {
    id: 'com.alibaba.android.rimet',
    name: '钉钉',
    deprecatedKeys: [0],
  },
  {
    id: 'com.alibaba.wireless',
    name: '阿里巴巴',
    deprecatedKeys: [0],
  },
  {
    id: 'com.ants360.yicamera',
    name: '小蚁摄像机',
    deprecatedKeys: [0],
  },
  {
    id: 'com.antutu.ABenchMark',
    name: '安兔兔评测',
    deprecatedKeys: [0],
  },
  {
    id: 'com.apkpure.aegon',
    name: 'APKPure',
    deprecatedKeys: [0],
  },
  {
    id: 'com.autonavi.minimap',
    name: '高德地图',
    deprecatedKeys: [0],
  },
  {
    id: 'com.babycloud.hanju',
    name: '韩小圈',
    deprecatedKeys: [1],
  },
  {
    id: 'com.babytree.apps.pregnancy',
    name: '宝宝树孕育',
    deprecatedKeys: [1],
  },
  {
    id: 'com.badmintoncn.bbs',
    name: '中羽在线',
    deprecatedKeys: [0],
  },
  {
    id: 'com.baidu.BaiduMap',
    name: '百度地图',
    deprecatedKeys: [0],
  },
  {
    id: 'com.baidu.baike',
    name: '百度百科',
    deprecatedKeys: [0],
  },
  {
    id: 'com.baidu.netdisk.samsung',
    name: '百度网盘-三星版本',
    deprecatedKeys: [0, 3, 4],
  },
  {
    id: 'com.baidu.netdisk',
    name: '百度网盘',
    deprecatedKeys: [0, 3, 4, 5, 7, 10, 11],
  },
  {
    id: 'com.baidu.searchbox',
    name: '百度',
    deprecatedKeys: [0],
  },
  {
    id: 'com.baidu.tieba',
    name: '百度贴吧',
    deprecatedKeys: [4, 8],
  },
  {
    id: 'com.baidu.xin.aiqicha',
    name: '爱企查',
    deprecatedKeys: [0, 11],
  },
  {
    id: 'com.baidu.youavideo',
    name: '一刻相册',
    deprecatedKeys: [1],
  },
  {
    id: 'com.baidutieba.davy',
    name: '贴吧一键签到大师',
    deprecatedKeys: [0],
  },
  {
    id: 'com.banjixiaoguanjia.app',
    name: '班级小管家',
    deprecatedKeys: [0],
  },
  {
    id: 'com.bbk.appstore',
    name: 'vivo应用商店',
    deprecatedKeys: [0],
  },
  {
    id: 'com.bilibili.comic',
    name: '哔哩哔哩漫画',
    deprecatedKeys: [0],
  },
  {
    id: 'com.bjsk.intelligent',
    name: 'WiFi智能钥匙',
    deprecatedKeys: [0],
  },
  {
    id: 'com.black.unique',
    name: '全球购骑士特权',
    deprecatedKeys: [0],
  },
  {
    id: 'com.boohee.one',
    name: '薄荷健康',
    deprecatedKeys: [0],
  },
  {
    id: 'com.bw30.zsch',
    name: '四川航空',
    deprecatedKeys: [0],
  },
  {
    id: 'com.bz.yilianlife.sd',
    name: '深(新)度搜索',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cainiao.wireless',
    name: '菜鸟',
    deprecatedKeys: [0, 3, 7, 8, 11],
  },
  {
    id: 'com.cctv.cctv5ultimate',
    name: '央视体育',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cebbank.mobile.cemb',
    name: '光大银行',
    deprecatedKeys: [0],
  },
  {
    id: 'com.chaoxing.mobile',
    name: '学习通',
    deprecatedKeys: [0],
  },
  {
    id: 'com.chaozh.iReader',
    name: 'VIVO 电子书',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cheersedu.app',
    name: '湛庐阅读',
    deprecatedKeys: [0],
  },
  {
    id: 'com.chinamobile.mcloud',
    name: '中国移动云盘',
    deprecatedKeys: [0],
  },
  {
    id: 'com.chinatelecom.bestpayclient',
    name: '翼支付',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cmbchina.ccd.pluto.cmbActivity',
    name: '掌上生活',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cmcc.cmvideo',
    name: '咪咕视频',
    deprecatedKeys: [0, 1],
  },
  {
    id: 'com.cn21.ecloud',
    name: '天翼云盘',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cnki.client',
    name: '手机知网',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cnki.view',
    name: '知网文化',
    deprecatedKeys: [0],
  },
  {
    id: 'com.codoon.gps',
    name: '咕咚',
    deprecatedKeys: [0],
  },
  {
    id: 'com.coolapk.market',
    name: '酷安',
    deprecatedKeys: [2],
  },
  {
    id: 'com.copymanga.app',
    name: '拷貝漫畫',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cqcsy.ifvod',
    name: '爱壹帆',
    deprecatedKeys: [0],
  },
  {
    id: 'com.crirp.zhipu',
    name: '智谱',
    deprecatedKeys: [3],
  },
  {
    id: 'com.ct.client',
    name: '中国电信',
    deprecatedKeys: [0],
  },
  {
    id: 'com.ctm',
    name: 'CTM Buddy',
    deprecatedKeys: [0],
  },
  {
    id: 'com.cubic.autohome',
    name: '汽车之家',
    deprecatedKeys: [0],
  },
  {
    id: 'com.daimajia.gold',
    name: '稀土掘金',
    deprecatedKeys: [0],
  },
  {
    id: 'com.danlan.xiaolan',
    name: 'Blued极速版',
    deprecatedKeys: [0, 1],
  },
  {
    id: 'com.douban.frodo',
    name: '豆瓣',
    deprecatedKeys: [0, 1, 2, 4, 7, 9, 12],
  },
  {
    id: 'com.dragon.read',
    name: '番茄免费小说',
    deprecatedKeys: [-1, 11, 13],
  },
  {
    id: 'com.eg.android.AlipayGphone',
    name: '支付宝',
    deprecatedKeys: [10, 15, 18],
  },
  {
    id: 'com.handsgo.jiakao.android',
    name: '驾考宝典',
    deprecatedKeys: [0],
  },
  {
    id: 'com.ideal.flyerteacafes',
    name: '飞客',
    deprecatedKeys: [7],
  },
  {
    id: 'com.jingdong.app.mall',
    name: '京东',
    deprecatedKeys: [3, 7],
  },
  {
    id: 'com.kmxs.reader',
    name: '七猫免费小说',
    deprecatedKeys: [-2, 0, 6, 7],
  },
  {
    id: 'com.magicalstory.AppStore',
    name: '奇妙应用',
    deprecatedKeys: [6],
  },
  {
    id: 'com.miui.systemAdSolution',
    name: '智能服务',
    deprecatedKeys: [1],
  },
  {
    id: 'com.netease.cloudmusic',
    name: '网易云音乐',
    deprecatedKeys: [3, 9, 10, 11, 12],
  },
  {
    id: 'com.netease.mobimail',
    name: '网易邮箱',
    deprecatedKeys: [2],
  },
  {
    id: 'com.sankuai.meituan',
    name: '美团',
    deprecatedKeys: [5, 6, 9],
  },
  {
    id: 'com.sina.weibo',
    name: '微博',
    deprecatedKeys: [3, 4, 6, 7, 11, 13, 12, 15, 16, 21],
  },
  {
    id: 'com.snda.wifilocating',
    name: 'WiFi万能钥匙',
    deprecatedKeys: [0],
  },
  {
    id: 'com.ss.android.ugc.aweme',
    name: '抖音',
    deprecatedKeys: [0, 2, 4, 5, 6],
  },
  {
    id: 'com.taobao.taobao',
    name: '淘宝',
    deprecatedKeys: [0, 10, 11],
  },
  {
    id: 'com.taptap',
    name: 'TapTap',
    deprecatedKeys: [1],
  },
  {
    id: 'com.tencent.mm',
    name: '微信',
    deprecatedKeys: [3, 6, 8, 12, 13, 14, 16, 20, 21, 23, 24, 27, 33],
  },
  {
    id: 'com.tencent.mobileqq',
    name: 'QQ',
    deprecatedKeys: [6, 8, 15, 14, 19],
  },
  {
    id: 'com.tencent.qqlive',
    name: '腾讯视频',
    deprecatedKeys: [1, 5, 19],
  },
  {
    id: 'com.xunlei.downloadprovider',
    name: '迅雷',
    deprecatedKeys: [5, 11],
  },
  {
    id: 'com.xyhui',
    name: 'PU口袋校园',
    deprecatedKeys: [3, 4],
  },
  {
    id: 'com.youdao.dict',
    name: '网易有道词典',
    deprecatedKeys: [3],
  },
  {
    id: 'com.youku.phone',
    name: '优酷视频',
    deprecatedKeys: [1, 2],
  },
  {
    id: 'com.zhihu.android',
    name: '知乎',
    deprecatedKeys: [0, 1, 2, 3, 4, 5, 7, 8, 9, 11],
  },
  {
    id: 'com.zmzx.college.search',
    name: '大学搜题酱',
    deprecatedKeys: [1, 4, 8, 9, 10],
  },
  {
    id: 'me.ele',
    name: '饿了么',
    deprecatedKeys: [3, 11],
  },
  {
    id: 'tv.danmaku.bili',
    name: '哔哩哔哩',
    deprecatedKeys: [1, 3, 5],
  },
  {
    id: 'com.chunqiu.ah',
    name: 'AH视频',
    deprecatedKeys: [3, 5, 6],
  },
  {
    id: 'com.unionpay',
    name: '云闪付',
    deprecatedKeys: [1, 11, 14],
  },
  {
    id: 'com.netease.newsreader.activity',
    name: '网易新闻',
    deprecatedKeys: [1, 3],
  },
  {
    id: 'com.sina.weibo',
    name: '微博',
    deprecatedKeys: [10],
  },
  {
    id: 'com.jingyao.easybike',
    name: '哈啰',
    deprecatedKeys: [11, 13, 14],
  },
  {
    id: 'com.sankuai.meituan.takeoutnew',
    name: '美团外卖',
    deprecatedKeys: [2],
  },
  {
    id: 'com.paokeji.yiqu',
    name: '喵趣漫画',
    deprecatedKeys: [1],
  },
  {
    id: 'com.huawei.android.thememanager',
    name: '华为主题',
    deprecatedKeys: [3, 4, 5, 6, 8],
  },
  {
    id: 'com.ximalaya.ting.android',
    name: '喜马拉雅',
    deprecatedKeys: [6, 9],
  },
  {
    id: 'com.zjwh.android_wh_physicalfitness',
    name: '运动世界校园',
    deprecatedKeys: [2, 3, 4, 9],
  },
  {
    id: 'com.xunmeng.pinduoduo',
    name: '拼多多',
    deprecatedKeys: [3, 4, 5, 7, 13, 14, 15, 18],
  },
  {
    id: 'com.mihoyo.hyperion',
    name: '米游社',
    deprecatedKeys: [1, 2, 4, 5],
  },
  {
    id: 'com.miui.packageinstaller',
    name: '应用包管理组件',
    deprecatedKeys: [8, 9, 10, 11, 12],
  },
  {
    id: 'com.miui.player',
    name: '小米音乐',
    deprecatedKeys: [4, 10],
  },
  {
    id: 'cn.soulapp.android',
    name: 'Soul',
    deprecatedKeys: [1],
  },
  {
    id: 'com.dongqiudi.news',
    name: '懂球帝',
    deprecatedKeys: [1],
  },
  {
    id: 'com.duitang.main',
    name: '堆糖',
    deprecatedKeys: [1],
  },
  {
    id: 'com.duowan.kiwi',
    name: '虎牙直播',
    deprecatedKeys: [1],
  },
  {
    id: 'com.example.pptv',
    name: '人人视频',
    deprecatedKeys: [1],
  },
  {
    id: 'com.gotokeep.keep',
    name: 'Keep',
    deprecatedKeys: [1],
  },
  {
    id: 'com.huawei.appmarket',
    name: '华为应用市场',
    deprecatedKeys: [2],
  },
  {
    id: 'com.hunantv.imgo.activity',
    name: '芒果TV',
    deprecatedKeys: [0],
  },
  {
    id: 'com.kuaikan.comic',
    name: '快看漫画',
    deprecatedKeys: [1],
  },
  {
    id: 'com.kuaishou.nebula',
    name: '快手极速版',
    deprecatedKeys: [1],
  },
  {
    id: 'com.kugou.android.lite',
    name: '酷狗概念版',
    deprecatedKeys: [1],
  },
  {
    id: 'com.p1.mobile.putong',
    name: '探探',
    deprecatedKeys: [1],
  },
  {
    id: 'com.qiyi.video',
    name: '爱奇艺',
    deprecatedKeys: [1],
  },
  {
    id: 'com.qq.ac.android',
    name: '腾讯动漫',
    deprecatedKeys: [1],
  },
  {
    id: 'com.qq.reader',
    name: 'QQ阅读',
    deprecatedKeys: [2],
  },
  {
    id: 'com.smile.gifmaker',
    name: '快手',
    deprecatedKeys: [0],
  },
  {
    id: 'com.sohu.sohuvideo',
    name: '搜狐视频',
    deprecatedKeys: [2],
  },
  {
    id: 'com.ss.android.article.video',
    name: '西瓜视频',
    deprecatedKeys: [0],
  },
  {
    id: 'com.ss.android.ugc.aweme.lite',
    name: '抖音极速版',
    deprecatedKeys: [1],
  },
  {
    id: 'com.ss.android.ugc.aweme.mobile',
    name: '抖音',
    deprecatedKeys: [1],
  },
  {
    id: 'com.ss.android.yumme.video',
    name: '抖音精选',
    deprecatedKeys: [1],
  },
  {
    id: 'com.tencent.weread',
    name: '微信读书',
    deprecatedKeys: [2],
  },
  {
    id: 'com.xingye.app',
    name: '星野',
    deprecatedKeys: [1],
  },
  {
    id: 'tv.danmaku.bilibilihd',
    name: '哔哩哔哩HD',
    deprecatedKeys: [1],
  },
  {
    id: 'com.umetrip.android.msky.app',
    name: '航旅纵横',
    deprecatedKeys: [8, 9],
  },
  {
    id: 'cn.mil.junhao',
    name: '中国军号',
    deprecatedKeys: [1],
  },
  {
    id: 'com.alicloud.databox',
    name: '阿里云盘',
    deprecatedKeys: [2],
  },
  {
    id: 'com.duokan.phone.remotecontroller',
    name: '万能遥控',
    deprecatedKeys: [0],
  },
  {
    id: 'com.fenbi.android.solar',
    name: '小猿搜题',
    deprecatedKeys: [1],
  },
  {
    id: 'com.guwendao.gwd',
    name: '古文岛',
    deprecatedKeys: [1],
  },
  {
    id: 'com.huawei.music',
    name: '华为音乐',
    deprecatedKeys: [2, 4, 5, 6, 7],
  },
  {
    id: 'com.icbc',
    name: '中国工商银行',
    deprecatedKeys: [0],
  },
  {
    id: 'com.jd.app.reader',
    name: '京东读书',
    deprecatedKeys: [1],
  },
  {
    id: 'com.jsmcc',
    name: '中国移动江苏',
    deprecatedKeys: [1],
  },
  {
    id: 'com.kuaiduizuoye.scan',
    name: '快对',
    deprecatedKeys: [1],
  },
  {
    id: 'com.maidu.gkld',
    name: '公考雷达',
    deprecatedKeys: [1],
  },
  {
    id: 'com.miaoying.appmy.cs',
    name: '新小财神影视',
    deprecatedKeys: [1],
  },
  {
    id: 'com.netease.mail',
    name: '网易邮箱大师',
    deprecatedKeys: [1],
  },
  {
    id: 'com.google.android.youtube',
    name: 'youtube',
    deprecatedKeys: [2],
  },
  {
    id: 'com.qinlin.edoor',
    name: '亲邻开门',
    deprecatedKeys: [10, 11, 12],
  },
  {
    id: 'com.quark.browser',
    name: '夸克浏览器',
    deprecatedKeys: [0],
  },
  {
    id: 'com.taobao.etao',
    name: '一淘',
    deprecatedKeys: [1],
  },
  {
    id: 'com.wm.dmall',
    name: '多点',
    deprecatedKeys: [4],
  },
  {
    id: 'com.ximalaya.ting.lite',
    name: '喜马拉雅极速版',
    deprecatedKeys: [0],
  },
  {
    id: 'com.yunzhi.tiyu',
    name: '云运动',
    deprecatedKeys: [1],
  },
  {
    id: 'com.zhengnengliang.precepts',
    name: '正气',
    deprecatedKeys: [1],
  },
  {
    id: 'com.qiekj.user',
    name: '胖乖生活',
    deprecatedKeys: [0],
  },
  {
    id: 'cn.lezhi.speedtest',
    name: '网速管家',
    deprecatedKeys: [1],
  },
  {
    id: 'io.iftech.android.box',
    name: '小组件盒子',
    deprecatedKeys: [1],
  },
  {
    id: 'com.tencent.qqmusic',
    name: 'QQ音乐',
    deprecatedKeys: [10],
  },
  {
    id: 'com.tongcheng.android',
    name: '同程旅行',
    deprecatedKeys: [1],
  },
];

const map: Map<string, number[]> = new Map();

appDeprecatedKeys.forEach(({ id, deprecatedKeys }) => {
  map.set(id, deprecatedKeys);
});

const appDeprecatedKeysMap = map;
