<template>
        <main class="main">
            <section class=" filters">
                <div class="container">

                    <form class="filters-form">
                        <h3 class="section-title">
                            Фильтры
                        </h3>
                        <div class="filters-body">
                            <div class="filter-block">
                                <h3 class="filter-block-title">Жанры: </h3>
                                <ul class="filter-list">
                                    <li>
                                        <input type="checkbox" value="123" name="genre" id="genre1"
                                               class="custom-check">
                                        <label for="genre1" class="filter-check-card">Триллер</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="genre" id="genre2"
                                               class="custom-check">
                                        <label for="genre2" class="filter-check-card">Драма</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="genre" id="genre3"
                                               class="custom-check">
                                        <label for="genre3" class="filter-check-card">Семейный</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="genre" id="genre4"
                                               class="custom-check">
                                        <label for="genre4" class="filter-check-card">Приключения</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="genre" id="genre5"
                                               class="custom-check">
                                        <label for="genre5" class="filter-check-card">Детектив</label>
                                    </li>

                                </ul>
                            </div>

                            <div class="filter-block">
                                <h3 class="filter-block-title">Дата: </h3>
                                <ul class="filter-list">
                                    <li>
                                        <input type="checkbox" value="123" name="date" id="date1" class="custom-check">
                                        <label for="date1" class="filter-check-card">Сегодня</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="date" id="date2" class="custom-check">
                                        <label for="date2" class="filter-check-card">Завтра</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" value="123" name="date" id="date3" class="custom-check">
                                        <label for="date3" class="filter-check-card">Послезавтра</label>
                                    </li>

                                </ul>
                            </div>

                            <div class="filter-block form-group">
                                <h3 class="filter-block-title"><label for="search">Поиск по названию</label>: </h3>
                                <div class="search-block">
                                    <input type="search" class="form-input" name="search" id="search"
                                           placeholder="Название фильма">
                                    <button type="submit" class="btn btn-primary">Поиск</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>

            <section class="showings section">
                <div class="container">
                    <h2 class="section-title">
                        Сеансы
                    </h2>
                    <div class="showings-body">
                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/2.jpg" alt="Под водой постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Под водой
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Приключения, семейный
                            </div>
                        </a>

                        <router-link to="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/2.jpg" alt="Под водой постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Под водой
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Приключения, семейный
                            </div>
                        </router-link>

                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/2.jpg" alt="Под водой постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Под водой
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Приключения, семейный
                            </div>
                        </a>

                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/2.jpg" alt="Под водой постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Под водой
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Приключения, семейный
                            </div>
                        </a>
                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/3.jpg" alt="Мгла постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Мгла
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Ужасы, триллер
                            </div>
                        </a>

                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/4.jpg" alt="Охота постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Охота
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Детектив, криминал, драма
                            </div>
                        </a>

                        <a href="/showings/1" class="showing-card">
                            <div class="showing-card-img">
                                <img src="@/assets/images/5.jpg" alt="Синхронизация постер" class="img-cover">
                            </div>
                            <h3 class="showing-card-title">
                                Синхронизация
                            </h3>
                            <span class="showing-card-rating">
                                7.9
                            </span>
                            <div class="showing-card-genres">
                                Триллер, драма
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
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