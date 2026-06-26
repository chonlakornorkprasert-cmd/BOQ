const buildingDefaults = {
  home: {
    label: "บ้านพักอาศัย",
    rooms: {
      smallBedroom: 1,
      masterBedroom: 1,
      bathroom: 2,
      living: 1,
      kitchen: 1,
      dining: 1,
      office: 0,
      storage: 1,
    },
    circulation: 12,
    balcony: true,
    balconyArea: 10,
    parking: 1,
    parkingArea: 18,
    serviceArea: 8,
    grade: "standard",
  },
  rental: {
    label: "ห้องเช่า",
    rooms: {
      smallBedroom: 4,
      masterBedroom: 0,
      bathroom: 4,
      living: 0,
      kitchen: 0,
      dining: 0,
      office: 0,
      storage: 1,
    },
    circulation: 15,
    balcony: true,
    balconyArea: 12,
    parking: 2,
    parkingArea: 18,
    serviceArea: 6,
    grade: "economy",
  },
  resort: {
    label: "รีสอร์ท",
    rooms: {
      smallBedroom: 3,
      masterBedroom: 2,
      bathroom: 5,
      living: 1,
      kitchen: 1,
      dining: 1,
      office: 0,
      storage: 2,
    },
    circulation: 15,
    balcony: true,
    balconyArea: 28,
    parking: 3,
    parkingArea: 18,
    serviceArea: 18,
    grade: "good",
  },
  cafe: {
    label: "คาเฟ่ / ร้านอาหาร",
    rooms: {
      smallBedroom: 0,
      masterBedroom: 0,
      bathroom: 2,
      living: 1,
      kitchen: 1,
      dining: 1,
      office: 0,
      storage: 1,
    },
    circulation: 15,
    balcony: true,
    balconyArea: 18,
    parking: 3,
    parkingArea: 18,
    serviceArea: 12,
    grade: "good",
  },
  commercial: {
    label: "อาคารพาณิชย์",
    rooms: {
      smallBedroom: 2,
      masterBedroom: 0,
      bathroom: 3,
      living: 1,
      kitchen: 1,
      dining: 0,
      office: 1,
      storage: 2,
    },
    circulation: 12,
    balcony: false,
    balconyArea: 0,
    parking: 1,
    parkingArea: 18,
    serviceArea: 10,
    grade: "standard",
  },
  homeOffice: {
    label: "โฮมออฟฟิศ",
    rooms: {
      smallBedroom: 2,
      masterBedroom: 1,
      bathroom: 3,
      living: 1,
      kitchen: 1,
      dining: 1,
      office: 2,
      storage: 1,
    },
    circulation: 13,
    balcony: true,
    balconyArea: 10,
    parking: 2,
    parkingArea: 18,
    serviceArea: 10,
    grade: "standard",
  },
};

const roomTypes = [
  { id: "smallBedroom", label: "ห้องนอนเล็ก", range: "9-12 ตร.ม.", min: 0, max: 5, defaultSize: 10.5 },
  { id: "masterBedroom", label: "ห้องนอนใหญ่", range: "14-20 ตร.ม.", min: 0, max: 5, defaultSize: 16 },
  { id: "bathroom", label: "ห้องน้ำ", range: "3-5 ตร.ม.", min: 1, max: 5, defaultSize: 4 },
  { id: "living", label: "ห้องนั่งเล่น", range: "16-25 ตร.ม.", min: 0, max: 1, defaultSize: 20 },
  { id: "kitchen", label: "ห้องครัว", range: "6-10 ตร.ม.", min: 0, max: 1, defaultSize: 8 },
  { id: "dining", label: "ห้องทานอาหาร", range: "8-12 ตร.ม.", min: 0, max: 1, defaultSize: 10 },
  { id: "office", label: "ห้องทำงาน", range: "6-10 ตร.ม.", min: 0, max: 2, defaultSize: 8 },
  { id: "storage", label: "ห้องเก็บของ", range: "3-6 ตร.ม.", min: 0, max: 2, defaultSize: 4.5 },
];

