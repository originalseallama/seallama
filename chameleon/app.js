console.log("App.js is running");
var app = new Vue({
    el: '#app',
    data: {
        players: [
             {
                 name: "Micah",
                 isChameleon: false,
             }  ,
             {
                name: "Jacob",
                isChameleon: false,
            }   ,
            {
                name: "Leah",
                isChameleon: false,
            }   ,

        ],
        coordinates: "",
        categoryCardNumber: 1,
        newPlayer: "",
    },
    methods: {
        startRound: function () {
            this.setCategoryCardNumber();
            this.assignChameleon();
            this.rollDice();
        },
        setCategoryCardNumber: function () {
            this.categoryCardNumber = this.getRandomIntInclusive(1,4);
        },
        assignChameleon: function () {
            for (var i = 0; i < this.players.length; i ++) {
                this.players[i].isChameleon = false;
            }
            var randomN = this.getRandomIntInclusive(0,this.players.length - 1);
            this.players[randomN].isChameleon = true;
        },
        rollDice: function () {
            var possibleCoordinates = {
                letter: [
                    "A","B","C","D"
                ],
                number: [
                    "1","2","3","4"
                ]
            }
            this.coordinates = possibleCoordinates.letter[this.getRandomIntInclusive(0,3)];
            this.coordinates += possibleCoordinates.number[this.getRandomIntInclusive(0,3)];
        },
        addNewPlayer: function () {
            this.players.push({
                name: this.newPlayer,
                isChameleon: false,
            });
            this.newPlayer = "";
        },
        getRandomIntInclusive: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        }
    }
})