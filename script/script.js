const app = {
    data() {
        return {
            todos: [],
            text: ""
        };
    },
    methods: {
        inputText(element) {
            this.text = element.target.value;
        },

        addTodo() {
            if (!this.text) return;

            const text = this.text;
            const id = Math.ceil(Math.random() * 1000);
            const todo = {
                id: id,
                text: text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },

        resetText() {
            this.text = "";
        }
    }
}

Vue.createApp(app).mount("#app");
