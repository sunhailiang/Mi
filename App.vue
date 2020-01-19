<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*内置组件样式*/
	@import "/common/uni.css";
	/*第三方动画样式*/
	@import "/common/animate.css";
	/*全局图标*/
	@import "/common/icon.css";
	/*全局样式*/
	@import "/common/common.css";
	/*基础UI库*/
	@import "/common/base.css";
	
</style>
