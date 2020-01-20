<template>
	<view class="d-flex">
		<image :src="advs.big.src" @tap="imgTapHandle(advs.big)" lazy-load style="width: 373upx;height: 530upx;border-right: 2upx solid #F5F5F5; " mode=""></image>
	    <view class="d-flex flex-column">
			<image :src="advs.smallTop.src"  @tap="imgTapHandle(advs.smallTop)" style="width: 375upx; height: 264upx; border-bottom:2upx solid #F5F5F5 ;" mode=""></image>
		    <image :src="advs.smallBottom.src"  @tap="imgTapHandle(advs.smallBottom)" style="width: 375upx; height: 264upx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'ThreeAdv',
		props:{
			advs:Object
		},
		methods:{
			imgTapHandle(item){
				console.log("三格广告",item)
			}
		}
	}
</script>
