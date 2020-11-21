<template>
    <div class="player-btmbar">
        <div class="player">
            <audio
                ref="audioElem"
                :src="song.url"
                @timeupdate="playing"
            ></audio>
            <div class="updn m-playbar"></div>
            <div class="bg m-playbar"></div>
            <div class="hand"></div>
            <div class="control">
                <div class="play-btn-msk">
                    <a class="prev m-playbar" href="javascript:;">上一首</a>
                    <a
                        class="btn-play m-playbar"
                        :class="{ play: !isPlay, pause: isPlay }"
                        @click="play"
                        href="javascript:;"
                        >播放/暂停</a
                    >
                    <a
                        class="next m-playbar"
                        @click="nextSong"
                        href="javascript:;"
                        >下一首</a
                    >
                </div>
                <div class="play-head">
                    <img :src="song.picUrl" />
                    <a class="head-msk m-playbar" href="javascript:;"></a>
                </div>
                <div class="progress-bar">
                    <div class="text-msk">
                        <a href="javascript:;">{{ song.name }}</a>
                        <a href="javascript:;">{{ song.artistName }}</a>
                        <a class="source m-playbar" href="javascript:;"></a>
                    </div>
                    <div class="progress-msk">
                        <div class="progress m-statbar">
                            <div
                                class="rdy m-statbar"
                                :style="{ width: progress.bufferedProgress }"
                            ></div>
                            <div
                                class="cur m-statbar"
                                :style="{ width: progress.curProgress }"
                            >
                                <span
                                    class="cur-dot m-iconall"
                                    :style="{ left: progress.curProgress }"
                                ></span>
                            </div>
                        </div>
                        <div class="time-msk">
                            <span class="time">
                                <em>{{ progress.currentTime }}</em>
                                / {{ progress.duration }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="oper">
                    <a class="icon-add m-playbar" href="javascript:;">收藏</a>
                    <a class="icon-share m-playbar" href="javascript:;">分享</a>
                </div>
                <div class="ctrl m-playbar">
                    <a class="icon-vol m-playbar" href="javascript:;"></a>
                    <a class="icon-loop m-playbar" href="javascript:;"></a>
                    <a class="icon-list m-playbar" href="javascript:;">
                        <span>7</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="player-list">
            <div class="list-head"></div>
            <div class="list-body">
                <div class="list-wrap"></div>
                <div class="lyric-wrap"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            songData: {},
            song: {
                url: '',
                name: '',
                artistName: '',
                picUrl: '',
            },
            progress: {
                curProgress: '0',
                bufferedProgress: '0',
                currentTime: '00:00',
                duration: '00:00',
            },
            songList: [],
            isPlay: false,
            songnext: {
                url: '',
                name: '',
                artistName: '',
                picUrl: '',
            },
        };
    },
    methods: {
        play() {
            let audioElem = this.$refs.audioElem;

            if (audioElem.paused) {
                this.isPlay = true;
                audioElem.play();
            } else {
                this.isPlay = false;
                audioElem.pause();
            }
        },
        playing() {
            let audioElem = this.$refs.audioElem;
            let currentTime = audioElem.currentTime;
            let duration = audioElem.duration;

            // 总时间
            if (this.progress.duration === '00:00') {
                this.progress.duration = this.timeFormat(duration);
            }

            // 当前时间
            this.progress.currentTime = this.timeFormat(currentTime);

            // 进度条
            this.progress.curProgress = (currentTime / duration) * 493 + 'px';
            this.progress.bufferedProgress =
                (audioElem.buffered.end(0) / duration) * 493 + 'px';
            console.log('playing');
        },
        timeFormat(time) {
            let temp = '';
            let min = Math.floor(time / 60);
            temp += min < 10 ? '0' + min : min;
            temp += ':';

            let second = Math.floor(time % 60);
            temp += second < 10 ? '0' + second : second;

            return temp;
        },
        reset() {
            this.isPlay = false;
            this.$refs.audioElem.pause();
            this.$refs.audioElem.src = '';
            this.progress.duration = '00:00';
            this.progress.currentTime = '00:00';
            this.progress.curProgress = '0';
            this.progress.bufferedProgress = '0';
        },
        nextSong() {
            this.reset();

            axios
                .get('http://localhost:3000/song/url?id=254574')
                .then((res) => {
                    this.song.url = res.data.data[0].url;
                });

            axios
                .get('http://localhost:3000/song/detail?ids=254574')
                .then((res) => {
                    this.songData = res.data.songs[0];
                    this.song.picUrl = res.data.songs[0].al.picUrl;
                    this.song.name = res.data.songs[0].name;
                    this.song.artistName = res.data.songs[0].ar[0].name;
                });
        },
    },
    mounted() {
        axios.get('http://localhost:3000/song/url?id=254499').then((res) => {
            this.song.url = res.data.data[0].url;
        });

        axios
            .get('http://localhost:3000/song/detail?ids=254499')
            .then((res) => {
                this.songData = res.data.songs[0];
                this.song.picUrl = res.data.songs[0].al.picUrl;
                this.song.name = res.data.songs[0].name;
                this.song.artistName = res.data.songs[0].ar[0].name;
            });
    },
};
</script>

