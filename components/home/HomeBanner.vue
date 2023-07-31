<script setup lang="ts"></script>

<template>
    <div class="home-banner">
        <picture>
            <source :media="`(max-width: 991px)`" srcset="/assets/home/banner/banner--mobile.jpg" />
            <img class="home-banner__image" src="/assets/home/banner/banner.jpg" alt="" />
        </picture>
    </div>
</template>

<style lang="scss">
    .home-banner {
        position: relative;
        margin: 0 -10px;
        background-color: #fff;
        border-radius: 0 0 var(--border-radius--md) var(--border-radius--md);
        overflow: hidden;
        &::before {
            content: "";
            display: block;
            padding-bottom: 75%;
        }
        @include media($bp-desktop-sm) {
            margin: 0;
            border-radius: var(--border-radius--md);
            &::before {
                padding-bottom: 31.74%;
            }
        }
    }

    .home-banner__image {
        @include center-absolute(0);
    }
</style>
