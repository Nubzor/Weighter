<script>
export let message;
</script>

<div class="notification">
    <div class="message">{message}</div>
</div>

<style>
    .notification {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 10%;
        background-color: #f09;
        display: flex;
        justify-content: center;
        animation: rollUp 0.5s;
        animation-timing-function: linear;
        animation-delay: 2s;
    }

    .message {
        align-self: center;
        color: #fff;
    }

    @keyframes rollUp {
        0%   { top: 0%; }
        50%  { top: -5%; }
        100% { top: -10% }
    }
</style>