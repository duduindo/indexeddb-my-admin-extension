import HelloWorld from './svelte/HelloWorld.svelte'


document.querySelectorAll('[data-hello-world]').forEach(element => new HelloWorld({ target: element }));
