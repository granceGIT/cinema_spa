<template>
    <section class="hero ">
        <div class="container">
            <div class="hero-image">
                <div class="hero-body">
                    <h2 class="film-title">Незнакомец</h2>
                    <div class="film-details">
                        <span class="film-rating">8.9</span>
                        <span class="film-created">2020, США</span>
                        <span class="film-genres">Триллер, драма</span>
                        <span class="film-duration">113 мин</span>
                        <span class="film-restrictions">18+</span>
                    </div>
                    <p class="film-description">
                        Софи была счастлива в браке со своим мужем Генри. Пока однажды ей не пришло анонимное письмо,
                        предупреждение, что ей нужно бежать от мужа. Пытаясь разгадать эту загадку, Софи впадает в ужас,
                        ведь Генри оказывается совсем не тем человеком, которого она знает…
                    </p>
                    <div class="film-manage">
                        <router-link to="/showings/1" class="btn btn-primary">Купить билет</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="popular section">
        <div class="container">
            <h2 class="section-title">
                Популярные за неделю
            </h2>
            <div class="popular-body">
                <router-link to="/showings/1" class="popular-card">
                    <div class="popular-card-img">
                        <img src="@/assets/images/2.jpg" alt="Под водой постер" class="img-cover">
                    </div>
                    <h3 class="popular-card-title">
                        Под водой
                    </h3>
                    <div class="popular-card-genres">
                        Приключения, семейный
                    </div>
                </router-link>

                <router-link to="/showings/1" class="popular-card">
                    <div class="popular-card-img">
                        <img src="@/assets/images/3.jpg" alt="Мгла постер" class="img-cover">
                    </div>
                    <h3 class="popular-card-title">
                        Мгла
                    </h3>
                    <div class="popular-card-genres">
                        Ужасы, триллер
                    </div>
                </router-link>

                <router-link to="/showings/1" class="popular-card">
                    <div class="popular-card-img">
                        <img src="@/assets/images/4.jpg" alt="Охота постер" class="img-cover">
                    </div>
                    <h3 class="popular-card-title">
                        Охота
                    </h3>
                    <div class="popular-card-genres">
                        Детектив, криминал, драма
                    </div>
                </router-link>

                <router-link to="/showings/1" class="popular-card">
                    <div class="popular-card-img">
                        <img src="@/assets/images/5.jpg" alt="Синхронизация постер" class="img-cover">
                    </div>
                    <h3 class="popular-card-title">
                        Синхронизация
                    </h3>
                    <div class="popular-card-genres">
                        Триллер, драма
                    </div>
                </router-link>
            </div>
        </div>
    </section>

    <section class="most-viewed section">
        <div class="container">
            <h2 class="section-title">
                Самый популярный за сегодня
            </h2>
            <div class="most-viewed-body">
                <div class="most-viewed-info">
                    <div class="film-info">
                        <h2 class="film-title">Бессонница</h2>
                        <div class="film-details">
                            <span class="film-rating">7.8</span>
                            <span class="film-created">2021, США</span>
                            <span class="film-genres">Драма, триллер</span>
                            <span class="film-duration">98 мин</span>
                            <span class="film-restrictions">16+</span>
                        </div>
                        <p class="film-description">
                            Драма, в которой стерты все границы реальности и вымысла. Потеряв сон, герой Метью Кросса
                            потерял себя и уже не понимает, что происходит по-настоящему, а что является плодом его
                            воображения.
                        </p>
                        <span class="film-price price">от 199</span>
                        <div class="film-manage">
                            <router-link to="/showings" class="btn btn-primary">Купить билет</router-link>
                        </div>
                    </div>

                    <!-- ... -->
                </div>
                <div class="most-viewed-images">
                    <div class="image-block big">
                        <img src="@/assets/images/7.jpg" alt="1" class="img-cover">
                    </div>
                    <div class="image-block">
                        <img src="@/assets/images/8.jpg" alt="3" class="img-cover">
                    </div>
                    <div class="image-block">
                        <img src="@/assets/images/9.jpg" alt="2" class="img-cover">
                    </div>
                    <div class="image-block">
                        <img src="@/assets/images/10.jpg" alt="4" class="img-cover">
                    </div>
                    <div class="image-block">
                        <img src="@/assets/images/11.jpg" alt="5" class="img-cover">
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="halls section">
        <div class="container">
            <h2 class="section-title">Залы</h2>
            <div class="halls-body">
                <div class="hall-card">
                    <img src="@/assets/images/7da411627191c247d03cea77d3887be4_original.webp" alt="hall 1" class="img-cover">
                    <h3 class="hall-card-title">Зал №1</h3>
                </div>

                <div class="hall-card">
                    <img src="@/assets/images/57d7b1c340c08829298cf4b9_6393231f1a4112.60475760.jpg" alt="hall 2" class="img-cover">
                    <h3 class="hall-card-title">Зал №2</h3>
                </div>

                <div class="hall-card">
                    <img src="@/assets/images/DSC_1021_1_1.png" alt="hall 3" class="img-cover">
                    <h3 class="hall-card-title">Зал №3</h3>
                </div>

                <div class="hall-card">
                    <img src="@/assets/images/7da411627191c247d03cea77d3887be4_original.webp" alt="hall 4" class="img-cover">
                    <h3 class="hall-card-title">Зал №4</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>

</style>