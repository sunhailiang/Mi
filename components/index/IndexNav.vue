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
