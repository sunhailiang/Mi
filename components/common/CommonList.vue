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
