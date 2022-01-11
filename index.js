// code your solution here
function saturdayFun(arg = "roller-skate"){
    return `This Saturday, I want to ${arg}!`
};
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
};
    function wrapAdjective(balls = "*"){
        return function(param = "special"){
            return `You are ${balls}${param}${balls}!`
        };
    }