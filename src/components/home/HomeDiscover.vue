<template>
    <div class="wrap-discover">
        <HomeTap :tapProp="tapProp" />
        <ul class="wrap-item">
            <li
                class="li-item"
                v-for="itemProp in itemProps"
                :key="itemProp.id"
            >
                <ItemBox :itemProp="itemProp" />
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
            tapProp: {
                title: '热门推荐',
                list: true
            }
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
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;

        .li-item {
            display: inline-block;
            margin-bottom: 45px;

            &:nth-child(n + 2):nth-child(-n + 4),
            &:nth-child(n + 6):nth-child(-n + 8) {
                margin-left: 42px;
            }
        }
    }
}
</style>
