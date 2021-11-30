<script lang="ts">
  import '../app.css';
  import Sidebar from '$lib/Sidebar.svelte';
</script>

<div class="layout">
  <header>
    <h1>What to do? 🤔</h1>
  </header>

  <main>
    <slot />
  </main>

  <Sidebar />

  <footer>
    <p>
      <a rel="noreferrer" target="_blank" href="https://github.com/sitek94/what-to-do">
        See repository &rarr;
      </a>
    </p>
  </footer>
</div>

<style>
  .layout {
    height: 100vh;
    display: grid;
    grid-template-areas:
      'header aside'
      'main aside'
      'footer aside';
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 200px;
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
    padding: 40px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 20px;
    }
  }
</style>
