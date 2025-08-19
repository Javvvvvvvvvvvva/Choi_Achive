import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { TextureLoader } from "three";

console.log("Script loaded successfully");
console.log("Current location:", window.location.href);
console.log("Three.js version:", THREE.REVISION);
console.log("User agent:", navigator.userAgent);
console.log("Page loaded at:", new Date().toISOString());

const canvas = document.querySelector(".webgl");
if (!canvas) {
  console.error("Canvas element not found!");
} else {
  console.log("Canvas found:", canvas);
}
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const zoomModal = document.getElementById("zoomModal");
const backBtn = document.getElementById("backBtn");
const glitchPulse = document.getElementById("glitchPulse") || null;

const renderer = new THREE.WebGLRenderer({ canvas });
if (!renderer.getContext()) {
  console.error("WebGL not supported or failed to initialize");
  // Show a fallback message
  const fallbackMsg = document.createElement("div");
  fallbackMsg.style.cssText = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; z-index: 1000;";
  fallbackMsg.innerHTML = "<h2>WebGL Not Supported</h2><p>Your browser doesn't support WebGL. Please try a different browser.</p>";
  document.body.appendChild(fallbackMsg);
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
window.scene = scene;
window.THREE = THREE;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const initialCameraPos = new THREE.Vector3(0, 5, 15);
camera.position.copy(initialCameraPos);
camera.lookAt(0, 2, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

const spotLights = [
  new THREE.SpotLight(0xffffff, 0.8),
  new THREE.SpotLight(0xffffff, 0.6),
  new THREE.SpotLight(0xffffff, 0.5)
];
spotLights[0].position.set(5, 10, 5);
spotLights[1].position.set(-5, 10, 5);
spotLights[2].position.set(0, 10, -5);
spotLights.forEach(light => {
  light.castShadow = true;
  scene.add(light);
});

const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5, metalness: 0.3 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -8;
floor.receiveShadow = true;
scene.add(floor);

const textureLoader = new TextureLoader();
const modelTexture = {
  map: textureLoader.load("./textures/tiles.png", undefined, undefined, (error) => console.error("Error loading tiles.png:", error)),
  normalMap: textureLoader.load("./textures/tiles_normalGL.jpg", undefined, undefined, (error) => console.error("Error loading tiles_normalGL.jpg:", error)),
  roughnessMap: textureLoader.load("./textures/tiles_roughness.jpg", undefined, undefined, (error) => console.error("Error loading tiles_roughness.jpg:", error)),
  displacementMap: textureLoader.load("./textures/tiles_displacement.jpg", undefined, undefined, (error) => console.error("Error loading tiles_displacement.jpg:", error)),
  aoMap: textureLoader.load("./textures/tiles.png", undefined, undefined, (error) => console.error("Error loading tiles.png:", error))
};
Object.values(modelTexture).forEach(tex => {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(5, 5);
});

const modelMaterial = new THREE.MeshStandardMaterial({
  map: modelTexture.map,
  normalMap: modelTexture.normalMap,
  roughnessMap: modelTexture.roughnessMap,
  displacementMap: modelTexture.displacementMap,
  aoMap: modelTexture.aoMap,
  displacementScale: 0.1,
  roughness: 10,
  metalness: 0.2
});

const objLoader = new OBJLoader();
let model = null, sphereGroup = new THREE.Group(), ring1, ring2, sphere1, sphere2;

objLoader.load("./model.obj", 
  (object) => {
    console.log("Model loaded successfully:", object);
    object.traverse(child => {
      if (child.isMesh) {
        child.material = modelMaterial;
        child.castShadow = true;
      }
    });
    object.scale.set(7, 7, 7);
    object.position.set(0, -7, 0);
    scene.add(object);
    model = object;

    const glitchTexture = textureLoader.load("./textures/cyber.jpg", undefined, undefined, (error) => console.error("Error loading cyber.jpg:", error));
    const glitchTexture2 = textureLoader.load("./textures/cyber2.jpeg", undefined, undefined, (error) => console.error("Error loading cyber2.jpeg:", error));
    const sphereMaterial1 = new THREE.MeshStandardMaterial({
      map: glitchTexture,
      emissive: new THREE.Color(0x00ff),
      emissiveIntensity: 0.7,
      roughness: 0.3,
      metalness: 0.6
    });

    const sphereMaterial2 = new THREE.MeshStandardMaterial({
      map: glitchTexture2,
      emissive: new THREE.Color(0x00ffff),
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.6
    });

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

    sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    sphere1.position.set(7, 0, 0);

    sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
    sphere2.position.set(-7, 0, 0);

    const sphere1Light = new THREE.PointLight(0x000fff, 1000, 10);
    const sphere2Light = new THREE.PointLight(0x00ffff, 1000, 10);
    sphere1.add(sphere1Light);
    sphere2.add(sphere2Light);

    const ringGeometry = new THREE.TorusGeometry(1.5, 0.05, 16, 100);
    ring1 = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    }));
    ring2 = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    }));

    ring1.rotation.x = ring2.rotation.x = Math.PI / 2;
    ring1.position.copy(sphere1.position);
    ring2.position.copy(sphere2.position);

    sphereGroup.add(sphere1, sphere2, ring1, ring2);
    scene.add(sphereGroup);
  },
  (progress) => {
    console.log("Loading model...", (progress.loaded / progress.total * 100) + "%");
  },
  (error) => {
    console.error("Error loading model:", error);
    // Create a fallback cube if model fails to load
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const fallbackMesh = new THREE.Mesh(geometry, material);
    fallbackMesh.position.set(0, -7, 0);
    fallbackMesh.castShadow = true;
    scene.add(fallbackMesh);
    model = fallbackMesh;
  }
);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < positions.length; i++) positions[i] = (Math.random() - 0.5) * 60;
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
scene.add(new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x88ffff, size: 0.1, opacity: 0.5, transparent: true })));

