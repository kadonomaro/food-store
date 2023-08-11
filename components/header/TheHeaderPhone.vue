<script setup lang="ts"></script>

<template>
    <div class="the-header-phone">
        <a class="the-header-phone__link" href="tel:+79112123344">+ 7 911 212 33 44</a>
        <div class="the-header-phone__text">Ежедневно 00:00—23:59</div>
    </div>
</template>

<style lang="scss">
    .the-header-phone {
        @include media($bp-desktop-sm) {
        }
    }

    .the-header-phone__link {
        color: #3f8fd2;
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        text-decoration: none;
        @include media($bp-desktop-sm) {
            font-size: 18px;
            line-height: 24px;
        }
    }

    .the-header-phone__text {
        color: var(--secondary-color);
        font-size: 12px;
        line-height: 16px;
    }
</style>
