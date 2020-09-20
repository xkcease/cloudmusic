<template>
    <wrap>
        <div class="bg">
            <div class="desc">
                <p>你可以关注明星和好友品味他们的私房歌单</p>
                <p>通过他们的动态发现更多精彩音乐</p>
            </div>
            <a class="btn" href="#"></a>
        </div>
    </wrap>
</template>

<script>
import Wrap from '../components/Wrap';

export default {
    components: {
        Wrap
    }
};
</script>

<style lang="scss" scoped>
.bg,
.btn {
    background: url(../assets/notlogin.jpg) no-repeat;
}

.bg {
    width: 902px;
    height: 414px;
    margin: 50px auto;
    overflow: hidden;

    .desc {
        width: 500px;
        margin-top: 180px;
        margin-left: 535px;

        p {
            margin-bottom: 0;
            line-height: 23px;
        }
    }

    .btn {
        display: block;
        width: 157px;
        height: 48px;
        margin-top: 34px;
        margin-left: 535px;
        background-position: 0 9999px;
        cursor: pointer;

        &:hover {
            background-position: 0 -430px;
        }
    }
}
</style>