const buildingStyles = {
  simple: {
    label: "เรียบง่าย",
    description: "ฟังก์ชันตรงไปตรงมา รายละเอียดตกแต่งน้อย",
    multiplier: 0.95,
  },
  modern: {
    label: "โมเดิร์น",
    description: "งานเส้นคม วัสดุมาตรฐาน รายละเอียดร่วมสมัย",
    multiplier: 1,
  },
  tropical: {
    label: "ทรอปิคอล",
    description: "เพิ่มชายคา ระบายอากาศ และพื้นที่กึ่งภายนอก",
    multiplier: 1.08,
  },
  thaiContemporary: {
    label: "ไทยร่วมสมัย",
    description: "รายละเอียดหลังคาและงานตกแต่งมากขึ้น",
    multiplier: 1.12,
  },
  premium: {
    label: "พรีเมียม",
    description: "วัสดุและงาน finishing สูงกว่ามาตรฐาน",
    multiplier: 1.22,
  },
};

const grades = {
  economy: { label: "ประหยัด", range: "10,000-12,000", rate: 11000 },
  standard: { label: "มาตรฐาน", range: "13,000-16,000", rate: 14500 },
  good: { label: "ดี", range: "17,000-22,000", rate: 19500 },
  premium: { label: "Premium", range: "25,000+", rate: 25000 },
};

const priceSource = {
  province: "ยโสธร",
  provinceCode: "35",
  period: "พฤษภาคม 2569",
  label: "TPSO ราคาวัสดุก่อสร้างรายจังหวัด",
  url: "https://index.tpso.go.th/construction-material-prices/prices-building-materials/35",
};

const materialPrices = [
  {
    category: "โครงสร้าง",
    item: "คอนกรีตผสมเสร็จ 210 กก./ตร.ซม. ตราซีแพค",
    unit: "ลบ.ม.",
    price: 2330,
  },
  {
    category: "โครงสร้าง",
    item: "เหล็กข้ออ้อย SD.40 ขนาด 12 มม.",
    unit: "ตัน",
    price: 23817.57,
  },
  {
    category: "ก่อผนัง",
    item: "คอนกรีตบล็อก 19 x 39 x 7 ซม.",
    unit: "ก้อน",
    price: 7.67,
  },
  {
    category: "ก่อผนัง",
    item: "คอนกรีตบล็อกมวลเบา 20 x 60 x 7.5 ซม. ตราคิวคอน",
    unit: "ก้อน",
    price: 26.5,
  },
  {
    category: "ก่อผนัง",
    item: "อิฐมอญ 7 x 16 x 3.5 ซม.",
    unit: "ก้อน",
    price: 2,
  },
  {
    category: "วัสดุผลิตภัณฑ์",
    item: "ปูนซีเมนต์ปอร์ตแลนด์ ประเภท 1 ตราช้าง",
    unit: "ตัน",
    price: 3460,
  },
  {
    category: "โครงสร้าง",
    item: "ลวดผูกเหล็ก เบอร์ 18",
    unit: "กก.",
    price: 60.67,
  },
  {
    category: "ประตู",
    item: "บานประตูไม้อัดสัก ใช้ภายใน 80 x 200 ซม.",
    unit: "บาน",
    price: 700,
  },
  {
    category: "ไฟฟ้า",
    item: "สายไฟ THW 1 x 2.5 ตร.มม. ยาว 100 ม.",
    unit: "ม้วน",
    price: 1450,
  },
  {
    category: "ประปา",
    item: "ก๊อกน้ำทองเหลือง 1/2 นิ้ว ตราซันวา",
    unit: "อัน",
    price: 110,
  },
];

const boqItems = [
  { label: "งานโครงสร้าง", percent: 33 },
  { label: "งานสถาปัตย์", percent: 28 },
  { label: "งานไฟฟ้า", percent: 10 },
  { label: "งานประปา / สุขาภิบาล", percent: 10 },
  { label: "งานประตู หน้าต่าง", percent: 7 },
  { label: "งานสี / ฝ้า / พื้น", percent: 12 },
  { label: "เผื่อเหลือเผื่อขาด", percent: 7 },
];

