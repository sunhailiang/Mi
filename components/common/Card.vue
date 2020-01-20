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
