export function showResult(num, content) {
  document.getElementById("app").innerHTML += `
      <div class="exercise">
        <h3 class="heading">Exercise ${num}</h3>
        <pre>${JSON.stringify(content, undefined, 2)}</pre>
      </div>
    `;
}

// Auxiliar functions
export * from './utils/string-functions'
export * from './utils/number-functions'