const detailedBoqGroups = [
  {
    name: "งานโครงสร้าง",
    items: [
      { name: "ฐานรากและตอม่อ", unit: "ลบ.ม.", qty: ({ totalArea }) => Math.max(totalArea * 0.18, 1), materialRate: 2330, laborRate: 850 },
      { name: "เสาคอนกรีตเสริมเหล็ก", unit: "ลบ.ม.", qty: ({ totalArea }) => Math.max(totalArea * 0.08, 0.5), materialRate: 2330, laborRate: 950 },
      { name: "คานคอนกรีตเสริมเหล็ก", unit: "ลบ.ม.", qty: ({ totalArea }) => Math.max(totalArea * 0.11, 0.8), materialRate: 2330, laborRate: 900 },
      { name: "เหล็กเสริมโครงสร้าง", unit: "ตัน", qty: ({ totalArea }) => Math.max(totalArea * 0.035, 0.2), materialRate: 23817.57, laborRate: 4200 },
    ],
  },
  {
    name: "งานสถาปัตยกรรม",
    items: [
      { name: "งานพื้น", unit: "ตร.ม.", qty: ({ totalArea }) => totalArea, materialRate: 650, laborRate: 220 },
      { name: "งานผนังก่ออิฐ/บล็อก", unit: "ตร.ม.", qty: ({ totalArea }) => totalArea * 1.45, materialRate: 420, laborRate: 280 },
      { name: "งานหลังคา", unit: "ตร.ม.", qty: ({ totalArea }) => totalArea * 0.75, materialRate: 720, laborRate: 260 },
      { name: "งานประตูและหน้าต่าง", unit: "ชุด", qty: ({ totalArea }) => Math.max(Math.ceil(totalArea / 18), 4), materialRate: 1800, laborRate: 450 },
    ],
  },
  {
    name: "งานระบบไฟฟ้า",
    items: [
      { name: "สายไฟและท่อร้อยสาย", unit: "จุด", qty: ({ totalArea }) => Math.max(Math.ceil(totalArea / 8), 8), materialRate: 780, laborRate: 420 },
      { name: "สวิตช์ ปลั๊ก และอุปกรณ์", unit: "จุด", qty: ({ totalArea }) => Math.max(Math.ceil(totalArea / 10), 6), materialRate: 420, laborRate: 180 },
    ],
  },
  {
    name: "งานประปาและสุขาภิบาล",
    items: [
      { name: "ท่อประปาและอุปกรณ์", unit: "จุด", qty: ({ totalArea }) => Math.max(Math.ceil(totalArea / 20), 4), materialRate: 950, laborRate: 520 },
      { name: "สุขภัณฑ์และอุปกรณ์ติดตั้ง", unit: "ชุด", qty: ({ roomCounts }) => Math.max(roomCounts.bathroom || 0, 1), materialRate: 5200, laborRate: 1500 },
    ],
  },
  {
    name: "งานสีและตกแต่งผิว",
    items: [
      { name: "งานฉาบและแต่งผิว", unit: "ตร.ม.", qty: ({ totalArea }) => totalArea * 1.65, materialRate: 120, laborRate: 190 },
      { name: "งานสีภายในและภายนอก", unit: "ตร.ม.", qty: ({ totalArea }) => totalArea * 1.85, materialRate: 95, laborRate: 130 },
    ],
  },
];

const state = {
  building: "home",
  style: "modern",
  grade: "standard",
  rate: grades.standard.rate,
  roomCounts: {},
  roomSizes: Object.fromEntries(roomTypes.map((room) => [room.id, room.defaultSize])),
  circulation: 12,
  balcony: true,
  balconyArea: 10,
  parking: 1,
  parkingArea: 18,
  serviceArea: 8,
  vendorBoq: Object.fromEntries(boqItems.map((item, index) => [index, 0])),
};

const money = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("th-TH", {
  maximumFractionDigits: 1,
});

const decimal = new Intl.NumberFormat("th-TH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const dateTime = new Intl.DateTimeFormat("th-TH", {
  dateStyle: "long",
  timeStyle: "short",
});

