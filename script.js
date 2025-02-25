// 获取元素
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-button');
const noteOutput = document.getElementById('note-output');

// 从 localStorage 中加载笔记
function loadNotes() {
  const notes = localStorage.getItem('notes');
  const timestamp = localStorage.getItem('lastSaved') || '尚未保存';
  if (notes) {
    noteOutput.innerHTML = `${notes}<div class="note-timestamp">最后保存时间：${timestamp}</div>`;
  }
}

// 保存笔记到 localStorage
function saveNotes() {
  const notes = noteInput.value;
  const timestamp = new Date().toLocaleString();
  localStorage.setItem('notes', notes);
  localStorage.setItem('lastSaved', timestamp);
  noteOutput.innerHTML = `${notes}<div class="note-timestamp">最后保存时间：${timestamp}</div>`;

  // 清空文本框内容
  noteInput.value = '';
}

// 加载笔记
loadNotes();

// 绑定保存按钮的点击事件
saveButton.addEventListener('click', saveNotes);
