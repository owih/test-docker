import { fetchCommentsAPI } from "../api/commentsAPI";

export const comments = {
    state: () => ({
        comments: [],
        loading: true,
    }),
    mutations: {
        setComments(state, data) {
            state.comments = data;
        },
        setLoadingTrue(state) {
            state.loading = true;
        },
        setLoadingFalse(state) {
            state.loading = false;
        }
    },
    getters: {
        getComments(state) {
            return state.comments;
        },
        getLoading(state) {
            return state.loading;
        }
    },
    actions: {
      fetchComments({ commit }) {
          commit('setLoadingTrue');
          fetchCommentsAPI()
              .then((res) => {
                  commit('setComments', res.data);
                  console.log(res.data + ' Успешно загрузили комментарии')
              })
              .catch((error) => {
                  console.log(error + ' Ошибка загрузки комментариев');
              })
              .finally(() => {
                  commit('setLoadingFalse');
              });
      },
    }
}
