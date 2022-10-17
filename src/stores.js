import { writable } from "svelte/store";

export const items = writable([
    {
        id: 1,
        text: "English Homework",
        completed: false
    },
    {
        id: 2,
        text: "Go to college",
        completed: true
    }
]);