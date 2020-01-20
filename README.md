# UniAppDemo 开发
## 环境搭建和项目创建
- 看下官方文档，很简单，3分钟上手，养成看文档的习惯
## 运行项目
- 安装adb
- 将adb的安装路径添加到运行->手机或模拟器->adb路径设置
- 安装模拟器，比如雷电模拟器，安装并运行
- 此时打开运行->手机或模拟器->adb路径设置 在路径下面有一个PID设置
   - 注意这个端口用来切换真机还是模拟器
   - 你去任务管理器->详细信息->找到你正在运行的模拟的pid此时你将这个pid放到端口中，那运行项目就模拟机
   - 注意：真机运行你需要打开手机的开发者模式和USB调试模式
   - 此时再去观察任务管理器，将adb这个任务的pid填入，就能直接真机运行

## App.vue配置全局公共样式
### 基础引入
- 使用官方组件库  uni.css
- 动画库 animate.css
- 图标库  icon.css
- 公共样式  common.css
### 引入方式
- 新建common文件夹存放公共资源
   - 创建演示用的完整demo的common文件夹下找到uni.js复制放到新建的common文件夹下
   - 去Animate.css官方找到，复制到common下
   - common就是每个页面公用的样式
   - 全局icon设置
      - 登陆阿里巴巴 iconfont 登陆->新建项目图库->选择你要的图->添加到项目中->下载
	  - 打开下载文件后，我们只用到iconfont.css
	  - **注意：** 打开iconfont，我们只保留一个src：url,其余的外部资源不要
	  - 使用时候：直接在iconfont中选中资源，下载，替换就可以了，尽量批量操作，提高效率
	  - 例如：
```css
@font-face {font-family: "iconfont";
  src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPAAAsAAAAACDgAAANzAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqEGINZATYCJAMMCwgABCAFhG0HQBspBxEVnAXIfiTYuMXFyvqmiypqBXkTPE951ftVlbQXkG9istBQt+VJ9M3sHjRAAAHYrekY2yJMhOqStSw/bWd+dKWXD+s8TqMUQiIkf3+omukBnC+Llsv6WXtpKBfAcM5zARpjd1DJWpCeV8w6jF3QEq9DAD/l1CFduvUZgheDOU8AmTNz+kS8GTOmoVbwItgVWw0Sj4VXbVQ3gLjg5+UjjfKCwtKYSwdM6zqFDm/yv5monTyHMR4GNJ0TYLtAA3WAARlX6R6BjtJ1aPyq2jSX2hgENVUsL49Aoilt6x8eKATExqwOAlADqdRFIUeSaCZC6VWjhwvagFrFQeCFYSnCHGZhFS1YrGSweLEQ+MRoV6LSiutQWpqb6g9uSkY5KYGZQZ2amhhDUZXYpUI4umhIuZKSEpUmrui2o4wrm5KLqKAryQ3OgCu6pNQlBZKxquCIxy/eVGzYlQf+R2+GPX47/OHroc6DIUMziiQveRD8eQ8fDo163Lt4WtGhwzKLn38sjx5NcTK2Re3IcjO3b9qaPjS1tfoXCH4NNGy4J7dEXrBv0OnTp1bDhoGvuXSJ3Kpz9+L0noYNodwEXDu5rxk4KhFrxqg9OXPuHm85bb7cNLjfbPT80m0fmwoVjMv9pEL5x9YTq3z5I/rXS6rTocPOQSczy3Y+ccKEIwaQToTDr7aYXcrPgX2bazZwJuw+Vnd9T3MiEtl1pED4dIXTHyp+gOHwoQIFAsGK4dPlb384WKAAqr6NCQDkRetfeh7krTJo5y//Dl+ati4wPn+b396AAeBZr7KfkbRbJXhR0Bn9U9SxzWgy06KNInEkRk4zEeuNiaCI+8jD9Bfyari3KBKn4OUIgsJDWdB4qYI1xDpgsQU0AZtXe/Cr7bA7oDA2JvMBtbwBiAI+oORzGrQCvlhD/IGlmD/YCjQGv2Gtjwyoll1tGDPBEvIX2II6ZdtkFdYeUd+ajNOygHxFdjYGYb0G+dwBO+QpVri7jkQUKKYW9uA2bBqCnqnCQjwj0sd+/WlVX+QV1A5WOmMoI1AJ5F6AVSAd5XUXq8L3HyHtppHhhpaq4BVijh0chDxBB+xB3XVquZXPOHdaRAgFKIy0wB44UWOlCeirJ1VQQXjMgGQv5qNOqqvaW17bvt8ewM9s1inRYgg9CIdxRdYlidnTZuSYBgMA') format('woff2');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// 这些都是我们选中的
.iconrichscan_icon:before {
  content: "\e661";
}

.iconxiaoxi:before {
  content: "\e60f";
}



```
- 在App.vue中引入
```css
	/*每个页面公共css */
	/*内置组件样式*/
	@import "/common/uni.css";
	/*第三方动画样式*/
	@import "/common/animate.css";
	/*全局图标*/
	@import "/common/icon.css";
	/*全局样式*/
	@import "/common/common.css";
```

