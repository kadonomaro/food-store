<script setup lang="ts">
    const list = [
        {
            title: "Широкий выбор меню",
            text: "Мы&nbsp;понимаем, что у&nbsp;каждого человека свои вкусы и&nbsp;предпочтения, поэтому мы&nbsp;предлагаем многообразие блюд, начиная от&nbsp;популярных классических блюд до&nbsp;экзотических кухонь со&nbsp;всего мира. Вы&nbsp;всегда найдете что-то по&nbsp;своему вкусу в&nbsp;нашем меню.",
            image: "menu.png",
        },
        {
            title: "Высокое качество",
            text: "Мы&nbsp;стремимся поставлять только самые свежие и&nbsp;качественные продукты. Наша команда шеф-поваров тщательно отбирает ингредиенты и&nbsp;готовит блюда только из&nbsp;самых лучших продуктов, чтобы обеспечить вам истинное гастрономическое наслаждение.",
            image: "hat.png",
        },
        {
            title: "Быстрая доставка",
            text: "Время доставки для нас является приоритетом. Мы&nbsp;сократили время ожидания до&nbsp;минимума, чтобы вы&nbsp;могли наслаждаться своей любимой едой быстро и&nbsp;без лишних хлопот.",
            image: "delivery.png",
        },
        {
            title: "Удобство",
            text: "Мы&nbsp;разработали удобный сайт, чтобы вы&nbsp;могли легко оформить заказ в&nbsp;любое удобное для вас время. Мы&nbsp;также предлагаем различные способы оплаты, чтобы сделать процесс заказа максимально гибким и&nbsp;удобным.",
            image: "card.png",
        },
    ];
</script>

<template>
    <section class="home-about">
        <h2 class="home-about__title page-title">Вкусная и&nbsp;полезная еда на&nbsp;дом</h2>
        <div class="home-about__subtitle">
            Food Store&nbsp;&mdash; это современная и&nbsp;инновационная компания доставки еды, которая предлагает своим
            клиентам широкий ассортимент блюд самых разных кухонь. Мы&nbsp;стремимся не&nbsp;только удовлетворить голод,
            но&nbsp;и&nbsp;доставить удовольствие от&nbsp;каждого заказа.
        </div>
        <div class="home-about__inner">
            <div v-for="(card, index) in list" :key="index" class="home-about__item">
                <home-about-card :card="card"></home-about-card>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-about {
        padding: 20px 0 30px;
        @include media($bp-desktop-sm) {
            padding: 40px 0 60px;
        }
    }

    .home-about__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .home-about__subtitle {
        margin-bottom: 30px;
        font-size: 14px;
        line-height: 24px;
        @include media($bp-desktop-sm) {
            margin-bottom: 60px;
            font-size: 16px;
            line-height: 28px;
        }
    }

    .home-about__inner {
        margin: 0 -5px;
        @include media($bp-desktop-sm) {
            display: flex;
            margin: 0 -10px;
        }
    }

    .home-about__item {
        padding: 0 5px 10px;
        @include media($bp-desktop-sm) {
            flex-basis: 25%;
            max-width: 25%;
            padding: 0 10px;
        }
    }
</style>
