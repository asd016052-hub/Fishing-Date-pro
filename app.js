
const $ = (id) => document.getElementById(id);
const storageKey = "fishingLogFinalV1";
const locations = {"本島": {"基隆": ["白燈塔", "八斗仔", "望海巷漁港", "外木山漁港", "長潭里漁港", "和平島", "碧砂漁港", "潮境公園", "深澳岬角"], "新北市": ["鼻頭角", "龍洞灣", "龍洞岬", "澳底", "福隆", "鹽寮", "三貂角", "卯澳", "和美漁港", "深澳漁港", "富貴角", "石門洞", "老梅", "草里漁港", "金山磺港", "野柳", "萬里漁港"], "桃園": ["竹圍漁港", "永安漁港", "新屋海岸", "觀音海岸"], "新竹": ["南寮漁港", "香山濕地", "海山漁港"], "苗栗": ["龍鳳漁港", "通霄海岸", "苑裡海岸", "後龍溪出海口"], "台中": ["梧棲漁港", "高美濕地", "大甲溪出海口", "麗水漁港", "台中港北堤"], "彰化": ["王功漁港", "芳苑海岸", "伸港海岸", "漢寶濕地", "鹿港北堤", "鹿港西堤"], "雲林": ["三條崙", "台西漁港", "箔子寮漁港", "金湖", "五條港"], "嘉義": ["東石漁港", "布袋漁港", "外傘頂洲", "雙春海水浴場", "王爺溪出海口", "好美里", "布袋潟湖", "鰲鼓濕地", "第三漁港", "八卦溝", "走私溝"], "臺南": ["安平南堤", "安平北堤", "四草", "黃金海岸", "將軍漁港", "青山港", "蘆竹溝", "七股潟湖", "馬南", "馬北", "二仁溪橋", "鹿耳門", "馬沙溝", "北門沙灘", "曾文溪出海口", "青鯤鯓"], "高雄": ["旗津北堤", "旗后燈塔", "西子灣", "西子灣北堤", "永安漁港", "永安新港", "永安平臺", "興達港", "彌陀漁港", "彌陀南寮漁港", "蚵仔寮漁港", "林園海岸", "柴山漁港", "烏林投", "茄萣海岸", "南興計劃區", "鳳鼻頭漁港", "中芸港", "汕尾港"], "屏東": ["東港", "鹽埔漁港", "大鵬灣", "枋寮漁港", "佳冬海岸", "後壁湖", "萬里桐", "車城海岸", "七星岩"], "臺東": ["成功漁港", "富岡漁港", "都蘭海岸", "金樽漁港", "三仙台", "杉原海岸", "金倫"], "花蓮": ["花蓮港", "七星潭", "鹽寮海岸", "磯崎海岸", "石梯坪"], "宜蘭": ["烏石港", "外澳", "頭城港", "大溪漁港", "粉鳥林", "南方澳", "內埤海灘"]}, "離島": {"澎湖": ["馬公港", "重光碼頭", "風櫃洞", "山水沙灘", "鎖港", "案山漁港", "嵵裡沙灘", "瓦硐漁港", "觀音亭", "西衛漁港", "山水碉堡", "30高地", "通樑", "跨海大橋", "跨海大橋橋墩", "後寮", "西嶼外垵漁港", "池西岩瀑", "內垵海岸", "赤馬海岸", "赤馬漁港", "歧頭碼頭", "竹灣箱網", "菜園箱網", "吉貝", "吉貝碼頭", "吉貝沙尾", "險礁嶼", "員貝嶼", "鳥嶼", "望安", "將軍澳", "七美", "虎井嶼", "桶盤嶼", "花嶼", "屈爪嶼", "姑婆嶼", "目斗嶼", "土地公嶼", "大蚶嶼", "小蚶嶼", "大女人嶼", "小女人嶼", "塭尾", "大倉嶼", "鳥嶼外礁", "花嶼外礁", "貓礁", "豬母礁", "大蜈蚣礁", "小蜈蚣礁", "葫蘆礁", "東吉嶼", "西吉嶼"], "蘭嶼": ["新開元港", "舊開元港", "龍門港", "饅頭山", "虎頭坡", "漁人灘頭", "八代灣沙灘", "青青草原", "象鼻岩", "鋼盔岩", "野銀礁岸", "東清灣", "情人洞", "大石頭", "雙獅岩", "雞母岩", "坦克岩", "洞口"], "綠島": ["南寮港", "石朗", "柴口", "朝日溫泉"], "小琉球": ["蛤板灣", "烏鬼洞", "美人洞", "厚石礁", "大福漁港", "海子口漁港", "漁福漁港", "龍蝦洞", "沙瑪基"], "金門": ["料羅港", "成功海岸", "后湖海岸"], "馬祖": ["福澳港", "芹壁", "東引", "津沙"]}};
const pickerData = {"method": {"title": "釣法", "empty": "請選擇", "options": ["磯釣", "前打", "灘釣", "路亞", "船釣", "沉底"]}, "spotType": {"title": "釣場", "empty": "請選擇", "options": ["防波堤", "消波塊", "海蝕平臺", "沙灘", "蚵棚", "潟湖", "礁島", "礁岸", "近海", "遠海", "出海口"]}, "rod": {"title": "釣竿", "empty": "請選擇", "options": ["Shimano FireBlood Gure SURVEYOR 1.7", "上興 岸道二 BG MAJOR POWER", "Gamakatsu 海上釣堀 Corespec II 真鯛 青物", "前打竿", "手竿", "筏竿", "磯投竿", "無"]}, "reel": {"title": "卷線器", "empty": "請選擇", "options": ["Shimano 19 BB-X TECHNIUM FIRE BLOOD 3000DXG", "DIAWA BG MQ 8000H", "Shimano BB-X DESPINA C3000DXG ASIA EDITION", "牛車輪", "前打輪", "手線"]}, "floatType": {"title": "浮標", "empty": "請選擇", "options": ["長標", "短標", "阿波", "目印", "無"]}, "floatSize": {"title": "浮標號數", "empty": "請選擇", "options": ["000", "00", "1.0", "1.5", "2.0", "3.0", "無"]}, "foot": {"title": "絲腳", "empty": "請選擇", "options": ["單", "雙"]}, "mainLine": {"title": "母線", "empty": "請選擇", "options": ["PE", "尼龍"]}, "leader": {"title": "子線號數", "empty": "請選擇", "options": ["0.8", "1.0", "1.5", "1.7", "1.75", "2.0", "2.5", "3.0", "4.0", "16", "24", "30"]}, "hook": {"title": "鈎子", "empty": "請選擇", "options": ["千又", "小磯", "秋田狐", "伊勢尼", "丸世", "鐵板鈎"]}, "hookSize": {"title": "鈎子號數", "empty": "請選擇", "options": ["0.5", "0.8", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "12", "15", "18", "20"]}, "lure": {"title": "路亞", "empty": "請選擇", "options": ["波趴Popper", "鉛筆", "顫泳", "鐵板", "軟蟲", "無"]}, "bait": {"title": "釣餌", "empty": "請選擇", "options": ["南極蝦", "練餌", "青蟲", "赤蟲", "沙蟲", "白蝦肉", "大白蝦", "白蝦丁", "火燒蝦（狗蝦）", "沙蝦", "鬍鬚蝦", "金寶螺", "砢螅", "蚵仔", "藤壺", "海膽", "綠海草絲", "紅草", "小卷", "章魚", "白底仔", "青蚶", "紅腳仔", "丁香魚", "虱目魚", "吳郭魚", "土黃仔", "肉鰛仔", "豆仔", "鰹魚肉"]}, "tide": {"title": "潮汐", "empty": "尚未填寫", "options": ["滿潮前", "滿潮後", "退潮", "乾潮底", "漲潮", "轉流"]}, "weightUnit": {"title": "重量單位", "empty": "請選擇", "options": ["公斤", "台斤", "公克", "兩"]}};

