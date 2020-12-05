<template>
    <div class="item-box">
        <img :src="picUrl" />
        <router-link class="msk" :to="'/playlist?id=' + id"></router-link>
        <div class="bottom">
            <span class="icon-headset"></span>
            <span>{{ playCount }}<span v-if="countFlag">万</span></span>
            <a class="icon-play" href="#"></a>
        </div>
        <p class="dec">
            <router-link :to="'/playlist?id=' + id">{{ name }}</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.itemProp.id,
                picUrl: this.itemProp.picUrl,
                name: this.itemProp.name,
                countFlag: false
            };
        },
        props: {
            itemProp: Object
        },
        computed: {
            playCount() {
                let num = this.itemProp.playCount;

                if (num > 10000) {
                    num = Math.floor(num / 10000);
                }

                return num;
            }
        },
        created() {
            if (this.itemProp.playCount > 10000) {
                this.countFlag = true;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .item-box {
        width: 140px;
        height: 100%;
        position: relative;

        img {
            width: 140px;
            height: 140px;
        }

        .msk,
        .bottom {
            background: url(../assets/coverall.png) no-repeat;
        }

        .icon-headset,
        .icon-play {
            background: url(../assets/iconall.png) no-repeat;
        }

        .msk {
            display: inline-block;
            width: 140px;
            height: 140px;
            background-position: 0 0;
            position: absolute;
            top: 0;
            left: 0;
        }

        .bottom {
            width: 100%;
            height: 27px;
            position: absolute;
            top: 113px;
            background-position: 0 -537px;
            color: #ccc;
            font-size: 12px;

            .icon-headset {
                background-position: 0 -24px;
                width: 14px;
                height: 11px;
                display: inline-block;
                margin-top: 8px;
                margin-left: 8px;
                margin-right: 6px;
            }

            .icon-play {
                width: 16px;
                height: 17px;
                position: absolute;
                right: 10px;
                top: 5px;

                &:hover {
                    background-position: 0 -60px;
                }
            }
        }

        .dec {
            margin-top: 5px;
            margin-bottom: 0px;

            a {
                color: #000;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>