function signedMoney(value) {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${money.format(Math.abs(value))}`;
}

function percentText(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${decimal.format(value)}%`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value) || 0, min), max);
}

function applyBuildingDefaults(buildingId) {
  const defaults = buildingDefaults[buildingId];
  state.building = buildingId;
  state.grade = defaults.grade;
  state.rate = grades[defaults.grade].rate;
  state.roomCounts = { ...defaults.rooms };
  state.circulation = defaults.circulation;
  state.balcony = defaults.balcony;
  state.balconyArea = defaults.balconyArea;
  state.parking = defaults.parking;
  state.parkingArea = defaults.parkingArea;
  state.serviceArea = defaults.serviceArea;
  syncInputs();
  render();
}

function effectiveRate() {
  const style = buildingStyles[state.style] || buildingStyles.modern;
  return state.rate * style.multiplier;
}

function roomArea() {
  return roomTypes.reduce((sum, room) => {
    return sum + (state.roomCounts[room.id] || 0) * (state.roomSizes[room.id] || 0);
  }, 0);
}

function estimate() {
  const baseRoomArea = roomArea();
  const circulationArea = baseRoomArea * (state.circulation / 100);
  const balconyArea = state.balcony ? state.balconyArea : 0;
  const parkingArea = state.parking * state.parkingArea;
  const addonArea = circulationArea + balconyArea + parkingArea + state.serviceArea;
  const totalArea = baseRoomArea + addonArea;
  const finalRate = effectiveRate();
  const totalCost = totalArea * finalRate;
  return { baseRoomArea, addonArea, totalArea, finalRate, totalCost };
}

function renderBuildingTypes() {
  const target = document.querySelector("#buildingTypes");
  target.innerHTML = "";
  Object.entries(buildingDefaults).forEach(([id, item]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "segment-button";
    button.textContent = item.label;
    button.dataset.id = id;
    button.addEventListener("click", () => applyBuildingDefaults(id));
    target.append(button);
  });
}

function renderBuildingStyles() {
  const target = document.querySelector("#buildingStyles");
  target.innerHTML = "";
  Object.entries(buildingStyles).forEach(([id, style]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "style-button";
    button.dataset.id = id;
    button.innerHTML = `
      <strong>${style.label}</strong>
      <span>${style.description}</span>
      <em>${decimal.format(style.multiplier)}x</em>
    `;
    button.addEventListener("click", () => {
      state.style = id;
      render();
    });
    target.append(button);
  });
}

function renderGrades() {
  const target = document.querySelector("#materialGrades");
  target.innerHTML = "";
  Object.entries(grades).forEach(([id, grade]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "grade-button";
    button.dataset.id = id;
    button.innerHTML = `<strong>${grade.label}</strong><span>${grade.range} บาท/ตร.ม.</span>`;
    button.addEventListener("click", () => {
      state.grade = id;
      state.rate = grade.rate;
      syncInputs();
      render();
    });
    target.append(button);
  });
}

function renderRooms() {
  const target = document.querySelector("#roomRows");
  target.innerHTML = "";
  roomTypes.forEach((room) => {
    const count = state.roomCounts[room.id] || 0;
    const size = state.roomSizes[room.id] || room.defaultSize;
    const row = document.createElement("div");
    row.className = "room-row";
    row.innerHTML = `
      <div class="room-title">
        <strong>${room.label}</strong>
        <span>มาตรฐาน ${room.range}</span>
      </div>
      <div class="stepper" aria-label="${room.label}">
        <button type="button" data-step="-1" aria-label="ลดจำนวน">-</button>
        <output>${count}</output>
        <button type="button" data-step="1" aria-label="เพิ่มจำนวน">+</button>
      </div>
      <label class="field">
        <span>ขนาดต่อห้อง</span>
        <input type="number" min="0" step="0.5" value="${size}" data-size="${room.id}">
      </label>
      <div class="room-total">
        <span>รวม</span>
        <strong>${number.format(count * size)} ตร.ม.</strong>
      </div>
    `;

    row.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = count + Number(button.dataset.step);
        state.roomCounts[room.id] = clamp(next, room.min, room.max);
        render();
      });
    });

    row.querySelector("[data-size]").addEventListener("input", (event) => {
      state.roomSizes[room.id] = Math.max(Number(event.target.value) || 0, 0);
      render();
    });

    target.append(row);
  });
}

