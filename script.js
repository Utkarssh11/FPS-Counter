const times = [];
let fps;
let mfps = 0;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
		document.getElementById("fps").innerHTML = fps + " fps"
		document.getElementById("mfps").innerHTML = "Max : " + mfps + " fps"
		if (fps > mfps){
			mfps = fps
		}
		
    refreshLoop();
  });
}

refreshLoop();