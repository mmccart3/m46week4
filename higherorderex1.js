const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
};
const greet = (time, fn) => {
    if (time < 1200) {
        fn('Morning');
    } else if (time >= 1200 && time < 1800) {
        fn('Afternoon');
    } else {
        fn('Night');
    }
};
greet(1100, whichGreeting);