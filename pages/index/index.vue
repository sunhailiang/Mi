<template>
	<view>
		<!-- 图片轮播 -->
		<!-- <swiper-img :imgs="swiperImgs" /> -->
		<!-- 首页导航 -->
		<!-- <index-nav :navs="navs" /> -->
		<!-- 使用全局分割线 -->
		<!-- <divder /> -->
		<!-- 三格广告位 -->
		<!-- <three-adv :advs="threeAdv" /> -->
		<!-- 邪恶分割线 -->
		<!-- <divder /> -->
		<!-- 卡片 -->
		<!-- <Card header="每日精选" bodyImg="/static/images/demo/demo4.jpg" /> -->
		<!-- 商品列表 -->
		<!-- <view class="row j-sb"> -->
		<!-- <block v-for="(item, index) in list" :key="index"><List :item="item" /></block> -->
		<!-- </view> -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80upx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view
				@tap="tabTapHandle(index)"
				class="scroll-row-item px-3"
				style="height: 80upx; line-height: 80upx; border-bottom: #FD6801 solid 1upx;"
				v-for="(item, index) in tabs"
				:key="index"
				:class="currentTabIndex === index ? 'main-text-color' : ''"
				:id="'tab' + index"
			>
				<text>{{ item.name }}</text>
			</view>
		</scroll-view>
		<swiper @change="changeTabListener" :duration="300" :current="currentTabIndex" :style="'height:' + maincontainerH + 'px'">
			<swiper-item v-for="(list, index) in tabs" :key="index">
				<view class="swiper-item">
					<scroll-view scroll-y="true" :style="'height:' + maincontainerH + 'px'">
						<block v-for="(obj, objIndex) in list.data" :key="objIndex">
							<!-- {{obj}} -->
							<swiper-img v-if="obj.type === 'swiperImgs'" :imgs="obj.data" />
							<!-- 首页导航 -->
							<template v-else-if="obj.type === 'navs'">
								<index-nav :navs="obj.data" />
								<divder />
							</template>

							<template v-else-if="obj.type === 'threeAdv'">
								<three-adv :advs="obj.data" />
								<divder />
							</template>

							<!-- 卡片 -->
							<!-- <Card header="每日精选" bodyImg="/static/images/demo/demo4.jpg" /> -->
							<!-- 商品列表 -->
							<view v-else-if="obj.type === 'list'" class="row j-sb">
								<block v-for="(item, index) in obj.data" :key="index"><List :item="item" /></block>
							</view>
						</block>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
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
			maincontainerH: 500,
			currentTabIndex: 0,
			scrollinto: '',
			tabs: [
				{
					name: '推荐',
					data: [
						{
							type: 'swiperImgs',
							data: [
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
							]
						},
						{
							type: 'navs',
							data: [
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
							]
						},
						{
							type: 'threeAdv',
							data: {
								big: { src: '../../static/images/demo/demo1.jpg' },
								smallTop: { src: '../../static/images/demo/demo2.jpg' },
								smallBottom: { src: '../../static/images/demo/demo3.jpg' }
							}
						},
						{
							type: 'list',
							data: [
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
						}
					]
				},
				{ name: '关注' },
				{ name: '体育' },
				{ name: '热点' },
				{ name: '财经' },
				{ name: '娱乐' },
				{ name: '军事' },
				{ name: '历史' },
				{ name: '本地' }
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.maincontainerH = res.windowHeight - uni.upx2px(82);
				console.log('多高?', this.maincontainerH);
			}
		});
	},
	methods: {
		tabTapHandle(index) {
			if (this.currentTabIndex === index) {
				return;
			}
			this.currentTabIndex = index;
			this.scrollinto = 'tab' + index; // 顶部滚动条随着页面滚动
		},
		changeTabListener(e) {
			this.tabTapHandle(e.detail.current);
		}
	},
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
