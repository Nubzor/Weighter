<script>
import { createEventDispatcher } from 'svelte';
import * as firebase from "firebase/app";
import 'firebase/database';

import Loader from '../../../../Loader/Loader.svelte';

import { user } from '../../../../store.js';

const db = firebase.database();

const dispatch = createEventDispatcher();

export let extendedView;

const defaultDate = () => {
    const now = new Date();

    const dd = ("0" + now.getDate()).slice(-2);
    const mm = ("0" + (now.getMonth() + 1)).slice(-2);
    const yyyy = now.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
}

let steps = extendedView ? 6 : 2;
let stepsAsList = extendedView ? [
    { type: 'date', input: 'date',  default: defaultDate() },
    { type: 'kg', input: 'number', step: '0.1' },
    { type: 'fat', input: 'number', step: '0.1' }, // body fat
    { type: 'twb', input: 'number', step: '0.1' }, // body water
    { type: 'muscle', input: 'number', step: '0.1' }, // muscle mass
    { type: 'bone', input: 'number', step: '0.1' }, // bone mass
] : [
    { type: 'date', input: 'date', step: '0.1', default: defaultDate() },
    { type: 'kg', input: 'number', step: '0.1' },
]

const nextPageHandler = () => step = (step + 1) % steps;
const previousPageHandler = () => step = (step + steps - 1) % steps;

const backButtonHandler = () => {
    dispatch('close');
}

const saveHandler = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = Array.from(form.elements)
        .filter(element => element.nodeName === "INPUT")
        .reduce((formData, element) => {
            const key = element.dataset['type'];
            const value = element.value;

            formData[key] = value;

            return formData;
        }, {});

    
    db
        .ref(`/users/${$user.uid}/weight`)
        .child(formData['date'])
        .set(formData)
            .then(() => {
                dispatch('notification', {
                    type: 'success',
                    message: 'Data has been successfully saved.'
                })
            })
            .catch(e => {
                console.warn(e);
                dispatch('notification', {
                    type: 'error',
                    message: 'There were some probles while saving the data. Try again.',
                })
            });
}

let step = 0;
</script>

<div class="wrapper">
    <button on:click={backButtonHandler}>Back</button>
    <form class="creator-form" on:submit={saveHandler}>
        <div class="creator">
            <div class="content">
            {#each stepsAsList as _step, i}
                <div class="step step-{i}" class:active={step === i}>
                    <span>{#if _step.type ==='date'} Chose {:else} Put {/if}{ _step.type}</span>
                    <input type={_step.input} step={_step.step} value={_step.default} data-type={_step.type} />
                </div>
            {/each}
            </div>
            <div class="buttons">
                <button type="button" class:hidden={step === 0} on:click={previousPageHandler}>Back</button>
                <button type="button" class:none={step === (stepsAsList.length - 1)} on:click={nextPageHandler}>Next</button>
                <button
                    class="save"
                    type="submit"
                    class:none={step !== (stepsAsList.length - 1)}>
                    Save
                </button>
            </div>
            <div class="progress">
                <ul>
                {#each stepsAsList as _step, i}
                    <li class:active={i === step}></li>
                {/each}
                </ul>
            </div>
        </div>
    </form>
</div>

<style>
    .creator {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .content, .creator-form, .wrapper {
        width: 100%;
        height: 100%;
    }

    .wrapper > button {
        border: 0;
        background-color: #eee;
        padding: 3% 5%;
    }

    .step {
        display: none;
        flex-direction: column;
    }

    .step span {
        margin-top: 20%;
        font-size: 20px;
        font-weight: 700;

        align-self: center;
    }
    
    .step input {
        align-self: center;
        margin-top: 20%;
        padding: 5%;
        border: 1px solid #f09;
        width: 80%;
    }

    .step.active {
        display: flex;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 8%;
    }

    .buttons button {
        border: 0;
        background-color: #eee;
        padding: 3% 5%;
    }

    .buttons button.save {
        font-weight: 700;
    }

    .buttons button.hidden {
        visibility: hidden;
    }

    .buttons button.none {
        display: none;
    }

    .progress ul {
        display: flex;
        flex-direction: row;

        display: flex;
        flex-direction: row;
        text-decoration: none;
        list-style: none;

        padding: 3%;
        margin: 0;

        display: flex;
        justify-content: center;
    }

    .progress ul li {
        width: 10px;
        height: 10px;
        background-color: #888;
        border-radius: 50%;
        margin-left: 5px;
    }

    .progress ul li.active {
        background-color: #f09;
    }

    .progress ul > li:first-child {
        margin-left: 0;
    }
</style>