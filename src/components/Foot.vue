<template>
    <div>
        <a-layout-footer class="ft">
            <a-row type="flex" justify="center">
                <a-col class="ft-l" :span="9" :offset="1">
                    <p class="link">
                        <a href="#">服务条款</a>
                        <span>|</span>
                        <a href="#">隐私政策</a>
                        <span>|</span>
                        <a href="#">儿童隐私政策</a>
                        <span>|</span>
                        <a href="#">版权投诉指引</a>
                        <span>|</span>
                        <a href="#">意见反馈</a>
                        <span>|</span>
                    </p>
                    <p>
                        <span class="sp-m">网易公司版权所有©1997-2020</span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <a href="#">浙网文[2018]3506-263号</a>
                    </p>
                    <p>
                        <span class="sp-m">违法和不良信息举报电话：0571-89853516</span>
                        <span>举报邮箱：</span>
                        <a href="#">ncm5990@163.com</a>
                    </p>
                    <p>
                        <span class="sp-m">粤B2-20090191-18</span>
                        <a href="#">工业和信息化部备案管理系统网站</a>
                        <a href="#">
                            <span class="police"></span>
                            浙公网安备 33010902002564号
                        </a>
                    </p>
                </a-col>
                <a-col class="ft-r" :span="9">
                    <ul>
                        <li>
                            <a class="logo logo-amped" href="#"></a>
                            <span class="tt tt-amped"></span>
                        </li>
                        <li>
                            <a class="logo logo-au" href="#"></a>
                            <span class="tt tt-au"></span>
                        </li>
                        <li>
                            <a class="logo logo-music" href="#"></a>
                            <span class="tt tt-music"></span>
                        </li>
                        <li>
                            <a class="logo logo-reward" href="#"></a>
                            <span class="tt tt-reward"></span>
                        </li>
                        <li>
                            <a class="logo logo-cash" href="#"></a>
                            <span class="tt tt-cash"></span>
                        </li>
                    </ul>
                </a-col>
            </a-row>
        </a-layout-footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ft {
    height: 172px;
    background: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    font-size: 12px;
    line-height: 24px;

    .ft-l {
        p {
            margin-bottom: 0px;
        }

        .link {
            a {
                color: #999;
            }

            span {
                color: #c2c2c2;
                margin: 0 8px 0 10px;
            }
        }

        a {
            color: #666;
            &:hover {
                text-decoration: underline;
            }
        }

        .sp-m {
            margin-right: 12px;
        }

        .police {
            display: inline-block;
            width: 14px;
            height: 14px;
            background: url(../assets/police.png) no-repeat;
            background-size: cover;
            margin-left: 7px;
        }
    }

    .ft-r {
        margin-top: 25px;

        li {
            margin-right: 30px;
            width: 60px;
            height: 70px;
            list-style: none;
            float: left;

            .logo {
                display: block;
                width: 50px;
                height: 45px;
                background: url(../assets/foot_enter_new.png) no-repeat;
                background-size: 110px 552px;
                margin-left: 5px;
            }

            .tt {
                display: inline-block;
                height: 14px;
                background: url(../assets/foot_enter_tt.png) no-repeat;
                background-size: 180px 139px;
                margin-right: 8px;
                margin-top: 5px;
                width: 52px;
                margin-left: 5px;
            }

            .logo-amped {
                background-position: -63px -456.5px;

                + .tt-amped {
                    width: 72px;
                    background-position: 0 -108px;
                    margin-left: 0px;
                }
            }

            .logo-au {
                background-position: -63px -101px;

                + .tt-au {
                    background-position: -1px -91px;
                }
            }

            .logo-reward {
                background-position: -60px -50px;

                + .tt-reward {
                    background-position: 0px -54px;
                }
            }

            .logo-cash {
                background-position: 0 -101px;

                + .tt-cash {
                    background-position: -1px -72px;
                }
            }
        }
    }
}
</style>
