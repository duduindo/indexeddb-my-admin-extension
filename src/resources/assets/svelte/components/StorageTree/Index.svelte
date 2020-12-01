<div>
  <form>
    <div class="form-group text-center">
      <label for="currentDomain">Current domain:</label>
      <select class="form-control" id="currentDomain">
        <option value="-1">(All domains)</option>
        <option value="150">localhost:8443</option>
        <option value="381">google.com</option>
        <option value="496">yahoo.com</option>
      </select>
    </div>
  </form>

  <details open="">
    <summary>Storage</summary>
    <details open="">
      <summary>Database one</summary>
      <details open="">
        <summary>Table one</summary>
        <details>
          <summary>Index one</summary>
        </details>
        <details>
          <summary>Index one</summary>
        </details>
      </details>
    </details>
  </details>
</div>
<slot></slot>