let state = { islandType: "", area: "", spot: "" };
let photoData = "";
let activePicker = "";
let tempValue = "";

function todayString() { return new Date().toISOString().slice(0, 10); }
function timeString() { const d = new Date(); return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }

function showOnly(id) {
  ["homeView","areaView","spotView","formView","recordsView","monthView","rankingView"].forEach(v => $(v).classList.toggle("hidden", v !== id));
}
function showHome() { showOnly("homeView"); }

function showAreas(type) {
  state.islandType = type; state.area = ""; state.spot = "";
  $("areaTitle").textContent = type;
  $("areaButtons").innerHTML = Object.keys(locations[type]).map(area => `<button type="button" onclick="showSpots('${escapeJs(area)}')">${escapeHtml(area)}</button>`).join("");
  showOnly("areaView");
}

function backToAreas() { showAreas(state.islandType); }

function showSpots(area) {
  state.area = area; state.spot = "";
  $("spotTitle").textContent = `${state.islandType} → ${area}`;
  $("spotButtons").innerHTML = locations[state.islandType][area].map(spot => `<button type="button" onclick="selectSpot('${escapeJs(spot)}')">${escapeHtml(spot)}</button>`).join("");
  showOnly("spotView");
}

function backToSpots() { showSpots(state.area); }

