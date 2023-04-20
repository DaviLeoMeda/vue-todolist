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
        submitimput() {

            if (inputText != '') {
                this.todos.unshift({
                    text: this.inputText,
                    done: false
                })
                inputText = ''
            } else {
                this.error = true
            }


        }
    }

}).mount('#app')




