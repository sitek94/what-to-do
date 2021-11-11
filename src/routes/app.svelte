<script lang='ts'>
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	let todos = [
		{ done: false, text: 'FCC: Python' },
		{ done: false, text: 'Internet History' },
		{ done: false, text: 'D3 Graph' },
		{ done: false, text: 'FCC: Alert component' },
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}


</script>


<div class="content">
	<h1>Todos</h1>

	{#each todos as todo}
		<div class="todo">
			<input
				type=checkbox
				bind:checked={todo.done}
			>

			<input
				type=text
				placeholder="What needs to be done?"
				bind:value={todo.text}
				disabled={todo.done}
			>
		</div>
	{/each}

	<button on:click={clear}>
		Clear completed
	</button>
</div>


<style>
    .content {
				text-align: center;
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }

		.todo {
				margin-bottom: 0.5rem;
		}

		.todo input[type='text'] {
				padding: 0.5rem;
		}
		.todo input[type='checkbox'] {
				margin-right: 0.5rem;
				transform: scale(2);
		}
</style>
