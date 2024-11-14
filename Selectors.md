# 一些比较通用的规则以及适用场景

## 开屏广告（全局规则）

### 通用情况

适用于```"跳过"文本属性可快速查询```的情况

- 选择器

```txt
[text*="跳过"][text.length<10][visibleToUser=true]
```

适用于```"跳过"文本属性不可快速查询```和```无"跳过"文本属性```的情况

- 选择器

```txt
[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text~="(?is).*skip.*")) || id$="tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*timing.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*" && text!~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]") || (desc.length<10 && (desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*"))]
```

### 字节开屏广告

右上角是圆形跳过按钮，被一个黄色圆圈包围 **（不可快速查询！）**

- 选择器

```txt
FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]
```

示例：

|                                                               |                                                               |                                                               |                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| ![img](https://e.gkd.li/c5926547-7642-4d55-9fbc-d4813ab35acf) | ![img](https://e.gkd.li/77e8fe12-f993-4712-8108-2b6bf2fa1135) | ![img](https://e.gkd.li/f11e0685-6baf-4372-acc5-d67c37d46b20) | ![img](https://e.gkd.li/8ee140eb-320e-440f-849d-ef97295b6162) |

### 排除搜索页

由于上面有两个选择器都匹配```跳过```字样，虽然开屏广告规则限制了```匹配时间、匹配次数、以及文本长度```，但还是可能存在误触的情况，特别是在应用的搜索页，所以可使用以下选择器来排除匹配应用的搜索页面 **（可快速查询！）**

- 选择器

```txt
[text*="搜索" || text^="猜你" || text="历史记录" || text$="在搜"][text.length>3 && text.length<6][visibleToUser=true]
```

之所以限制文本长度```[text.length>3 && text.length<6]```，是因为有部分应用在加载开屏广告时会把首页的节点也加载出来，而大部分应用的首页顶部都会有一个搜索框，可能也会有“搜索”两个字，如果排除匹配内包含了```vid*="search"```和 ```text="搜索"```，那么这种情况下无法跳过开屏广告，并且```vid*="search"```不支持快速查询，所以去掉了 ```vid*="search"```和 ```text="搜索"```,使得排除匹配选择器只能匹配上大部分应用搜索页存在的文本：```搜索记录```、```搜索历史```、```搜索发现```、```历史记录```、```最近搜索```、```猜你想搜```、```猜你想看```、```最近在搜```、```大家都在搜```等等，这样就能实现仅排除匹配应用的搜索页，而不排除匹配应用的首页，避免出现上述无法跳过开屏广告的情况

## 更新提示（全局规则）

- matches数组 **（可快速查询！）**

```txt
matches: [
    '[text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience"][text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
    '[text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验" || text*="确定" || text*="确认"][text.length<6][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
    '[text*="不再提醒" || text$="再说" || text$="拒绝" || text$="再想想" || text*="再看看" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="关闭" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid="iv_close" || vid="iv_cancel" || vid="img_close" || vid="iv_upgrade_close" || vid="btn_close" || vid="update_undo" || vid="upgrade_dialog_close_btn" || vid="ivCancel" || vid="ivClose" || vid="imgClose" || vid="iv_negative" || vid="iv_close_update_dialog"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
],
```

## 青少年模式（全局规则）

- matches数组 **（可快速查询！）**

```txt
matches: [
    '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
    '[text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满"][text.length<8][childCount=0][visibleToUser=true]',
],
```

## 弹窗广告

### 腾讯广告

前两个可适用于大部分情况，底部有醒目文本按钮

- 选择器-1 **（可快速查询！）**

```txt

@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]
```

- 选择器-2 **（可快速查询！）**

```txt
@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text="查看详情" || text="了解更多" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]
```

- 选择器-3 **（可快速查询！）**

```txt
@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <(2,3) FrameLayout[childCount=4] +(1,2) FrameLayout[childCount=2] >2 [text^="立即" || text="去逛逛"]
```

- 选择器-4 **（可快速查询！）**

```txt
@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]
```

示例：

|                                                               |                                                               |                                                               |                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| ![img](https://e.gkd.li/453db543-253a-4e96-80c5-60034bc15efc) | ![img](https://e.gkd.li/224bbf65-6cac-4d69-8548-6e33dfb4bf59) | ![img](https://e.gkd.li/b32e6921-b227-47f6-b189-2bc2fee2b23b) | ![img](https://e.gkd.li/3431d81b-9a1f-48b4-a061-76dc26568c2e) |
| ![img](https://e.gkd.li/bc2e0453-1da8-43db-ad18-ec69d72e3c75) | ![img](https://e.gkd.li/5fab8d4e-e37a-4588-bdd9-2cb64490376c) | ![img](https://e.gkd.li/4b71351c-c001-42be-a7dd-a877d1e5d525) | ![img](https://e.gkd.li/3c5ff634-fe35-4ceb-8e67-565ab3367313) |

### 京东广告

底部有```扭动或点击```字样，下方有圆形波浪

- 选择器-1 **（可快速查询！）**

```txt
@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]
```

- 选择器-2 **（可快速查询！）**

```txt
@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]
```

示例：

|                                                               |                                                               |                                                               |                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| ![img](https://e.gkd.li/878c7708-329c-49c6-9cf4-daf64e0a5333) | ![img](https://e.gkd.li/5b7e260d-6896-4e9d-bbbf-062f5ec02b86) | ![img](https://e.gkd.li/d31ed6be-1211-4d34-855c-3f454f8f4b3f) | ![img](https://e.gkd.li/7f304ff0-787f-43c8-9048-1826c091f10b) |

### 快手广告

- 选择器，关闭按钮在左上角，```广告```字样在左下角 **（可快速查询！）**

```txt
ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]
```

- matches数组，下方倒计时和关闭按钮用竖线隔开 **（可快速查询！）**

```txt
matches: [
  '[text="广告"]',
  '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
],
```

示例：

|                                                               |                                                               |                                                               |                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| ![img](https://e.gkd.li/fb5baf85-526a-4165-945a-73c1e5be5ef3) | ![img](https://e.gkd.li/bb83286c-a8ac-4971-bdf3-9f23f51de2ed) | ![img](https://e.gkd.li/57e7655b-907b-4635-9ab2-d67adb28db0b) | ![img](https://e.gkd.li/11816daf-c315-4bae-a8d5-290790df5610) |

### 字节广告

有```反馈```字样

- 选择器-1 **（可覆盖 95% 的情况，不可快速查询！）**

```txt
@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]
],
```

- 选择器-2 **（不可快速查询！）**

```txt
@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View > [text="反馈"]
],
```

- 选择器-3 **（不可快速查询！）**

```txt
[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]
],
```

- 选择器-4 **（不可快速查询！）**

```txt
[text="反馈"] - View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]
],
```

示例：

|                                                               |                                                               |                                                               |                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| ![img](https://e.gkd.li/f058df20-ae01-435b-a0e5-82474944d768) | ![img](https://e.gkd.li/189a48f8-0733-4d08-acec-aa4ad8cc0bb2) | ![img](https://e.gkd.li/7524bc17-8ff6-4fe1-95dd-3b9c4ae0a4e8) | ![img](https://e.gkd.li/27282270-d731-4cd8-a644-0c2b2029dac2) |
