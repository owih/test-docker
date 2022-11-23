<template>
    <form @submit.prevent="submit" class="create-form">
        <div class="create-form__wrapper">
            <div class="create-form__item">
                <div class="create-form__field">
                    <label for="name">Name</label>
                    <input id="name" type="text" v-model="name">
                </div>
            </div>
            <div class="create-form__item">
                <div class="create-form__field">
                    <label for="text">Text</label>
                    <input id="text" type="text" v-model="text">
                </div>
            </div>
            <div class="create-form__item">
                <div class="create-form__field">
                    <DatePicker v-model="date" valueType="format"></DatePicker>
                </div>
            </div>
            <div class="create-form__item">
                <button
                    type="submit"
                    class="create-form__control"
                    :class="{'disabled': getLoading}"
                >
                    Создать комментарий
                </button>
            </div>
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
            name: '',
            text: '',
            date: null,
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
    },
    methods: {
        ...mapActions([
            'fetchComments',
            'createComment'
        ]),
        submit() {
            const data = {};
            data.name = this.name || this.getComment.name;
            data.text = this.text || this.getComment.text;
            data.date = this.date || this.getComment.date;
            this.name = '';
            this.text = '';
            this.date = null;
            this.createComment(data)
                .then(() => {
                    this.fetchComments();
                });
        }
    },
}
</script>

<style scoped lang="scss">
.create-form {
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
        &.disabled {
            opacity: 0.7;
            pointer-events: none;
        }
    }
    &__loading {
        text-align: center;
    }
}
</style>