function selectSpot(spot) {
  state.spot = spot;
  resetForm();
  $("selectedPath").textContent = `${state.islandType} → ${state.area} → ${state.spot}`;
  $("recordFormTitle").textContent = `新增紀錄：${state.spot}`;
  showOnly("formView");
}

function initFormDefaults() { $("date").value = todayString(); $("time").value = timeString(); }
initFormDefaults();

function setPickerValue(key, value) {
  const input = $(key);
  const button = document.querySelector(`[data-picker="${key}"]`);
  if (!input || !button) return;
  input.value = value || "";
  button.textContent = value || pickerData[key].empty;
}

function openPicker(key) {
  activePicker = key;
  const data = pickerData[key];
  tempValue = $(key).value || "";
  $("pickerTitle").textContent = data.title;
  const options = ["", ...data.options];
  $("wheel").innerHTML = options.map(value => `<div class="wheel-item${value===tempValue?" selected":""}" data-value="${escapeAttr(value)}">${escapeHtml(value||data.empty)}</div>`).join("");
  $("pickerOverlay").classList.remove("hidden");
  setTimeout(() => {
    const selected = document.querySelector(".wheel-item.selected") || document.querySelector(".wheel-item");
    if (selected) selected.scrollIntoView({block:"center"});
    updateWheelSelection();
  }, 30);
}

function closePicker() { $("pickerOverlay").classList.add("hidden"); }

function updateWheelSelection() {
  const wheel = $("wheel");
  const items = Array.from(document.querySelectorAll(".wheel-item"));
  if (!items.length) return;
  const rect = wheel.getBoundingClientRect();
  const center = rect.top + rect.height / 2;
  let best = items[0];
  let bestDistance = Infinity;
  items.forEach(item => {
    const r = item.getBoundingClientRect();
    const d = Math.abs((r.top + r.height / 2) - center);
    if (d < bestDistance) { bestDistance = d; best = item; }
  });
  items.forEach(item => item.classList.remove("selected"));
  best.classList.add("selected");
  tempValue = best.dataset.value || "";
}

document.querySelectorAll(".picker-button").forEach(button => button.addEventListener("click", () => openPicker(button.dataset.picker)));
$("wheel").addEventListener("scroll", () => { clearTimeout(window.__wheelTimer); window.__wheelTimer = setTimeout(updateWheelSelection, 80); });
$("pickerCancel").addEventListener("click", closePicker);
$("pickerDone").addEventListener("click", () => { if (activePicker) setPickerValue(activePicker, tempValue); closePicker(); });

$("photo").addEventListener("change", () => {
  const file = $("photo").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    photoData = reader.result;
    $("preview").src = photoData;
    $("preview").classList.remove("hidden");
  };
  reader.readAsDataURL(file);
});

$("useLocation").addEventListener("click", () => {
  if (!navigator.geolocation) { alert("這台裝置不支援定位"); return; }
  navigator.geolocation.getCurrentPosition(
    pos => {
      $("lat").value = pos.coords.latitude.toFixed(6);
      $("lng").value = pos.coords.longitude.toFixed(6);
    },
    () => alert("無法取得位置，請確認 Safari 定位權限"),
    { enableHighAccuracy:true, timeout:10000 }
  );
});

function loadRecords() { try { return JSON.parse(localStorage.getItem(storageKey)) || []; } catch { return []; } }
function saveRecords(records) { localStorage.setItem(storageKey, JSON.stringify(records)); }

function weightToGrams(weight, unit) {
  const n = parseFloat(String(weight).replace(",", "."));
  if (!Number.isFinite(n)) return 0;
  if (unit === "公斤") return n * 1000;
  if (unit === "台斤") return n * 600;
  if (unit === "兩") return n * 37.5;
  if (unit === "公克") return n;
  return n;
}

$("save").addEventListener("click", () => {
  const date = $("date").value;
  if (!date) { alert("請填日期"); return; }
  if (!state.spot) { alert("請先選擇釣點"); return; }

  const weight = $("weight").value.trim();
  const weightUnit = $("weightUnit").value;
  const record = {
    id: String(Date.now()),
    islandType: state.islandType,
    area: state.area,
    spot: state.spot,
    photoData,
    date,
    time: $("time").value,
    year: Number(date.slice(0,4)),
    month: Number(date.slice(5,7)),
    day: Number(date.slice(8,10)),
    catchName: $("catchName").value.trim(),
    count: Number($("count").value || 1),
    weight,
    weightUnit,
    weightGrams: weightToGrams(weight, weightUnit),
    lat: $("lat").value.trim(),
    lng: $("lng").value.trim(),
    note: $("note").value.trim(),
    createdAt: new Date().toISOString()
  };

  Object.keys(pickerData).forEach(key => record[key] = $(key).value);
  record.weightUnit = weightUnit;

  const records = loadRecords();
  records.unshift(record);
  saveRecords(records);
  alert("已儲存到：" + state.area + " / " + state.spot);
  resetForm();
  renderRecords();
});

