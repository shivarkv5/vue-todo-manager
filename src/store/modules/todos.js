/* eslint-disable */
import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};
//Action: Make request and get the response 
const actions = {
    //1.We call mutation with commit
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(response.data);
        //5. To call setTodos
        //commit('functionName of mutation', 'what to pass?')
        commit('setTodos', response.data); //response.data is passed as todos in setTodos fn and then sets the state
    },

    async addTodo({ commit }, title) {
        console.log(title)
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('setNewTodo', response.data);
        console.log(response.data);
    },

    async deleteTodo({ commit }, id) {//This will remove from backend side
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id)
    },

    async filterTodos({ commit }, e) {
        const val = e.target.value;
        console.log(val);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${val}`);
        commit('filterTodo', response.data);
    },

    async updateTodo({ commit }, ut) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${ut.id}`, ut)
        commit('updateTD', response.data);
    }


};
//Mutates the state.
//4. Adding the set of array data to the state.(setTodos fun does that)
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),//Passsing todos to state.todos
    setNewTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)), // Removees from UI 
    filterTodo: (state, todos) => (state.todos = todos),
    updateTD: (state, updatedTD) => {
        //We need not want to move or change the index or position of todo 
        const index = state.todos.findIndex((todo) => todo.id === updatedTD.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTD);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
