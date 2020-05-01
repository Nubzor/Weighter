<script>
import ProfileIcon from './ProfileIcon/ProfileIcon.svelte';
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

<section class="container">
    <nav class="navbar">
        <div data-type="{TABS.PROFILE}" on:click={setActiveTab}>
            <ProfileIcon active={activeTab === TABS.PROFILE} />
        </div>
    </nav>
    <section>
        {#if activeTab === TABS.PROFILE}
            <Profile />
        {/if}
    </section>
</section>

<style>
    .container {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
    }

    .navbar {
        display: flex;
        padding: 4%;
        justify-content: center;
    }
</style>