function renderBoq(totalCost) {
  const maxPercent = Math.max(...boqItems.map((item) => item.percent));
  const target = document.querySelector("#boqRows");
  target.innerHTML = "";
  boqItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "boq-row";
    row.innerHTML = `
      <strong>${item.label} (${item.percent}%)</strong>
      <div class="bar-track"><div class="bar-fill" style="width: ${(item.percent / maxPercent) * 100}%"></div></div>
      <div class="boq-amount">${money.format(totalCost * (item.percent / 100))}</div>
    `;
    target.append(row);
  });
}

function buildDetailedBoq(current) {
  const context = {
    totalArea: current.totalArea,
    roomCounts: state.roomCounts,
  };
  const rawGroups = detailedBoqGroups.map((group) => {
    const items = group.items.map((item) => {
      const quantity = Number(item.qty(context)) || 0;
      const materialAmount = quantity * item.materialRate;
      const laborAmount = quantity * item.laborRate;
      return {
        ...item,
        quantity,
        materialAmount,
        laborAmount,
        totalAmount: materialAmount + laborAmount,
      };
    });
    return {
      name: group.name,
      items,
      totalAmount: items.reduce((sum, item) => sum + item.totalAmount, 0),
    };
  });
  const rawTotal = rawGroups.reduce((sum, group) => sum + group.totalAmount, 0);
  const targetTotal = current.totalCost;
  const factor = rawTotal ? targetTotal / rawTotal : 1;

  return rawGroups.map((group) => {
    const items = group.items.map((item) => ({
      ...item,
      materialAmount: item.materialAmount * factor,
      laborAmount: item.laborAmount * factor,
      materialRateAdjusted: item.materialRate * factor,
      laborRateAdjusted: item.laborRate * factor,
      totalAmount: item.totalAmount * factor,
    }));
    return {
      name: group.name,
      items,
      totalAmount: items.reduce((sum, item) => sum + item.totalAmount, 0),
    };
  });
}

