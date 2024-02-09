
const state = [
    {
        id: 1,
        name: 'FLash',
    },
    {
        id: 2,
        name: 'Arrow',
    },
    {
        id: 3,
        name: 'Black Canary',
    },
    {
        id: 4,
        name: 'Superman',
    },
    {
        id: 5,
        name: 'Batman',
    },
];

const index = 1;
const newState = structuredClone(state).with(index, {
    id:1000,
    name: 'Volcan'
});

// const newState = state.map((hero, i) => {
//     if(i === index){
//         hero.name = newName;
//     }
//     return hero;
// })

console.table(newState);
console.table(state);