const raycaster = new THREE.Raycaster(), mouse = new THREE.Vector2();
let zoomTarget = null, zoomedSphere = null, isZoomingOut = false;

function startTyping(text, container) {
  container.innerHTML = '';
  let index = 0;
  const typer = setInterval(() => {
    container.innerHTML += text[index++];
    if (index === text.length) clearInterval(typer);
  }, 30);
}
let terminalState = {
    username: '',
    stage: 'loading'
  };
  
  function openTerminal() {
    zoomModal.innerHTML = `
      <div class="terminalText">
        <div id="terminalLines">
          loading: <span id="loadingDots"></span>
        </div>
        <div class="input-wrapper">
          <input id="terminalInput" type="text" autocomplete="off" />
          <span id="hoverTooltip" class="username-tooltip">Type your username</span>
        </div>
      </div>
    `;
    zoomModal.style.opacity = 1;
    zoomModal.style.pointerEvents = "auto";
    zoomModal.style.borderColor = "#0033ff";
    zoomModal.style.boxShadow = "0 0 15px #0033ff99";
    backBtn.style.opacity = 1;
    backBtn.style.pointerEvents = "auto";
  
    const terminalLines = document.getElementById("terminalLines");
    const terminalInput = document.getElementById("terminalInput");
    terminalInput.focus();
  
    terminalInput.addEventListener("keydown", function handleInput(e) {
      if (e.key === "Enter") {
        const input = terminalInput.value.trim();
        terminalInput.value = "";
        document.getElementById("hoverTooltip")?.classList.add("tooltip-hidden");
  
        if (terminalState.stage === "loading") {
          terminalState.username = input || "guest";
          terminalState.stage = "menu";
          terminalLines.innerHTML += `<br>Username: ${terminalState.username}`;
          terminalLines.innerHTML += `<br>The default interactive shell is now zsh.`;
          terminalLines.innerHTML += `<br>To update your account to use zsh, please run 'chsh -s /bin/zsh'.`;
          terminalLines.innerHTML += `<br>For more details, please visit https://support.apple.com/kb/HT208050.`;
          terminalLines.innerHTML += `<br>choiArchive:~ ${terminalState.username}$`;
          terminalLines.innerHTML += `<br>See menu: <br>'menu' or type 1 <br> 'exit' or type 2`;
        } else if (terminalState.stage === "menu") {
            if (["1", "menu"].includes(input.toLowerCase())) {
            terminalState.stage = "choice";
            terminalLines.innerHTML += `<br>choiArchive:~ ${terminalState.username}$ ${input}`;
            terminalLines.innerHTML += `<br>Menu Options:<br>  1. GitHub<br>  2. LinkedIn<br>  3. Credits<br> 4. Exit`;
            terminalLines.innerHTML += `<br>Type Number or Text Only`;
          } else if (["2", "exit"].includes(input.toLowerCase())) {
            terminalLines.innerHTML += `<br>choiArchive:~ ${terminalState.username}$ ${input}`;
            terminalLines.innerHTML += `<br>Exiting terminal...`;
            terminalInput.removeEventListener("keydown", handleInput);
            setTimeout(() => backBtn.click(), 1000);
          } if (cmd === "clear") {
            const allLines = output.querySelectorAll(".console-line, .console-prompt, .ascii-art");
            allLines.forEach(line => line.remove());
            addPrompt();
            return;
          } else {
            terminalLines.innerHTML += `<br>Error: Unknown command '${input}'`;
          }
        } else if (terminalState.stage === "choice") {
          if (["1", "git" ,"github"].includes(input.toLowerCase())) {
            terminalLines.innerHTML += `<br>Opening GitHub...`;
            terminalLines.innerHTML += `<br>Launching in 5 seconds...`;
            setTimeout(() => {
              terminalLines.innerHTML += `<br>✅ GitHub opened successfully.`;
              window.open("https://github.com/Javvvvvvvvvvvva", "_blank");
            }, 3400);
          } else if (["2", "linkedin", "link"].includes(input.toLowerCase())) {
            terminalLines.innerHTML += `<br>Opening LinkedIn...`;
            terminalLines.innerHTML += `<br>Launching in 5 seconds...`;
            setTimeout(() => {
              terminalLines.innerHTML += `<br>✅ LinkedIn opened successfully.`;
              window.open("https://www.linkedin.com/in/choi-yoonseo-7850b8251/", "_blank");
            }, 3400);
          }  else if (["3", "credits", "credit"].includes(input.toLowerCase())) {
            terminalLines.innerHTML += `<br>Showing credits...`;
            
            const creditSection = document.getElementById("creditSection");
            if (creditSection) {
              creditSection.style.display = "block";
              
              if (!document.getElementById("closeCredits")) {
                const closeBtn = document.createElement("button");
                closeBtn.id = "closeCredits";
                closeBtn.innerHTML = "✖";
                closeBtn.style.position = "absolute";
                closeBtn.style.top = "1rem";
                closeBtn.style.right = "1.5rem";
                closeBtn.style.background = "transparent";
                closeBtn.style.color = "#00aaff";
                closeBtn.style.fontSize = "1.2rem";
                closeBtn.style.border = "none";
                closeBtn.style.cursor = "pointer";
                closeBtn.style.textShadow = "0 0 5px #00aaff";
                closeBtn.title = "Close Credits";
                closeBtn.addEventListener("click", () => {
                  creditSection.style.display = "none";
                });
                creditSection.appendChild(closeBtn);
              }terminalLines.innerHTML += `<br>✅ Creadit opened successfully.`;
            }
          } else if (["4", "exit"].includes(input.toLowerCase())) {
            terminalLines.innerHTML += `<br>Exiting terminal...`;
            terminalInput.removeEventListener("keydown", handleInput);
            setTimeout(() => backBtn.click(), 1000);
          } else {
            terminalLines.innerHTML += `<br>Error: Unknown command '${input}'`;
          }
        }
        terminalLines.scrollTop = terminalLines.scrollHeight;
      }
    });
  }

