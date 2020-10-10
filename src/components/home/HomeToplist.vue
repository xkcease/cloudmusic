<template>
    <div class="toplist-wrap">
        <HomeTap :tapProp="tapProp" />
        <a-row class="toplist-msk">
            <a-col
                :span="8"
                class="list-msk"
                v-for="col in colList"
                :key="col.text"
            >
                <dt>
                    <div class="list-img-msk">
                        <img :src="col.imgUrl" class="list-img" />
                        <a href="#" class="list-img-link"></a>
                    </div>
                    <div class="list-dec">
                        <a href="#" class="list-text">{{ col.text }}</a>
                        <a href="#" class="list-index index-play">播放</a>
                        <a href="#" class="list-index index-collect">收藏</a>
                    </div>
                </dt>
                <dd>
                    <ol class="list-item-msk">
                        <li
                            class="list-item"
                            v-for="item in col.list"
                            :key="item.text"
                            @mouseenter="optionEnter(col.index, item.order)"
                            @mouseleave="optionLeave(col.index, item.order)"
                        >
                            <span
                                class="list-item-order"
                                :class="{
                                    'order-color': redColor(item.order),
                                    'order-last': orderLast(item.order)
                                }"
                                >{{ item.order }}</span
                            >
                            <a
                                class="list-item-text"
                                :href="item.url"
                                :class="{
                                    'option-show':
                                        isOptionShow[col.index][item.order - 1]
                                }"
                                >{{ item.text }}</a
                            >
                            <div
                                class="list-item-select"
                                v-show="isOptionShow[col.index][item.order - 1]"
                            >
                                <a
                                    class="list-index list-item-option list-item-option-play"
                                    href="#"
                                ></a>
                                <a
                                    class="list-icon list-item-option list-item-option-add"
                                    href="#"
                                ></a>
                                <a
                                    class="list-index list-item-option list-item-option-collect"
                                    href="#"
                                ></a>
                            </div>
                        </li>
                    </ol>
                    <div class="list-more">
                        <a href="#">查看全部></a>
                    </div>
                </dd>
            </a-col>
        </a-row>
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
                title: '榜单',
                list: false
            },
            colList: [
                {
                    index: 0,
                    text: '云音乐飙升榜',
                    imgUrl: require('../../assets/toplist_up.png'),
                    list: this.listProp.upList
                },
                {
                    index: 1,
                    text: '云音乐新歌榜',
                    imgUrl: require('../../assets/toplist_new.png'),
                    list: this.listProp.newList
                },
                {
                    index: 2,
                    text: '网易原创歌曲榜',
                    imgUrl: require('../../assets/toplist_produce.png'),
                    list: this.listProp.produceList
                }
            ],
            isOptionShow: [
                [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ],
                [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ]
            ]
        };
    },
    props: {
        listProp: {
            upList: Array,
            newList: Array,
            produceList: Array
        }
    },
    methods: {
        redColor(order) {
            if (order < 4) {
                return true;
            }

            return false;
        },
        orderLast(order) {
            if (10 === order) {
                return true;
            }

            return false;
        },
        optionEnter(index, order) {
            this.$set(this.isOptionShow[index], order - 1, true);
        },
        optionLeave(index, order) {
            this.$set(this.isOptionShow[index], order - 1, false);
        }
    }
};
</script>

<style lang="scss" scoped>
.toplist-wrap {
    margin-bottom: 20px;

    .toplist-msk {
        height: 472px;
        background: url(../../assets/index_bill.png) no-repeat;

        .list-msk {
            .list-img-msk {
                display: inline-block;
                width: 80px;
                margin-left: 20px;
                margin-top: 20px;

                .list-img {
                    width: 80px;
                    height: 80px;
                }

                .list-img-link {
                    display: inline-block;
                    width: 80px;
                    height: 80px;
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background: url(../../assets/coverall.png) no-repeat;
                    background-position: -145px -57px;
                }
            }

            .list-index {
                background: url(../../assets/index.png) no-repeat;
                display: inline-block;
                width: 22px;
                height: 22px;
                margin-right: 10px;
                margin-top: 10px;
                text-indent: -9999px;
            }

            .list-icon {
                background: url(../../assets/icon.png) no-repeat;
                display: inline-block;
            }

            .list-dec {
                display: inline-block;
                width: 116px;
                margin-left: 10px;
                position: absolute;
                top: 23px;

                a {
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;
                }

                .index-play {
                    background-position: -267px -205px;
                    margin-left: 1px;

                    &:hover {
                        background-position: -267px -235px;
                    }
                }

                .index-collect {
                    background-position: -300px -205px;

                    &:hover {
                        background-position: -300px -235px;
                    }
                }
            }

            .list-item-msk {
                position: relative;
                margin-top: 20px;
                padding-left: 28px;
                list-style: none;

                .list-item {
                    display: flex;
                    height: 32px;
                    line-height: 28px;

                    .list-item-order {
                        font-size: 16px;
                        margin-right: 12px;
                        color: #666;
                    }

                    .order-color {
                        color: #c10d0c;
                    }

                    .order-last {
                        margin-left: -8px;
                    }

                    .list-item-text {
                        display: inline-block;
                        width: 170px;
                        font-size: 12px;
                        color: #000;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    .option-show {
                        width: 96px;
                    }

                    .list-item-select {
                        display: inline-block;
                        width: 82px;
                        height: 32px;
                        position: absolute;
                        right: 0;

                        .list-item-option {
                            width: 17px;
                            height: 17px;
                            margin: 0;
                            margin-top: 8px;
                            margin-right: 9px;
                        }

                        .list-item-option-play {
                            background-position: -267px -268px;

                            &:hover {
                                background-position: -267px -288px;
                            }
                        }

                        .list-item-option-add {
                            background-position: 0 -700px;

                            &:hover {
                                background-position: -22px -700px;
                            }
                        }

                        .list-item-option-collect {
                            background-position: -297px -268px;

                            &:hover {
                                background-position: -297px -288px;
                            }
                        }
                    }
                }
            }

            .list-more {
                text-align: right;
                line-height: 1px;
                margin-right: 30px;

                a {
                    font-size: 12px;
                    color: #000;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