## 开发底部导航
### pages.json 是用来全局配置的
- 准备材料
   - 底部导航选中和取消的状态
      - 去阿里iconfont 选中icon,然后根据设计稿改变配色，然后导出成图片
   - 关键代码
```js
    // 底部导航
	"tabBar": { 
		"color": "#B1B1B1", // 字体颜色
		"selectedColor": "#FD6801", // tab选中后字体颜色
		"borderStyle": "black", // 边框颜色
		"backgroundColor": "#FFFFFF", // 背景颜色
		"list": [{ // 底部导航列表
			"pagePath": "pages/index/index", // 导航链接
			"iconPath": "static/tabbar/index.png", // 默认导航图片
			"selectedIconPath": "static/tabbar/indexSelected.png" ,//  选中后的图片
			"text": "首页" // 导航文字
		}, {
			"pagePath": "pages/class/class",
			"iconPath": "static/tabbar/class.png",
			"selectedIconPath": "static/tabbar/classSelected.png",
			"text": "分类"
		}, {
			"pagePath": "pages/cart/cart",
			"iconPath": "static/tabbar/cart.png",
			"selectedIconPath": "static/tabbar/cartSelected.png",
			"text": "购物车"
		}, {
			"pagePath": "pages/my/my",
			"iconPath": "static/tabbar/my.png",
			"selectedIconPath": "static/tabbar/mySelected.png",
			"text": "我的"
		}]
	}
```
## 封装常用UI基础库
- 仔细看common->base.css
- 在App.vue中引入该css
## 开发首页的基本配置
### 配置page.json
- 以首页为例子
```js
			"path": "pages/index/index",
			"style": {
				"app-plus": {
					// 设置没有滚动条
					"scrollIndicator":"none",
					"titleNView": {//头部组件
						"searchInput": { //搜索输入框
							"align": "left",
							"backgroundColor": "#F7F7F7",
							"borderRadius": "4px",
							"disabled": true, // 点击跳转
							"placeholder": "智能积木 越野四驱车", // 默认提示
							"placeholderColor": "#CCCCCC" // 提示背景颜色
						},
						"buttons": [
							{// 消息
								"color": "#989898",
								"colorPressed": "#FD6801",
								"float": "left",
								"fontSize": "22px",
								"fontSrc": "/static/font/iconfont.ttf",
								"text": "\ue67a"
							},
							{   //扫一扫
								"color": "#989898",
								"colorPressed": "#FD6801",
								"float": "right",
								"fontSize": "22px",
								"fontSrc": "/static/font/iconfont.ttf",
								"text": "\ue661"
							}
						]
					}
				}
			}
			
```

## 封装图片轮播组件
- 根目录下创建components
- 
> components->index->SwiperImg.vue