window.addEventListener("click", (event) => {
  if (zoomTarget) return;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = [...raycaster.intersectObject(sphere1 || {}), ...raycaster.intersectObject(sphere2 || {})];
  if (intersects.length > 0) {
    if (glitchPulse) {
      glitchPulse.classList.add("active");
      setTimeout(() => glitchPulse.classList.remove("active"), 300);
    }
    const hit = intersects[0].object;
    zoomTarget = hit.position.clone().add(new THREE.Vector3(0, 1, 3));
    zoomedSphere = hit === sphere1 ? "sphere1" : "sphere2";
    label1.style.opacity = label2.style.opacity = 0;

    zoomModal.style.opacity = 1;
    zoomModal.style.pointerEvents = "auto";

    if (zoomedSphere === "sphere2") {
      zoomModal.innerHTML = `<div id="typedText" class="codeText"></div>`;
      zoomModal.style.borderColor = "#00ffff";
      zoomModal.style.boxShadow = "0 0 15px #00ffff99";
      startTyping(
        `// Access granted\n` +
        `let user = {\n` +
        `  Name: "Yoonseo Choi",\n` +
        `  Major: "Computer Science",\n` +
        `  Location: "WI in USA",\n` +
        `  Contact: "javacoding2022@gmail.com",\n` +
        `  Greet: () => "Hello, My World 🌐"\n` +
        `};`,
        document.getElementById("typedText")
      );
      //Skyblue back button for sM2
      backBtn.style.borderColor = "#00ffff";
      backBtn.style.boxShadow = "0 0 10px #00ffff88";
      backBtn.style.color = "#66ffff";
      } else if (zoomedSphere === "sphere1") {
      terminalState = { username: "", stage: "loading" };
      openTerminal();
      // Blue back button for sM1
      backBtn.style.borderColor = "#0033ff";
      backBtn.style.boxShadow = "0 0 10px #0033ff88";
      backBtn.style.color = "#66aaff";
    }
    backBtn.style.opacity = 1;
    backBtn.style.pointerEvents = "auto";
  }
});

