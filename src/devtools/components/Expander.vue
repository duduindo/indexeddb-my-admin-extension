<template>
  <nav class="c-expander">
    <h4>Databases</h4>
    <ul>
      <li>
        <span>New</span>
      </li>
      <li>
        <button class="c-expander__toggle-action c-expander__toggle-action--active"><span></span></button>
        <span>Database1</span>
      </li>
      <li>
        <button class="c-expander__toggle-action c-expander__toggle-action--active"><span></span></button>
        <span>Database2</span>

        <ul>
          <li>
            <span>New</span>
          </li>
          <li>
            <button class="c-expander__toggle-action"><span></span></button>
            <span>Store 1</span>

            <ul>
              <li>
                <span>New</span>
              </li>

              <li>
                <span>Index 1</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <h4>Extension</h4>
    <ul>
      <li>Settings</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Expander'
  }
</script>
