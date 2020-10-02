<template>
    <div class="wrap-discover">
        <home-tap :tapProp="tapProp[0]"></home-tap>
        <ul class="wrap-item">
            <li
                class="li-item"
                v-for="itemProp in itemProps"
                :key="itemProp.imgUrl"
            >
                <item-box :itemProp="itemProp"></item-box>
            </li>
        </ul>
    </div>
</template>


<script>
import ItemBox from '../ItemBox';
import HomeTap from './HomeTap';

export default {
    data() {
        return {
            tapProp: [
                {
                    title: '热门推荐',
                    list: true
                },
                {
                    title: '新碟上架',
                    list: false
                },
                {
                    title: '榜单',
                    list: false
                }
            ]
        };
    },
    components: {
        ItemBox,
        HomeTap
    },
    props: {
        itemProps: Array
    }
};
</script>


<style lang="scss" scoped>
.wrap-discover {
    .wrap-item {
        list-style: none;
        padding: 0;

        .li-item {
            display: inline-block;
            margin-bottom: 30px;

            &:nth-child(n + 2):nth-child(-n + 4),
            &:nth-child(n + 6):nth-child(-n + 8) {
                margin-left: 42px;
            }
        }
    }
}
</style>