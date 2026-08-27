let _id = 0;
function c(name, category, brand, price, specs) {
  return { _id: String(++_id), name, category, brand, price, specifications: specs };
}

export const GAMER_COMPONENTS = [
  // ══════════════════════════════════════════════════════════════
  // CPUs INTEL (LGA1700) — Precios COP tiendas colombianas
  // ══════════════════════════════════════════════════════════════
  c('Intel Core i5-12400F', 'cpu', 'Intel', 520000, { socket: 'LGA1700', tdp: 65, cores: 6, threads: 12, includedCooler: true }),
  c('Intel Core i5-12600KF', 'cpu', 'Intel', 780000, { socket: 'LGA1700', tdp: 125, cores: 10, threads: 16, includedCooler: false }),
  c('Intel Core i5-13400F', 'cpu', 'Intel', 880000, { socket: 'LGA1700', tdp: 65, cores: 10, threads: 16, includedCooler: true }),
  c('Intel Core i5-13600KF', 'cpu', 'Intel', 1150000, { socket: 'LGA1700', tdp: 125, cores: 14, threads: 20, includedCooler: false }),
  c('Intel Core i5-14400F', 'cpu', 'Intel', 1090000, { socket: 'LGA1700', tdp: 65, cores: 10, threads: 16, includedCooler: true }),
  c('Intel Core i5-14600KF', 'cpu', 'Intel', 1350000, { socket: 'LGA1700', tdp: 125, cores: 14, threads: 20, includedCooler: false }),
  c('Intel Core i7-13700F', 'cpu', 'Intel', 1450000, { socket: 'LGA1700', tdp: 65, cores: 16, threads: 24, includedCooler: false }),
  c('Intel Core i7-14700F', 'cpu', 'Intel', 1855000, { socket: 'LGA1700', tdp: 65, cores: 20, threads: 28, includedCooler: false }),
  c('Intel Core i9-13900K', 'cpu', 'Intel', 2650000, { socket: 'LGA1700', tdp: 125, cores: 24, threads: 32, includedCooler: false }),
  c('Intel Core i9-14900K', 'cpu', 'Intel', 2950000, { socket: 'LGA1700', tdp: 125, cores: 24, threads: 32, includedCooler: false }),

  // ══════════════════════════════════════════════════════════════
  // CPUs AMD (AM4 / AM5)
  // ══════════════════════════════════════════════════════════════
  c('AMD Ryzen 5 5600X', 'cpu', 'AMD', 580000, { socket: 'AM4', tdp: 65, cores: 6, threads: 12, includedCooler: false }),
  c('AMD Ryzen 5 5700X', 'cpu', 'AMD', 650000, { socket: 'AM4', tdp: 65, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 7 5800X', 'cpu', 'AMD', 820000, { socket: 'AM4', tdp: 105, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 7 5800XT', 'cpu', 'AMD', 945000, { socket: 'AM4', tdp: 105, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 7 5800X3D', 'cpu', 'AMD', 1450000, { socket: 'AM4', tdp: 105, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 9 5900X', 'cpu', 'AMD', 1350000, { socket: 'AM4', tdp: 105, cores: 12, threads: 24, includedCooler: false }),
  c('AMD Ryzen 5 7600X', 'cpu', 'AMD', 715000, { socket: 'AM5', tdp: 105, cores: 6, threads: 12, includedCooler: false }),
  c('AMD Ryzen 5 7600', 'cpu', 'AMD', 680000, { socket: 'AM5', tdp: 65, cores: 6, threads: 12, includedCooler: true }),
  c('AMD Ryzen 7 7700X', 'cpu', 'AMD', 1250000, { socket: 'AM5', tdp: 105, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 7 7800X3D', 'cpu', 'AMD', 1650000, { socket: 'AM5', tdp: 120, cores: 8, threads: 16, includedCooler: false }),
  c('AMD Ryzen 9 7900X', 'cpu', 'AMD', 1950000, { socket: 'AM5', tdp: 170, cores: 12, threads: 24, includedCooler: false }),
  c('AMD Ryzen 9 7950X', 'cpu', 'AMD', 2850000, { socket: 'AM5', tdp: 170, cores: 16, threads: 24, includedCooler: false }),
  c('AMD Ryzen 9 7950X3D', 'cpu', 'AMD', 3250000, { socket: 'AM5', tdp: 120, cores: 16, threads: 32, includedCooler: false }),

  // ══════════════════════════════════════════════════════════════
  // MOTHERBOARDS — Intel LGA1700
  // ══════════════════════════════════════════════════════════════
  c('MSI PRO B660M-A WiFi DDR4', 'motherboard', 'MSI', 485000, { socket: 'LGA1700', formFactor: 'microatx', ramType: 'DDR4', ramSlots: 2, maxRamSpeed: 3200, m2Slots: 2, sataPorts: 4 }),
  c('ASUS TUF GAMING B660M-Plus WiFi DDR4', 'motherboard', 'ASUS', 550000, { socket: 'LGA1700', formFactor: 'microatx', ramType: 'DDR4', ramSlots: 2, maxRamSpeed: 4800, m2Slots: 2, sataPorts: 4 }),
  c('Gigabyte B660 AORUS Master DDR4', 'motherboard', 'GIGABYTE', 620000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR4', ramSlots: 4, maxRamSpeed: 4800, m2Slots: 3, sataPorts: 4 }),
  c('MSI PRO B760M-A WiFi DDR5', 'motherboard', 'MSI', 672000, { socket: 'LGA1700', formFactor: 'microatx', ramType: 'DDR5', ramSlots: 2, maxRamSpeed: 6400, m2Slots: 2, sataPorts: 4 }),
  c('ASUS TUF GAMING B760M-Plus WiFi DDR5', 'motherboard', 'ASUS', 720000, { socket: 'LGA1700', formFactor: 'microatx', ramType: 'DDR5', ramSlots: 2, maxRamSpeed: 7200, m2Slots: 2, sataPorts: 4 }),
  c('Gigabyte Z690 AORUS Elite AX DDR5', 'motherboard', 'GIGABYTE', 1250000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 6400, m2Slots: 3, sataPorts: 6 }),
  c('MSI MAG Z690 TOMAHAWK WiFi DDR5', 'motherboard', 'MSI', 1380000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 6400, m2Slots: 4, sataPorts: 6 }),
  c('ASUS ROG STRIX Z690-E Gaming WiFi DDR5', 'motherboard', 'ASUS', 1850000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 6400, m2Slots: 4, sataPorts: 6 }),
  c('MSI PRO Z790-A WiFi DDR5', 'motherboard', 'MSI', 1150000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7200, m2Slots: 4, sataPorts: 6 }),
  c('Gigabyte Z790 AORUS Elite AX DDR5', 'motherboard', 'GIGABYTE', 1280000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7200, m2Slots: 4, sataPorts: 6 }),
  c('ASUS ROG STRIX Z790-E Gaming WiFi II DDR5', 'motherboard', 'ASUS', 2250000, { socket: 'LGA1700', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7800, m2Slots: 5, sataPorts: 6 }),

  // MOTHERBOARDS — AMD AM4
  c('ASUS PRIME A520M-K', 'motherboard', 'ASUS', 320000, { socket: 'AM4', formFactor: 'microatx', ramType: 'DDR4', ramSlots: 2, maxRamSpeed: 4400, m2Slots: 1, sataPorts: 4 }),
  c('MSI B450 TOMAHAWK MAX', 'motherboard', 'MSI', 420000, { socket: 'AM4', formFactor: 'atx', ramType: 'DDR4', ramSlots: 4, maxRamSpeed: 4133, m2Slots: 1, sataPorts: 6 }),
  c('ASUS TUF GAMING B550M-Plus', 'motherboard', 'ASUS', 480000, { socket: 'AM4', formFactor: 'microatx', ramType: 'DDR4', ramSlots: 2, maxRamSpeed: 4400, m2Slots: 2, sataPorts: 4 }),
  c('Gigabyte B550 AORUS Elite V2', 'motherboard', 'GIGABYTE', 520000, { socket: 'AM4', formFactor: 'atx', ramType: 'DDR4', ramSlots: 4, maxRamSpeed: 4733, m2Slots: 2, sataPorts: 6 }),
  c('MSI MAG X570 TOMAHAWK WiFi', 'motherboard', 'MSI', 720000, { socket: 'AM4', formFactor: 'atx', ramType: 'DDR4', ramSlots: 4, maxRamSpeed: 4866, m2Slots: 2, sataPorts: 6 }),

  // MOTHERBOARDS — AMD AM5
  c('Gigabyte B650M DS3H DDR5', 'motherboard', 'GIGABYTE', 680000, { socket: 'AM5', formFactor: 'microatx', ramType: 'DDR5', ramSlots: 2, maxRamSpeed: 6400, m2Slots: 2, sataPorts: 4 }),
  c('MSI MAG B650 TOMAHAWK WiFi DDR5', 'motherboard', 'MSI', 1100000, { socket: 'AM5', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7200, m2Slots: 4, sataPorts: 6 }),
  c('ASUS ROG STRIX B650E-F Gaming WiFi DDR5', 'motherboard', 'ASUS', 1350000, { socket: 'AM5', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7600, m2Slots: 4, sataPorts: 6 }),
  c('Gigabyte X670E AORUS Master DDR5', 'motherboard', 'GIGABYTE', 1850000, { socket: 'AM5', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7200, m2Slots: 4, sataPorts: 8 }),
  c('MSI MEG X670E ACE DDR5', 'motherboard', 'MSI', 2450000, { socket: 'AM5', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7200, m2Slots: 5, sataPorts: 6 }),
  c('ASUS ROG CROSSHAIR X670E Hero DDR5', 'motherboard', 'ASUS', 2950000, { socket: 'AM5', formFactor: 'atx', ramType: 'DDR5', ramSlots: 4, maxRamSpeed: 7600, m2Slots: 5, sataPorts: 8 }),

  // ══════════════════════════════════════════════════════════════
  // RAM — DDR4
  // ══════════════════════════════════════════════════════════════
  c('Kingston FURY Beast 16GB DDR4 3200', 'ram', 'Kingston', 265000, { type: 'DDR4', capacityTotal: 16, modules: 2, speed: 3200 }),
  c('Corsair Vengeance LPX 16GB DDR4 3600', 'ram', 'Corsair', 295000, { type: 'DDR4', capacityTotal: 16, modules: 2, speed: 3600 }),
  c('G.Skill Ripjaws V 16GB DDR4 3600', 'ram', 'G.Skill', 285000, { type: 'DDR4', capacityTotal: 16, modules: 2, speed: 3600 }),
  c('Kingston FURY Beast 32GB DDR4 3200', 'ram', 'Kingston', 480000, { type: 'DDR4', capacityTotal: 32, modules: 2, speed: 3200 }),
  c('Corsair Vengeance LPX 32GB DDR4 3600', 'ram', 'Corsair', 520000, { type: 'DDR4', capacityTotal: 32, modules: 2, speed: 3600 }),
  c('G.Skill Trident Z RGB 32GB DDR4 3600', 'ram', 'G.Skill', 580000, { type: 'DDR4', capacityTotal: 32, modules: 2, speed: 3600 }),
  c('G.Skill Trident Z Royal 32GB DDR4 4000', 'ram', 'G.Skill', 650000, { type: 'DDR4', capacityTotal: 32, modules: 2, speed: 4000 }),

  // RAM — DDR5
  c('Kingston FURY Beast 16GB DDR5 5200', 'ram', 'Kingston', 485000, { type: 'DDR5', capacityTotal: 16, modules: 2, speed: 5200 }),
  c('ADATA XPG Lancer 16GB DDR5 5600', 'ram', 'ADATA', 520000, { type: 'DDR5', capacityTotal: 16, modules: 2, speed: 5600 }),
  c('Kingston FURY Beast 16GB DDR5 6000', 'ram', 'Kingston', 580000, { type: 'DDR5', capacityTotal: 16, modules: 2, speed: 6000 }),
  c('Corsair Vengeance 16GB DDR5 5600', 'ram', 'Corsair', 540000, { type: 'DDR5', capacityTotal: 16, modules: 2, speed: 5600 }),
  c('G.Skill Trident Z5 16GB DDR5 6000', 'ram', 'G.Skill', 620000, { type: 'DDR5', capacityTotal: 16, modules: 2, speed: 6000 }),
  c('Kingston FURY Beast 32GB DDR5 5200', 'ram', 'Kingston', 850000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 5200 }),
  c('Corsair Vengeance 32GB DDR5 5600', 'ram', 'Corsair', 920000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 5600 }),
  c('G.Skill Trident Z5 32GB DDR5 6000', 'ram', 'G.Skill', 1050000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 6000 }),
  c('Kingston FURY Beast 32GB DDR5 6400', 'ram', 'Kingston', 1150000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 6400 }),
  c('G.Skill Trident Z5 Royal 32GB DDR5 6400', 'ram', 'G.Skill', 1350000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 6400 }),
  c('Corsair Dominator Platinum 32GB DDR5 6200', 'ram', 'Corsair', 1450000, { type: 'DDR5', capacityTotal: 32, modules: 2, speed: 6200 }),
  c('G.Skill Trident Z5 RGB 64GB DDR5 6000', 'ram', 'G.Skill', 2150000, { type: 'DDR5', capacityTotal: 64, modules: 2, speed: 6000 }),
  c('Corsair Dominator Platinum 64GB DDR5 5600', 'ram', 'Corsair', 2450000, { type: 'DDR5', capacityTotal: 64, modules: 2, speed: 5600 }),

  // ══════════════════════════════════════════════════════════════
  // GPUs — NVIDIA GeForce RTX
  // ══════════════════════════════════════════════════════════════
  c('NVIDIA GeForce RTX 3060 12GB', 'gpu', 'NVIDIA', 1050000, { vram: 12, tdp: 170, lengthMm: 242, recommendedPsu: 550 }),
  c('NVIDIA GeForce RTX 3060 Ti 8GB', 'gpu', 'NVIDIA', 1350000, { vram: 8, tdp: 200, lengthMm: 242, recommendedPsu: 550 }),
  c('NVIDIA GeForce RTX 3070 8GB', 'gpu', 'NVIDIA', 1550000, { vram: 8, tdp: 220, lengthMm: 242, recommendedPsu: 550 }),
  c('NVIDIA GeForce RTX 3070 Ti 8GB', 'gpu', 'NVIDIA', 1750000, { vram: 8, tdp: 290, lengthMm: 267, recommendedPsu: 600 }),
  c('NVIDIA GeForce RTX 3080 10GB', 'gpu', 'NVIDIA', 2250000, { vram: 10, tdp: 320, lengthMm: 285, recommendedPsu: 700 }),
  c('NVIDIA GeForce RTX 4060 8GB', 'gpu', 'NVIDIA', 1350000, { vram: 8, tdp: 115, lengthMm: 240, recommendedPsu: 550 }),
  c('NVIDIA GeForce RTX 4060 Ti 8GB', 'gpu', 'NVIDIA', 1750000, { vram: 8, tdp: 160, lengthMm: 240, recommendedPsu: 550 }),
  c('NVIDIA GeForce RTX 4070 12GB', 'gpu', 'NVIDIA', 2250000, { vram: 12, tdp: 200, lengthMm: 267, recommendedPsu: 600 }),
  c('NVIDIA GeForce RTX 4070 Super 12GB', 'gpu', 'NVIDIA', 2650000, { vram: 12, tdp: 220, lengthMm: 267, recommendedPsu: 650 }),
  c('NVIDIA GeForce RTX 4070 Ti 12GB', 'gpu', 'NVIDIA', 3150000, { vram: 12, tdp: 285, lengthMm: 285, recommendedPsu: 700 }),
  c('NVIDIA GeForce RTX 4070 Ti Super 16GB', 'gpu', 'NVIDIA', 3550000, { vram: 16, tdp: 285, lengthMm: 304, recommendedPsu: 700 }),
  c('NVIDIA GeForce RTX 4080 Super 16GB', 'gpu', 'NVIDIA', 4850000, { vram: 16, tdp: 320, lengthMm: 310, recommendedPsu: 750 }),
  c('NVIDIA GeForce RTX 4090 24GB', 'gpu', 'NVIDIA', 8250000, { vram: 24, tdp: 450, lengthMm: 336, recommendedPsu: 850 }),

  // GPUs — AMD Radeon RX
  c('AMD Radeon RX 7600 8GB', 'gpu', 'AMD', 1150000, { vram: 8, tdp: 165, lengthMm: 240, recommendedPsu: 550 }),
  c('AMD Radeon RX 7600 XT 16GB', 'gpu', 'AMD', 1450000, { vram: 16, tdp: 150, lengthMm: 240, recommendedPsu: 550 }),
  c('AMD Radeon RX 7700 XT 12GB', 'gpu', 'AMD', 1850000, { vram: 12, tdp: 245, lengthMm: 267, recommendedPsu: 600 }),
  c('AMD Radeon RX 7800 XT 16GB', 'gpu', 'AMD', 2100000, { vram: 16, tdp: 263, lengthMm: 267, recommendedPsu: 650 }),
  c('AMD Radeon RX 7900 GRE 16GB', 'gpu', 'AMD', 2550000, { vram: 16, tdp: 260, lengthMm: 276, recommendedPsu: 650 }),
  c('AMD Radeon RX 7900 XT 20GB', 'gpu', 'AMD', 3250000, { vram: 20, tdp: 315, lengthMm: 287, recommendedPsu: 750 }),
  c('AMD Radeon RX 7900 XTX 24GB', 'gpu', 'AMD', 4150000, { vram: 24, tdp: 355, lengthMm: 287, recommendedPsu: 800 }),

  // ══════════════════════════════════════════════════════════════
  // STORAGE — NVMe SSD
  // ══════════════════════════════════════════════════════════════
  c('Kingston NV2 500GB NVMe', 'storage', 'Kingston', 165000, { interface: 'NVMe M.2', capacity: 500, formFactor: 'M.2 2280' }),
  c('Kingston NV2 1TB NVMe', 'storage', 'Kingston', 235000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('WD Black SN770 500GB NVMe', 'storage', 'Western Digital', 195000, { interface: 'NVMe M.2', capacity: 500, formFactor: 'M.2 2280' }),
  c('WD Black SN770 1TB NVMe', 'storage', 'Western Digital', 295000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Crucial P3 Plus 1TB NVMe', 'storage', 'Crucial', 265000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Samsung 980 Pro 1TB NVMe', 'storage', 'Samsung', 420000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Samsung 990 EVO 1TB NVMe', 'storage', 'Samsung', 385000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Kingston KC3000 1TB NVMe', 'storage', 'Kingston', 380000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Samsung 990 Pro 1TB NVMe', 'storage', 'Samsung', 520000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('WD Black SN850X 1TB NVMe', 'storage', 'Western Digital', 485000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('WD Black SN770 2TB NVMe', 'storage', 'Western Digital', 580000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('Crucial P3 Plus 2TB NVMe', 'storage', 'Crucial', 480000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('Samsung 990 Pro 2TB NVMe', 'storage', 'Samsung', 850000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('WD Black SN850X 2TB NVMe', 'storage', 'Western Digital', 780000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('Crucial T700 1TB NVMe PCIe5', 'storage', 'Crucial', 650000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Crucial T700 2TB NVMe PCIe5', 'storage', 'Crucial', 1050000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('Sabrent Rocket 4 Plus 1TB NVMe', 'storage', 'Sabrent', 420000, { interface: 'NVMe M.2', capacity: 1000, formFactor: 'M.2 2280' }),
  c('Sabrent Rocket 4 Plus 2TB NVMe', 'storage', 'Sabrent', 680000, { interface: 'NVMe M.2', capacity: 2000, formFactor: 'M.2 2280' }),
  c('Seagate BarraCuda 2TB HDD', 'storage', 'Seagate', 185000, { interface: 'SATA 6Gb/s', capacity: 2000, formFactor: '3.5"' }),
  c('WD Blue 4TB HDD', 'storage', 'Western Digital', 350000, { interface: 'SATA 6Gb/s', capacity: 4000, formFactor: '3.5"' }),

  // ══════════════════════════════════════════════════════════════
  // PSUs — Alto rendimiento
  // ══════════════════════════════════════════════════════════════
  c('Corsair RM750x 80+ Gold', 'psu', 'Corsair', 420000, { wattage: 750, grade: '80+ Gold', modular: true }),
  c('Corsair RM850x 80+ Gold', 'psu', 'Corsair', 520000, { wattage: 850, grade: '80+ Gold', modular: true }),
  c('Corsair RM1000x 80+ Gold', 'psu', 'Corsair', 680000, { wattage: 1000, grade: '80+ Gold', modular: true }),
  c('EVGA SuperNOVA 750 G7 80+ Gold', 'psu', 'EVGA', 450000, { wattage: 750, grade: '80+ Gold', modular: true }),
  c('EVGA SuperNOVA 850 G7 80+ Gold', 'psu', 'EVGA', 550000, { wattage: 850, grade: '80+ Gold', modular: true }),
  c('EVGA SuperNOVA 1000 G7 80+ Gold', 'psu', 'EVGA', 720000, { wattage: 1000, grade: '80+ Gold', modular: true }),
  c('Seasonic FOCUS GX-750 80+ Gold', 'psu', 'Seasonic', 480000, { wattage: 750, grade: '80+ Gold', modular: true }),
  c('Seasonic FOCUS GX-850 80+ Gold', 'psu', 'Seasonic', 580000, { wattage: 850, grade: '80+ Gold', modular: true }),
  c('Seasonic FOCUS GX-1000 80+ Gold', 'psu', 'Seasonic', 750000, { wattage: 1000, grade: '80+ Gold', modular: true }),
  c('Corsair HX750i 80+ Platinum', 'psu', 'Corsair', 580000, { wattage: 750, grade: '80+ Platinum', modular: true }),
  c('Corsair HX850i 80+ Platinum', 'psu', 'Corsair', 680000, { wattage: 850, grade: '80+ Platinum', modular: true }),
  c('Corsair HX1000i 80+ Platinum', 'psu', 'Corsair', 880000, { wattage: 1000, grade: '80+ Platinum', modular: true }),
  c('Corsair HX1200i 80+ Platinum', 'psu', 'Corsair', 1050000, { wattage: 1200, grade: '80+ Platinum', modular: true }),
  c('Seasonic PRIME TX-750 80+ Titanium', 'psu', 'Seasonic', 780000, { wattage: 750, grade: '80+ Titanium', modular: true }),
  c('Seasonic PRIME TX-850 80+ Titanium', 'psu', 'Seasonic', 920000, { wattage: 850, grade: '80+ Titanium', modular: true }),
  c('Seasonic PRIME TX-1000 80+ Titanium', 'psu', 'Seasonic', 1150000, { wattage: 1000, grade: '80+ Titanium', modular: true }),
  c('EVGA SuperNOVA 1200 P2 80+ Platinum', 'psu', 'EVGA', 980000, { wattage: 1200, grade: '80+ Platinum', modular: true }),
  c('Seasonic PRIME TX-1300 80+ Titanium', 'psu', 'Seasonic', 1450000, { wattage: 1300, grade: '80+ Titanium', modular: true }),
  c('Corsair AX1600i 80+ Titanium', 'psu', 'Corsair', 2150000, { wattage: 1600, grade: '80+ Titanium', modular: true }),
  c('be quiet! Dark Power Pro 13 1300W', 'psu', 'be quiet!', 1650000, { wattage: 1300, grade: '80+ Titanium', modular: true }),

  // ══════════════════════════════════════════════════════════════
  // COOLING — Air Coolers
  // ══════════════════════════════════════════════════════════════
  c('DeepCool AK400', 'cooling', 'DeepCool', 145000, { type: 'air', tdpRating: 180, radiatorSize: 0 }),
  c('Cooler Master Hyper 212 Black Edition', 'cooling', 'Cooler Master', 165000, { type: 'air', tdpRating: 150, radiatorSize: 0 }),
  c('Thermalright Peerless Assassin 120', 'cooling', 'Thermalright', 180000, { type: 'air', tdpRating: 260, radiatorSize: 0 }),
  c('DeepCool AS500', 'cooling', 'DeepCool', 195000, { type: 'air', tdpRating: 220, radiatorSize: 0 }),
  c('Thermalright Frost Commander 140', 'cooling', 'Thermalright', 210000, { type: 'air', tdpRating: 260, radiatorSize: 0 }),
  c('DeepCool AK620', 'cooling', 'DeepCool', 220000, { type: 'air', tdpRating: 260, radiatorSize: 0 }),
  c('Noctua NH-U12A', 'cooling', 'Noctua', 280000, { type: 'air', tdpRating: 140, radiatorSize: 0 }),
  c('be quiet! Dark Rock Pro 4', 'cooling', 'be quiet!', 350000, { type: 'air', tdpRating: 250, radiatorSize: 0 }),
  c('Noctua NH-D15', 'cooling', 'Noctua', 380000, { type: 'air', tdpRating: 250, radiatorSize: 0 }),

  // COOLING — AIO Liquid
  c('Arctic Liquid Freezer II 240', 'cooling', 'Arctic', 380000, { type: 'liquid', tdpRating: 250, radiatorSize: 240 }),
  c('Cooler Master MasterLiquid ML240L V2', 'cooling', 'Cooler Master', 320000, { type: 'liquid', tdpRating: 200, radiatorSize: 240 }),
  c('NZXT Kraken X53', 'cooling', 'NZXT', 420000, { type: 'liquid', tdpRating: 250, radiatorSize: 240 }),
  c('Corsair iCUE H100i Elite Capellix', 'cooling', 'Corsair', 480000, { type: 'liquid', tdpRating: 250, radiatorSize: 240 }),
  c('NZXT Kraken X63', 'cooling', 'NZXT', 520000, { type: 'liquid', tdpRating: 280, radiatorSize: 280 }),
  c('Arctic Liquid Freezer II 360', 'cooling', 'Arctic', 480000, { type: 'liquid', tdpRating: 300, radiatorSize: 360 }),
  c('Corsair iCUE H150i Elite Capellix', 'cooling', 'Corsair', 620000, { type: 'liquid', tdpRating: 300, radiatorSize: 360 }),
  c('Lian Li Galahad II Trinity 360', 'cooling', 'Lian Li', 680000, { type: 'liquid', tdpRating: 300, radiatorSize: 360 }),
  c('NZXT Kraken Z73', 'cooling', 'NZXT', 780000, { type: 'liquid', tdpRating: 300, radiatorSize: 360 }),
  c('Corsair iCUE H170i Elite LCD', 'cooling', 'Corsair', 850000, { type: 'liquid', tdpRating: 350, radiatorSize: 360 }),

  // ══════════════════════════════════════════════════════════════
  // CASES — Gaming
  // ══════════════════════════════════════════════════════════════
  c('Cooler Master MasterBox Q300L V2', 'case', 'Cooler Master', 250000, { formFactor: 'microatx', maxGpuLength: 360, radiatorSupport: 120 }),
  c('Phanteks Eclipse G360A', 'case', 'Phanteks', 350000, { formFactor: 'atx', maxGpuLength: 355, radiatorSupport: 240 }),
  c('NZXT H5 Flow', 'case', 'NZXT', 380000, { formFactor: 'atx', maxGpuLength: 365, radiatorSupport: 280 }),
  c('Cooler Master TD500 Mesh', 'case', 'Cooler Master', 380000, { formFactor: 'atx', maxGpuLength: 410, radiatorSupport: 360 }),
  c('Fractal Design Pop Air', 'case', 'Fractal Design', 420000, { formFactor: 'atx', maxGpuLength: 405, radiatorSupport: 360 }),
  c('Corsair 3500X', 'case', 'Corsair', 420000, { formFactor: 'atx', maxGpuLength: 400, radiatorSupport: 360 }),
  c('Corsair 4000D Airflow', 'case', 'Corsair', 450000, { formFactor: 'atx', maxGpuLength: 360, radiatorSupport: 360 }),
  c('Lian Li Lancool 216', 'case', 'Lian Li', 480000, { formFactor: 'atx', maxGpuLength: 392, radiatorSupport: 360 }),
  c('be quiet! Pure Base 500DX', 'case', 'be quiet!', 480000, { formFactor: 'atx', maxGpuLength: 369, radiatorSupport: 360 }),
  c('NZXT H7 Flow', 'case', 'NZXT', 480000, { formFactor: 'atx', maxGpuLength: 400, radiatorSupport: 360 }),
  c('Lian Li O11 Dynamic EVO', 'case', 'Lian Li', 620000, { formFactor: 'atx', maxGpuLength: 422, radiatorSupport: 360 }),
  c('Corsair 5000D Airflow', 'case', 'Corsair', 650000, { formFactor: 'atx', maxGpuLength: 400, radiatorSupport: 360 }),
  c('Fractal Design Meshify 2', 'case', 'Fractal Design', 720000, { formFactor: 'atx', maxGpuLength: 467, radiatorSupport: 360 }),
  c('Phanteks Enthoo Pro 2', 'case', 'Phanteks', 680000, { formFactor: 'atx', maxGpuLength: 503, radiatorSupport: 480 }),
  c('be quiet! Dark Base Pro 901', 'case', 'be quiet!', 980000, { formFactor: 'atx', maxGpuLength: 495, radiatorSupport: 420 }),
  c('Lian Li O11D EVO XL', 'case', 'Lian Li', 850000, { formFactor: 'e-atx', maxGpuLength: 460, radiatorSupport: 420 }),
  c('Corsair 1000D', 'case', 'Corsair', 1450000, { formFactor: 'e-atx', maxGpuLength: 500, radiatorSupport: 480 }),
  c('Thermaltake Core P8', 'case', 'Thermaltake', 1250000, { formFactor: 'e-atx', maxGpuLength: 500, radiatorSupport: 480 }),
  c('Phanteks NV9', 'case', 'Phanteks', 1150000, { formFactor: 'e-atx', maxGpuLength: 503, radiatorSupport: 480 }),
  c('Lian Li V3000 Plus', 'case', 'Lian Li', 1350000, { formFactor: 'e-atx', maxGpuLength: 503, radiatorSupport: 480 }),
];

export const STEP_ORDER = ['cpu', 'ram', 'psu', 'motherboard', 'storage', 'case', 'cooling'];

export const STEP_LABELS = {
  cpu: 'Procesador',
  motherboard: 'Placa Madre',
  gpu: 'Tarjeta Gráfica',
  ram: 'Memoria RAM',
  storage: 'Almacenamiento',
  psu: 'Fuente de Poder',
  case: 'Gabinete',
  cooling: 'Refrigeración',
};

export const STEP_ICONS = {
  cpu: '🧠',
  motherboard: '🟦',
  gpu: '🎮',
  ram: '💾',
  storage: '💿',
  psu: '🔌',
  case: '🖥️',
  cooling: '❄️',
};

export function getComponentsByCategory(category) {
  return GAMER_COMPONENTS.filter((c) => c.category === category);
}

export function getIntelComponents() {
  return GAMER_COMPONENTS.filter((c) => c.brand === 'Intel');
}

export function getAMDComponents() {
  return GAMER_COMPONENTS.filter((c) => c.brand === 'AMD');
}

export function getMotherboardsForSocket(socket) {
  return GAMER_COMPONENTS.filter(
    (c) => c.category === 'motherboard' && c.specifications.socket === socket
  );
}

export function getRAMForType(ramType) {
  return GAMER_COMPONENTS.filter(
    (c) => c.category === 'ram' && c.specifications.type === ramType
  );
}
