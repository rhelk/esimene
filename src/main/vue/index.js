var app = new Vue({
    el: '#app',
    data: {
        seen: true,
        message: ""
    },
    methods: {
        getData: function () {
            try {
                fetch('http://localhost:8080')
                    .then(function(response) {
                        response.text().then(function (text) {
                            app.message = text;
                        });
                    })
            } catch(err) {
                console.log('Err is ' + err);
                app.message = "Reading from localhost failed!";
            }
        }
    }
})


