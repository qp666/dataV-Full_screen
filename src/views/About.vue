<template>
    <div ref="about" class="about">
        <button @click="full"> 全屏切换</button>
        <dv-active-ring-chart :config="config_active" style="width:200px;height:200px" />
        <dv-capsule-chart :config="config_capsule" style="width:300px;height:200px" />
        <div style="width:400px;height:300px">
            <dv-border-box-8 :reverse="true">
                <dv-percent-pond :config="config_percent" style="width:200px;height:100px;" />
            </dv-border-box-8>
        </div>
        <div style="width:400px;height:300px">
            <dv-border-box-2>
                <dv-water-level-pond :config="config_water" style="width:150px;height:200px" />
            </dv-border-box-2>
        </div>
    </div>
</template>


<script>
export default {
    name: 'vue名',

    components: {

    },
    props: {

    },
    data() {
        return {
            config_active: {
                data: [
                    {
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    }
                ],
                lineWidth: 10
            },
            config_capsule: {
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 123
                    },
                    {
                        name: '漯河',
                        value: 98
                    },
                    {
                        name: '郑州',
                        value: 75
                    },
                    {
                        name: '西峡',
                        value: 66
                    },
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位'

            },
            config_percent: {
                value: 66
            },
            config_water: {
                data: [66]
            }
        };
    },
    methods: {
        full() {
            let elem = this.$refs.about;

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
        isElementFullScreen() {

            const fullscreenElement =
                document.fullscreenElement ||
                document.msFullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement;
            if (fullscreenElement === null) {
                return false; // 当前没有元素在全屏状态

            } else {
                return true; // 有元素在全屏状态
            }
        }
    },
    computed: {

    },
    filters: {

    },
    created() {
    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style>
.about {
    background-color: #1e272e;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 800px;
}
</style>
