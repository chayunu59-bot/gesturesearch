// 웹캠 제어 기본 코드
const videoElement = document.getElementById("webcam");
const startButton = document.getElementById("start-btn");
const clearButton = document.getElementById("clear-btn");
const outputBox = document.getElementById("output-box");

async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    outputBox.textContent = "웹캠이 켜졌어요 👀";
  } catch (err) {
    console.error("웹캠 실행 실패:", err);
    outputBox.textContent = "웹캠을 켤 수 없습니다 ❌";
  }
}

function clearOutput() {
  outputBox.textContent = "_";
}

// 버튼 이벤트 연결
startButton.addEventListener("click", startWebcam);
clearButton.addEventListener("click", clearOutput);