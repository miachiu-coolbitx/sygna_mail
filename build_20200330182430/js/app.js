var inputDatas = [{
        title: "My Company",
        description: 'Your registered company name. Example: "VASP LTD."',
        status: true,
        helpertxt: ''
    },
    {
        title: "VASP Code Name",
        description: '4 uppercase letters to represent your company name. Example: "Coinbase exchange" could be "CBSE", "Sygna" could be "SYGN"',
        status: false,
        helpertxt: ''
    }
];

Vue.component('intro', {
    template: '#component',
    data() {
        return {
            title: "Welcome to Sygna Bridge VASP Registration",
        }
    }
})

var vm = new Vue({
    el: "#app",
    data: {
        inputs: inputDatas
    }
});