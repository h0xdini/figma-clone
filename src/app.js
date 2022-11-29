import "./styles.css";

import { setupCanvas } from "./canvas.js";

document.querySelector("#app").innerHTML = `
  <nav class="nav-bar">
        <div class="container">
            <ul>
              <li class="rect">
              <i class="bi bi-square"></i>
              </li>
              <li class="circ">
                <i class="bi bi-circle"></i>
              </li>
              <li class="tria">
                <i class="bi bi-triangle"></i>
              </li>
              <li class="line">
                <i class="bi bi-slash-lg"></i>
              </li>
              <li class="text">
                <i class="fa-light fa-t"></i>
              </li>
              <li class="image">
                <i class="bi bi-image"></i>
              </li>
            </ul>

          <button>Export</button>
      </div>
  </nav>
  <section class="text-modal">
    <article>
      <p>Enter the text you want to insert</p>
      <input type="text" id="text-input" placeholder="hi!" />
      <button id="text-btn">OK</button>
    </article>
  </section>
  <section class="image-modal">
    <article>
      <p>Enter the external link to the image you want to insert</p>
      <input type="text" id="image-input" />
      <button id="image-btn">OK</button>
    </article>
  </section>
  <main class="main-content">
    <article class="canvas-playground">
      <canvas id="canvas" width="200" height="200"></canvas>
    </article>
    <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/609e3732d83b3800019451d5/0x0.png" id="my-image">
    <aside>
      <div class="group">
        <p>Background/Font Color</p>
        <ul class="colors">
          <li class="black-color"></li>
          <li class="gray-color"></li>
          <li class="white-color"></li>
          <li class="red-color"></li>
          <li class="orange-color"></li>
          <li class="yellow-color"></li>
          <li class="green-color"></li>
          <li class="blue-color"></li>
          <li class="purple-color"></li>
          <li class="cyan-color"></li>
        </ul>
      </div>

      <div class="group">
        <p>Stroke</p>
        <ul class="strokes">
          <li class="black"></li>
          <li class="gray"></li>
          <li class="white"></li>
          <li class="red"></li>
          <li class="orange"></li>
          <li class="yellow"></li>
          <li class="green"></li>
          <li class="blue"></li>
          <li class="purple"></li>
          <li class="cyan"></li>
        </ul>
      </div>

      <div class="group">
        <p>Position</p>
        <ul class="positions">
          <li><strong>X</strong>1201</li>
          <li><strong>Y</strong>200</li>
          <li><strong>W</strong>800</li>
          <li><strong>H</strong>240</li>
        </ul>
      </div>

      <div class="group">
        <p>Position</p>
        <ul class="text">
          <li>
            <span>Font Size</span>
            <input type="text" placeholder="in px..." class="size" />
          </li>
          <li>
            <span>Font Family</span>
            <select name="fonts" class="font-family">
              <option value="arial">Arial</option>
              <option value="cursive">Cursive</option>
              <option value="fantasy">Fantazy</option>
              <option value="monospce">Monospace</option>
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans-serif</option>
            </select>
          </li>
        </ul>
      </div>

      <div class="group">
        <p>Layer</p>
        <ul class="layer">
          <li><strong>Opacity</strong></li>
          <li>100%</li>
        </ul>
      </div>
    </aside>
  </main>
`;

setupCanvas("canvas");
