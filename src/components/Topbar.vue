<template>
    <a-layout>
        <a-layout-header class="m-top">
            <a-row class="main-bar" type="flex" justify="center">
                <a-col :span="3">
                    <div class="logo">
                        <router-link :to="{ name: 'home' }"></router-link>
                    </div>
                </a-col>
                <a-col :span="9">
                    <span class="arrow" :style="{ left: arrowState }"></span>
                    <a-menu class="m-menu" mode="horizontal">
                        <a-menu-item class="m-item" v-for="mainItem in mainItems" :key="mainItem.name"
                            @click="mainItemChange(mainItem.name)" :class="{
                                active: mainItemState(mainItem.name)
                            }">{{ mainItem.text }}</a-menu-item>
                    </a-menu>
                    <span class="hot"></span>
                </a-col>
                <a-col :span="6">
                    <a-input class="search" placeholder="音乐/视频/电台/用户">
                        <a-icon slot="prefix" type="search" />
                    </a-input>
                    <a-button class="btn" type="default" shape="round" ghost>创作者中心</a-button>
                    <a class="link" href="javascript:;">登录</a>
                </a-col>
            </a-row>
            <a-row class="sub-bar" type="flex" justify="center" :gutter="10">
                <a-col v-show="subMenuState" :span="16" :offset="3">
                    <a-menu class="sub-menu" mode="horizontal">
                        <a-menu-item class="sub-item" v-for="subItem in subItems" :key="subItem.name"
                            @click="subItemChange(subItem.name)">
                            <span :class="{
                                    active: subItemState(subItem.name)
                                }">{{ subItem.text }}</span>
                        </a-menu-item>
                    </a-menu>
                    <span class="copyright"></span>
                </a-col>
                <a-col v-show="!subMenuState" class="no-sub" :span="24"></a-col>
            </a-row>
        </a-layout-header>
    </a-layout>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                mainItems: [
                    { name: 'home', text: '发现音乐' },
                    { name: 'my', text: '我的音乐' },
                    { name: 'friend', text: '朋友' },
                    { name: 's', text: '商城' },
                    { name: 'musician', text: '音乐人' },
                    { name: 'download', text: '下载客户端' }
                ],
                subItems: [
                    { name: 'home', text: '推荐' },
                    { name: 'toplist', text: '排行榜' },
                    { name: 'playlist', text: '歌单' },
                    { name: 'radio', text: '主播电台' },
                    { name: 'artist', text: '歌手' },
                    { name: 'album', text: '新碟上架' }
                ]
            };
        },
        computed: {
            ...mapState(['mainActive', 'subActive']),
            arrowState() {
                switch (this.mainActive) {
                    case 'home':
                        return '42px';
                    case 'my':
                        return '142px';
                    case 'friend':
                        return '222px';
                    case 'download':
                        return '462px';
                    default:
                        return '';
                }
            },
            subMenuState() {
                if (this.mainActive === 'home') {
                    return true;
                }
                return false;
            }
        },
        methods: {
            mainItemState(name) {
                if (name === this.mainActive) {
                    return true;
                }
            },
            mainItemChange(name) {
                switch (name) {
                    case 'home':
                        this.$router.push({ name: 'home' });
                        break;
                    case 'my':
                        this.$router.push({ name: 'my' });
                        break;
                    case 'friend':
                        this.$router.push({ name: 'friend' });
                        break;
                    case 's':
                    case 'musician':
                        break;
                    case 'download':
                        this.$router.push({ name: 'download' });
                        break;
                    default:
                        console.log('no item');
                        break;
                }
            },
            subItemState(name) {
                if (name === this.subActive) {
                    return true;
                }
            },
            subItemChange(name) {
                switch (name) {
                    case 'home':
                        this.$router.push({ name: 'home' });
                        break;
                    case 'toplist':
                        this.$router.push({ name: 'toplist' });
                        break;
                    case 'playlist':
                        this.$router.push({ name: 'playlist' });
                        break;
                    case 'radio':
                        this.$router.push({ name: 'radio' });
                        break;
                    case 'artist':
                        this.$router.push({ name: 'artist' });
                        break;
                    case 'album':
                        this.$router.push({ name: 'album' });
                        break;
                    default:
                        console.log('no subItem');
                        break;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $barColor: #242424;

    .ant-menu-item-selected {
        color: #fff;
        border-bottom: 0;
    }

    .ant-menu-item {
        top: 0;
    }

    .m-top {
        height: 100%;
        background: $barColor;
        padding: 0px;
        font-size: 14px;

        .main-bar {
            height: 70px;
            background: $barColor;
            border-bottom: 1px solid #000;

            .m-menu {
                line-height: 68px;
                background: $barColor;
                color: #ccc;
                border-bottom: 1px solid #000;

                .m-item {
                    &:hover {
                        color: #fff;
                        background: #000;
                        text-decoration: none;
                        border-bottom: 0px;
                        margin-top: 0px;
                    }
                }

                .active {
                    color: #fff;
                    background: #000;
                    text-decoration: none;
                    border-bottom: 0px;
                    margin-top: 0px;
                }
            }

            .search {
                width: 180px;
                font-size: 12px;
                margin-right: 15px;
            }

            .btn {
                font-size: 12px;
                color: #dede;

                &:hover {
                    color: #fff;
                    border: 1px solid #ccc;
                }
            }

            .link {
                color: #787878;
                font-size: 12px;
                margin-left: 15px;

                &:hover {
                    color: #ccc;
                    text-decoration: underline;
                }
            }
        }

        .logo,
        .hot,
        .arrow,
        .copyright {
            background: url(../assets/topbar.png) no-repeat;
        }

        .logo {
            width: 176px;
            height: 69px;
            background-position: 0 0;
            margin-left: 15px;

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
        }

        .hot {
            display: block;
            width: 28px;
            height: 19px;
            background-position: -190px 0;
            position: absolute;
            top: 21px;
            right: 40px;
        }

        .arrow {
            display: block;
            width: 12px;
            height: 7px;
            background-position: -226px 0;
            position: absolute;
            top: 64px;
            z-index: 9999;
        }

        .copyright {
            display: block;
            width: 12px;
            height: 12px;
            position: absolute;
            top: 8px;
            left: 285px;
            background: url(../assets/copyright.png) no-repeat;
            background-size: 65%;
        }
    }

    .m-top {
        .sub-bar {
            height: 100%;
            background: #c20c0c;
            border-bottom: 1px solid #a40011;
            width: 100%;
            margin: 0px !important;

            .sub-menu {
                height: 35px;
                background: #c20c0c;
                border-bottom: 1px solid #a40011;
                margin: 0;
                padding: 0;
                font-size: 12px;
                line-height: 35px;
                padding-left: 35px;

                .sub-item {
                    color: #fff;

                    &:hover {
                        border-bottom: 0px;
                    }

                    span {
                        display: inline-block;
                        height: 20px;
                        border-radius: 20px;
                        line-height: 20px;
                        padding: 0 12px;

                        &:hover {
                            background: #9b0909;
                        }
                    }

                    .active {
                        background: #9b0909;
                    }
                }
            }

            .no-sub {
                height: 5px;
                border-bottom: 0;
            }
        }
    }
</style>