// app.js — 主应用逻辑
// 全栈面试宝典 v2.6 — 移动端 point desc 折叠 + expand-hint 药丸按钮

(function() {
'use strict';

// ===== 全局状态 =====
var app = document.getElementById('app');
var countEl = document.getElementById('count');
var searchInput = document.getElementById('search');
var currentFilterTag = '';
var db = null;
var DB_NAME = 'javaguide-editor';
var DB_VERSION = 1;
var currentEditContext = null;
var isEditMode = false;

// ===== 数据加载 =====
function loadAllModules() {
  var modules = window.__MODULES__ || {};
  var arr = Object.values(modules);
  arr.sort(function(a, b) { return a.order - b.order; });
  return arr;
}

// ===== 工具函数 =====
function matchFilter(text, filter) {
  if (!filter) return true;
  return text.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
}

function highlight(text, keyword) {
  var safe = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  if (!keyword) return safe;
  var esc = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var re = new RegExp('(' + esc + ')', 'gi');
  return safe.replace(re, '<span class="hl">$1</span>');
}

// ===== 渲染核心 =====
function renderModules(filter, tagFilter) {
  var baseModules = loadAllModules();
  mergeData(baseModules).then(function(mergedModules) {
    renderFromData(mergedModules, filter, tagFilter);
  });
}

function renderFromData(modules, filter, tagFilter) {
  var html = '';
  var total = 0;
  var fl = (filter || '').toLowerCase();
  var isTagFilter = tagFilter && tagFilter !== '';

  for (var mi = 0; mi < modules.length; mi++) {
    var mod = modules[mi];
    var ci = mod.cssIndex; // CSS 颜色类索引

    // 标签过滤
    if (isTagFilter) {
      if (mod.tag !== tagFilter) continue;
      var modMatch = true;
    } else {
      var modMatch = !fl || matchFilter(mod.title, filter);
    }

    var modHtml = '';
    var modCount = 0;
    var modEditBtn = '<button class="edit-btn add-btn" onclick="addSub(event,\'' + mod.id + '\')" title="新增子分类">➕</button>';

    for (var si = 0; si < mod.subs.length; si++) {
      var sub = mod.subs[si];
      var subMatch = modMatch || matchFilter(sub.title, filter);
      var pointsHtml = '';
      var subCount = 0;
      var subEditBtn = '<span class="edit-btn-group">' +
        '<button class="edit-btn" onclick="editSubTitle(event,\'' + mod.id + '\',\'' + sub.id + '\')" title="编辑标题">✏️</button>' +
        '<button class="edit-btn delete-btn" onclick="deleteSub(event,\'' + mod.id + '\',\'' + sub.id + '\')" title="删除分类">🗑️</button>' +
        '<button class="edit-btn add-btn" onclick="addPoint(event,\'' + mod.id + '\',\'' + sub.id + '\')" title="新增知识点">➕</button>' +
        '</span>';

      for (var pi = 0; pi < sub.points.length; pi++) {
        var pt = sub.points[pi];
        var ptText = pt.tag + ' ' + pt.desc;
        var ptMatch = subMatch || matchFilter(ptText, filter);
        if (!ptMatch) continue;

        // 构建 detail HTML
        var hasDetail = pt.details && pt.details.length > 0;
        var detailHtml = '';
        if (hasDetail) {
          var previewCount = 5;
          var needsToggle = pt.details.length > previewCount;
          detailHtml = '<div class="detail-wrap"><div class="detail-list">';
          for (var di = 0; di < pt.details.length; di++) {
            var dItem = pt.details[di];
            var keyword = (dItem.tag || '').trim() || (dItem.desc || '').trim();
            keyword = keyword.replace(/^第\d+[、.]\s*/, '').replace(/^\d+[.、)]\s*/, '').replace(/^[①②③④⑤⑥⑦⑧⑨⑩]/, '');
            var subDetail = dItem.desc || '';
            var hiddenCls = needsToggle && di >= previewCount ? ' detail-hidden' : '';
            if (dItem.tag && dItem.desc) {
              detailHtml += '<div class="detail-item has-sub' + hiddenCls + '" onclick="evSubDetail(event,this)">' + highlight(keyword, filter) + '<span class="sub-arrow"></span><div class="sub-detail">' + highlight(subDetail, filter) + '</div></div>';
            } else {
              detailHtml += '<div class="detail-item' + hiddenCls + '">' + highlight(keyword, filter) + '</div>';
            }
          }
          if (needsToggle) {
            detailHtml += '<div class="detail-toggle" onclick="evDetailToggle(event,this)"><span class="toggle-icon">▾</span>展开全部 ' + pt.details.length + ' 条详情</div>';
          }
          detailHtml += '</div></div>';
        }

        var detailCount = hasDetail ? pt.details.length : 0;
        var expandIcon = hasDetail ? '<span class="expand-hint">' + detailCount + ' 条</span>' : '';
        var cls = 'point' + (hasDetail ? ' has-detail' : '');
        var clickAttr = hasDetail ? ' onclick="evPt(event,this)"' : '';
        var ptEditBtn = '<span class="edit-btn-group">' +
          '<button class="edit-btn" onclick="editPoint(event,\'' + mod.id + '\',\'' + sub.id + '\',\'' + pt.id + '\')" title="编辑">✏️</button>' +
          '<button class="edit-btn delete-btn" onclick="deletePoint(event,\'' + mod.id + '\',\'' + sub.id + '\',\'' + pt.id + '\')" title="删除">🗑️</button>' +
          '</span>';
        pointsHtml += '<div class="' + cls + '"' + clickAttr + '><div class="point-row"><span class="tag">' + highlight(pt.tag, filter) + '</span><span class="desc">' + highlight(pt.desc, filter) + '</span>' + expandIcon + ptEditBtn + '</div>' + detailHtml + '</div>';
        subCount++; total++;
      }

      if (subCount === 0) continue;
      modCount += subCount;
      modHtml += '<div class="sub" onclick="evSub(event,this)"><div class="sub-head"><span class="dot" style="background:var(--c' + ci + ')"></span>' + highlight(sub.title, filter) + '<span class="count">' + subCount + '</span>' + subEditBtn + '<span class="arrow">&#9654;</span></div><div class="points">' + pointsHtml + '</div></div>';
    }

    if (modCount === 0 && filter) continue;
    var mcls = 'module m' + ci + ' open';
    html += '<div class="' + mcls + '" onclick="evMod(event,this)"><div class="module-head"><span class="icon">' + (mod.icon || '&#128203') + '</span><span class="title">' + highlight(mod.title, filter) + '</span>' + (modCount ? '<span class="badge">' + modCount + ' 条</span>' : '') + modEditBtn + '<span class="arrow">&#9654;</span></div>' + modHtml + '</div>';
  }

  app.innerHTML = html;
  if (isEditMode) document.body.classList.add('edit-mode');
  else document.body.classList.remove('edit-mode');
  if (fl !== '') {
    var subs = document.querySelectorAll('.sub');
    var mods = document.querySelectorAll('.module');
    for (var i = 0; i < subs.length; i++) subs[i].classList.add('open');
    for (var j = 0; j < mods.length; j++) mods[j].classList.add('open');
  }

  var allModules = modules;
  var totalPoints = 0;
  for (var k = 0; k < allModules.length; k++) {
    for (var l = 0; l < allModules[k].subs.length; l++) {
      totalPoints += allModules[k].subs[l].points.length;
    }
  }
  countEl.textContent = fl !== '' ? total + ' 条' : allModules.length + ' 模块';
}

// ===== 事件处理 =====
window.evMod = function(e, el) {
  e.stopPropagation();
  el.classList.toggle('open');
  if (!el.classList.contains('open')) {
    var subs = el.querySelectorAll('.sub');
    var pts = el.querySelectorAll('.point.has-detail');
    for (var i = 0; i < subs.length; i++) subs[i].classList.remove('open');
    for (var j = 0; j < pts.length; j++) pts[j].classList.remove('open');
    var lists = el.querySelectorAll('.detail-list');
    for (var k = 0; k < lists.length; k++) { lists[k].classList.remove('expanded'); var tg = lists[k].querySelector('.detail-toggle'); if (tg) { var tc = lists[k].querySelectorAll('.detail-item').length; tg.innerHTML = '<span class="toggle-icon">▾</span>展开全部 ' + tc + ' 条详情'; } }
  }
};

window.evSub = function(e, el) {
  e.stopPropagation();
  el.classList.toggle('open');
  if (!el.classList.contains('open')) {
    var pts = el.querySelectorAll('.point.has-detail');
    for (var i = 0; i < pts.length; i++) pts[i].classList.remove('open');
    var lists = el.querySelectorAll('.detail-list');
    for (var j = 0; j < lists.length; j++) { lists[j].classList.remove('expanded'); var tg = lists[j].querySelector('.detail-toggle'); if (tg) { var tc = lists[j].querySelectorAll('.detail-item').length; tg.innerHTML = '<span class="toggle-icon">▾</span>展开全部 ' + tc + ' 条详情'; } }
  }
};

window.evPt = function(e, el) {
  e.stopPropagation();
  el.classList.toggle('open');
  if (!el.classList.contains('open')) {
    var list = el.querySelector('.detail-list');
    if (list) { list.classList.remove('expanded'); var tg = list.querySelector('.detail-toggle'); if (tg) { var tc = list.querySelectorAll('.detail-item').length; tg.innerHTML = '<span class="toggle-icon">▾</span>展开全部 ' + tc + ' 条详情'; } }
  }
};

window.evSubDetail = function(e, el) {
  e.stopPropagation();
  el.classList.toggle('open');
};

window.evDetailToggle = function(e, el) {
  e.stopPropagation();
  var list = el.closest('.detail-list');
  list.classList.toggle('expanded');
  var tc = list.querySelectorAll('.detail-item').length;
  if (list.classList.contains('expanded')) {
    el.innerHTML = '<span class="toggle-icon">▾</span>收起详情';
  } else {
    el.innerHTML = '<span class="toggle-icon">▾</span>展开全部 ' + tc + ' 条详情';
  }
};

window.exAll = function(expand) {
  var mods = document.querySelectorAll('.module');
  var subs = document.querySelectorAll('.sub');
  var pts = document.querySelectorAll('.point.has-detail');
  var lists = document.querySelectorAll('.detail-list');
  if (expand) {
    for (var i = 0; i < mods.length; i++) mods[i].classList.add('open');
    for (var j = 0; j < subs.length; j++) subs[j].classList.add('open');
    for (var k = 0; k < pts.length; k++) pts[k].classList.add('open');
    for (var l = 0; l < lists.length; l++) { lists[l].classList.add('expanded'); var tg = lists[l].querySelector('.detail-toggle'); if (tg) { tg.innerHTML = '<span class="toggle-icon">▾</span>收起详情'; } }
  } else {
    for (var m = 0; m < pts.length; m++) pts[m].classList.remove('open');
    for (var n = 0; n < subs.length; n++) subs[n].classList.remove('open');
    for (var o = 0; o < mods.length; o++) mods[o].classList.remove('open');
    for (var p = 0; p < lists.length; p++) { lists[p].classList.remove('expanded'); var tg2 = lists[p].querySelector('.detail-toggle'); if (tg2) { var tc2 = lists[p].querySelectorAll('.detail-item').length; tg2.innerHTML = '<span class="toggle-icon">▾</span>展开全部 ' + tc2 + ' 条详情'; } }
  }
};

// ===== 搜索与过滤 =====
var timer = null;
searchInput.addEventListener('input', function() {
  currentFilterTag = '';
  var sel = document.getElementById('tag-select');
  if (sel) sel.value = '';
  var tagClear = document.getElementById('tag-clear');
  if (tagClear) tagClear.style.display = 'none';
  clearTimeout(timer);
  var val = searchInput.value.trim();
  timer = setTimeout(function() {
    renderModules(val, '');
    if (val) {
      setTimeout(function() {
        var s = document.querySelectorAll('.sub');
        var m = document.querySelectorAll('.module');
        for (var i = 0; i < s.length; i++) s[i].classList.add('open');
        for (var j = 0; j < m.length; j++) m[j].classList.add('open');
      }, 10);
    }
  }, 200);
});

var searchClear = document.getElementById('search-clear');
searchInput.addEventListener('input', function() {
  if (searchClear) searchClear.style.display = this.value ? 'flex' : 'none';
  this.parentElement.classList.toggle('has-value', this.value.length > 0);
});

window.clearSearch = function() {
  searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  searchInput.parentElement.classList.remove('has-value');
  currentFilterTag = '';
  var sel = document.getElementById('tag-select');
  if (sel) sel.value = '';
  var tagClear = document.getElementById('tag-clear');
  if (tagClear) tagClear.style.display = 'none';
  renderModules('', '');
};

window.onTagSelect = function(tag) {
  var clearBtn = document.getElementById('tag-clear');
  searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  searchInput.parentElement.classList.remove('has-value');
  if (!tag) { currentFilterTag = ''; renderModules('', ''); if (clearBtn) clearBtn.style.display = 'none'; return; }
  currentFilterTag = tag;
  if (clearBtn) clearBtn.style.display = 'flex';
  renderModules('', tag);
  setTimeout(function() {
    var subs = document.querySelectorAll('.sub');
    var mods = document.querySelectorAll('.module');
    for (var i = 0; i < subs.length; i++) subs[i].classList.add('open');
    for (var j = 0; j < mods.length; j++) mods[j].classList.add('open');
  }, 10);
};

window.clearTagSelect = function() {
  var sel = document.getElementById('tag-select');
  sel.value = '';
  currentFilterTag = '';
  renderModules('', '');
};

// ===== 暗黑模式 =====
window.toggleDark = function() {
  document.body.classList.toggle('dark');
  var isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? '1' : '0');
  var headerBtn = document.getElementById('header-dark-btn');
  if (headerBtn) headerBtn.textContent = isDark ? '☀️' : '🌙';
};

