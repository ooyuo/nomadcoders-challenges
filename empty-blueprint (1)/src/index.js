// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector("form"),
  input = form.querySelector("input"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingTasks = [];
let finishedTasks = [];

function getTaskObj(task) {
  return {
    id: String(Date.now()),
    task
  };
}

function getPendingId(taskId) {
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}

function getFinishedId(taskId) {
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}

function saveState() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTasks));
}

function pushPendingTask(taskObj) {
  pendingTasks.push(taskObj);
}

function pushFinishedTask(taskObj) {
  finishedTasks.push(taskObj);
}

function removePending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removePending(li.id);
  removeFinished(li.id);
  saveState();
}

function switchToFinished(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = getPendingId(li.id);
  removePending(li.id);
  pushFinishedTask(task);
  paintTasks(task, "F");
  saveState();
}

function switchToPending(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = getFinishedId(li.id);
  removeFinished(li.id);
  pushPendingTask(task);
  paintTasks(task, "P");
  saveState();
}

function paintTasks(taskObj, target) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const switchTo = document.createElement("button");

  li.id = taskObj.id;
  span.innerText = taskObj.task;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", removeTask);
  
  li.appendChild(span);
  li.appendChild(delBtn);
  
  if (target === "P") {
    switchTo.innerText = "✅";
    switchTo.addEventListener("click", switchToFinished);
    li.appendChild(switchTo);
    pendingList.appendChild(li);
  } else {
    switchTo.innerText = "💨";
    switchTo.addEventListener("click", switchToPending);
    li.appendChild(switchTo);
    finishedList.appendChild(li);
  }
}

function paintState() {
  pendingTasks.forEach(function(task) {
    paintTasks(task,"P");
  });
  finishedTasks.forEach(function(task) {
    paintTasks(task, "F");
  });
}

function loadLocalStorage() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING_LS)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED_LS)) || [];
}

function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObj(input.value);
  input.value = "";
  paintTasks(taskObj, "P");
  pushPendingTask(taskObj);
  saveState(taskObj);
}

function init() {
  form.addEventListener("submit", handleFormSubmit);
  loadLocalStorage();
  paintState();
}

init();