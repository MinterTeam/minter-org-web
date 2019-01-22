<script>

    export default {
        props: ['error'],
    };
</script>

<template>
    <div class="error__container u-container u-container--small">
        <div class="error__section u-section">
            <h1 class="u-h1--xl error__title">Ошибка {{ error.statusCode }}</h1>
            <p v-if="error.statusCode === 404">К сожалению, здесь ничего нет. Проверьте правильность адреса или просто перейдите на главную страницу.</p>
            <p v-else-if="error.message === 'Network Error'">Сетевая ошибка</p>
            <p v-else-if="error.message">{{ error.message }}</p>
            <p v-else>Что-то пошло не так</p>
            <a class="error__button button button--main" href="/">Перейти на главную</a>
        </div>
    </div>

</template>
