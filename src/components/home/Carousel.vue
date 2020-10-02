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
            <div class="m-wrap" v-for="imgUrl in imgUrls" :key="imgUrl">
                <a href="#">
                    <img class="m-item" :src="imgUrl" />
                </a>
            </div>
        </a-carousel>
        <div class="download">
            <a href="#" class="btn">下载客户端</a>
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
                backgroundImage: 'url(' + this.imgUrls[0] + ')',
                backgroundSize: '6000px',
                backgroundPosition: 'center center'
            }
        };
    },
    props: {
        imgUrls: Array
    },
    methods: {
        bgChange(from, to) {
            this.bg.backgroundImage = 'url(' + this.imgUrls[to] + ')';
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