window.toggleEditMode = function() {
  isEditMode = !isEditMode;
  document.body.classList.toggle('edit-mode', isEditMode);
  var item = document.getElementById('edit-mode-item');
  var btn = document.getElementById('more-btn');
  if (item) {
    item.textContent = isEditMode ? '✏️ 编辑中...' : '✏️ 编辑模式';
    item.classList.toggle('edit-active', isEditMode);
  }
  if (btn) btn.classList.toggle('active', isEditMode);
  closeMoreMenu();
};

window.toggleMoreMenu = function(e) {
  if (e) e.stopPropagation();
  var menu = document.getElementById('more-menu');
  if (menu) menu.classList.toggle('open');
};

window.closeMoreMenu = function() {
  var menu = document.getElementById('more-menu');
  if (menu) menu.classList.remove('open');
};

// Click outside to close more menu
document.addEventListener('click', function(e) {
  var wrapper = e.target.closest('.more-wrapper');
  if (!wrapper) closeMoreMenu();
});

function initDarkMode() {
  if (localStorage.getItem('darkMode') !== '0') {
    document.body.classList.add('dark');
    var headerBtn = document.getElementById('header-dark-btn');
    if (headerBtn) headerBtn.textContent = '☀️';
  }
}

// ===== 滚动进度 & 回到顶部 =====
var scrollProgress = document.getElementById('scroll-progress');
var backTop = document.getElementById('back-top');
var header = document.querySelector('.header');
var headerCompact = false;
var ticking = false;

