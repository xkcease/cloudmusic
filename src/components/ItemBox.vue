<template>
    <div class="item-box">
        <!-- <img :src="itemProps.imgUrl" /> -->
        <img src="../assets/109951165284378892.jpg" />
        <a class="msk" :href="itemProps.itemUrl"></a>
        <div class="bottom">
            <span class="icon-headset"></span>
            <span>{{ itemProps.number }}万</span>
            <a class="icon-play" href="#"></a>
        </div>
        <p class="dec">
            <a :href="itemProps.itemUrl">{{ itemProps.text }}</a>
        </p>
        <p>
            <span></span>
            <a href="itemProps.artistUrl"></a>
            <span></span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        itemProps: {
            imgUrl: String,
            itemUrl: String,
            number: Number,
            text: String,
            artistUrl: String
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
        }
    }

    .dec {
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
