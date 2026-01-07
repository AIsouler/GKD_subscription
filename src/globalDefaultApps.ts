// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.twitter.android', // X(推特)
  'com.aistra.hail', // 雹
  'com.heyanle.easybangumi4', // 纯纯看番
  'com.perol.pixez', // PixEz
  'com.perol.play.pixez', // PixEz Google Play版
  'com.magicalstory.videos', // 奇妙影视
  'com.magicalstory.installer', // 奇妙安装程序
  'com.guozhigq.pilipala', // PiliPala
  'com.salt.music', // Salt Player
  'com.xuncorp.qinalt.music', // 青盐云听
  'com.github.wgh136.pica_comic', // Pica Comic
  'com.yenaly.han1meviewer', // Han1meViewer
  'ru.zdevs.zarchiver', // ZArchiver
  'ru.zdevs.zarchiver.pro', // ZArchiver Pro
  'me.zhanghai.android.files', // 质感文件
  'com.xjcheng.musictageditor', // 音乐标签
  'com.lalilu.lmusic', // LMusic
  'com.ktls.fileinfo', // 存储空间清理
  'idm.internet.download.manager', // 1DM
  'idm.internet.download.manager.plus', // 1DM+
  'com.mxtech.videoplayer', // MX播放器
  'com.mxtech.videoplayer.pro', // MX播放器专业版
  'com.github.kr328.clash', // Clash for Android
  'com.x8bit.bitwarden', // Bitwarden
  'org.localsend.localsend_app', // LocalSend
  'moe.shizuku.privileged.api', // Shizuku
  'com.ktls.automation', // 自动点击工具
  'com.deepl.mobiletranslator', // DeepL
  'com.accessibilitymanager', // 无障碍管理器
  'me.tasy5kg.cutegif', // 小萌GIF
  'com.absinthe.libchecker', // LibChecker
  'com.github.metacubex.clash.meta', // Clash Meta for Android
  'io.github.jd1378.otphelper', // 短信验证码自动复制
  'com.valvesoftware.android.steam.community', // Steam
  'io.legado.app.release', // 阅读
  'com.getsurfboard', // Surfboard
  'moe.nb4a', // NekoBox
  'com.v2ray.ang', // v2rayNG
  'com.v2ray.v2fly', // v2flyNG
  'com.xiaoyv.bangumi', // Bangumi for Android
  'com.funny.translation', // 译站
  'com.looker.droidify', // Droid-ify
  'app.eleven.com.fastfiletransfer', // 文件闪传
  'com.idaodan.clean.master', // 雪豹速清
  'com.samsung.agc.gcam84', // 相机
  'com.wsw.cospa', // 异次元
  'app.mihon', // Mihon
  'com.rosan.installer.x', // installerX
  'app.rikka.savecopy', // 保存副本
  'com.rosan.dhizuku', // Dhizuku
  'com.rosan.accounts', // Accounts
  'com.dv.adm', // ADM
  'com.assistant.ongoingclear', // 固定通知隐藏
  'org.koitharu.kotatsu', // Kotatsu
  'me.ash.reader', // Read You
  'com.huanchengfly.tieba.post', // 贴吧Lite
  'com.example.c001apk', // c001apk
  'dev.anilbeesetti.nextplayer', // Next Player
  'org.kde.kdeconnect_tp', // KDE Connect
  'xyz.adproqwq.GKDTool', // GKDTool
  'com.alibaba.aliyun', // 阿里云
  'com.alicloud.databox', // 阿里云盘
  'xyz.nextalone.nagram', // Nagram
  'com.openai.chatgpt', // ChatGPT
  'org.telegram.group', // Turrit
  'com.android.chrome', // Chrome
  'com.microsoft.emmx', // Edge
  'org.mozilla.firefox', // Firefox
  'org.mozilla.firefox_beta', // Firefox Beta
  'org.mozilla.fenix', // Firefox Nightly
  'org.mozilla.focus', // Firefox Focus
  'com.google.android.youtube', // YouTube
  'com.xunmeng.pinduoduo', // 拼多多
  'com.byyoung.setting', //爱玩机工具箱
  'com.mixplorer', // MiX文件管理器
  'com.xjs.ehviewer', // Ehviewer
  'rikka.appops', // App Ops
  'com.vrem.wifianalyzer', // WiFiAnalyzer
  'remix.myplayer', // APlayer
  'com.arn.scrobble', // Pano Scrobbler
  'org.videolan.vlc', // VLC
  'org.geogebra.android.calculator.suite', // GeoGebra
  'com.azure.authenticator', // Microsoft Authenticator
  'com.microsoft.office.officehub', // Microsoft Office
  'com.microsoft.office.officehubrow', // Microsoft Office (Google Play版)
  'com.microsoft.office.outlook', // Microsoft Outlook
  'com.microsoft.office.onenote', // Microsoft OneNote
  'com.sonkins.tguitar', // Guitar Tuner
  'com.eumlab.android.prometronome', // Pro Metronome
  'cn.edu.buaa.wxwork', // 智慧北航
  'io.github.muntashirakon.AppManager', // App Manager
  'moe.shizuku.redirectstorage', // 存储空间隔离
  'web1n.stopapp', // 小黑屋
  'com.shatyuka.zhiliao', // 知了
  'com.adobe.reader', // Adobe Acrobat
  'org.wikipedia', // 维基百科
  'org.kiwix.kiwixmobile', // Kiwix
  'com.brakefield.painter', // Infinte Painter
  'me.iacn.biliroaming', // 哔哩漫游
  'com.termux', // Termux
  'oss.krtirtho.spotube', // Spotube
  'com.merxury.blocker', // Blocker
  'moe.minamigo.miuigms', // MIUIGMS
  'mufanc.tools.applock', // AppLock
  'com.gankes.tsbattery', // TSBattery
  'com.oasisfeng.nevo.xposed', // 女娲石
  'com.reddit.frontpage', // Reddit
  'com.ghostflying.locationreportenabler', // LocationReportEnabler
  'com.zyc.zcontrol', // ZControl
  'org.nobody.multitts', // MultiTTS
  'deltazero.amarok', // Amarok 更新提示在 https://i.gkd.li/i/17812411 误触
  'com.quark.browser', // 夸克浏览器 开屏广告误触 https://i.gkd.li/i/18221460
  'bin.mt.plus', // MT管理器
  'com.pikcloud.pikpak', // PikPak
  'com.deepseek.chat', // DeepSeek
  'com.yjllq.kito', // 可拓浏览器
  'com.fuck.android.rimet', // 锤锤
  'cn.tinyhai.ban_uninstall', // 禁止卸载
  'cc.aoeiuv020.iamnotdisabled.hook', // 非残！
  'cc.aoeiuv020.iamnotdisabled', // 我残？
  'io.github.jqssun.gpssetter', // GPS Setter
  'me.hoshino.novpndetect', // NoVPNDetect
  'com.xchat', // XChat
  'com.kooritea.fcmfix', // fcmfix
  'nep.timeline.re_telegram', // Re:Telegram
  'com.fankes.tsbattery', // TSBattery
  'top.trangle.mbga', // MBGA
  'cc.microblock.TGStickerProvider', // TGStickerProvider
  'xyz.xfqlittlefan.notdeveloper', // 我不是开发者
  'com.zhenxi.hunter', // Hunter
  'com.reveny.nativecheck', // Native Detector
  'cn.lyric.getter', // 酒域-歌词获取
  'io.github.vvb2060.keyattestation', // 密钥认证
  'com.google.android.hmal', // 隐藏应用列表（@pumPCin fork）
  'com.adguard.android', // AdGuard
  'com.spotify.music', // Spotify
  'jp.pxv.android', // pixiv
  'com.fankes.apperrorstracking', // 异常跟踪
  'com.fankes.epperrorsdemo', // 异常示例
  'com.fankes.miui.notify', // MIUI 原生通知图标
  'com.simo.ssl.killer', // SSL Killer
  'net.afdian.afdian', // 爱发电
  'org.thoughtcrime.securesms', // Signal 全局规则误触 https://i.gkd.li/i/19952277
  'com.example.piliplus', // PiliPlus
  'com.mtphotosapp', // MT Photos 全局规则误触 https://i.gkd.li/i/20023048
  'com.predidit.kazumi', // Kazumi
  'com.github.catfriend1.syncthingandroid', // Syncthing-Fork
  'com.github.catfriend1.syncthingfork', // Syncthing-Fork
  'org.fcitx.fcitx5.android', // 小企鹅输入法
  'org.fcitx.fcitx5.android.plugin.clipboard_filter', // 小企鹅输入法（剪贴板过滤器插件）
  'org.fcitx.fcitx5.android.plugin.rime', // 小企鹅输入法（中州韵插件）
  'org.fcitx.fcitx5.android.plugin.anthy', // 小企鹅输入法（Anthy 插件）
  'org.fdroid.fdroid', // F-Droid
  'org.fdroid.fdroid.privileged', // F-Droid 特权扩展
  'com.digibites.accubattery', // AccuBattery
  'com.domosekai.cardreader', // 读卡识途
  'com.noctuasoftware.stellarium_free', // Stellarium
  'net.osmand', // OsmAnd
  'net.osmand.plus', // OsmAnd+
  'com.google.android.apps.maps', // Google 地图
  'com.jiaohua_browser', // JMComic2
  'com.picacomic.fregata', // PicACG
  'com.rosan.installer.x.revived', // installerX Revived
  'com.android.gpstest', // GPSTest
  'com.positron_it.zlib', // Z-Lib
  'org.sunsetware.phocid', // Phocid
  'com.twifucker.hachidori', // Hachidori
  'me.neko.fckvip', // Fuck for VIP
  'gr.nikolasspyr.integritycheck', // Play Integrity API Checker
  'com.luckyzyx.luckytool', // 全局规则误触 https://i.gkd.li/i/21339859
  'ai.x.grok', // Grok 全局规则误触 https://i.gkd.li/i/22884434
  'xyz.malkki.neostumbler.fdroid', // NeoStumbler
  'org.torproject.torbrowser', // Tor Browser
  'proton.android.authenticator', // Proton Authenticator
  'io.safepal.wallet', // SafePal
  'org.documentfoundation.libreoffice', // LibreOffice Viewer
  'be.mygod.vpnhotspot_foss', // VPN 热点
  'io.nekohasekai.sfa', // sing-box
  'com.binance.dev', // 币安
  'com.superproductivity.superproductivity', // Super Productivity

  'com.canghai.haoka',
  'com.xy.td',
  'com.bug.hookvip',
  'one.yufz.hmspush',
  'io.github.huskydg.magisk',
  'xzr.konabess',
  'org.lsposed.manager',
  'org.lsposed.daemon',
  'tw.nekomimi.nekogram',
  'io.github.qauxv',
  'com.rezvorck.tiktokplugin',
  'com.zhiliaoapp.musically',
  'com.github.tianma8023.xposed.smscode',
  'Han.GJZS',
  'org.adblockplus.adblockplussbrowser',
  'com.viewblocker.jrsen',
  'com.tsng.hidemyapplist',
  'com.pittvandewitt.wavelet',
  'one.yufz.onebox',
  'com.Wecrane.Scar.pubg',
  'me.bmax.apatch',
  'com.tubevpn.client',
  'github.tornaco.android.thanos.pro',
  'com.omarea.vtools',
  'com.litebyte.samhelper',
  'com.nurke.perfectone',
  'qlenlen.OneDesign',
  'icu.nullptr.nativetest',
  'icu.nullptr.applistdetector',
  'io.github.vvb2060.mahoshojo',
  'com.samsung.android.memoryguardian',
  'com.music.khkj',
  'Hook.JiuWu.Xp',
  'me.weishu.kernelsu',
  'com.franco.kernel',
  'com.samsung.android.themedesigner',
  'com.samsung.android.game.gamehome',
  'com.tencent.tmgp.sgame',
  'com.yangyanghuzhou.heijuan',
  'com.sec.android.app.sbrowser',
  'com.samsung.android.game.gamelab',
  'com.Twilight.tools',
  'com.miui.securitymanager',
  'com.google.android.documentsui',
  'com.android.settings',
  'com.miui.creation',
  'com.xiaomi.scanner',
  'com.miui.gallery',
  'com.yozo.office',
  'com.miui.video',
  'com.xiaomi.wpslauncher',
  'com.sevtinge.hyperceiler',
  'com.dna.tools',
  'flar2.devcheck',
  'com.github.capntrips.kernelflasher',
  'com.google.android.googlequicksearchbox',
  'qyz.onedesign',
  'com.samsung.android.app.repaircal',
  'com.yhchat.app',
  'com.skyhand.sinahelper',
  'com.rong862.bear',
  'be.mygod.vpnhotspot',
  'com.samsung.android.bixby.agent',
  'com.reveny.vbmetafix.service',
  'com.google.android.gms',
  'com.android.vending',
  'com.android.camera',
  'com.android.traceur',
  'com.android.mms',
  'com.google.android.accessibility.switchaccess',
  'com.miui.voiceassist',
  'com.android.fileexplorer',
  'com.miui.miservice',

  // 系统自带非系统应用
  // 小米
  'com.miui.huanji', // 小米换机
  'com.miui.weather2', // 天气
  'com.miui.calculator', // 计算器
  'com.android.soundrecorder', // 录音机
  'com.android.email', // 电子邮件
  'com.miui.screenrecorder', // 屏幕录制
  'com.android.deskclock', // 时钟 https://github.com/gkd-kit/gkd/issues/560
  'com.miui.newmidrive', // 小米云盘
  'cn.wps.moffice_eng.xiaomi.lite', // 小米文档查看器
  'com.miui.mediaeditor', // 小米相册-编辑
  'com.miui.notes', // 笔记
  'com.miui.cleanmaster', // 垃圾清理
  'com.miui.compass', // 指南针
  'com.duokan.phone.remotecontroller', // 万能遥控
  'com.mfashiongallery.emag', // 小米画报
  'com.miui.thirdappassistant', // 三方应用异常分析
  'com.xiaomi.wpslauncher', // WPS Office PC
  'com.xiaomi.cajlauncher', // CAJViewer PC
  'com.mi.car.padapp', // 小米汽车扩展屏
  'com.android.calendar', // 日历
  'com.mi.earphone', // 小米耳机

  // 三星
  'com.samsung.android.app.cameraassistant',
  'com.samsung.android.app.galaxyraw',
  'com.samsung.android.appbooster',
  'com.android.samsung.utilityapp',
  'com.samsung.android.goodlock',
  'com.samsung.android.thermalguardian',
  'com.samsung.android.calendar',
  'com.samsung.android.app.notes',
  'com.samsung.android.app.sreminder',
  'com.samsung.android.app.watchmanager',
  'com.samsung.android.app.reminder',
  'com.adguard.android.contentblocker',
  'com.sec.android.app.music',
  'com.sec.android.app.voicenote',
  'com.futuremark.dmandroid.application',
  'com.sec.android.app.clockpackage',

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器

  'com.google.android.contactkeys', // Android System Key Verifier
  'com.google.android.safetycore', // Android System SafetyCore
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.taptap', // TapTap
  'com.sankuai.meituan', // 美团 误触 https://i.gkd.li/i/17827264
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,

  // 全局规则默认不匹配系统应用，但有的用户喜欢无脑开启规则，容易造成误触，故在此手动禁用
  'com.miui.packageinstaller', // 应用包管理组件
  'com.android.packageinstaller', // 软件包安装程序
  'com.google.android.packageinstaller', // 软件包安装程序
  'com.oplus.appdetail', // 应用安装器
  'com.samsung.android.packageinstaller', // 软件包安装程序

  //-----------------------------------------------------

  'info.muge.appshare', // AppShare
  'com.jingdong.app.mall', // 京东
  'com.netease.uuremote', // UU远程（不更新会强制退出）
  'com.zhjy.study', // 智慧职教（不更新会强制退出）
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  'com.baidu.tieba', // 百度贴吧
  'com.android.bankabc', // 中国农业银行
  'com.autonavi.minimap', // 高德地图
  'com.baidu.netdisk', // 百度网盘
  'com.jingdong.app.mall', // 京东
  'com.max.xiaoheihe', // 小黑盒
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sdu.didi.psnger', // 滴滴出行
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.alibaba.android.rimet', // 钉钉
  'com.taptap', // TapTap
  'com.coolapk.market', // 酷安
  'com.xunlei.downloadprovider', // 迅雷
  'com.taobao.taobao', // 淘宝
  'com.xingin.xhs', // 小红书
  'com.ct.client', // 中国电信
  'me.ele', // 饿了么
  'com.tencent.qqmusic', // QQ音乐
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.bbk.appstore', // vivo应用商店
  'com.miui.player', // 小米音乐
  'com.tencent.southpole.appstore', // 黑鲨应用市场
  'com.heytap.browser', // 一加浏览器
  'com.heytap.themestore', // oppo主题商店
  'com.bbk.theme', // vivo主题商店
  'com.vivo.game', // vivo游戏中心 https://i.gkd.li/i/20097148
  'com.meizu.media.video', // 魅族视频
  'com.hihonor.vmall', // 荣耀商城
  'com.miui.systemAdSolution', // 智能服务
]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.hihonor.phoneservice', // 我的荣耀
]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