function renderDetailedBoq(current) {
  const target = document.querySelector("#pdfBoqSections");
  if (!target) return;

  const groups = buildDetailedBoq(current);
  target.innerHTML = "";
  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "pdf-boq-section";
    const rows = group.items.map((item) => `
      <tr>
        <td>${item.name}</td>
        <td>${decimal.format(item.quantity)}</td>
        <td>${item.unit}</td>
        <td>${money.format(item.materialRateAdjusted)}</td>
        <td>${money.format(item.materialAmount)}</td>
        <td>${money.format(item.laborAmount)}</td>
        <td>${money.format(item.totalAmount)}</td>
      </tr>
    `).join("");

    section.innerHTML = `
      <div class="pdf-boq-heading">
        <h3>${group.name}</h3>
        <strong>${money.format(group.totalAmount)}</strong>
      </div>
      <div class="pdf-table-wrap">
        <table class="pdf-boq-table">
          <thead>
            <tr>
              <th>รายการ</th>
              <th>ปริมาณ</th>
              <th>หน่วย</th>
              <th>ราคาวัสดุ/หน่วย</th>
              <th>รวมวัสดุ</th>
              <th>ค่าแรง</th>
              <th>ราคารวม</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
    target.append(section);
  });

  document.querySelector("#pdfGrandTotal").textContent = money.format(
    groups.reduce((sum, group) => sum + group.totalAmount, 0)
  );
}

function estimateBoqRows(totalCost) {
  return boqItems.map((item, index) => {
    const estimateAmount = totalCost * (item.percent / 100);
    const vendorAmount = state.vendorBoq[index] || 0;
    const diff = vendorAmount - estimateAmount;
    const diffPercent = estimateAmount ? (diff / estimateAmount) * 100 : 0;
    return { ...item, index, estimateAmount, vendorAmount, diff, diffPercent };
  });
}

function getComparisonStatus(diffPercent, hasVendorPrice) {
  if (!hasVendorPrice) return { label: "รอราคา", tone: "muted" };
  if (Math.abs(diffPercent) <= 3) return { label: "ใกล้เคียง", tone: "ok" };
  if (diffPercent > 0) return { label: "สูงกว่า", tone: "high" };
  return { label: "ต่ำกว่า", tone: "low" };
}

function renderVendorRows() {
  const target = document.querySelector("#vendorRows");
  if (!target) return;

  target.innerHTML = "";
  boqItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "vendor-row";
    row.innerHTML = `
      <div class="vendor-title">
        <strong>${item.label}</strong>
        <span>สัดส่วน BOQ ${item.percent}%</span>
      </div>
      <div class="vendor-estimate" data-vendor-estimate="${index}">0 บาท</div>
      <label class="field vendor-input">
        <span>ราคา vendor</span>
        <input type="number" min="0" step="100" placeholder="0" data-vendor-input="${index}">
      </label>
      <div class="vendor-diff" data-vendor-diff="${index}">0 บาท</div>
      <div class="status-pill muted" data-vendor-status="${index}">รอราคา</div>
    `;

    row.querySelector("[data-vendor-input]").addEventListener("input", (event) => {
      state.vendorBoq[index] = Math.max(Number(event.target.value) || 0, 0);
      updateVendorComparison(estimate());
    });

    target.append(row);
  });
}

function updateVendorComparison(current) {
  const rows = estimateBoqRows(current.totalCost);
  const estimateTotal = rows.reduce((sum, item) => sum + item.estimateAmount, 0);
  const vendorTotal = rows.reduce((sum, item) => sum + item.vendorAmount, 0);
  const totalDiff = vendorTotal - estimateTotal;
  const totalDiffPercent = estimateTotal ? (totalDiff / estimateTotal) * 100 : 0;
  const totalStatus = getComparisonStatus(totalDiffPercent, vendorTotal > 0);

  document.querySelector("#estimateTotalCompare").textContent = money.format(estimateTotal);
  document.querySelector("#vendorTotalCompare").textContent = money.format(vendorTotal);
  document.querySelector("#vendorDiffCompare").textContent = `${signedMoney(totalDiff)} (${percentText(totalDiffPercent)})`;
  document.querySelector("#vendorStatusCompare").textContent = totalStatus.label;
  document.querySelector("#vendorStatusCompare").className = totalStatus.tone;

  rows.forEach((item) => {
    const estimateTarget = document.querySelector(`[data-vendor-estimate="${item.index}"]`);
    const diffTarget = document.querySelector(`[data-vendor-diff="${item.index}"]`);
    const statusTarget = document.querySelector(`[data-vendor-status="${item.index}"]`);
    const status = getComparisonStatus(item.diffPercent, item.vendorAmount > 0);

    if (estimateTarget) estimateTarget.textContent = money.format(item.estimateAmount);
    if (diffTarget) {
      diffTarget.textContent = `${signedMoney(item.diff)} (${percentText(item.diffPercent)})`;
      diffTarget.className = `vendor-diff ${status.tone}`;
    }
    if (statusTarget) {
      statusTarget.textContent = status.label;
      statusTarget.className = `status-pill ${status.tone}`;
    }
  });
}

function renderMaterialPrices() {
  const target = document.querySelector("#materialRows");
  if (!target) return;

  target.innerHTML = "";
  materialPrices.forEach((item) => {
    const row = document.createElement("div");
    row.className = "material-row";
    row.innerHTML = `
      <div>
        <span>${item.category}</span>
        <strong>${item.item}</strong>
      </div>
      <div>${item.unit}</div>
      <div>${decimal.format(item.price)} บาท</div>
    `;
    target.append(row);
  });
}

function syncInputs() {
  document.querySelector("#rateInput").value = state.rate;
  document.querySelector("#circulationInput").value = state.circulation;
  document.querySelector("#balconyToggle").checked = state.balcony;
  document.querySelector("#balconyAreaInput").value = state.balconyArea;
  document.querySelector("#parkingInput").value = state.parking;
  document.querySelector("#parkingAreaInput").value = state.parkingArea;
  document.querySelector("#serviceAreaInput").value = state.serviceArea;
}

function updatePrintMeta() {
  const target = document.querySelector("#printGeneratedAt");
  if (target) target.textContent = `วันที่พิมพ์ ${dateTime.format(new Date())}`;
}

function render() {
  const current = estimate();
  document.querySelectorAll(".segment-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === state.building);
  });
  document.querySelectorAll(".grade-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === state.grade);
  });
  document.querySelectorAll(".style-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === state.style);
  });
  renderRooms();
  document.querySelector("#roomArea").textContent = `${number.format(current.baseRoomArea)} ตร.ม.`;
  document.querySelector("#addonArea").textContent = `${number.format(current.addonArea)} ตร.ม.`;
  document.querySelector("#totalArea").textContent = `${number.format(current.totalArea)} ตร.ม.`;
  document.querySelector("#totalAreaTop").textContent = `${number.format(current.totalArea)} ตร.ม.`;
  document.querySelector("#rateDisplay").textContent = money.format(current.finalRate);
  document.querySelector("#styleMultiplierDisplay").textContent = `${decimal.format(buildingStyles[state.style].multiplier)}x`;
  document.querySelector("#totalCost").textContent = money.format(current.totalCost);
  renderBoq(current.totalCost);
  renderDetailedBoq(current);
  updateVendorComparison(current);
  updatePrintMeta();
}

function bindInputs() {
  document.querySelector("#rateInput").addEventListener("input", (event) => {
    state.rate = Math.max(Number(event.target.value) || 0, 0);
    state.grade = "custom";
    render();
  });
  document.querySelector("#circulationInput").addEventListener("input", (event) => {
    state.circulation = clamp(event.target.value, 0, 30);
    render();
  });
  document.querySelector("#balconyToggle").addEventListener("change", (event) => {
    state.balcony = event.target.checked;
    render();
  });
  document.querySelector("#balconyAreaInput").addEventListener("input", (event) => {
    state.balconyArea = Math.max(Number(event.target.value) || 0, 0);
    render();
  });
  document.querySelector("#parkingInput").addEventListener("input", (event) => {
    state.parking = clamp(event.target.value, 0, 3);
    render();
  });
  document.querySelector("#parkingAreaInput").addEventListener("input", (event) => {
    state.parkingArea = Math.max(Number(event.target.value) || 0, 0);
    render();
  });
  document.querySelector("#serviceAreaInput").addEventListener("input", (event) => {
    state.serviceArea = Math.max(Number(event.target.value) || 0, 0);
    render();
  });
  document.querySelector("#resetDefaults").addEventListener("click", () => {
    state.roomSizes = Object.fromEntries(roomTypes.map((room) => [room.id, room.defaultSize]));
    applyBuildingDefaults(state.building);
  });
  document.querySelector("#copyEstimateToVendor").addEventListener("click", () => {
    const current = estimate();
    estimateBoqRows(current.totalCost).forEach((item) => {
      state.vendorBoq[item.index] = Math.round(item.estimateAmount);
      const input = document.querySelector(`[data-vendor-input="${item.index}"]`);
      if (input) input.value = state.vendorBoq[item.index];
    });
    updateVendorComparison(current);
  });
  document.querySelector("#clearVendorBoq").addEventListener("click", () => {
    Object.keys(state.vendorBoq).forEach((key) => {
      state.vendorBoq[key] = 0;
      const input = document.querySelector(`[data-vendor-input="${key}"]`);
      if (input) input.value = "";
    });
    updateVendorComparison(estimate());
  });
  document.querySelector("#printForBank").addEventListener("click", () => {
    updatePrintMeta();
    window.print();
  });
  document.querySelector("#printPdfBoq").addEventListener("click", () => {
    updatePrintMeta();
    window.print();
  });
}

renderBuildingTypes();
renderBuildingStyles();
renderGrades();
renderMaterialPrices();
renderVendorRows();
bindInputs();
applyBuildingDefaults("home");
