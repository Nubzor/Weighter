<script>
  import GoogleSignIn from "../Buttons/GoogleSignIn/GoogleSignIn.svelte";
  import FacebookSignIn from '../Buttons/FacebookSignIn/FacebookSignIn.svelte';
  import BarBellsLogo from '../../../assets/BarbellsLogo.svg';
</script>

<div class="login-container">
    <header class="login-container__header">
        <span class="login-container__header--first">Hello,</span>
        <span class="login-container__header--second">Sign Up!</span>
    </header>
    <h1 class="login-container__tittle">{@html BarBellsLogo}</h1>
    <div class="login-container__sign-in-buttons">
        <GoogleSignIn />
        <FacebookSignIn />
    </div>
</div>

<style>
    .login-container__sign-in-buttons {
        margin-top: auto;
        margin-bottom: 20%;
    }

    .login-container .login-container__tittle {
        flex: 4;
        text-align: center;
    }

    .login-container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .login-container__header {
        display: flex;
        flex-direction: column;
        flex: 1;
        
        color: #fff;
        margin-top: 5%;
    }

    .login-container .login-container__header--first {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.2px;
    }

    .login-container .login-container__header--second {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 1.5px;
    }
</style>
