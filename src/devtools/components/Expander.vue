<template>
  <div>
    <nav class="c-expander">
      <h4>Extension</h4>
      <ul>
        <li>Settings</li>
      </ul>

      <h4>Databases</h4>
      <ul>
        <li>
          <span>icon</span>
          <span>New</span>
        </li>
        <li>
          <button class="c-expander__toggle-action c-expander__toggle-action--active"><span></span></button>
          <span>icon</span>
          <span>Database1</span>
        </li>
        <li>
          <button class="c-expander__toggle-action c-expander__toggle-action--active"><span></span></button>
          <span>icon</span>
          <span>Database2</span>

          <ul>
            <li>
              <span>icon</span>
              <span>New</span>
            </li>
            <li>
              <button class="c-expander__toggle-action"><span></span></button>
              <span>icon</span>
              <span>Store 1</span>

              <ul>
                <li>
                  <span>icon</span>
                  <span>New</span>
                </li>

                <li>
                  <span>icon</span>
                  <span>Index 1</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Expander'
  }
</script>
