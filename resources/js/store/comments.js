import { fetchCommentsAPI, fetchCommentAPI, patchCommentAPI, createCommentAPI, deleteCommentAPI } from "../api/commentsAPI";

export const comments = {
    state: () => ({
        comments: [],
        filteredComments: [],
        comment: {},
        loading: true,
        filter: null,
        page: 1,
        limit: 3,
    }),
    getters: {
        getComments(state) {
            return state.comments;
        },
        getFiltered(state) {
            const offset = state.page * state.limit - state.limit;
            const arr = state.filteredComments.length ? state.filteredComments : state.comments;
            return arr.map((item) => item).splice(offset, state.limit);
        },
        getLimit(state) {
            return state.limit;
        },
        getComment(state) {
            return state.comment;
        },
        getLoading(state) {
            return state.loading;
        },
        getFilter(state) {
            return state.filter;
        },
        getPage(state) {
            return state.page;
        }
    },
    mutations: {
        setComments(state, data) {
            state.comments = data;
        },
        setComment(state, data) {
            state.comment = data;
        },
        setLoadingTrue(state) {
            state.loading = true;
        },
        setLoadingFalse(state) {
            state.loading = false;
        },
        setSortedComments(state, data) {
            state.comments = data;
        },
        setFilter(state, data) {
            state.filter = data;
        },
        setFilteredComments(state, data) {
            state.filteredComments = data;
        },
        clearFilter(state) {
            state.filter = null;
            state.filteredComments = state.comments;
        },
        setPage(state, data) {
            state.page = data;
        }
    },
    actions: {
        fetchComments({ commit, state }) {
          commit('setLoadingTrue');
          fetchCommentsAPI()
              .then((res) => {
                  commit('setComments', res.data);
                  console.log('Успешно загрузили все комментарии')
              })
              .catch((error) => {
                  alert(error);
              })
              .finally(() => {
                  commit('setLoadingFalse');
              });
        },
        fetchComment({ commit }, { id }) {
            commit('setLoadingTrue');
            fetchCommentAPI(id)
                .then((res) => {
                    commit('setComment', res.data);
                    console.log('Успешно загрузили комментарий с id: ' + id);
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                    commit('setLoadingFalse');
                });
        },
        patchComment({ commit }, data) {
            commit('setLoadingTrue');
            return patchCommentAPI(data)
                .then(() => {
                    console.log('Успешно обновлен комментарий');
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                    commit('setLoadingFalse');
                });
        },
        createComment({ commit }, data) {
            commit('setLoadingTrue');
            return createCommentAPI(data)
                .then((res) => {
                    console.log('Успешно создан комментарий');
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                    commit('setLoadingFalse');
                });
        },
        deleteComment({ commit }, { id }) {
            commit('setLoadingTrue');
            return deleteCommentAPI(id)
                .then(() => {
                    console.log('Успешно удален комментарий');
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                    commit('setLoadingFalse');
                });
        },
        filterArray({ commit, state }) {
            let filteredArray = state.comments.map((item) => item);
            const filter = state.filter;
            if (filter && filter.type === 'date') {
                filteredArray = filter.direction === 'max'
                    ? filteredArray.sort((a, b) => new Date(String(a.date)) - new Date(String(b.date)))
                    : filteredArray.sort((a, b) => new Date(String(b.date)) - new Date(String(a.date)));
            }
            if (filter && filter.type === 'id') {
                filteredArray = filter.direction === 'max'
                    ? filteredArray.sort((a, b) => Number(a.id) - Number(b.id))
                    : filteredArray.sort((a, b) => Number(b.id) - Number(a.id));
            }

            commit('setFilteredComments', filteredArray);
        },
        setFilter({ commit }, { direction, type }) {
            commit('setFilter', {direction, type});
        },
        clearFilter({ commit }) {
            commit('clearFilter');
        },
        setPage({ commit }, { page }) {
            commit('setPage', page);
        }
    }
}