function initScrollListeners() {
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var pct = h > 0 ? window.scrollY / h * 100 : 0;
        if (scrollProgress) scrollProgress.style.width = pct + '%';
        if (backTop) {
          if (window.scrollY > 400) backTop.classList.add('show');
          else backTop.classList.remove('show');
        }
        if (header) {
          if (window.scrollY > 280 && !headerCompact) { header.classList.add('compact'); headerCompact = true; }
          else if (window.scrollY < 120 && headerCompact) { header.classList.remove('compact'); headerCompact = false; }
        }
        var navLinks = document.querySelectorAll('.quick-nav a');
        var mods = document.querySelectorAll('.module');
        var activeIdx = -1;
        for (var i = 0; i < mods.length; i++) {
          if (mods[i].getBoundingClientRect().top <= window.innerHeight / 3) activeIdx = i;
        }
        for (var j = 0; j < navLinks.length; j++) {
          if (j === activeIdx) navLinks[j].classList.add('active');
          else navLinks[j].classList.remove('active');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== 键盘快捷键 =====
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !e.target.closest('input,textarea'))) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (e.key === 'Escape') {
    var moreMenu = document.getElementById('more-menu');
    if (document.getElementById('edit-modal').style.display === 'flex') {
      closeEditModal();
    } else if (moreMenu && moreMenu.classList.contains('open')) {
      closeMoreMenu();
    } else if (isEditMode) {
      isEditMode = false;
      document.body.classList.remove('edit-mode');
      var item = document.getElementById('edit-mode-item');
      var btn = document.getElementById('more-btn');
      if (item) { item.textContent = '✏️ 编辑模式'; item.classList.remove('edit-active'); }
      if (btn) btn.classList.remove('active');
    } else if (document.activeElement === searchInput) {
      clearSearch();
      searchInput.blur();
    }
  }
  if (e.ctrlKey && e.key === 'd') {
    e.preventDefault();
    toggleDark();
  }
});

