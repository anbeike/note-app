// 获取元素
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-button');
const noteOutput = document.getElementById('note-output');

// 从 localStorage 中加载笔记
function loadNotes() {
  const notes = localStorage.getItem('notes');
  if (notes) {
    noteOutput.textContent = notes;
    noteInput.value = notes;
  }
}

// 保存笔记到 localStorage
function saveNotes() {
  const notes = noteInput.value;
  localStorage.setItem('notes', notes);
  noteOutput.textContent = notes;
}

// 加载笔记
loadNotes();

// 绑定保存按钮的点击事件
saveButton.addEventListener('click', saveNotes);