<script>
import ProfileIcon from './ProfileIcon/ProfileIcon.svelte';
import WeightIcon from './WeightIcon/WeightIcon.svelte';
import Profile from './Profile/Profile.svelte';

const TABS = { 
    PROFILE: 'PROFILE',
    WEIGHT: 'WEIGHT',
}

const setActiveTab = event => {
    const { currentTarget } = event;

    if (!currentTarget) {
        // @TBD
        return false;
    }

    const { type } = currentTarget.dataset;
    
    activeTab = (TABS[type] && type) || TABS.WEIGHT;
}

let activeTab = TABS.WEIGHT;

</script>

<section class="main-container">
    <nav class="main-container__navbar">
        <div data-type="{TABS.PROFILE}" on:click={setActiveTab}>
            <ProfileIcon active={activeTab === TABS.PROFILE} />
        </div>
        <div class="main-container__title">Weigher</div>
        <div data-type="{TABS.WEIGHT}" on:click={setActiveTab}>
            <WeightIcon active={activeTab === TABS.WEIGHT} />
        </div>
    </nav>
    <section>
        {#if activeTab === TABS.PROFILE}
            <Profile />
        {/if}
    </section>
</section>

<style>
    .main-container {
        width: 100%;
        height: 100%;
        background-color: #eee;
        border-radius: 8px;
    }

    .main-container__navbar {
        display: flex;
        padding: 4%;
        justify-content: space-between;
        background: #fff;
        border-bottom: 1px solid #f09;
        border-bottom-left-radius: 29%;
        border-bottom-right-radius: 29%;
         box-shadow: 0 4px 6px -6px #f1A;
    }

    .main-container__title {
        display: flex;
        align-self: center;
    }
</style>