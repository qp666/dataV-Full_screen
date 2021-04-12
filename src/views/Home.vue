<template>
    <div ref="home" class="home" :class="className?'one':'two'">
        <div id="main" style="width: 600px;height:400px;"></div>
        <button @click="full"> 全屏切换</button>
        <div id="main2" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>

import * as echarts from 'echarts';
export default {

    name: 'vue名',

    components: {

    },
    props: {

    },
    data() {
        return {
            className: true
        };
    },
    methods: {
        isElementFullScreen() {

            const fullscreenElement =
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement;
            if (fullscreenElement === null) {
                this.className = false;
                return false; // 当前没有元素在全屏状态

            } else {
                this.className = true;
                return true; // 有元素在全屏状态
            }
        },
        full() {
            let elem = this.$refs.home;

            console.log(this.isElementFullScreen(), '1111')
            if (!this.isElementFullScreen()) {

                if (elem.requestFullscreen) {
                    elem.requestFullscreen()
                }
                else if (elem.webkitRequestFullScreen) {
                    // 对 Chrome 特殊处理，
                    // 参数 Element.ALLOW_KEYBOARD_INPUT 使全屏状态中可以键盘输入。
                    if (window.navigator.userAgent.toUpperCase().indexOf('CHROME') >= 0) {
                        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                    // Safari 浏览器中，如果方法内有参数，则 Fullscreen 功能不可用。
                    else {
                        elem.webkitRequestFullScreen();
                    }
                }
                else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                }
            } else {

                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
            }

        },
        drawChart() {

            var myChart = echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                angleAxis: {
                },
                radiusAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四'],
                    z: 10
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: '跑步',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [2, 4, 6, 8],
                    coordinateSystem: 'polar',
                    name: '打篮球',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: '羽毛球',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['跑步', '打篮球', '羽毛球']
                }
            });

            var myChart2 = echarts.init(document.getElementById('main2'));
            // 绘制图表
            myChart2.setOption({
                angleAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                radiusAxis: {
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [2, 4, 6, 1, 3, 2, 1],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['A', 'B', 'C']
                }
            });
        }
    },
    computed: {

    },
    filters: {

    },
    created() {

    },
    mounted() {
        this.drawChart();
    },
    watch: {

    },
};
</script>

<style >
.home {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 800px;
}
.one {
    background-color: powderblue;
}

.two {
    background-color: #d2dae2;
}
</style>
