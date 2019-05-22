<template>
	<div>
		<router-link to="/essay0">
			<template>
				<ul class="header_">
					<li class="title">听，那雨的声音</li>
					<li class="time">2019年03月08日 发布:散文 | 分类:写景散文</li>
					<li>
						<p>
							这南方的天气就是如此多雨。都下了半个月了，还是每天扬扬洒洒地下着。大地万物被洗涤得一尘不染。每天如此，只是今夜，那霹雳般的雷声毫不同情地将沉睡的夜击醒。睡梦中的人......[详细]
						</p>
					</li>
				</ul>
			</template>
		</router-link>
		<router-link to="/essay1">
			<template>
				<ul class="header_">
					<li class="title">窗台上的绿</li>
					<li class="time">2019年02月28日 发布:散文 | 分类:写景散文</li>
					<li>
						<p>
							单位的办公室南北各开一窗，透过双层玻璃窗接受着光线的打扰，让我们能在封闭的办公室里知道天的光景。窗外有几棵高大的杨树和枫树，用它们的颜色渲染着窗外......[详细]
						</p>
					</li>
				</ul>
			</template>
		</router-link>
		<router-link to="/essay2">
			<template>
				<ul class="header_">
					<li class="title">微风下，那片葱郁的樟树</li>
					<li class="time">2019年02月22日 发布:散文 | 分类:写景散文</li>
					<li>
						<p>微风下，那片葱郁的樟树 　　迷失如梦 　　微风下，树的叶子在摇曳。抖动着翩翩的舞姿，一闪一闪跳起的旋律，轻轻扬扬、挂满葱郁枝头的绿色，带回了满怀四月写下的希冀......[详细]
						</p>
					</li>
				</ul>
			</template>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Essay',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	p {
		text-indent: 26px;
		font-size: 16px;
		line-height: 26px;
		color: #666;
	}

	.header_ {
		font-size: 16px;
		color:#42b983;
		padding: 0 5px 10px 5px;
		border-bottom: 1px dashed #CCCCCC;
		text-align: left;
	}

	.title {
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
	}

	.time {
		color: #666;
		font-size: 14px;
	}
</style>
