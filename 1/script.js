// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.

var score; // object

function init() {
    score = getScore();

    function getScore() {
        var score = 0; // result

        return {
            increase: () => {
                score++;
            },
            getScore: () => {
                return score.toString();
            }
        }
    }
}

// using - score.increase() and score.getScore();