```js
<template>
	<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>// 无缝衔接，懒加载，必要高度，小圆点，自动滚动
		<block v-for="(item, index) in imgs" :key="index">
			<swiper-item @tap="ImgTapHandler(item)"><image lazy-load style="height:350upx;" :src="item.src" mode=""></image></swiper-item>
		</block>
	</swiper>
</template>

<script>
export default {
	props: {
		imgs: Array
	},
	methods:{
		ImgTapHandler(img){
			console.log("点击了",img)
		}
	}
};
</script>

<style></style>

```

## 封装通用导航

> components->index->IndexNav.vue

```js
<template>
	<view class="row j-center m-2">
		<view v-for="(item, index) in navs" @tap="navTapHandle(item)" :key="index" class="span-4 d-flex flex-column j-center a-center py-1">
			<image :src="item.src" style="width: 60upx;height: 60upx;" mode="widthFix"></image>
			<text class="font-sm">{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		navs: Array
	},
	methods:{
		navTapHandle(item){
			console.log("你愁啥？导航没看过？",item)
		}
	}
};
</script>

```

## 封装全局组件-横向分割线
- 全局组件，需要在main.js中全局注册，这样频繁使用时直接调用即可了
> components->common->Divder.vue
```js
<template>
	<view style="height: 18upx; background-color: #F5F5F5;"></view>
</template>
<script>
	export default{
		name:'Divder'
	}
</script>

```
> 全局调用 main.js
```js
// 引入公共组件
import Divder from '@/components/common/Divder.vue'
Vue.component("divder",Divder)
```

## 封装三格广告位
> components->index->ThreeAdv.vue

```js
<template>
	<view class="d-flex">
		<image :src="advs.big.src" lazy-load style="width: 373upx;height: 530upx;border-right: 2upx solid #F5F5F5; " mode=""></image>
	    <view class="d-flex flex-column">
			<image :src="advs.smallTop.src" style="width: 375upx; height: 264upx; border-bottom:2upx solid #F5F5F5 ;" mode=""></image>
		    <image :src="advs.smallBottom.src" style="width: 375upx; height: 264upx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'ThreeAdv',
		props:{
			advs:Object
		}
	}
</script>

```

## 封装全局通用卡片
> components->common->card.vue
```js
<template>
	<view class="card">
		<!-- header -->
		<view v-if="showHeader" class="p-2 border-bottom main-border-color">
			<!-- 头部插槽，可以自定义 -->
			<slot name="header">
				<text class="font-md font-weight">{{ header }}</text>
			</slot>
		</view>
		<!-- body -->
		<view>
			<!-- 是否渲染图片 -->
			<image v-if="bodyImg" :src="bodyImg" mode="widthFix"></image>
			<slot />
		</view>
	</view>
</template>

<script>
export default {
	name: 'Card',
	props: {
		// 头部文字
		header: String,
		// body
		bodyImg: String,
		showHeader:{
			type:Boolean,
			default:true
		}
	}
};
</script>

<style></style>

```

## 封装通用的价格组件
> components->common->Price.vue
```js
<template>
	<view class="d-flex my-1">
		<view class="d-flex main-text-color font-md line-h">
			<text class="a-self-start font-sm">￥</text>
			<slot></slot> // 采用slot写法这样在页面呈现比较好看 <Price>2020</Price> 而且不用定义props
		</view>
		<view class="font-sm text-light-muted line-through ml-1 a-self-end">￥2699</view>
	</view>
</template>

<script>
 export default{
	 name:'Price'
 }	
</script>
```

## 封装通用列表组件
> components>common->CommonList.vue
```js
<template>
	<view style="width: 372.5upx;">
		<image :src="item.cover" mode="widthFix" lazy-load=""></image>
		<view class="p-2 pt-1">
			<view class="font-md">{{ item.title }}</view>
			<text class="d-block font text-light-muted">{{ item.desc }}</text>
			<!-- 使用价格组件 -->
			<view class="d-flex m-1">
				<Price>{{ item.cprice }}</Price>
				<view class="font-sm text-light-muted line-through ml-1 a-self-end">￥{{ item.cprice }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import Price from '@/components/common/Price.vue';
export default {
	name: 'CommonList',
	props: {
		item: Object
	},
	components: {
		Price
	}
};
</script>

<style></style>

```