<script>
export let extendedView;

</script>

<div class="wrapper">
    <div class="header">
        <div>Date</div>
        <div>Kg</div>
        {#if extendedView}
            <div>Fat</div>
            <div>TWB</div>
            <div>Muscle</div>
            <div>Bone</div>
        {/if}
    </div>
    <div class="entry">
        <div class=""></div>
    </div>
    <div class="entry">
    </div>
    <div class="entry">
    </div>
</div>  

<style>
    .header {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-bottom: 4%;
        font-weight: 700;
        color: #f09;
    }

    .header::after {
        content: ' ';
        position: absolute;
        width: 80%;
        height: 1px;
        background-color: #f0c;
        display: flex;
        left: 10%;
        bottom: 0;
    }

/* .weight__entry-container {
        padding: 1%;
        border-top: 1px solid #f1a;
        display: flex;
        flex-direction: column;
    }

    .weight__entry-container span {
        font-size: 12px;
        color: #411;
        align-self: flex-end;
    } */
</style>