const { createApp } = Vue

createApp({

    data() {
        return {
            inputText: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }

            ],
            error: false

        }
    },
    methods: {
        submitInput() {

            if (this.inputText != '') {
                this.todos.unshift({
                    text: this.inputText,
                    done: false
                })
                this.error = false
                this.inputText = ''
            } else {
                this.error = true
            }


        },
        deleteIt(i) {
            this.todos.splice(i, 1)
        },
        strikeIt(i) {

            if (this.todos[i].done == true) {
                this.todos[i].done = false
            } else if (this.todos[i].done == false) {
                this.todos[i].done = true
            }
        }
    }

}).mount('#app')




