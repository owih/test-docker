<template>
    <form @submit.prevent="submit" class="comment-full">
        <div v-if="getLoading" class="comment-full__loading">
            <LoadingSpinner />
        </div>
        <div v-else-if="Object.keys(getComment).length" class="comment-full__wrapper">
            <div class="comment-full__item">
                <div v-if="!edit" class="comment-full__name">
                    name: {{ getComment.name }}, id: {{ getComment.id }}
                </div>
                <div v-else class="comment-full__field">
                    <label for="name">Name</label>
                    <input id="name" type="text" v-model="name">
                </div>
            </div>
            <div class="comment-full__item">
                <div v-if="!edit" class="comment-full__name">
                    text: {{ getComment.text }}
                </div>
                <div v-else class="comment-full__field">
                    <label for="text">Text</label>
                    <input id="text" type="text" v-model="text">
                </div>
            </div>
            <div class="comment-full__item">
                <div v-if="!edit" class="comment-full__name">
                    date: {{ getComment.date }}
                </div>
                <div v-else class="comment-full__field">
                    <DatePicker v-model="date" valueType="format"></DatePicker>
                </div>
            </div>
            <div class="comment-full__item">
                <div v-if="!edit" class="comment-full__control-wrap">
                    <button class="comment-full__control" @click.prevent="edit = true">Редактировать</button>
                </div>
                <div v-else class="comment-full__control-wrap">
                    <button class="comment-full__control" @click.prevent="edit = false">Отмена</button>
                    <button type="submit" class="comment-full__control">Сохранить</button>
                </div>
            </div>
        </div>
        <div v-else class="comment-full__warning">
            Не удалось загрузить комментарий
        </div>
        <div class="comment-full__back">
            <router-link :to="{name: 'home'}">На главную</router-link>
        </div>
    </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoadingSpinner from "./LoadingSpinner";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    name: "CommentFull",
    data() {
        return {
            id: this.$route.params.id || 0,
            name: '',
            text: '',
            date: null,
            edit: false,
        }
    },
    components: {
        LoadingSpinner,
        DatePicker,
    },
    computed: {
        ...mapGetters([
          'getComment',
          'getLoading'
        ]),
        comment() {
            return this.getComment
        }
    },
    watch: {
        comment() {
            if (Object.keys(this.getComment).length) this.setFetchedValues();
        },
        edit() {
            if (!this.edit) this.setFetchedValues();
        }
    },
    methods: {
        ...mapActions([
            'fetchComment',
            'patchComment'
        ]),
        setFetchedValues() {
            this.id = this.getComment.id;
            this.name = this.getComment.name;
            this.text = this.getComment.text;
            this.date = this.getComment.date;
        },
        submit() {
            // Отправляем измененные поля или старое значение, если поле пустое
            // Валидацию не используем в условиях тестовой задачи
            const data = {};
            data.id = this.id;
            data.name = this.name || this.getComment.name;
            data.text = this.text || this.getComment.text;
            data.date = this.date || this.getComment.date;
            this.patchComment(data)
            .then(() => {
                this.fetchComment({ id: this.id });
                this.edit = false;
            });
        }
    },
    mounted() {
        this.fetchComment({ id: this.id })
    }
}
</script>

<style scoped lang="scss">
.comment-full {
    display: block;
    padding: 16px;
    border: 1px solid lightgray;
    border-radius: 8px;
    &__back {
        margin-top: 24px;
    }
    &__item {
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
    &__field {
        label {
            margin-bottom: 6px;
            font-size: 16px;
            display: block;
        }
        input {
            padding: 4px 8px;
            border: 1px solid bisque;
            border-radius: 4px;
            outline: none;
            width: 100%;
            &:focus {
                border-color: orange;
            }
        }
    }
    &__control {
        padding: 8px;
        border: 1px solid black;
        color: black;
        background-color: white;
        border-radius: 4px;
        outline: none;
        transition: all 0.2s ease;
        cursor: pointer;
        &:hover {
            border: 1px solid white;
            color: white;
            background-color: black;
        }
    }
    &__loading {
        text-align: center;
    }
}
</style>
