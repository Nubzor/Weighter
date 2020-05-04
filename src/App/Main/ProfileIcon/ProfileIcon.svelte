<script>
export let active;
</script>

<svg
    class:active={active}
    class="profileIcon"
    focusable="false"
    aria-hidden="true"
    role="presentation">
    <g stroke="none" stroke-width="1">
    <path
        class=""
        d="M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55
        0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168
        5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75
        16.7.15.643-1.725-2.006-4.65-4.817-6.375" />
</g>
</svg>

<style>
    .profileIcon {
        width: 28px;
        height: 22px;
        fill: #888;
        transform: scale(1.5);
    }

    .profileIcon.active {
        fill: #f09;
    }
</style>