backBtn.addEventListener("click", () => {
  zoomTarget = initialCameraPos.clone();
  zoomedSphere = null;
  isZoomingOut = true;
  zoomModal.style.opacity = 0;
  zoomModal.style.pointerEvents = "none";
  zoomModal.innerHTML = "";
  backBtn.style.opacity = 0;
  backBtn.style.pointerEvents = "none";

  // Reset terminal state
  terminalState.username = '';
  terminalState.stage = 'login';
});

function animate() {
  try {
    requestAnimationFrame(animate);
    
    if (sphereGroup && sphereGroup.children.length > 0) {
      sphereGroup.rotation.y += 0.01;
      if (ring1) ring1.rotation.z += 0.01;
      if (ring2) ring2.rotation.z -= 0.01;
    }

    if (particlesGeometry && particlesGeometry.attributes && particlesGeometry.attributes.position) {
      const pos = particlesGeometry.attributes.position.array;
      for (let i = 1; i < particlesCount * 3; i += 3) {
        pos[i] += 0.005;
        if (pos[i] > 20) pos[i] = -20;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
    }

    if (sphere1 && sphere2 && label1 && label2) {
      [sphere1, sphere2].forEach((s, i) => {
        try {
          const vec = s.position.clone().project(camera);
          const lbl = i === 0 ? label1 : label2;
          if (lbl && lbl.style) {
            lbl.style.left = ((vec.x + 1) / 2 * window.innerWidth + 20) + "px";
            lbl.style.top = (-(vec.y - 1) / 2 * window.innerHeight - 20) + "px";
          }
        } catch (err) {
          console.log("Label positioning error:", err);
        }
      });
    }

    if (zoomTarget) {
      camera.position.lerp(zoomTarget, 0.05);
      camera.lookAt(0, 0, 0);
      if (camera.position.distanceTo(zoomTarget) < 0.2 && isZoomingOut) {
        if (label1 && label2) {
          label1.style.opacity = label2.style.opacity = 1;
        }
        zoomTarget = null;
        isZoomingOut = false;
      }
    }

    renderer.render(scene, camera);
  } catch (error) {
    console.error("Animation error:", error);
    // Stop animation on error to prevent further issues
    return;
  }
}
animate();

window.addEventListener("DOMContentLoaded", () => {
  // Handle window resize
  const handleResize = () => {
    try {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    } catch (error) {
      console.log("Resize error:", error);
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  const audio = document.getElementById('bgAudio');
  if (audio) {
    const tryPlay = () => {
      try {
        audio.volume = 0.3;
        audio.play().catch((error) => {
          console.log("Audio autoplay blocked, waiting for user interaction:", error);
          document.addEventListener('click', () => {
            audio.play().catch(err => console.log("Audio play failed:", err));
          }, { once: true });
        });
      } catch (error) {
        console.log("Audio setup error:", error);
      }
    };
    tryPlay();
  } else {
    console.warn("Background audio element not found");
  }
  const consoleBtn = document.getElementById("consoleBtn");
  const closeBtn = document.getElementById("closeConsole");
  const consoleArea = document.getElementById("consoleArea");
  const output = document.getElementById("consoleOutput");
  
  
  if (consoleBtn) {
    consoleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (consoleArea.classList.contains("hidden")) {
        consoleArea.classList.remove("hidden");
  
        const asciiArt = `
        ____ _   _  ___   _____ 
       / ___| | | |/ _ \||_   _|
      | |   | |_| | | | |  | |  
      | |___|  _  | |_| | _| |_  
       \____|_| |_|\___/ |_____|
       <div class="terminal-title">CHOI TERMINAL</div>
        `;
  
        output.innerHTML = `<pre class="ascii-art">${asciiArt}</pre>`;
  
        const introLines = [
          `[<span class="green">INIT</span>] Loading CHOI CONSOLE v1.0...`,
          `[<span class="green"> OK </span>] Environment ready`,
          `[<span class="blue"> SYS </span>] Listening on port 1997`,
          `[<span class="blue"> GUIDE </span>] JS mode active - enter command`,
          `[<span class="blue"> Help </span>] Enter command helps type help`
        ];
  
        let i = 0;
        function typeNextIntroLine() {
          if (i < introLines.length) {
            const line = document.createElement("div");
            line.classList.add("console-line", "initial");
            line.innerHTML = introLines[i++];
            output.appendChild(line);
            setTimeout(typeNextIntroLine, 800);
          } else {
            addPrompt();
          }
        }
  
        typeNextIntroLine();
      }
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      consoleArea.classList.add("hidden");
      output.innerHTML = "";
    });
  }
  
  // Safe mathematical expression evaluator
  function evaluateMathExpression(expr) {
    // Remove all spaces and convert to lowercase
    expr = expr.replace(/\s/g, '').toLowerCase();
    
    // Only allow safe mathematical characters
    if (!/^[0-9+\-*/().,=<>!&|^%]+$/.test(expr)) {
      throw new Error("Invalid characters in expression");
    }
    
    // Simple mathematical expression evaluation for basic operations
    try {
      // Handle basic arithmetic operations
      if (expr.includes('+') || expr.includes('-') || expr.includes('*') || expr.includes('/')) {
        // Basic validation - ensure it's a simple math expression
        const parts = expr.split(/[\+\-\*\/]/);
        if (parts.length !== 2) {
          throw new Error("Only simple binary operations supported");
        }
        
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
        
        if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Invalid numbers in expression");
        }
        
        if (expr.includes('+')) return num1 + num2;
        if (expr.includes('-')) return num1 - num2;
        if (expr.includes('*')) return num1 * num2;
        if (expr.includes('/')) {
          if (num2 === 0) throw new Error("Division by zero");
          return num1 / num2;
        }
      }
      
      // For simple expressions without operators, just return the number
      const result = parseFloat(expr);
      if (isNaN(result)) {
        throw new Error("Invalid expression");
      }
      return result;
      
    } catch (error) {
      throw new Error("Expression evaluation failed: " + error.message);
    }
  }
  
  function addPrompt() {
    const prompt = document.createElement("div");
    prompt.classList.add("console-prompt");
    prompt.innerHTML = `<span class="prompt-symbol">&gt;_</span> <input class="prompt-input" type="text" autofocus />`;
    output.appendChild(prompt);
  
    const inputs = output.querySelectorAll(".prompt-input");
    const terminalInput = inputs[inputs.length - 1];
    terminalInput.focus();
  
    terminalInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = terminalInput.value.trim();
        if (!cmd) return;
  
        const echo = document.createElement("div");
        echo.classList.add("console-line");
        echo.innerHTML = `> ${cmd}`;
        output.appendChild(echo);
  
        let result;
  
        if (cmd.toLowerCase() === "clear") {
          const preserved = output.querySelectorAll(".ascii-art, .console-line.initial");
          output.innerHTML = "";
          preserved.forEach(line => output.appendChild(line));
          addPrompt();
          output.scrollTop = output.scrollHeight;
          return;
        } else if (cmd.toLowerCase() === "help") {
          result = `Available Commands:
  1+1                          -     Evaluate JavaScript expression
  alert("hi")                  -     Show alert popup
  clear                        -     Clear the console
  "0".repeat(10)               -     Repeat "0" 10 times
  ["A", "B"].join(" love ")    -     Returns: "A love B"`;        
          } else {
          try {
            // Safe expression evaluation - only allow mathematical operations
            if (cmd.includes('alert') || cmd.includes('confirm') || cmd.includes('prompt') || 
                cmd.includes('document') || cmd.includes('window') || cmd.includes('eval') ||
                cmd.includes('Function') || cmd.includes('setTimeout') || cmd.includes('setInterval')) {
              result = "⚠️ Security: This command is not allowed for safety reasons";
            } else {
              // Only allow mathematical expressions with numbers and basic operators
              const sanitizedCmd = cmd.replace(/[^0-9+\-*/().,=<>!&|^%]/g, '');
              if (sanitizedCmd.length > 0 && sanitizedCmd.length < 100) {
                // Simple mathematical expression evaluation
                try {
                  // Use a safer approach - only evaluate if it's a simple math expression
                  if (/^[0-9+\-*/().,=<>!&|^%\s]+$/.test(cmd)) {
                    // Safe mathematical expression evaluation without eval
                    result = evaluateMathExpression(cmd);
                  } else {
                    result = "⚠️ Security: Only mathematical expressions are allowed";
                  }
                } catch (mathErr) {
                  result = `⚠️ Math Error: ${mathErr.message}`;
                }
              } else {
                result = "⚠️ Security: Expression too complex or contains invalid characters";
              }
            }
          } catch (err) {
            result = `⚠️ Error: ${err.message}`;
          }
        }
  
        const resultEl = document.createElement("div");
        resultEl.classList.add("console-line");
        resultEl.textContent = result;
        output.appendChild(resultEl);
  
        terminalInput.disabled = true;
        addPrompt();
        output.scrollTop = output.scrollHeight;
      }
    });
  }
  


  
  // Inject flicker CSS
  const flickerStyle = document.createElement("style");
  flickerStyle.textContent = `
    @keyframes flickerAnim {
      0% { box-shadow: 0 0 12px #00aaff44; }
      100% { box-shadow: 0 0 20px #00aaffaa; }
    }
    .console-area {
      animation: flickerAnim 2s infinite alternate;
      position: relative;
    }
    .console-header button {
      position: absolute;
      top: 8px;
      right: 10px;
      background: transparent;
      color: #00ffff;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      text-shadow: 0 0 5px #00ffff;
      transition: transform 0.2s ease;
    }
    .console-header button:hover {
      transform: scale(1.2);
      color: #ffffff;
    }
    .console-line {
      font-family: 'Courier New', monospace;
      margin-bottom: 0.25rem;
      color: #00ffff;
    }
    .ascii-art {
      color: #00ffff;
      font-family: 'Courier New', monospace;
      font-size: 0.75rem;
      margin-bottom: 1rem;
      white-space: pre;
      text-shadow: 0 0 8px #00ffffaa;
    }
    .green { color: #00ff66; }
    .blue { color: #00ccff; }
    .console-prompt {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Courier New', monospace;
      margin-top: 1rem;
      color: #00ffff;
    }
    .prompt-symbol {
      color: #00ffff;
      font-weight: bold;
    }
    .prompt-input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #00ffff;
      color: #00ffff;
      font-family: 'Courier New', monospace;
      font-size: 1rem;
      width: 100%;
      outline: none;
      caret-color: #00ffff;
    }
    .prompt-input::placeholder {
      color: #007777;
    }
  `;
  document.head.appendChild(flickerStyle);
});
