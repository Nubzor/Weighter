<script>
import FacebookLogo from '../../../../assets/facebook_logo.png';
import signIn, { providers } from '../signIn';

const handleClick = () => signIn(providers.FACEBOOK);
</script>

<div on:click={handleClick} class="button">
    <div class="button__wrapper">
        <div class="button__element">
            <div class="button__logo">
                <img src={FacebookLogo} alt="Facebook" />
            </div>
        </div>
        <div class="button__content">
            <span>Log in With Facebook</span>
        </div>
    </div>
</div>

<style>
    .button {
        color: #fff;
        background-color: #1877f2;
        height: 48px;
        cursor: pointer;
        margin-top: 1.5em;
        border-radius: 4px;
    }

    .button .button__wrapper {
        display: flex;
        flex-direction: row;
    }

    .button__element {
        width: 60px;
        height: 48px;
        padding: 0;
    }

    .button__content {
        width: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 700;
        line-height: 50px
    }

    .button__element .button__logo {
        padding: 12px 14px;
        height: 24px;
        float: left;
    }
</style>