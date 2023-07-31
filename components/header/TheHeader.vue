<script setup lang="ts"></script>

<template>
    <header class="the-header">
        <div class="container">
            <div class="the-header__inner">
                <div class="the-header__logo">
                    <the-logo></the-logo>
                </div>

                <div class="the-header__navigation">
                    <the-header-navigation></the-header-navigation>
                </div>

                <div class="the-header__phone">
                    <the-header-phone></the-header-phone>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .the-header {
        display: none;
        @include media($bp-desktop-sm) {
            @include sticky(0);
            z-index: 100;
            display: block;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
        }
    }

    .the-header__inner {
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: center;
            padding: 10px 0;
        }
    }

    .the-header__logo {
        @include media($bp-desktop-sm) {
            margin-right: 100px;
        }
    }

    .the-header__navigation {
        @include media($bp-desktop-sm) {
            margin-right: auto;
        }
    }

    .the-header__phone {
    }
</style>
