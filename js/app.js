new Vue({
    el: '#appVue',
    data: {
        lists: [
            // {keep: 'uno', completed: false},
            // {keep: 'dos', completed: true},
        ],
        newKeep: ''
    },
    methods: {
        addKeep: function(){
            this.lists.push({keep: this.newKeep, completed: false});
            this.newKeep = '';
        }
    }
});