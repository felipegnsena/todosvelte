<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleKeyUp({key}){
        if(key != "Enter" || value.length === 0) return;
        dispatch("newitem", value);
        value = "";
    }

    let value = "";
</script>

<style>
    input{
        box-sizing: border-box;
        margin-bottom: 15px;
        padding: 15px;
        border: none;
        outline: none;
        width: 100%;
        background: rgba(0, 0, 0, 0.25);
        color: #fff;
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;
    }

    input::placeholder{
        color:#fff;
    }
</style>

<input type="text" on:keyup={handleKeyUp} placeholder="+ Add Item" bind:value>