function resetForm() {
  $("photo").value = "";
  photoData = "";
  $("preview").src = "";
  $("preview").classList.add("hidden");
  $("date").value = todayString();
  $("time").value = timeString();
  Object.keys(pickerData).forEach(key => setPickerValue(key, ""));
  ["catchName","weight","lat","lng","note"].forEach(id => $(id).value = "");
  $("count").value = 1;
}

function showRecordsView() { showOnly("recordsView"); renderRecords(); }

function filterRecords() {
  let records = loadRecords();
  const y = $("filterYear").value;
  const m = $("filterMonth").value;
  const spot = $("filterSpot").value.trim();
  const fish = $("filterFish").value.trim();
  if (y) records = records.filter(r => String(r.year) === String(y));
  if (m) records = records.filter(r => String(r.month) === String(Number(m)));
  if (spot) records = records.filter(r => (r.spot || "").includes(spot));
  if (fish) records = records.filter(r => (r.catchName || "").includes(fish));
  return records;
}

function renderRecords() {
  const records = filterRecords();
  const container = $("recordsList");
  if (!records.length) {
    container.innerHTML = `<div class="empty">目前沒有符合的紀錄</div>`;
    return;
  }
  container.innerHTML = records.map(recordCard).join("");
}

function recordCard(record) {
  const url = mapUrl(record);
  return `<article class="record" onclick="openDetail('${record.id}')">${record.photoData?`<img src="${record.photoData}" alt="漁獲照片">`:""}<div class="record-body"><h3>${escapeHtml(record.date)} ${escapeHtml(record.time||"")}</h3><p class="meta">${escapeHtml(record.islandType)} → ${escapeHtml(record.area)} → ${escapeHtml(record.spot)}</p><p class="meta">漁獲：${escapeHtml(record.catchName||"未填寫")}｜數量：${record.count||1}</p><p class="meta">重量：${escapeHtml(record.weight||"未填寫")} ${escapeHtml(record.weightUnit||"")}</p><p class="meta">釣法：${escapeHtml(record.method||"未填寫")}｜潮汐：${escapeHtml(record.tide||"未填寫")}</p>${url?`<a class="map-link" onclick="event.stopPropagation()" href="${url}" target="_blank" rel="noopener">查看 Google Map 位置</a>`:""}</div></article>`;
}

function mapUrl(record) {
  if (record.lat && record.lng) return `https://www.google.com/maps/search/?api=1&query=${record.lat},${record.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(record.area + " " + record.spot)}`;
}

function openDetail(id) {
  const r = loadRecords().find(x => x.id === id);
  if (!r) return;
  const details = Object.keys(pickerData).map(key => r[key] ? `<p class="meta">${escapeHtml(pickerData[key].title)}：${escapeHtml(r[key])}</p>` : "").join("");
  $("detailContent").innerHTML = `${r.photoData?`<img src="${r.photoData}" alt="漁獲照片">`:""}<h2>${escapeHtml(r.spot)}</h2><p class="meta">${escapeHtml(r.islandType)} → ${escapeHtml(r.area)} → ${escapeHtml(r.spot)}</p><p class="meta">日期：${escapeHtml(r.date)} ${escapeHtml(r.time||"")}</p><p class="meta">魚種：${escapeHtml(r.catchName||"未填寫")}</p><p class="meta">數量：${escapeHtml(r.count||1)}</p><p class="meta">重量：${escapeHtml(r.weight||"未填寫")} ${escapeHtml(r.weightUnit||"")}</p>${details}${r.note?`<p>${escapeHtml(r.note)}</p>`:""}<a class="map-link" href="${mapUrl(r)}" target="_blank" rel="noopener">查看 Google Map 位置</a><button class="delete" type="button" onclick="deleteRecord('${r.id}')">刪除此紀錄</button>`;
  $("detailOverlay").classList.remove("hidden");
}

function closeDetail() { $("detailOverlay").classList.add("hidden"); }

window.deleteRecord = function(id) {
  if (!confirm("確定刪除這筆紀錄？")) return;
  saveRecords(loadRecords().filter(record => record.id !== id));
  closeDetail();
  renderRecords();
  renderRanking();
  renderMonthAnalysis();
};

