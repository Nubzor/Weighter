<script>
export let label;
export let onChangeCallback;
export let checked;
export let attribute;

const _onChangeHandler = (e) => {
    onChangeCallback(e, attribute);
}

const randomSet = Math.random().toString(36).substring(7);
</script>


<div class="toggle">
    <label for="toggler_{randomSet}">
        <span>{label}</span>
        <div class="toggle__switch">
            <input 
                id="toggler_{randomSet}"
                type="checkbox"
                on:change={_onChangeHandler}
                checked={checked}
            />
            <span class="toggle_slider"></span>
        </div>
    </label>
</div>

<style>
    .toggle {
        width: 100%;
        height: 100%;
    }

    .toggle label {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
    }

    .toggle__switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        user-select: none;
    }

    .toggle__switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle_slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 34px;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .toggle_slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .toggle_slider {
        background-color: #F09;
    }

    input:focus + .toggle_slider {
        box-shadow: 0 0 1px #F09;
    }

    input:checked + .toggle_slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

</style>