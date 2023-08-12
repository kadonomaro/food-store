<script setup lang="ts"></script>

<template>
    <div class="the-footer-bottom">
        <div class="container">
            <div class="the-footer-bottom__inner">
                <div class="the-footer-bottom__info">
                    <span>Разработка сайта - <b>Airsoftware</b></span>
                    <img src="/assets/footer/developer.svg" alt="" />
                </div>
                <div class="the-footer-bottom__icons">
                    <payment-icons></payment-icons>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-footer-bottom {
        padding: 15px 0;
        background-color: var(--primary-background);
        @include media($bp-desktop-sm) {
            padding: 25px 0;
        }
    }

    .the-footer-bottom__inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        @include media($bp-desktop-sm) {
            justify-content: space-between;
        }
    }

    .the-footer-bottom__info {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 16px;
        img {
            margin-left: 5px;
            height: 25px;
        }
        @include media($bp-desktop-sm) {
            margin-bottom: 0;
            font-size: 14px;
            line-height: 18px;
        }
    }
</style>
