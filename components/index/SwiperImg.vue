<template>
	<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
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
