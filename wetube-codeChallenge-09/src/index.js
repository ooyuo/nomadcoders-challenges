const recordBtn = document.getElementById("recordBtn");
const recordInfo = document.getElementById("recordInfo");

let recorder;
let timer = 0;
let interval;

const recordStop = () => {
  recorder.stop();
  recordBtn.removeEventListener("click", recordStop);
  recordBtn.addEventListener("click", recordStart);
  recordBtn.textContent = "Start Recording";
  clearInterval(interval);
};
const recordStart = () => {
  recorder.start();
  recordBtn.textContent = "Stop recording";
  recordBtn.removeEventListener("click", recordStart);
  recordBtn.addEventListener("click", recordStop);
  interval = setInterval(recordingTimer, 1000);
  recordInfo.innerHTML = '';
};

const recorderSetting = () => {
  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      recorder = new MediaRecorder(stream);
      recordBtn.addEventListener("click", recordStart);
      var chunks = [];

      recorder.onstop = event => {
        const blob = new Blob(chunks, { type:"audio/webm;codecs=opus" });
        chunks = [];
        console.log(`blob: ${blob}`);
        const audioURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = audioURL;
        console.log(`link : ${link}`);
        link.download = "recorded.webm";
        document.body.appendChild(link);
        link.click();
      };

      recorder.ondataavailable = event => {
        chunks.push(event.data);
      };
    });
  }
};

const recordingTimer = () => {
  timer += 1;
  recordInfo.innerHTML = `Recording for ${timer}`;
};

function init() {
  recorderSetting();
}
init();