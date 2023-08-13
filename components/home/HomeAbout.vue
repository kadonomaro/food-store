<script setup lang="ts"></script>

<template>
    <section class="home-about">
        <h2 class="home-about__title page-title">Вкусная и полезная еда на дом</h2>
        <div class="home-about__inner">
            <div class="home-about__text">
                <p>
                    Food Store&nbsp;&mdash; это современная и&nbsp;инновационная компания доставки еды, которая
                    предлагает своим клиентам широкий ассортимент блюд самых разных кухонь. Мы&nbsp;стремимся
                    не&nbsp;только удовлетворить голод, но&nbsp;и&nbsp;доставить удовольствие от&nbsp;каждого заказа.
                </p>

                <p>
                    <b>Широкий выбор меню:</b> Мы&nbsp;понимаем, что у&nbsp;каждого человека свои вкусы
                    и&nbsp;предпочтения, поэтому мы&nbsp;предлагаем многообразие блюд, начиная от&nbsp;популярных
                    классических блюд до&nbsp;экзотических кухонь со&nbsp;всего мира. Вы&nbsp;всегда найдете что-то
                    по&nbsp;своему вкусу в&nbsp;нашем меню.
                </p>

                <p>
                    <b>Высокое качество:</b> Мы&nbsp;стремимся поставлять только самые свежие и&nbsp;качественные
                    продукты. Наша команда шеф-поваров тщательно отбирает ингредиенты и&nbsp;готовит блюда только
                    из&nbsp;самых лучших продуктов, чтобы обеспечить вам истинное гастрономическое наслаждение.
                </p>

                <p>
                    <b>Быстрая доставка:</b> Время доставки для нас является приоритетом. Мы&nbsp;сократили время
                    ожидания до&nbsp;минимума, чтобы вы&nbsp;могли наслаждаться своей любимой едой быстро и&nbsp;без
                    лишних хлопот.
                </p>

                <p>
                    <b>Удобство:</b> Мы&nbsp;разработали удобный сайт, чтобы вы&nbsp;могли легко оформить заказ
                    в&nbsp;любое удобное для вас время. Мы&nbsp;также предлагаем различные способы оплаты, чтобы сделать
                    процесс заказа максимально гибким и&nbsp;удобным.
                </p>
            </div>
            <div class="home-about__image">
                <img src="/assets/home/about/delivery.png" alt="" />
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

    .home-about__inner {
        @include media($bp-desktop-sm) {
            display: flex;
        }
    }

    .home-about__text {
        font-size: 14px;
        line-height: 24px;
        p {
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
        @include media($bp-desktop-sm) {
            margin-right: 40px;
            font-size: 16px;
            line-height: 28px;
            p {
                &:not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }
    }

    .home-about__image {
        max-width: 80%;
        margin: 0 auto;
        @include media($bp-desktop-sm) {
            flex-shrink: 0;
            flex-basis: 400px;
            max-width: 400px;
            margin: 0;
        }
    }
</style>