// ===== 快速导航 =====
function buildQuickNav(modules) {
  var nav = document.getElementById('quick-nav');
  if (!nav) return;
  var html = '';
  for (var i = 0; i < modules.length; i++) {
    var shortName = modules[i].title.replace(/[一二三四五六七八九十]+、/, '').replace(/全栈|生态|前端|基础/g, '').trim() || modules[i].title;
    if (shortName.length > 4) shortName = shortName.substring(0, 4);
    html += '<a href="#" onclick="jumpTo(event,' + i + ')" data-label="' + modules[i].title + '" style="background:var(--c' + modules[i].cssIndex + ')"></a>';
  }
  nav.innerHTML = html;
}

window.jumpTo = function(e, idx) {
  e.preventDefault();
  currentFilterTag = '';
  var sel = document.getElementById('tag-select');
  if (sel) sel.value = '';
  searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  renderModules('', '');
  setTimeout(function() {
    var mods = document.querySelectorAll('.module');
    if (mods[idx]) {
      mods[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      mods[idx].classList.add('open');
      var subs = mods[idx].querySelectorAll('.sub');
      for (var i = 0; i < subs.length; i++) subs[i].classList.add('open');
    }
  }, 50);
};

// ===== 密码认证模块 =====
async function verifyPassword(inputPassword) {
  var config = window.__MODULE_CONFIG__.admin;
  var parts = config.passwordHash.split('$');
  if (parts.length !== 3) return false;
  var salt = parts[1];
  var expectedHash = parts[2];

  var input = salt + inputPassword;
  var encoder = new TextEncoder();
  var data = encoder.encode(input);
  var hashBuffer = await crypto.subtle.digest('SHA-256', data);
  var hashArray = Array.from(new Uint8Array(hashBuffer));
  var hashHex = hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');

  return hashHex === expectedHash;
}

function isAuthenticated() {
  var auth = localStorage.getItem('javaguide_auth');
  if (!auth) return false;
  try {
    var data = JSON.parse(auth);
    var config = window.__MODULE_CONFIG__.admin;
    if (!data.authenticated) return false;
    if (Date.now() - data.authTime > config.sessionDuration) {
      localStorage.removeItem('javaguide_auth');
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function initAuth() {
  var overlay = document.getElementById('auth-overlay');
  var mainContent = document.getElementById('main-content');

  if (isAuthenticated()) {
    overlay.style.display = 'none';
    mainContent.style.display = 'block';
    onAuthSuccess();
    return;
  }

  overlay.style.display = 'flex';
  mainContent.style.display = 'none';

  var passwordInput = document.getElementById('auth-password');
  var submitBtn = document.getElementById('auth-submit');
  var errorDiv = document.getElementById('auth-error');

  async function doAuth() {
    var password = passwordInput.value;
    if (!password) return;
    var valid = await verifyPassword(password);
    if (valid) {
      localStorage.setItem('javaguide_auth', JSON.stringify({ authenticated: true, authTime: Date.now() }));
      overlay.style.display = 'none';
      mainContent.style.display = 'block';
      errorDiv.style.display = 'none';
      onAuthSuccess();
    } else {
      errorDiv.style.display = 'block';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  submitBtn.onclick = doAuth;
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doAuth();
  });
  passwordInput.focus();
}

function onAuthSuccess() {
  initDB().then(function() {
    var modules = loadAllModules();
    var totalPoints = 0;
    for (var i = 0; i < modules.length; i++) {
      for (var j = 0; j < modules[i].subs.length; j++) {
        totalPoints += modules[i].subs[j].points.length;
      }
    }
    var descEl = document.getElementById('header-desc');
    if (descEl) descEl.textContent = '共 ' + modules.length + ' 大模块 · ' + totalPoints + ' 个知识点 · 前后端全覆盖 · 点击展开详情 ✨ · 支持搜索过滤';

    initDarkMode();
    renderModules('', '');
    buildQuickNav(modules);
    initScrollListeners();

    // 绑定编辑弹窗按钮
    document.getElementById('edit-cancel').onclick = closeEditModal;
    document.getElementById('edit-save').onclick = saveEditFromModal;
  }).catch(function(err) {
    console.error('IndexedDB init failed:', err);
    // 降级: 不支持编辑但仍可阅读
    var modules = loadAllModules();
    var totalPoints = 0;
    for (var i = 0; i < modules.length; i++) {
      for (var j = 0; j < modules[i].subs.length; j++) {
        totalPoints += modules[i].subs[j].points.length;
      }
    }
    var descEl = document.getElementById('header-desc');
    if (descEl) descEl.textContent = '共 ' + modules.length + ' 大模块 · ' + totalPoints + ' 个知识点 (只读模式 — 浏览器不支持本地编辑)';
    initDarkMode();
    renderModules('', '');
    buildQuickNav(modules);
    initScrollListeners();
    var toolbar = document.getElementById('admin-toolbar');
    if (toolbar) toolbar.style.display = 'none';
  });
}

// ===== IndexedDB 编辑层 =====
function initDB() {
  return new Promise(function(resolve, reject) {
    if (!window.indexedDB) { reject(new Error('IndexedDB not supported')); return; }
    var request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = function(event) {
      var database = event.target.result;
      if (!database.objectStoreNames.contains('edits')) {
        var store = database.createObjectStore('edits', { keyPath: 'key' });
        store.createIndex('moduleId', 'moduleId', { unique: false });
        store.createIndex('type', 'type', { unique: false });
      }
    };
    request.onsuccess = function(event) {
      db = event.target.result;
      resolve(db);
    };
    request.onerror = function(event) {
      reject(event.target.error);
    };
  });
}

function saveEdit(edit) {
  return new Promise(function(resolve, reject) {
    if (!db) { reject(new Error('DB not initialized')); return; }
    var tx = db.transaction('edits', 'readwrite');
    var store = tx.objectStore('edits');
    edit.timestamp = Date.now();
    var request = store.put(edit);
    request.onsuccess = function() { resolve(edit.key); };
    request.onerror = function() { reject(request.error); };
  });
}

function deleteEdit(key) {
  return new Promise(function(resolve, reject) {
    if (!db) { reject(new Error('DB not initialized')); return; }
    var tx = db.transaction('edits', 'readwrite');
    var store = tx.objectStore('edits');
    var request = store.delete(key);
    request.onsuccess = function() { resolve(); };
    request.onerror = function() { reject(request.error); };
  });
}

function getAllEdits() {
  return new Promise(function(resolve, reject) {
    if (!db) { resolve([]); return; }
    var tx = db.transaction('edits', 'readonly');
    var store = tx.objectStore('edits');
    var request = store.getAll();
    request.onsuccess = function() { resolve(request.result || []); };
    request.onerror = function() { reject(request.error); };
  });
}

function clearAllEdits() {
  return new Promise(function(resolve, reject) {
    if (!db) { reject(new Error('DB not initialized')); return; }
    var tx = db.transaction('edits', 'readwrite');
    var store = tx.objectStore('edits');
    var request = store.clear();
    request.onsuccess = function() { resolve(); };
    request.onerror = function() { reject(request.error); };
  });
}

// ===== 合并逻辑 =====
function mergeData(baseModules) {
  return getAllEdits().then(function(edits) {
    if (!edits || edits.length === 0) return baseModules;

    // 深拷贝基础数据避免修改原始对象
    var merged = JSON.parse(JSON.stringify(baseModules));

    // 构建索引 Map
    var moduleMap = {};
    var subMap = {};
    var pointMap = {};

    for (var mi = 0; mi < merged.length; mi++) {
      var mod = merged[mi];
      moduleMap[mod.id] = mod;
      for (var si = 0; si < mod.subs.length; si++) {
        var sub = mod.subs[si];
        subMap[mod.id + ':' + sub.id] = sub;
        for (var pi = 0; pi < sub.points.length; pi++) {
          var pt = sub.points[pi];
          pointMap[mod.id + ':' + sub.id + ':' + pt.id] = pt;
        }
      }
    }

    // 应用 edits (按时间戳排序保证操作顺序)
    edits.sort(function(a, b) { return (a.timestamp || 0) - (b.timestamp || 0); });

    for (var ei = 0; ei < edits.length; ei++) {
      var edit = edits[ei];
      switch (edit.type) {
        case 'modify':
          var ptKey = edit.moduleId + ':' + edit.parentId + ':' + edit.data.id;
          if (pointMap[ptKey]) {
            Object.assign(pointMap[ptKey], edit.data);
          }
          break;
        case 'add':
          var subKey = edit.moduleId + ':' + edit.parentId;
          if (subMap[subKey]) {
            subMap[subKey].points.push(edit.data);
            pointMap[edit.moduleId + ':' + edit.parentId + ':' + edit.data.id] = edit.data;
          }
          break;
        case 'delete':
          var delSubKey = edit.moduleId + ':' + edit.parentId;
          if (subMap[delSubKey]) {
            subMap[delSubKey].points = subMap[delSubKey].points.filter(function(p) {
              return p.id !== edit.data.deletedId;
            });
            delete pointMap[edit.moduleId + ':' + edit.parentId + ':' + edit.data.deletedId];
          }
          break;
        case 'add-sub':
          if (moduleMap[edit.moduleId]) {
            moduleMap[edit.moduleId].subs.push(edit.data);
            subMap[edit.moduleId + ':' + edit.data.id] = edit.data;
          }
          break;
        case 'delete-sub':
          if (moduleMap[edit.moduleId]) {
            moduleMap[edit.moduleId].subs = moduleMap[edit.moduleId].subs.filter(function(s) {
              return s.id !== edit.data.deletedId;
            });
            delete subMap[edit.moduleId + ':' + edit.data.deletedId];
          }
          break;
        case 'modify-sub':
          var modSubKey = edit.moduleId + ':' + edit.data.id;
          if (subMap[modSubKey]) {
            subMap[modSubKey].title = edit.data.title;
          }
          break;
      }
    }

    return merged;
  });
}

// ===== 编辑交互 =====
function openEditModal(title, tagValue, descValue, details) {
  var modal = document.getElementById('edit-modal');
  document.getElementById('edit-modal-title').textContent = title;
  document.getElementById('edit-tag').value = tagValue || '';
  document.getElementById('edit-desc').value = descValue || '';

  var detailsList = document.getElementById('edit-details-list');
  var html = '';
  if (details && details.length > 0) {
    for (var i = 0; i < details.length; i++) {
      html += '<div class="edit-detail-row">' +
        '<input type="text" class="edit-detail-tag" value="' + (details[i].tag || '').replace(/"/g, '&quot;') + '" placeholder="标签">' +
        '<input type="text" class="edit-detail-desc" value="' + (details[i].desc || '').replace(/"/g, '&quot;') + '" placeholder="描述">' +
        '<button class="edit-detail-remove" onclick="removeDetailRow(this)">✕</button>' +
        '</div>';
    }
  }
  html += '<button class="edit-add-detail" onclick="addDetailRow()">➕ 新增详情条目</button>';
  detailsList.innerHTML = html;

  modal.style.display = 'flex';
  document.getElementById('edit-tag').focus();
}

function closeEditModal() {
  document.getElementById('edit-modal').style.display = 'none';
  currentEditContext = null;
}

window.addDetailRow = function() {
  var list = document.getElementById('edit-details-list');
  var addBtn = list.querySelector('.edit-add-detail');
  var row = document.createElement('div');
  row.className = 'edit-detail-row';
  row.innerHTML = '<input type="text" class="edit-detail-tag" placeholder="标签">' +
    '<input type="text" class="edit-detail-desc" placeholder="描述">' +
    '<button class="edit-detail-remove" onclick="removeDetailRow(this)">✕</button>';
  list.insertBefore(row, addBtn);
};

window.removeDetailRow = function(btn) {
  btn.parentElement.remove();
};

function saveEditFromModal() {
  if (!currentEditContext) return;

  var tag = document.getElementById('edit-tag').value;
  var desc = document.getElementById('edit-desc').value;

  var detailRows = document.querySelectorAll('.edit-detail-row');
  var details = [];
  for (var i = 0; i < detailRows.length; i++) {
    var dTag = detailRows[i].querySelector('.edit-detail-tag').value;
    var dDesc = detailRows[i].querySelector('.edit-detail-desc').value;
    if (dTag || dDesc) {
      details.push({ id: currentEditContext.pointId + '-d' + i, tag: dTag, desc: dDesc });
    }
  }

  var editData = { id: currentEditContext.pointId, tag: tag, desc: desc, details: details };
  var editKey = currentEditContext.moduleId + ':' + currentEditContext.pointId;
  var editType = currentEditContext.type;

  saveEdit({
    key: editKey,
    moduleId: currentEditContext.moduleId,
    parentId: currentEditContext.subId,
    type: editType,
    data: editData
  }).then(function() {
    closeEditModal();
    renderModules('', '');
  }).catch(function(err) {
    alert('保存失败: ' + err.message);
  });
}

// 编辑 point
window.editPoint = function(e, moduleId, subId, pointId) {
  e.stopPropagation();
  var baseModules = loadAllModules();
  mergeData(baseModules).then(function(merged) {
    var pt = findPoint(merged, moduleId, subId, pointId);
    if (!pt) return;
    currentEditContext = { moduleId: moduleId, subId: subId, pointId: pointId, type: 'modify' };
    openEditModal('编辑知识点', pt.tag, pt.desc, pt.details);
  });
};

// 新增 point
window.addPoint = function(e, moduleId, subId) {
  e.stopPropagation();
  var newId = 'pt-new-' + Date.now();
  currentEditContext = { moduleId: moduleId, subId: subId, pointId: newId, type: 'add' };
  openEditModal('新增知识点', '', '', []);
};

// 删除 point
window.deletePoint = function(e, moduleId, subId, pointId) {
  e.stopPropagation();
  if (!confirm('确定删除此知识点？')) return;
  saveEdit({
    key: moduleId + ':del-' + pointId,
    moduleId: moduleId,
    parentId: subId,
    type: 'delete',
    data: { deletedId: pointId }
  }).then(function() {
    renderModules('', '');
  });
};

// 编辑 sub 标题
window.editSubTitle = function(e, moduleId, subId) {
  e.stopPropagation();
  var newTitle = prompt('请输入新标题:');
  if (!newTitle) return;
  saveEdit({
    key: moduleId + ':submod-' + subId,
    moduleId: moduleId,
    parentId: subId,
    type: 'modify-sub',
    data: { id: subId, title: newTitle }
  }).then(function() {
    renderModules('', '');
  });
};

// 删除 sub
window.deleteSub = function(e, moduleId, subId) {
  e.stopPropagation();
  if (!confirm('确定删除此分类及其所有知识点？')) return;
  saveEdit({
    key: moduleId + ':subdel-' + subId,
    moduleId: moduleId,
    parentId: subId,
    type: 'delete-sub',
    data: { deletedId: subId }
  }).then(function() {
    renderModules('', '');
  });
};

// 新增 sub
window.addSub = function(e, moduleId) {
  e.stopPropagation();
  var title = prompt('请输入分类标题:');
  if (!title) return;
  var newSubId = 'sub-new-' + Date.now();
  saveEdit({
    key: moduleId + ':subadd-' + newSubId,
    moduleId: moduleId,
    parentId: moduleId,
    type: 'add-sub',
    data: { id: newSubId, title: title, points: [] }
  }).then(function() {
    renderModules('', '');
  });
};

// 辅助函数: 在模块树中查找 point
function findPoint(modules, moduleId, subId, pointId) {
  for (var mi = 0; mi < modules.length; mi++) {
    if (modules[mi].id !== moduleId) continue;
    for (var si = 0; si < modules[mi].subs.length; si++) {
      if (modules[mi].subs[si].id !== subId) continue;
      for (var pi = 0; pi < modules[mi].subs[si].points.length; pi++) {
        if (modules[mi].subs[si].points[pi].id === pointId) return modules[mi].subs[si].points[pi];
      }
    }
  }
  return null;
}

// ===== 导出功能 =====
window.exportModules = function() {
  var baseModules = loadAllModules();
  mergeData(baseModules).then(function(merged) {
    var choice = prompt('导出范围：输入模块ID导出单个模块，或输入 "all" 导出全部\n\n可用模块ID示例: java-basic, mysql, redis, spring, docker\n输入 "all" 导出全部 41 个模块');
    if (!choice) return;

    var modulesToExport = [];
    if (choice === 'all') {
      modulesToExport = merged;
    } else {
      var mod = merged.find(function(m) { return m.id === choice; });
      if (mod) modulesToExport = [mod];
      else { alert('未找到模块: ' + choice); return; }
    }

    var allContent = '';
    for (var i = 0; i < modulesToExport.length; i++) {
      var m = modulesToExport[i];
      var jsonStr = JSON.stringify(m, null, 2);
      allContent += '// ' + m.id + '.js — ' + m.title + ' 模块数据\n\n' +
        'window.__MODULES__ = window.__MODULES__ || {};\n' +
        'window.__MODULES__[\'' + m.id + '\'] = ' + jsonStr + ';\n\n';
    }

    var blob = new Blob([allContent], { type: 'application/javascript' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = choice === 'all' ? 'all-modules-export.js' : choice + '-export.js';
    a.click();
    URL.revokeObjectURL(url);
  });
};

// ===== 清除编辑 =====
window.confirmClearEdits = function() {
  if (!confirm('确定清除所有本地编辑？此操作不可恢复，页面将恢复为基础数据。')) return;
  clearAllEdits().then(function() {
    renderModules('', '');
    alert('所有编辑已清除，页面已恢复为基础数据。');
  }).catch(function(err) {
    alert('清除失败: ' + err.message);
  });
};

// ===== 应用初始化 =====
document.addEventListener('DOMContentLoaded', function() {
  initAuth();
});

})();
