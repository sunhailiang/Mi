<template>
	<view>
		<!-- 图片轮播 -->
		<swiper-img :imgs="swiperImgs" />
		<!-- 首页导航 -->
		<index-nav :navs="navs" />
		<!-- 使用全局分割线 -->
		<divder />
		<!-- 三格广告位 -->
		<three-adv :advs="threeAdv" />
		<!-- 邪恶分割线 -->
		<divder />
		<!-- 卡片 -->
		<Card header="每日精选" bodyImg="/static/images/demo/demo4.jpg" />
		<!-- 商品列表 -->
		<view class="row j-sb">
			<block v-for="(item, index) in list" :key="index"><List :item="item" /></block>
		</view>
	</view>
</template>

<script>
import swiperImg from '@/components/index/SwiperImg.vue';
import indexNav from '@/components/index/IndexNav.vue';
import ThreeAdv from '@/components/index/ThreeAdv.vue';
import Card from '@/components/common/Card.vue';
import List from '@/components/common/CommonList.vue';
export default {
	data() {
		return {
			threeAdv: {
				big: { src: '../../static/images/demo/demo1.jpg' },
				smallTop: { src: '../../static/images/demo/demo2.jpg' },
				smallBottom: { src: '../../static/images/demo/demo3.jpg' }
			},
			navs: [
				{
					src: '../../static/images/indexnav/1.png',
					text: '新品分类'
				},
				{
					src: '../../static/images/indexnav/2.gif',
					text: '小米众筹'
				},
				{
					src: '../../static/images/indexnav/3.gif',
					text: '以旧换新'
				},
				{
					src: '../../static/images/indexnav/4.gif',
					text: '1分拼团'
				},
				{
					src: '../../static/images/indexnav/5.gif',
					text: '超值特卖'
				},
				{
					src: '../../static/images/indexnav/6.gif',
					text: '小米秒杀'
				},
				{
					src: '../../static/images/indexnav/7.gif',
					text: '真心想要'
				},
				{
					src: '../../static/images/indexnav/8.gif',
					text: '电视热卖'
				},
				{
					src: '../../static/images/indexnav/9.gif',
					text: '家电热卖'
				},
				{
					src: '../../static/images/indexnav/10.gif',
					text: '米粉卡'
				}
			],
			swiperImgs: [
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo8.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo8.jpg'
				}
			],
			list: [
				{
					cover: '/static/images/demo/list/1.jpg',
					desc: '控糖',
					title: '小红杯子',
					oprice: 3200,
					cprice: 2020
				},
				{
					cover: '/static/images/demo/list/1.jpg',
					desc: '控糖',
					title: '小红杯子',
					oprice: 3200,
					cprice: 2020
				},
				{
					cover: '/static/images/demo/list/1.jpg',
					desc: '控糖',
					title: '小红杯子',
					oprice: 3200,
					cprice: 2020
				}
			]
		};
	},
	onLoad() {
		console.log('xxxxx', swiperImg);
	},
	methods: {},
	components: {
		swiperImg,
		indexNav,
		ThreeAdv,
		Card,
		List
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
