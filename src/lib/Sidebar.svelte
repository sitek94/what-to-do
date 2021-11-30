<script>
</script>

<aside>
  <form>
    <input type="text" placeholder="New todo" />
  </form>
  <ul>
    <li>Todo 1</li>
    <li>Todo 2</li>
    <li>Todo 3</li>
    <li>Todo 4</li>
    <li>Todo 5</li>
    <li>Todo 6</li>
  </ul>
</aside>

<style>
  aside {
    grid-area: aside;
    background: #222;
  }

  input {
    width: 100%;
    color: var(--text-color);
    background: transparent;
    border: 0;
    outline: none;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }
  input:hover,
  input:focus {
    border-bottom: 1px solid cornflowerblue;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    line-height: 1;
    align-items: center;
    height: 48px;
    padding: 12px 16px;
    border-bottom: 1px solid #333;
  }
  li:hover {
    background: #1f1f1f;
  }
</style>
