<template>
    <div class="ca-box">
        <div class="bg-blur" :style="bg"></div>
        <a-carousel
            class="carousel"
            effect="fade"
            :autoplaySpeed="3500"
            :beforeChange="bgChange"
            arrows
            autoplay
        >
            <template v-slot:prevArrow>
                <a class="l-arrow arrow" href="#"></a>
            </template>
            <template v-slot:nextArrow>
                <a class="r-arrow arrow" href="#"></a>
            </template>
            <div
                class="m-wrap"
                v-for="banner in banners"
                :key="banner.imageUrl"
            >
                <router-link :to="getUrl(banner)">
                    <img class="m-item" :src="banner.imageUrl" />
                </router-link>
            </div>
        </a-carousel>
        <div class="download">
            <router-link class="btn" to="/download">下载客户端</router-link>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <div class="bg-blur" :style="bg"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bg: {
                backgroundImage: '',
                backgroundSize: '6000px',
                backgroundPosition: 'center center'
            },
            banners: []
        };
    },
    props: {
        bannersProp: Array
    },
    methods: {
        bgChange(from, to) {
            this.bg.backgroundImage = 'url(' + this.banners[to].imageUrl + ')';
        },
        getUrl(banner) {
            switch (banner.targetType) {
                case 1:
                    return './song?id=' + banner.targetId;
                case 10:
                    return '/album?album=' + banner.targetId;
                case 1004:
                    return '/mv?mv=' + banner.targetId;
                case 3000:
                    return banner.url;
                default:
                    return;
            }
        }
    },
    watch: {
        bannersProp() {
            this.banners = this.bannersProp;
        }
    }
};
</script>

<style lang="scss" scoped>
.ca-box {
    width: 100%;
    height: 285px;
    display: flex;
    justify-content: center;
    background: #ccc;
    overflow: hidden;

    .bg-blur {
        width: 100%;
        filter: blur(100px);
        background-size: '6000px';
        background-position: 'center center';
    }

    .carousel {
        width: 730px;
        flex-shrink: 0;

        .arrow {
            background: url(../../assets/banner.png) no-repeat;
        }

        .l-arrow {
            display: block;
            width: 37px;
            height: 63px;
            background-position: 0 -360px;
            left: -70px;
            top: 42%;
            z-index: 9999;

            &:hover {
                background-position: 0 -430px;
            }
        }

        .r-arrow {
            display: block;
            width: 37px;
            height: 63px;
            background-position: 0 -508px;
            right: -315px;
            top: 42%;
            z-index: 9999;

            &:hover {
                background-position: 0 -578px;
            }
        }

        .m-wrap {
            height: 285px;

            .m-item {
                width: 730px;
                height: 285px;
            }
        }
    }

    .download,
    .download .btn {
        background: url(../../assets/download.png) no-repeat;
    }

    .download {
        width: 252px;
        flex-shrink: 0;

        .btn {
            display: block;
            width: 215px;
            height: 56px;
            margin-left: 19px;
            margin-top: 186px;
            background-position: 9999px;
            text-indent: -9999px;

            &:hover {
                background-position: 0 -290px;
            }
        }

        p {
            font-size: 12px;
            color: #8d8d8d;
            margin: 10px auto;
            text-align: center;
        }
    }
}
</style>
