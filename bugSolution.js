```javascript
// bugSolution.js
import './styles.css'; // Import custom CSS file to demonstrate specificity conflict

div className="bg-gray-200 p-4 rounded shadow relative">
  <p className="text-xl font-bold z-10">This is some text.</p>
</div>

/* styles.css */
div {
  background-color: yellow;
}
```