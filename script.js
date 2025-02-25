// 获取元素
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-button');
const noteOutput = document.getElementById('note-output');

// 从 localStorage 中加载笔记
function loadNotes() {
  // 从 localStorage 中读取数据，如果不存在或格式错误则初始化为空数组
  let notes;
  try {
    notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (!Array.isArray(notes)) {
      notes = []; // 如果不是数组，则初始化为空数组
    }
  } catch (error) {
    console.error('读取笔记数据失败，初始化为空数组:', error);
    notes = [];
  }

  // 渲染笔记列表
  noteOutput.innerHTML = notes
    .map(
      (note, index) => `
      <div class="note-item">
        <div class="note-content">${note.text}</div>
        <div class="note-timestamp">${note.timestamp}</div>
        <button class="delete-button" data-index="${index}">删除</button>
      </div>
    `
    )
    .join('');
}

// 保存笔记到 localStorage
function saveNotes() {
  // 从 localStorage 中读取数据，如果不存在或格式错误则初始化为空数组
  let notes;
  try {
    notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (!Array.isArray(notes)) {
      notes = []; // 如果不是数组，则初始化为空数组
    }
  } catch (error) {
    console.error('读取笔记数据失败，初始化为空数组:', error);
    notes = [];
  }

  const text = noteInput.value.trim();

  if (text === '') {
    alert('笔记内容不能为空！');
    return;
  }

  const timestamp = new Date().toLocaleString();
  notes.push({ text, timestamp }); // 将新笔记添加到数组中
  localStorage.setItem('notes', JSON.stringify(notes)); // 保存整个数组

  // 清空文本框内容并重新加载笔记列表
  noteInput.value = '';
  loadNotes();
}

// 删除笔记
function deleteNote(index) {
  // 从 localStorage 中读取数据，如果不存在或格式错误则初始化为空数组
  let notes;
  try {
    notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (!Array.isArray(notes)) {
      notes = []; // 如果不是数组，则初始化为空数组
    }
  } catch (error) {
    console.error('读取笔记数据失败，初始化为空数组:', error);
    notes = [];
  }

  notes.splice(index, 1); // 删除指定索引的笔记
  localStorage.setItem('notes', JSON.stringify(notes)); // 更新 localStorage
  loadNotes(); // 重新加载笔记列表
}

// 页面加载时加载笔记
loadNotes();

// 绑定保存按钮的点击事件
saveButton.addEventListener('click', saveNotes);

// 绑定删除按钮的点击事件（事件委托）
noteOutput.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index');
    deleteNote(index);
  }
});
