export default {
    template: `
    <section>
        <h1>{{ message }}</h1>
        <button @click="registerUser">Register for Awesome Swag!</button>
    </section>
    `,

    data: function() {
        return{
            message: "Welcome to my super Awsome App!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked user button');
        }
    }
}