["filterYear","filterMonth","filterSpot","filterFish"].forEach(id => $(id).addEventListener("input", renderRecords));
function clearFilters() { ["filterYear","filterMonth","filterSpot","filterFish"].forEach(id => $(id).value = ""); renderRecords(); }

function showMonthView() {
  showOnly("monthView");
  const d = new Date();
  $("monthYear").value = d.getFullYear();
  $("monthMonth").value = d.getMonth()+1;
  renderMonthAnalysis();
}

function renderMonthAnalysis() {
  if (!$("monthResult")) return;
  const y = $("monthYear").value;
  const m = $("monthMonth").value;
  const spot = $("monthSpot").value.trim();
  let records = loadRecords();
  if (y) records = records.filter(r => String(r.year) === String(y));
  if (m) records = records.filter(r => String(r.month) === String(Number(m)));
  if (spot) records = records.filter(r => (r.spot || "").includes(spot));
  if (!records.length) {
    $("monthResult").innerHTML = `<div class="empty">此條件沒有紀錄</div>`;
    return;
  }
  const totalCount = records.reduce((sum,r) => sum + Number(r.count||1), 0);
  const biggest = [...records].sort((a,b) => Number(b.weightGrams||0) - Number(a.weightGrams||0))[0];
  $("monthResult").innerHTML = `<div class="stat-item"><b>紀錄筆數</b><br>${records.length} 筆</div><div class="stat-item"><b>漁獲總數量</b><br>${totalCount} 尾／份</div><div class="stat-item"><b>最大魚</b><br>${escapeHtml(biggest.catchName||"未填寫")}｜${escapeHtml(biggest.weight||"0")} ${escapeHtml(biggest.weightUnit||"")}｜${escapeHtml(biggest.spot||"")}</div><div class="stat-item"><b>釣點排行</b><br>${rankLines(records,"spot","count")}</div><div class="stat-item"><b>魚種排行</b><br>${fishRankLines(records)}</div><div class="stat-item"><b>潮汐排行</b><br>${rankLines(records,"tide","count")}</div>`;
}

["monthYear","monthMonth","monthSpot"].forEach(id => $(id).addEventListener("input", renderMonthAnalysis));

function showRankingView() { showOnly("rankingView"); renderRanking(); }

function renderRanking() {
  const records = loadRecords();
  if (!records.length) {
    $("rankingResult").innerHTML = `<div class="empty">目前沒有紀錄</div>`;
    return;
  }
  const biggest = [...records].filter(r => Number(r.weightGrams||0)>0).sort((a,b) => Number(b.weightGrams||0)-Number(a.weightGrams||0)).slice(0,10).map((r,i) => `${i+1}. ${escapeHtml(r.catchName||"未填寫")}｜${escapeHtml(r.weight)} ${escapeHtml(r.weightUnit)}｜${escapeHtml(r.spot)}｜${escapeHtml(r.date)}`).join("<br>") || "尚無重量資料";
  $("rankingResult").innerHTML = `<div class="rank-item"><div class="rank-title">漁獲數量｜釣點排行</div>${rankLines(records,"spot","count")}</div><div class="rank-item"><div class="rank-title">漁獲數量｜釣法排行</div>${rankLines(records,"method","count")}</div><div class="rank-item"><div class="rank-title">魚種出現排行</div>${fishRankLines(records)}</div><div class="rank-item"><div class="rank-title">最大魚排行</div>${biggest}</div>`;
}

function rankLines(records, key, countKey) {
  const map = {};
  records.forEach(r => {
    const name = r[key] || "未填寫";
    map[name] = (map[name] || 0) + Number(r[countKey] || 1);
  });
  return Object.entries(map).sort((a,b) => b[1]-a[1]).slice(0,10).map(([name,count],i) => `${i+1}. ${escapeHtml(name)}：${count}`).join("<br>") || "尚無資料";
}

function fishRankLines(records) {
  const map = {};
  records.forEach(r => {
    String(r.catchName || "未填寫").split(/[、,，\s]+/).map(x => x.trim()).filter(Boolean).forEach(name => {
      map[name] = (map[name] || 0) + Number(r.count || 1);
    });
  });
  return Object.entries(map).sort((a,b) => b[1]-a[1]).slice(0,10).map(([name,count],i) => `${i+1}. ${escapeHtml(name)}：${count}`).join("<br>") || "尚無資料";
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function escapeAttr(value) { return escapeHtml(value).replaceAll('"',"&quot;"); }
function escapeJs(value) { return String(value).replaceAll("\\","\\\\").replaceAll("'","\\'"); }
showHome();
