<template>
    <main class="main">
        <section class="movie section">
            <div class="container">
                <div class="movie-body">

                    <div class="movie-images">
                        <div class="image-block big">
                            <img src="@/assets/images/7.jpg" alt="1" class="img-cover">
                        </div>
                        <div class="movie-images-body">
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

                    <div class="movie-info">
                        <div class="film-info">
                            <h2 class="film-title">Бессонница</h2>
                            <div class="film-details">
                                <span class="film-rating">7.8</span>
                                <span class="film-created">2021, США</span>
                                <span class="film-geres">Драма, триллер</span>
                                <span class="film-duration">98 мин</span>
                                <span class="film-restrictions">16+</span>
                            </div>

                            <p class="film-director">
                                <span class="text-muted">Режиссёр:</span> Кристофер Нолан
                            </p>

                            <p class="film-description">
                                <span class="text-muted">Описание:</span> Драма, в которой стерты все границы реальности и вымысла. Потеряв сон, герой Метью Кросса
                                потерял себя и уже не понимает, что происходит по-настоящему, а что является плодом его
                                воображения.
                            </p>

                            <div class="film-actors">
                                <span class="text-muted">Список актеров:</span>
                                <ul class="actors-list">
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                    <li class="actor-item">Актер 1</li>
                                </ul>
                            </div>

                            <span class="film-price price">от 199</span>
                            <div class="film-manage">
                                <router-link to="/showings" class="btn btn-primary">Купить билет</router-link>
                            </div>




                        </div>


                    </div>
                </div>

                <div class="showing-manage">
                    <div class="showing-select-block">
                        <h3 class="showing-select-title">Выберите сеанс: </h3>
                        <div class="showing-select">
                            <div class="showing-card">
                                <div class="showing-card-date active">
                                    08.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">12:00</div>
                                    <div class="showing-time-card active">14:30</div>
                                    <div class="showing-time-card">17:30</div>
                                </div>
                            </div>

                            <div class="showing-card">
                                <div class="showing-card-date">
                                    09.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">15:00</div>
                                    <div class="showing-time-card">17:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">23:30</div>
                                </div>
                            </div>

                            <div class="showing-card">
                                <div class="showing-card-date">
                                    09.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">15:00</div>
                                    <div class="showing-time-card">17:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">23:30</div>
                                </div>
                            </div>

                            <div class="showing-card">
                                <div class="showing-card-date">
                                    09.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">15:00</div>
                                    <div class="showing-time-card">17:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">23:30</div>
                                </div>
                            </div>

                            <div class="showing-card">
                                <div class="showing-card-date">
                                    09.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">15:00</div>
                                    <div class="showing-time-card">17:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">19:30</div>
                                    <div class="showing-time-card">23:30</div>
                                </div>
                            </div>

                            <div class="showing-card">
                                <div class="showing-card-date">
                                    10.06.2023
                                </div>
                                <div class="showing-card-time">
                                    <div class="showing-time-card">14:00</div>
                                    <div class="showing-time-card">21:30</div>
                                    <div class="showing-time-card">23:30</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="showing-select-block">
                        <div class="legend">
                            <div class="child-ticket bg-primary">Занято</div>
                            <div class="child-ticket bg-alt">Эконом: <span class="price">220</span></div>
                            <div class="child-ticket ">Детский: <span class="price">199</span></div>
                            <div class="adult-ticket">Взрослый: <span class="price">250</span></div>
                        </div>
                        <h3 class="showing-select-title">Выберите места: </h3>
                        <div class="seat-select">
                            <div class="screen-visually">
                                Экран
                            </div>

                            <div class="seat-row">
                                <span class="row-number">Ряд 1</span>
                                <div class="seat-number economy">1</div>
                                <div class="seat-number economy">2</div>
                                <div class="seat-number economy">3</div>
                                <div class="seat-number economy">4</div>
                                <div class="seat-number economy">5</div>
                                <div class="seat-number economy">6</div>
                                <div class="seat-number economy">7</div>
                                <div class="seat-number economy">8</div>
                                <div class="seat-number economy">9</div>
                                <div class="seat-number economy">10</div>
                                <div class="seat-number economy">11</div>
                                <div class="seat-number economy">12</div>
                                <div class="seat-number economy">13</div>
                                <div class="seat-number economy">14</div>
                                <div class="seat-number economy">15</div>
                                <div class="seat-number economy">16</div>
                                <div class="seat-number economy">17</div>
                                <div class="seat-number economy">18</div>
                                <span class="row-number">Ряд 1</span>
                            </div>
                            <div class="seat-row">
                                <span class="row-number">Ряд 2</span>

                                <div class="seat-number ">1</div>
                                <div class="seat-number ">2</div>
                                <div class="seat-number ">3</div>
                                <div class="seat-number economy">4</div>
                                <div class="seat-number economy">5</div>
                                <div class="seat-number economy">6</div>
                                <div class="seat-number economy">7</div>
                                <div class="seat-number economy">8</div>
                                <div class="seat-number economy">9</div>
                                <div class="seat-number economy">10</div>
                                <div class="seat-number economy">11</div>
                                <div class="seat-number economy">12</div>
                                <div class="seat-number economy">13</div>
                                <div class="seat-number economy">14</div>
                                <div class="seat-number economy">15</div>
                                <div class="seat-number ">16</div>
                                <div class="seat-number ">17</div>
                                <div class="seat-number ">18</div>

                                <span class="row-number">Ряд 2</span>
                            </div>
                            <div class="seat-row">
                                <span class="row-number">Ряд 3</span>

                                <div class="seat-number">1</div>
                                <div class="seat-number">2</div>
                                <div class="seat-number">3</div>
                                <div class="seat-number">4</div>
                                <div class="seat-number">5</div>
                                <div class="seat-number">6</div>
                                <div class="seat-number">7</div>
                                <div class="seat-number">8</div>
                                <div class="seat-number">9</div>
                                <div class="seat-number">10</div>
                                <div class="seat-number">11</div>
                                <div class="seat-number">12</div>
                                <div class="seat-number">13</div>
                                <div class="seat-number">14</div>
                                <div class="seat-number">15</div>
                                <div class="seat-number">16</div>
                                <div class="seat-number">17</div>
                                <div class="seat-number">18</div>

                                <span class="row-number">Ряд 3</span>
                            </div>
                            <div class="seat-row">
                                <span class="row-number">Ряд 4</span>

                                <div class="seat-number">1</div>
                                <div class="seat-number">2</div>
                                <div class="seat-number">3</div>
                                <div class="seat-number">4</div>
                                <div class="seat-number">5</div>
                                <div class="seat-number">6</div>
                                <div class="seat-number">7</div>
                                <div class="seat-number disabled">8</div>
                                <div class="seat-number disabled">9</div>
                                <div class="seat-number disabled">10</div>
                                <div class="seat-number">11</div>
                                <div class="seat-number">12</div>
                                <div class="seat-number">13</div>
                                <div class="seat-number">14</div>
                                <div class="seat-number">15</div>
                                <div class="seat-number">16</div>
                                <div class="seat-number">17</div>
                                <div class="seat-number">18</div>

                                <span class="row-number">Ряд 4</span>
                            </div>
                            <div class="seat-row">
                                <span class="row-number">Ряд 5</span>

                                <div class="seat-number">1</div>
                                <div class="seat-number">2</div>
                                <div class="seat-number">3</div>
                                <div class="seat-number">4</div>
                                <div class="seat-number selected">5</div>
                                <div class="seat-number selected">6</div>
                                <div class="seat-number">7</div>
                                <div class="seat-number">8</div>
                                <div class="seat-number">9</div>
                                <div class="seat-number">10</div>
                                <div class="seat-number">11</div>
                                <div class="seat-number">12</div>
                                <div class="seat-number">13</div>
                                <div class="seat-number">14</div>
                                <div class="seat-number">15</div>
                                <div class="seat-number">16</div>
                                <div class="seat-number">17</div>
                                <div class="seat-number">18</div>

                                <span class="row-number">Ряд 5</span>
                            </div>
                        </div>
                    </div>

                    <div class="summary">
                        <div class="selected-seats">Выбрано билетов: <span class="selected-seats-count">2</span></div>
                        <div class="selected-tickets">Общая стоимость билетов: <span class="base-ticket-price price">500</span></div>
                        <div class="ticket-types">
                            <div class="form-group">
                                <label for="child_tickets_count">Количество детских билетов:</label>
                                <input type="number" id="child_tickets_count" name="child_tickets_count" required max="2" min="0" placeholder="0">
                            </div>
                        </div>
                        <div class="total-tickets">Итого: <span class="total-price price">500</span></div>
                        <button class="btn btn-primary checkout-btn">Подтвердить</button>
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