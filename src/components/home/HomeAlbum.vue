<template>
    <div class="album-wrap">
        <HomeTap :tapProp="tapProp" />
        <button>left</button>
        <div class="album-msk">
            <ul class="album-roller">
                <li>mew</li>
                <li>mew</li>
                <li>mew</li>
                <li>mew</li>
            </ul>
            <ul class="album-roller">
                <li>mew</li>
                <li>mew</li>
                <li>mew</li>
                <li>mew</li>
            </ul>
        </div>
        <button>right</button>
    </div>
</template>

<script>
import HomeTap from './HomeTap';

export default {
    components: {
        HomeTap
    },
    data() {
        return {
            tapProp: {
                title: '新碟上架',
                list: false
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.album-wrap {
    margin-bottom: 40px;

    .album-msk {
        display: flex;
        width: 689px;
        height: 186px;
        border: 1px solid #d3d3d3;
        background: #f5f5f5;

        .album-roller {
            width: 689px;
            height: 186px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                width: 130px;
                height: 130px;
                border: 1px solid red;

                &:nth-child(-n + 3) {
                    margin-right: 30px;
                }
            }
        }
    }
}
</style>
