<script>
import WeightCreator from './WeightCreator/WeightCreator.svelte';
import WeightContent from './WeightContent/WeightContent.svelte';
import Notification from '../Notification/Notification.svelte';

let isCreatorOpened = false;
let showNotification = false;

let notificationMessage = '';

const onClickHandler = () => {
    isCreatorOpened = true;
};

const handleClose = () => {
    isCreatorOpened = false;
}

const handleNotification = (event) => {
    const { detail: { type, message } } = event;

    notificationMessage = message;
    showNotification = true;

    setTimeout(() => {
        showNotification = false;
        isCreatorOpened = false;
    }, 2500); // animation delay + animation time
}

</script>

<div class="weight">
    {#if showNotification}
        <Notification message={notificationMessage} />
    {/if}
    {#if isCreatorOpened} 
        <WeightCreator on:close={handleClose} on:notification={handleNotification} />
    {:else}
    <div class="weight__add-entry">
        <button on:click={onClickHandler}>Add</button>
    </div>
    <div class="weight__entries">
        <WeightContent />
    </div>
    {/if}
</div>

<style>
    .weight {
        height: 80%;
        width: 90%;
        padding: 3%;
        background: #fff;
        box-sizing: border-box;
        margin: auto;
        margin-top: 10%;
        border-radius: 2%;
    }

    .weight__add-entry button { 
        border: 0;
        background-color: #eee;
        padding: 3% 5%;
        width: 100%;
    }

    .weight__entries {
        margin-top: 8%;
    }
</style>