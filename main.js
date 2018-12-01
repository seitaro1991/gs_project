var app = new Vue({
    el: '.grid',
    data: {
        modal_img: ''
    },
    // `methods` オブジェクトの下にメソッドを定義する
    methods: {
        greet: function (event) {
            modal.modal_img = event.target.src
            modal.show();
        }
    }
})

var modal = new Vue({
    el: '.modal',
    data: {
        modal_img: '',
        isHide: true
    },
    methods: {
        hide: function (event) {
            this.isHide = true;
        },
        show: function (event) {
            this.isHide = false;
        }
    }
})

