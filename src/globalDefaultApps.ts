import { batchImportApps } from '@gkd-kit/tools';
import { RawApp } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

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
  'com.alicloud.databox', // 阿里云盘 开屏广告在 https://i.gkd.li/i/15144565 误触导致自动签到规则执行中断
  'xyz.nextalone.nagram', // Nagram
  'com.openai.chatgpt', // ChatGPT
  'org.telegram.group', // Turrit
  'com.android.chrome', // Chrome
  'com.google.android.youtube', // YouTube 开屏广告在 https://i.gkd.li/i/15765176 误触
  'com.xunmeng.pinduoduo', // 拼多多
  'com.byyoung.setting', //爱玩机工具箱
  'com.mixplorer', // MiX文件管理器

  'com.canghai.haoka',
  'com.xy.td',
  'com.bug.hookvip',
  'one.yufz.hmspush',
  'io.github.huskydg.magisk',
  'xzr.konabess',
  'org.lsposed.manager',
  'com.microsoft.office.officehub',
  'bin.mt.plus',
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

  //三星
  'com.samsung.android.app.cameraassistant',
  'com.samsung.android.app.galaxyraw',
  'com.samsung.android.appbooster',
  'com.android.samsung.utilityapp',
  'com.samsung.android.goodlock',
  'com.samsung.android.thermalguardian',
  'com.samsung.android.calendar',
  'com.samsung.android.app.notes',
  'com.jv.samsungeshop',
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
];

// 如果某应用的规则中已有全局规则中的某一类的规则, 则在此应用禁用对应全局规则
function filterAppsByGroup(apps: RawApp[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length > 0,
    )
    .map((a) => a.id);
}

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.taptap', // TapTap
  ...filterAppsByGroup(apps, '开屏广告'),
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'info.muge.appshare', // AppShare
  ...filterAppsByGroup(apps, '更新提示'),
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.bbk.theme', // i 主题
  'com.bbk.appstore', // vivo应用商店
  'com.miui.player', // 小米音乐
  'com.tencent.southpole.appstore', // 黑鲨应用市场
  'com.vivo.space', // vivo 官网
  'com.heytap.browser', // 一加浏览器
  'com.heytap.themestore', // oppo主题商店
]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
