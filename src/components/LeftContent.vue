<template>
    <div class="left_maincont">
        <div class="pages">Опросы</div>
        <div class="pages">Пользователи</div>
        <div class="pages">Чёрные списки</div>
        <div class="pages">Колл-центр</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.left_maincont{
    display: flex;
    flex-direction: column;
}
.pages{
    text-align: center;
    width: 100%;
    height: 80px;
    border: 0.5px solid rgba(212, 212, 212, 0.5);
    margin-top: 10px;
    border-radius: 5px;
    padding-top: 50px;
    font-weight: bold;
}
</style>