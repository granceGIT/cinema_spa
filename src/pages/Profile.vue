<template>
    <main class="main">
        <section class="section profile">
            <div class="container">
                <div class="profile-body">
                    <div class="profile-data">
                        <h2 class="section-title">Данные профиля</h2>
                        <div class="profile-data-card">
                            <div class="text-muted">Имя:</div>
                            <div>Иван</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Телефон:</div>
                            <div>+7 900 000 00 00</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Заказов:</div>
                            <div>2</div>
                        </div>
                        <div class="profile-data-card">
                            <div class="text-muted">Оценок:</div>
                            <div>1</div>
                        </div>
                        <div class="profile-data-card profile-manage">
                            <button class="btn btn-primary">Изменить данные</button>
                            <button class="btn btn-primary">Выход</button>
                        </div>
                    </div>
                    <div class="orders-body">
                        <h2 class="section-title">Активные заказы</h2>
                        <div class="active-orders">
                            <div class="order-contents">
                                <div class="order-card">
                                    <div class="order-card-film">
                                        <div class="order-card-film-img"><img src="@/assets/images/4.jpg" alt="film name"
                                                                              class="img-cover"></div>
                                        <div class="order-card-film-info">
                                            <h2 class="order-card-film-title">Бессонница</h2>
                                            <div class="order-card-film-geres text-muted">Драма, триллер</div>
                                            <div class="order-card-film-restrictions text-muted">16+</div>
                                        </div>
                                    </div>
                                    <div class="order-card-ticket">
                                        <div><span class="text-muted">Билетов: </span>
                                            4
                                        </div>
                                        <div><span class="text-muted">Детских: </span>
                                            2
                                        </div>
                                    </div>
                                    <div class="order-card-hall">
                                        <div><span class="text-muted">Зал: </span>
                                            Зал №1
                                        </div>
                                    </div>
                                    <div class="order-card-date">
                                        <div><span class="text-muted">Дата: </span>
                                            10.06.2023
                                        </div>
                                        <div><span class="text-muted">Начало в: </span>
                                            21:30
                                        </div>
                                    </div>
                                </div>
                                <div class="order-tickets">
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>12
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>4</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>13
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>5</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>14
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>6</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>15
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>7</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-contents">
                                <div class="order-card">
                                    <div class="order-card-film">
                                        <div class="order-card-film-img"><img src="@/assets/images/4.jpg" alt="film name"
                                                                              class="img-cover"></div>
                                        <div class="order-card-film-info">
                                            <h2 class="order-card-film-title">Бессонница</h2>
                                            <div class="order-card-film-geres text-muted">Драма, триллер</div>
                                            <div class="order-card-film-restrictions text-muted">16+</div>
                                        </div>
                                    </div>
                                    <div class="order-card-ticket">
                                        <div><span class="text-muted">Билетов: </span>
                                            4
                                        </div>
                                        <div><span class="text-muted">Детских: </span>
                                            2
                                        </div>
                                    </div>
                                    <div class="order-card-hall">
                                        <div><span class="text-muted">Зал: </span>
                                            Зал №1
                                        </div>
                                    </div>
                                    <div class="order-card-date">
                                        <div><span class="text-muted">Дата: </span>
                                            10.06.2023
                                        </div>
                                        <div><span class="text-muted">Начало в: </span>
                                            21:30
                                        </div>
                                    </div>
                                </div>
                                <div class="order-tickets">
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>12
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>4</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>13
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>5</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>14
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>6</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                    <div class="order-ticket-card">
                                        <div class="tiket-code">
                                            <span class="text-muted">Билет: </span>15
                                        </div>
                                        <div class="ticket-seat">
                                            <div><span class="text-muted">Ряд: </span>1</div>
                                            <div><span class="text-muted">Место: </span>7</div>
                                        </div>
                                        <div class="ticket-seat-type">
                                            <span class="text-muted">Тип: </span>Эконом
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 class="section-title">Прошлые заказы</h2>
                        <div class="previous-orders">
                            <div class="order-contents">
                                <div class="order-card">
                                    <div class="order-card-film">
                                        <div class="order-card-film-img"><img src="@/assets/images/4.jpg" alt="film name"
                                                                              class="img-cover"></div>
                                        <div class="order-card-film-info">
                                            <h2 class="order-card-film-title">Бессонница</h2>
                                            <div class="order-card-film-geres text-muted">Драма, триллер</div>
                                            <div class="order-card-film-restrictions text-muted">16+</div>
                                        </div>
                                    </div>
                                    <div class="order-card-ticket">
                                        <div><span class="text-muted">Билетов: </span>
                                            4
                                        </div>
                                        <div><span class="text-muted">Детских: </span>
                                            2
                                        </div>
                                    </div>
                                    <div class="order-card-date">
                                        <div><span class="text-muted">Дата: </span>
                                            06.06.2023
                                        </div>
                                        <div><span class="text-muted">Начало в: </span>
                                            16:30
                                        </div>
                                    </div>
                                    <div class="order-card-rate">
                                        <span class="text-rating">8/10</span>
                                    </div>
                                </div>
                            </div>

                            <div class="order-contents">
                                <div class="order-card">
                                    <div class="order-card-film">
                                        <div class="order-card-film-img"><img src="@/assets/images/4.jpg" alt="film name"
                                                                              class="img-cover"></div>
                                        <div class="order-card-film-info">
                                            <h2 class="order-card-film-title">Бессонница</h2>
                                            <div class="order-card-film-geres text-muted">Драма, триллер</div>
                                            <div class="order-card-film-restrictions text-muted">16+</div>
                                        </div>
                                    </div>
                                    <div class="order-card-ticket">
                                        <div><span class="text-muted">Билетов: </span>
                                            4
                                        </div>
                                        <div><span class="text-muted">Детских: </span>
                                            2
                                        </div>
                                    </div>
                                    <div class="order-card-date">
                                        <div><span class="text-muted">Дата: </span>
                                            06.06.2023
                                        </div>
                                        <div><span class="text-muted">Начало в: </span>
                                            16:30
                                        </div>
                                    </div>
                                    <div class="order-card-rate">
                                        <button class="btn btn-primary">Оценить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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