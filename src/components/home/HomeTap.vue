<template>
    <a-row class="home-tap" type="flex">
        <a-col class="w-hot bg-index" :span="4">
            <a href="#" class="hot">{{ tapProp.title }}</a>
        </a-col>
        <a-col :span="9">
            <div class="tap" v-if="tapProp.list">
                <a href="#">华语</a>
                <span>|</span>
                <a href="#">流行</a>
                <span>|</span>
                <a href="#">摇滚</a>
                <span>|</span>
                <a href="#">民谣</a>
                <span>|</span>
                <a href="#">电子</a>
            </div>
        </a-col>
        <a-col class="w-more" :span="2" :offset="9">
            <a class="more" href="#">更多</a>
            <i class="more-arrow bg-index"></i>
        </a-col>
    </a-row>
</template>

<script>
export default {
    props: {
        tapProp: {
            title: String,
            list: Boolean
        }
    }
};
</script>

<style lang="scss">
.home-tap {
    margin-bottom: 20px;
    border-bottom: 2px solid #c10d0c;
    padding-bottom: 6px;

    .bg-index {
        background: url(../../assets/index.png) no-repeat;
    }

    .w-hot {
        font-size: 20px;
        line-height: 28px;
        background-position: -225px -156px;

        .hot {
            margin-left: 34px;
            color: #333;
        }
    }

    .tap {
        font-size: 12px;
        margin-left: 18px;
        padding-top: 7px;

        a {
            color: #666;

            &:hover {
                text-decoration: underline;
            }
        }

        span {
            color: #c2c2c2;
            margin: 0 13px;
        }
    }

    .w-more {
        padding-top: 7px;
        padding-left: 10px;

        .more {
            font-size: 12px;
            color: #666;

            &:hover {
                text-decoration: underline;
            }
        }

        .more-arrow {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 3px;
            background-position: 0 -240px;
            vertical-align: middle;
        }
    }
}
</style>