<style lang="scss" scoped>
.player-btmbar {
    position: fixed;
    width: 100%;
    bottom: 0;

    .player {
        width: 100%;
        height: 53px;
        position: absolute;
        top: -53px;

        .m-playbar {
            background: url(../assets/playbar.png) no-repeat;
        }

        .updn {
            width: 52px;
            height: 67px;
            position: absolute;
            top: -14px;
            right: 15px;
            background-position: 0 -380px;
        }

        .bg {
            height: 53px;
            background-position: 0 0;
            background-repeat: repeat-x;
        }

        .hand {
            width: 100%;
            height: 20px;
            position: absolute;
            top: -10px;
        }

        .control {
            display: flex;
            width: 980px;
            height: 47px;
            position: absolute;
            top: 6px;
            left: 50%;
            margin-left: -490px;

            .play-btn-msk {
                display: flex;
                width: 137px;
                padding-top: 6px;

                a {
                    display: inline-block;
                    text-indent: -9999px;
                    margin-right: 8px;
                }

                .prev,
                .next {
                    width: 28px;
                    height: 28px;
                    margin-top: 5px;
                }

                .prev {
                    background-position: 0 -130px;

                    &:hover {
                        background-position: -30px -130px;
                    }
                }

                .next {
                    background-position: -80px -130px;

                    &:hover {
                        background-position: -110px -130px;
                    }
                }

                .btn-play {
                    width: 36px;
                    height: 36px;
                }

                .play {
                    background-position: 0 -204px;

                    &:hover {
                        background-position: -40px -204px;
                    }
                }

                .pause {
                    background-position: 0 -165px;

                    &:hover {
                        background-position: -40px -165px;
                    }
                }
            }

            .play-head {
                position: relative;
                margin-top: 6px;
                margin-right: 15px;

                img {
                    width: 34px;
                    height: 34px;
                }

                .head-msk {
                    display: block;
                    width: 34px;
                    height: 34px;
                    position: absolute;
                    top: 0;
                    background-position: 0 -80px;
                }
            }

            .progress-bar {
                width: 608px;

                .text-msk {
                    display: flex;
                    height: 28px;
                    line-height: 28px;
                    font-size: 12px;

                    a {
                        color: #e8e8e8;
                        margin-right: 15px;

                        &:hover {
                            text-decoration: underline;
                        }

                        &:nth-child(2) {
                            color: #9b9b9b;
                        }
                    }

                    .source {
                        display: inline-block;
                        width: 14px;
                        height: 15px;
                        background-position: -110px -103px;
                        margin-top: 7px;

                        &:hover {
                            background-position: -130px -103px;
                        }
                    }
                }

                .progress-msk {
                    display: flex;
                    position: relative;

                    .m-statbar {
                        background: url(../assets/statbar.png) no-repeat 0
                            9999px;
                    }

                    .progress {
                        width: 493px;
                        height: 9px;
                        background-position: right 0;

                        .rdy {
                            width: 0;
                            height: 9px;
                            background-position: right -30px;
                        }

                        .cur {
                            max-width: 493px;
                            width: 0;
                            height: 9px;
                            background-position: left -66px;
                            position: absolute;
                            top: 0;

                            .m-iconall {
                                background: url(../assets/iconall.png) no-repeat;
                            }

                            .cur-dot {
                                display: block;
                                width: 22px;
                                height: 24px;
                                position: absolute;
                                top: -7px;
                                background-position: 0 -250px;
                                margin-left: -8px;

                                &:hover {
                                    background-position: 0 -280px;
                                }
                            }
                        }
                    }

                    .time-msk {
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 12px;
                        color: #797979;
                        position: absolute;
                        top: -5px;
                        right: 35px;

                        em {
                            color: #a1a1a1;
                            font-style: normal;
                        }
                    }
                }
            }

            .oper {
                width: 60px;
                padding-top: 11px;

                a {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    margin-right: 1px;
                    text-indent: -9999px;
                }

                .icon-add {
                    background-position: -88px -163px;

                    &:hover {
                        background-position: -88px -189px;
                    }
                }

                .icon-share {
                    background-position: -114px -163px;

                    &:hover {
                        background-position: -114px -189px;
                    }
                }
            }

            .ctrl {
                width: 126px;
                background-position: -147px -238px;
                padding-left: 13px;
                padding-top: 11px;

                a {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    margin-right: 1px;
                }

                .icon-vol {
                    background-position: -2px -248px;

                    &:hover {
                        background-position: -31px -248px;
                    }
                }

                .icon-loop {
                    background-position: -3px -344px;

                    &:hover {
                        background-position: -33px -344px;
                    }
                }

                .icon-list {
                    width: 60px;
                    padding-left: 21px;
                    background-position: -42px -68px;
                    font-size: 12px;
                    text-align: center;
                    color: #666;

                    &:hover {
                        background-position: -42px -98px;
                    }

                    span {
                        position: absolute;
                        top: 15px;
                        right: 18px;
                    }
                }
            }
        }
    }

    .player-list {
        width: 986px;
        height: 300px;
        position: absolute;
        top: -347px;
        left: 50%;
        margin-left: -493px;
        border: 1px solid red;

        .list-head {
        }

        .list-body {
            .list-wrap {
            }

            .lyric-wrap {
            }
        }
    }
}
</style>
