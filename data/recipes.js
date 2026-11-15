/* Elsapciz · 食譜庫唯一來源（v3 / 2026-11-16）
 * 我（WorkBuddy）收到影片連結／截圖後會將文字食譜寫入 recipes 陣列（origin: "sa"）。
 * 改呢個檔 → commit / push → 網站（手機／電腦）refresh 就見到，唔使改 index.html。
 * nut.sugar = 總糖（含水果／乳酪天然糖）；nut.added = 添加糖（Eddie 戒醣對照用）。
 * img = 本地 images/ 示意相片；imgCredit = 作者／授權／來源頁，全部來自 Wikimedia Commons。
 * ⚠️ 相片係「示意圖」，唔係該道菜嘅實物相；用戶自己上載嘅相片存喺瀏覽器 localStorage。
 */
window.SA_DATA = {
  "meta": {
    "version": 3,
    "updated": "2026-11-16",
    "owner": "Elsapciz",
    "note": "食譜庫唯一來源。WorkBuddy 收到影片連結／截圖後會將文字食譜加入 recipes 陣列（origin: sa）；img 為本地 images/ 示意相片（Wikimedia Commons，授權見 imgCredit），唔係外連 hotlink。"
  },
  "sources": [
    {
      "title": "NHLBI · Living with DASH（鈉 2,300 / 理想 1,500 mg）",
      "url": "https://www.nhlbi.nih.gov/health/dash/living-with-dash"
    },
    {
      "title": "Mayo Clinic · DASH diet sample menus",
      "url": "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/dash-diet/art-20047110"
    },
    {
      "title": "Johns Hopkins · DASH for Diabetes（低鈉 DASH4D）",
      "url": "https://www.hopkinsmedicine.org/news/articles/2025/10/dash-for-diabetes"
    },
    {
      "title": "American Heart Association · Heart healthy recipes",
      "url": "https://recipes.heart.org/en/"
    },
    {
      "title": "Johns Hopkins · Staying Healthy After Menopause（鈣 1,200 mg）",
      "url": "https://www.hopkinsmedicine.org/health/conditions-and-diseases/staying-healthy-after-menopause"
    },
    {
      "title": "Endocrine Society · Menopause Map（停經後鈣 1,200 mg）",
      "url": "https://www.endocrine.org/menopausemap/health-impacts/index.html"
    },
    {
      "title": "PMC · The Importance of Nutrition in Menopause（2023）",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10780928/"
    },
    {
      "title": "WHO · 2023 非糖甜味劑建議（唔好靠代糖長期控制體重）",
      "url": "https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline"
    },
    {
      "title": "Northwestern Medicine · Best brain-boosting foods",
      "url": "https://www.nm.org/healthbeat/healthy-tips/nutrition/best-food-for-a-healthy-brain"
    },
    {
      "title": "PMC · Adolescent Nutrition and Health（2025）",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12549772/"
    }
  ],
  "recipes": [
    {
      "id": "b1",
      "origin": "library",
      "name": "蒜香煎雞胸配西蘭花",
      "emoji": "🍗",
      "cat": "主菜",
      "mins": 25,
      "servings": 2,
      "tags": [
        "高蛋白",
        "低脂",
        "快手"
      ],
      "flags": [
        "heart",
        "slim"
      ],
      "ingredients": [
        {
          "name": "雞胸肉",
          "qty": 200,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "西蘭花",
          "qty": 1,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "蒜頭",
          "qty": 3,
          "unit": "瓣",
          "cat": "調味"
        },
        {
          "name": "橄欖油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        },
        {
          "name": "鹽",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "雞胸肉抹乾，用少量鹽同黑椒醃 10 分鐘",
        "燒熱鑊落油，中火煎雞胸每面約 5 分鐘",
        "西蘭花切細件灼熟 3 分鐘",
        "爆香蒜片，與西蘭花拌勻，雞胸切片上碟"
      ],
      "nut": {
        "kcal": 320,
        "carbs": 12,
        "protein": 38,
        "fat": 13,
        "fiber": 5,
        "sugar": 2,
        "sodium": 420,
        "satfat": 2.5,
        "calcium": 80,
        "omega3": 0.1,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜 · 低鈉改編",
        "url": ""
      },
      "img": "images/b1.jpg",
      "imgCredit": {
        "title": "Chicken breast, roast broccoli, and celery - Massachusetts.jpg",
        "author": "Daderot",
        "license": "CC0",
        "url": "https://commons.wikimedia.org/wiki/File:Chicken_breast,_roast_broccoli,_and_celery_-_Massachusetts.jpg"
      }
    },
    {
      "id": "b2",
      "origin": "library",
      "name": "番茄炒蛋",
      "emoji": "🍳",
      "cat": "家常菜",
      "mins": 15,
      "servings": 2,
      "tags": [
        "快手",
        "家常",
        "平價"
      ],
      "flags": [
        "brain"
      ],
      "ingredients": [
        {
          "name": "番茄",
          "qty": 2,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "雞蛋",
          "qty": 3,
          "unit": "隻",
          "cat": "蛋奶"
        },
        {
          "name": "蔥",
          "qty": 1,
          "unit": "條",
          "cat": "調味"
        },
        {
          "name": "糖",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        },
        {
          "name": "油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "番茄切件，蛋打勻加少許鹽",
        "熱鑊落油先炒蛋至半熟盛起",
        "原鑊炒番茄至出汁，糖減半調味",
        "回鑊兜勻，灑蔥花即成"
      ],
      "nut": {
        "kcal": 210,
        "carbs": 10,
        "protein": 13,
        "fat": 14,
        "fiber": 2,
        "sugar": 7,
        "sodium": 380,
        "satfat": 3.5,
        "calcium": 60,
        "omega3": 0.3,
        "added": 3
      },
      "source": {
        "title": "入門港式食譜 · 減糖版",
        "url": ""
      },
      "img": "images/b2.jpg",
      "imgCredit": {
        "title": "Hunan cuisine, stir-fried tomato with eggs.jpg",
        "author": "Huangdan2060",
        "license": "CC BY 3.0",
        "url": "https://commons.wikimedia.org/wiki/File:Hunan_cuisine,_stir-fried_tomato_with_eggs.jpg"
      }
    },
    {
      "id": "b3",
      "origin": "library",
      "name": "清蒸鱸魚（少豉油版）",
      "emoji": "🐟",
      "cat": "主菜",
      "mins": 30,
      "servings": 2,
      "tags": [
        "蒸",
        "低脂",
        "港式",
        "補腦"
      ],
      "flags": [
        "brain",
        "heart"
      ],
      "ingredients": [
        {
          "name": "鱸魚",
          "qty": 1,
          "unit": "條",
          "cat": "海鮮"
        },
        {
          "name": "薑",
          "qty": 4,
          "unit": "片",
          "cat": "調味"
        },
        {
          "name": "蔥",
          "qty": 2,
          "unit": "條",
          "cat": "調味"
        },
        {
          "name": "減鹽豉油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        },
        {
          "name": "油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "魚洗淨兩面界刀，鋪薑片",
        "水滾後大火蒸 8–10 分鐘",
        "倒去魚汁，鋪蔥絲",
        "淋少量熱油同減鹽豉油即成"
      ],
      "nut": {
        "kcal": 260,
        "carbs": 3,
        "protein": 34,
        "fat": 12,
        "fiber": 0,
        "sugar": 1,
        "sodium": 560,
        "satfat": 2,
        "calcium": 40,
        "omega3": 1.8,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜 · 參考 DASH 減鈉改編",
        "url": "https://www.nhlbi.nih.gov/health/dash/living-with-dash"
      },
      "img": "images/b3.jpg",
      "imgCredit": {
        "title": "Chinese Steamed Perch.jpg",
        "author": "Kent Wang",
        "license": "CC BY-SA 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Chinese_Steamed_Perch.jpg"
      }
    },
    {
      "id": "b4",
      "origin": "library",
      "name": "粟米雞粒炒飯",
      "emoji": "🍚",
      "cat": "主食",
      "mins": 20,
      "servings": 2,
      "tags": [
        "一鑊過",
        "清雪櫃"
      ],
      "flags": [],
      "ingredients": [
        {
          "name": "白飯",
          "qty": 2,
          "unit": "碗",
          "cat": "主食"
        },
        {
          "name": "雞胸肉",
          "qty": 150,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "粟米",
          "qty": 1,
          "unit": "條",
          "cat": "蔬菜"
        },
        {
          "name": "雞蛋",
          "qty": 2,
          "unit": "隻",
          "cat": "蛋奶"
        },
        {
          "name": "蔥",
          "qty": 1,
          "unit": "條",
          "cat": "調味"
        }
      ],
      "steps": [
        "雞粒用鹽胡椒醃勻，蛋打散",
        "先炒蛋盛起，再炒雞粒至熟",
        "落白飯炒散，加粟米粒",
        "回蛋兜勻，少鹽調味灑蔥花"
      ],
      "nut": {
        "kcal": 480,
        "carbs": 68,
        "protein": 28,
        "fat": 11,
        "fiber": 4,
        "sugar": 4,
        "sodium": 620,
        "satfat": 2.5,
        "calcium": 45,
        "omega3": 0.1,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜",
        "url": ""
      },
      "img": "images/b4.jpg",
      "imgCredit": {
        "title": "Fried rice with chicken (17234644521).jpg",
        "author": "Vee Satayamas from Bangkok, Thailand",
        "license": "CC BY 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Fried_rice_with_chicken_(17234644521).jpg"
      }
    },
    {
      "id": "b5",
      "origin": "library",
      "name": "燕麥香蕉牛奶碗",
      "emoji": "🥣",
      "cat": "早餐",
      "mins": 8,
      "servings": 2,
      "tags": [
        "早餐",
        "高纖",
        "免煮",
        "高鈣"
      ],
      "flags": [
        "calcium",
        "mood",
        "heart"
      ],
      "ingredients": [
        {
          "name": "燕麥",
          "qty": 60,
          "unit": "g",
          "cat": "主食"
        },
        {
          "name": "低脂牛奶",
          "qty": 250,
          "unit": "ml",
          "cat": "蛋奶"
        },
        {
          "name": "香蕉",
          "qty": 1,
          "unit": "條",
          "cat": "水果"
        },
        {
          "name": "合桃",
          "qty": 20,
          "unit": "g",
          "cat": "乾貨"
        }
      ],
      "steps": [
        "燕麥放入碗中",
        "倒入牛奶，靜置 5 分鐘或微波 1 分鐘",
        "鋪上香蕉片同合桃即成，唔使加糖"
      ],
      "nut": {
        "kcal": 380,
        "carbs": 56,
        "protein": 13,
        "fat": 12,
        "fiber": 8,
        "sugar": 20,
        "sodium": 90,
        "satfat": 3,
        "calcium": 320,
        "omega3": 1.2,
        "added": 0
      },
      "source": {
        "title": "按 DASH／更年期高鈣指引改編",
        "url": "https://www.hopkinsmedicine.org/health/conditions-and-diseases/staying-healthy-after-menopause"
      },
      "img": "images/b5.jpg",
      "imgCredit": {
        "title": "Banana Oatmeal Breakfast Bowl (44302857265).jpg",
        "author": "Ella Olsson from Stockholm, Sweden",
        "license": "CC BY 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Banana_Oatmeal_Breakfast_Bowl_(44302857265).jpg"
      }
    },
    {
      "id": "b6",
      "origin": "library",
      "name": "番茄豆腐蛋花湯",
      "emoji": "🍲",
      "cat": "湯品",
      "mins": 18,
      "servings": 2,
      "tags": [
        "湯",
        "清淡",
        "低卡",
        "高鈣"
      ],
      "flags": [
        "calcium",
        "slim",
        "heart"
      ],
      "ingredients": [
        {
          "name": "番茄",
          "qty": 2,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "硬豆腐",
          "qty": 1,
          "unit": "磚",
          "cat": "豆製品"
        },
        {
          "name": "雞蛋",
          "qty": 1,
          "unit": "隻",
          "cat": "蛋奶"
        },
        {
          "name": "蔥",
          "qty": 1,
          "unit": "條",
          "cat": "調味"
        },
        {
          "name": "清湯",
          "qty": 500,
          "unit": "ml",
          "cat": "其他"
        }
      ],
      "steps": [
        "番茄切件煮至出味",
        "加無鹽清湯滾起，落豆腐粒",
        "倒入蛋液畫圈成蛋花",
        "少鹽調味灑蔥花"
      ],
      "nut": {
        "kcal": 150,
        "carbs": 9,
        "protein": 13,
        "fat": 7,
        "fiber": 2,
        "sugar": 5,
        "sodium": 340,
        "satfat": 1.5,
        "calcium": 220,
        "omega3": 0.2,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜 · 高鈣改編",
        "url": ""
      },
      "img": "images/b6.jpg",
      "imgCredit": {
        "title": "Tomato and egg soup.jpg",
        "author": "NNU-10-HanRongrong",
        "license": "CC BY 3.0",
        "url": "https://commons.wikimedia.org/wiki/File:Tomato_and_egg_soup.jpg"
      }
    },
    {
      "id": "b7",
      "origin": "library",
      "name": "洋蔥黑椒牛柳",
      "emoji": "🥩",
      "cat": "主菜",
      "mins": 25,
      "servings": 2,
      "tags": [
        "高蛋白",
        "鑊氣"
      ],
      "flags": [],
      "ingredients": [
        {
          "name": "牛柳",
          "qty": 250,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "洋蔥",
          "qty": 1,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "黑椒",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        },
        {
          "name": "減鹽豉油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        },
        {
          "name": "油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "牛柳切條，用減鹽豉油黑椒醃 10 分鐘",
        "洋蔥切絲炒至軟身",
        "大火快炒牛柳至表面上色",
        "回洋蔥兜勻即上碟"
      ],
      "nut": {
        "kcal": 390,
        "carbs": 12,
        "protein": 32,
        "fat": 24,
        "fiber": 2,
        "sugar": 5,
        "sodium": 720,
        "satfat": 9,
        "calcium": 40,
        "omega3": 0.1,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜",
        "url": ""
      },
      "img": "images/b7.jpg",
      "imgCredit": {
        "title": "Black-Pepper Beef (Sapi Lada Hitam), One Two Restaurant, Yogyakarta.jpg",
        "author": "Crisco 1492",
        "license": "CC BY-SA 3.0",
        "url": "https://commons.wikimedia.org/wiki/File:Black-Pepper_Beef_(Sapi_Lada_Hitam),_One_Two_Restaurant,_Yogyakarta.jpg"
      }
    },
    {
      "id": "b8",
      "origin": "library",
      "name": "蒜蓉蝦仁炒西蘭花",
      "emoji": "🍤",
      "cat": "主菜",
      "mins": 20,
      "servings": 2,
      "tags": [
        "低卡",
        "高蛋白"
      ],
      "flags": [
        "slim",
        "heart"
      ],
      "ingredients": [
        {
          "name": "蝦仁",
          "qty": 200,
          "unit": "g",
          "cat": "海鮮"
        },
        {
          "name": "西蘭花",
          "qty": 1,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "蒜頭",
          "qty": 3,
          "unit": "瓣",
          "cat": "調味"
        },
        {
          "name": "油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        },
        {
          "name": "鹽",
          "qty": 0.5,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "蝦仁去腸泥抹乾",
        "西蘭花灼 2 分鐘備用",
        "爆香蒜蓉落蝦仁炒至轉色",
        "加西蘭花快炒，少鹽調味"
      ],
      "nut": {
        "kcal": 230,
        "carbs": 10,
        "protein": 30,
        "fat": 8,
        "fiber": 5,
        "sugar": 2,
        "sodium": 520,
        "satfat": 1.5,
        "calcium": 110,
        "omega3": 0.5,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜",
        "url": ""
      },
      "img": "images/b8.jpg",
      "imgCredit": {
        "title": "Shrimp and broccoli stir fry (8374790146).jpg",
        "author": "jeffreyw",
        "license": "CC BY 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Shrimp_and_broccoli_stir_fry_(8374790146).jpg"
      }
    },
    {
      "id": "b9",
      "origin": "library",
      "name": "青瓜粟米雞絲沙律",
      "emoji": "🥗",
      "cat": "輕食",
      "mins": 15,
      "servings": 2,
      "tags": [
        "冷盤",
        "低卡",
        "Meal Prep"
      ],
      "flags": [
        "slim",
        "heart"
      ],
      "ingredients": [
        {
          "name": "青瓜",
          "qty": 1,
          "unit": "條",
          "cat": "蔬菜"
        },
        {
          "name": "粟米",
          "qty": 1,
          "unit": "條",
          "cat": "蔬菜"
        },
        {
          "name": "雞胸肉",
          "qty": 150,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "檸檬",
          "qty": 1,
          "unit": "個",
          "cat": "水果"
        },
        {
          "name": "橄欖油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "雞胸灼熟撕成絲",
        "青瓜切絲、粟米起粒",
        "所有材料拌勻",
        "檸檬汁加欖油淋上，唔使加沙律醬"
      ],
      "nut": {
        "kcal": 280,
        "carbs": 24,
        "protein": 30,
        "fat": 9,
        "fiber": 5,
        "sugar": 6,
        "sodium": 300,
        "satfat": 1.5,
        "calcium": 60,
        "omega3": 0.1,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜",
        "url": ""
      },
      "img": "images/b9.jpg",
      "imgCredit": {
        "title": "Chicken Salad (7285807632).jpg",
        "author": "Rod Waddington from Kergunyah, Australia",
        "license": "CC BY-SA 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Chicken_Salad_(7285807632).jpg"
      }
    },
    {
      "id": "b10",
      "origin": "library",
      "name": "薑蔥瘦肉湯麵",
      "emoji": "🍜",
      "cat": "主食",
      "mins": 22,
      "servings": 2,
      "tags": [
        "湯麵",
        "暖胃"
      ],
      "flags": [],
      "ingredients": [
        {
          "name": "全麥麵",
          "qty": 2,
          "unit": "份",
          "cat": "主食"
        },
        {
          "name": "瘦肉",
          "qty": 150,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "薑",
          "qty": 3,
          "unit": "片",
          "cat": "調味"
        },
        {
          "name": "蔥",
          "qty": 2,
          "unit": "條",
          "cat": "調味"
        },
        {
          "name": "菜心",
          "qty": 200,
          "unit": "g",
          "cat": "蔬菜"
        }
      ],
      "steps": [
        "瘦肉切片用少許鹽醃",
        "水加薑片滾起，落麵煮至軟身",
        "加瘦肉同菜心灼熟",
        "湯底少鹽，灑蔥花即成"
      ],
      "nut": {
        "kcal": 410,
        "carbs": 56,
        "protein": 27,
        "fat": 7,
        "fiber": 6,
        "sugar": 3,
        "sodium": 880,
        "satfat": 2,
        "calcium": 90,
        "omega3": 0.1,
        "added": 0
      },
      "source": {
        "title": "入門港式食譜 · 全麥麵改編",
        "url": ""
      },
      "img": "images/b10.jpg",
      "imgCredit": {
        "title": "Pork Noodle Soup.jpg",
        "author": "Gaurav Dhwaj Khadka",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Pork_Noodle_Soup.jpg"
      }
    },
    {
      "id": "p1",
      "origin": "research",
      "name": "DASH 燕麥藍莓合桃碗",
      "emoji": "🫐",
      "cat": "早餐",
      "mins": 10,
      "servings": 2,
      "tags": [
        "護心",
        "補腦",
        "高纖",
        "坊間營養"
      ],
      "flags": [
        "heart",
        "brain",
        "mood",
        "slim"
      ],
      "ingredients": [
        {
          "name": "燕麥",
          "qty": 70,
          "unit": "g",
          "cat": "主食"
        },
        {
          "name": "低脂牛奶",
          "qty": 250,
          "unit": "ml",
          "cat": "蛋奶"
        },
        {
          "name": "藍莓",
          "qty": 80,
          "unit": "g",
          "cat": "水果"
        },
        {
          "name": "合桃",
          "qty": 20,
          "unit": "g",
          "cat": "乾貨"
        },
        {
          "name": "奇亞籽",
          "qty": 1,
          "unit": "湯匙",
          "cat": "乾貨"
        }
      ],
      "steps": [
        "燕麥加牛奶浸 5 分鐘或微波 1 分鐘",
        "鋪上藍莓、合桃碎同奇亞籽",
        "唔落糖；想甜可用半條香蕉代替"
      ],
      "nut": {
        "kcal": 340,
        "carbs": 48,
        "protein": 13,
        "fat": 12,
        "fiber": 9,
        "sugar": 12,
        "sodium": 60,
        "satfat": 1.5,
        "calcium": 210,
        "omega3": 1.5,
        "added": 0
      },
      "source": {
        "title": "按 NHLBI DASH + 補腦食材（藍莓／合桃／Omega-3）改編",
        "url": "https://www.nhlbi.nih.gov/health/dash/living-with-dash"
      },
      "img": "images/p1.jpg",
      "imgCredit": {
        "title": "Blueberry oatmeal.jpg",
        "author": "Shisma",
        "license": "CC BY 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Blueberry_oatmeal.jpg"
      }
    },
    {
      "id": "p2",
      "origin": "research",
      "name": "低鈉香草烤三文魚配西蘭花",
      "emoji": "🐟",
      "cat": "主菜",
      "mins": 25,
      "servings": 2,
      "tags": [
        "護心",
        "補腦",
        "Omega-3",
        "坊間營養"
      ],
      "flags": [
        "heart",
        "brain",
        "mood",
        "calcium"
      ],
      "ingredients": [
        {
          "name": "三文魚柳",
          "qty": 250,
          "unit": "g",
          "cat": "海鮮"
        },
        {
          "name": "西蘭花",
          "qty": 1,
          "unit": "個",
          "cat": "蔬菜"
        },
        {
          "name": "檸檬",
          "qty": 1,
          "unit": "個",
          "cat": "水果"
        },
        {
          "name": "橄欖油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        },
        {
          "name": "香草黑椒",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "三文魚抹乾，用檸檬汁、香草、黑椒醃 10 分鐘（唔落鹽）",
        "放入 200°C 焗爐焗 12–15 分鐘",
        "西蘭花灼熟或同盤焗 8 分鐘",
        "上碟擠少許檸檬汁即成"
      ],
      "nut": {
        "kcal": 360,
        "carbs": 10,
        "protein": 34,
        "fat": 20,
        "fiber": 6,
        "sugar": 3,
        "sodium": 180,
        "satfat": 3.5,
        "calcium": 150,
        "omega3": 2.6,
        "added": 0
      },
      "source": {
        "title": "參考 American Heart Association 心臟友善食譜＋深海魚低鈉原則",
        "url": "https://recipes.heart.org/en/"
      },
      "img": "images/p2.jpg",
      "imgCredit": {
        "title": "Liat Portal for Foodie Disorder - Salmon with garlic and herbs, crushed potatoes and peas.jpg",
        "author": "HaJunkiyada",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Salmon_with_garlic_and_herbs,_crushed_potatoes_and_peas.jpg"
      }
    },
    {
      "id": "p3",
      "origin": "research",
      "name": "高鈣豆腐小魚乾炒芥蘭",
      "emoji": "🦴",
      "cat": "主菜",
      "mins": 20,
      "servings": 2,
      "tags": [
        "高鈣",
        "更年期",
        "坊間營養"
      ],
      "flags": [
        "calcium",
        "mood",
        "slim"
      ],
      "ingredients": [
        {
          "name": "硬豆腐",
          "qty": 1,
          "unit": "磚",
          "cat": "豆製品"
        },
        {
          "name": "芥蘭",
          "qty": 250,
          "unit": "g",
          "cat": "蔬菜"
        },
        {
          "name": "小魚乾",
          "qty": 20,
          "unit": "g",
          "cat": "乾貨"
        },
        {
          "name": "薑",
          "qty": 3,
          "unit": "片",
          "cat": "調味"
        },
        {
          "name": "減鹽豉油",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "豆腐切件煎至兩面金黃",
        "芥蘭灼 1 分鐘撈起",
        "爆香薑片，落小魚乾同豆腐快炒",
        "回芥蘭，用減鹽豉油調味；小魚乾本身有鹹味，唔好再落鹽"
      ],
      "nut": {
        "kcal": 280,
        "carbs": 10,
        "protein": 24,
        "fat": 15,
        "fiber": 6,
        "sugar": 2,
        "sodium": 540,
        "satfat": 2.5,
        "calcium": 520,
        "omega3": 0.4,
        "added": 0
      },
      "source": {
        "title": "按 Johns Hopkins／Endocrine Society 停經後鈣 1,200 mg 指引設計",
        "url": "https://www.endocrine.org/menopausemap/health-impacts/index.html"
      },
      "img": "images/p3.jpg",
      "imgCredit": {
        "title": "Gai lan.jpg",
        "author": "Nthaci",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Gai_lan.jpg"
      }
    },
    {
      "id": "p4",
      "origin": "research",
      "name": "希臘乳酪藍莓合桃杯",
      "emoji": "🥛",
      "cat": "早餐",
      "mins": 5,
      "servings": 2,
      "tags": [
        "高鈣",
        "補腦",
        "減脂",
        "坊間營養"
      ],
      "flags": [
        "calcium",
        "brain",
        "slim",
        "mood"
      ],
      "ingredients": [
        {
          "name": "無糖希臘乳酪",
          "qty": 200,
          "unit": "g",
          "cat": "蛋奶"
        },
        {
          "name": "藍莓",
          "qty": 80,
          "unit": "g",
          "cat": "水果"
        },
        {
          "name": "合桃",
          "qty": 15,
          "unit": "g",
          "cat": "乾貨"
        },
        {
          "name": "奇亞籽",
          "qty": 1,
          "unit": "湯匙",
          "cat": "乾貨"
        },
        {
          "name": "肉桂粉",
          "qty": 0.5,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "乳酪放入杯中",
        "鋪藍莓、合桃碎、奇亞籽",
        "灑肉桂粉增加甜味感，唔使加糖或蜜糖"
      ],
      "nut": {
        "kcal": 290,
        "carbs": 26,
        "protein": 18,
        "fat": 13,
        "fiber": 5,
        "sugar": 16,
        "sodium": 70,
        "satfat": 2.5,
        "calcium": 300,
        "omega3": 1.1,
        "added": 0
      },
      "source": {
        "title": "按補腦食材（藍莓／合桃）＋更年期高鈣需求改編",
        "url": "https://www.nm.org/healthbeat/healthy-tips/nutrition/best-food-for-a-healthy-brain"
      },
      "img": "images/p4.jpg",
      "imgCredit": {
        "title": "Yogurt parfait with granola and blueberries in shot glasses with silverware spoons (17098581522).jpg",
        "author": "Personal Creations",
        "license": "CC BY 2.0",
        "url": "https://commons.wikimedia.org/wiki/File:Yogurt_parfait_with_granola_and_blueberries_in_shot_glasses_with_silverware_spoons_(17098581522).jpg"
      }
    },
    {
      "id": "p5",
      "origin": "research",
      "name": "黑豆糙米雞胸低 GI 沙律",
      "emoji": "🥙",
      "cat": "輕食",
      "mins": 25,
      "servings": 2,
      "tags": [
        "低GI",
        "穩血糖",
        "高蛋白",
        "減脂",
        "坊間營養"
      ],
      "flags": [
        "heart",
        "slim",
        "brain"
      ],
      "ingredients": [
        {
          "name": "糙米",
          "qty": 100,
          "unit": "g",
          "cat": "主食"
        },
        {
          "name": "黑豆",
          "qty": 100,
          "unit": "g",
          "cat": "豆製品"
        },
        {
          "name": "雞胸肉",
          "qty": 180,
          "unit": "g",
          "cat": "肉類"
        },
        {
          "name": "車厘茄",
          "qty": 8,
          "unit": "粒",
          "cat": "蔬菜"
        },
        {
          "name": "檸檬",
          "qty": 1,
          "unit": "個",
          "cat": "水果"
        },
        {
          "name": "橄欖油",
          "qty": 1,
          "unit": "湯匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "糙米預先煮熟，黑豆浸軟烚熟",
        "雞胸煎熟切粒",
        "所有材料放碗，檸檬汁加欖油拌勻",
        "可加少量香草，唔落沙律醬"
      ],
      "nut": {
        "kcal": 420,
        "carbs": 46,
        "protein": 36,
        "fat": 10,
        "fiber": 12,
        "sugar": 5,
        "sodium": 300,
        "satfat": 2,
        "calcium": 100,
        "omega3": 0.2,
        "added": 0
      },
      "source": {
        "title": "按 DASH for Diabetes／低 GI 穩血糖原則改編",
        "url": "https://www.hopkinsmedicine.org/news/articles/2025/10/dash-for-diabetes"
      },
      "img": "images/p5.jpg",
      "imgCredit": {
        "title": "2021-04-26 20 24 05 Chicken kabob, basmati white and brown rice and salad from the Herndon Grill Kabob in the Franklin Farm section of Oak Hill, Fairfax County, Virginia.jpg",
        "author": "Famartin",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:2021-04-26_20_24_05_Chicken_kabob,_basmati_white_and_brown_rice_and_salad_from_the_Herndon_Grill_Kabob_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg"
      }
    },
    {
      "id": "p6",
      "origin": "research",
      "name": "芝麻菠菜蛋花湯",
      "emoji": "🥬",
      "cat": "湯品",
      "mins": 15,
      "servings": 2,
      "tags": [
        "高鈣",
        "鎂",
        "減壓",
        "坊間營養"
      ],
      "flags": [
        "calcium",
        "mood",
        "slim",
        "heart"
      ],
      "ingredients": [
        {
          "name": "菠菜",
          "qty": 250,
          "unit": "g",
          "cat": "蔬菜"
        },
        {
          "name": "雞蛋",
          "qty": 2,
          "unit": "隻",
          "cat": "蛋奶"
        },
        {
          "name": "白芝麻",
          "qty": 1,
          "unit": "湯匙",
          "cat": "乾貨"
        },
        {
          "name": "薑",
          "qty": 2,
          "unit": "片",
          "cat": "調味"
        },
        {
          "name": "無鹽清湯",
          "qty": 500,
          "unit": "ml",
          "cat": "其他"
        }
      ],
      "steps": [
        "無鹽清湯加薑片滾起",
        "落菠菜煮 1 分鐘",
        "倒入蛋液成蛋花",
        "灑白芝麻，少鹽調味"
      ],
      "nut": {
        "kcal": 180,
        "carbs": 8,
        "protein": 14,
        "fat": 10,
        "fiber": 5,
        "sugar": 2,
        "sodium": 300,
        "satfat": 2,
        "calcium": 340,
        "omega3": 0.3,
        "added": 0
      },
      "source": {
        "title": "按更年期營養（鈣／鎂／B 雜）指引改編",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10780928/"
      },
      "img": "images/p6.jpg",
      "imgCredit": {
        "title": "Egg drop soup (蛋花湯).jpg",
        "author": "NeoBatfreak",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Egg_drop_soup_(%E8%9B%8B%E8%8A%B1%E6%B9%AF).jpg"
      }
    },
    {
      "id": "p7",
      "origin": "research",
      "name": "合桃奇亞籽豆漿布甸",
      "emoji": "🍮",
      "cat": "甜品",
      "mins": 10,
      "servings": 2,
      "tags": [
        "高鈣",
        "補腦",
        "無添加糖",
        "坊間營養"
      ],
      "flags": [
        "calcium",
        "brain",
        "mood",
        "heart"
      ],
      "ingredients": [
        {
          "name": "無糖加鈣豆漿",
          "qty": 300,
          "unit": "ml",
          "cat": "豆製品"
        },
        {
          "name": "奇亞籽",
          "qty": 3,
          "unit": "湯匙",
          "cat": "乾貨"
        },
        {
          "name": "合桃",
          "qty": 20,
          "unit": "g",
          "cat": "乾貨"
        },
        {
          "name": "藍莓",
          "qty": 60,
          "unit": "g",
          "cat": "水果"
        },
        {
          "name": "雲呢拿粉",
          "qty": 0.5,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "豆漿加奇亞籽同雲呢拿粉拌勻",
        "雪櫃静置 2 小時或過夜至凝固",
        "食前鋪合桃碎同藍莓",
        "完全唔使加糖"
      ],
      "nut": {
        "kcal": 260,
        "carbs": 22,
        "protein": 11,
        "fat": 15,
        "fiber": 8,
        "sugar": 8,
        "sodium": 80,
        "satfat": 1.5,
        "calcium": 330,
        "omega3": 1.5,
        "added": 0
      },
      "source": {
        "title": "按補腦 Omega-3＋更年期高鈣需求改編",
        "url": "https://www.nm.org/healthbeat/healthy-tips/nutrition/best-food-for-a-healthy-brain"
      },
      "img": "images/p7.jpg",
      "imgCredit": {
        "title": "Chia Seed Pudding.jpg",
        "author": "ParentingPatch",
        "license": "CC BY-SA 3.0",
        "url": "https://commons.wikimedia.org/wiki/File:Chia_Seed_Pudding.jpg"
      }
    },
    {
      "id": "p8",
      "origin": "research",
      "name": "薑黃檸檬蒸魚（低鈉港式）",
      "emoji": "🍋",
      "cat": "主菜",
      "mins": 22,
      "servings": 2,
      "tags": [
        "護心",
        "低鈉",
        "補腦",
        "坊間營養"
      ],
      "flags": [
        "heart",
        "brain",
        "slim"
      ],
      "ingredients": [
        {
          "name": "白身魚柳",
          "qty": 250,
          "unit": "g",
          "cat": "海鮮"
        },
        {
          "name": "檸檬",
          "qty": 1,
          "unit": "個",
          "cat": "水果"
        },
        {
          "name": "薑黃粉",
          "qty": 0.5,
          "unit": "茶匙",
          "cat": "調味"
        },
        {
          "name": "薑",
          "qty": 3,
          "unit": "片",
          "cat": "調味"
        },
        {
          "name": "蔥",
          "qty": 1,
          "unit": "條",
          "cat": "調味"
        },
        {
          "name": "橄欖油",
          "qty": 1,
          "unit": "茶匙",
          "cat": "調味"
        }
      ],
      "steps": [
        "魚柳用檸檬汁、薑黃粉、薑片醃 10 分鐘（唔落鹽、唔落豉油）",
        "水滾大火蒸 8 分鐘",
        "倒去多餘水份，灑蔥絲",
        "淋少許欖油即成"
      ],
      "nut": {
        "kcal": 250,
        "carbs": 4,
        "protein": 33,
        "fat": 11,
        "fiber": 1,
        "sugar": 1,
        "sodium": 160,
        "satfat": 2,
        "calcium": 70,
        "omega3": 1.6,
        "added": 0
      },
      "source": {
        "title": "按 NHLBI DASH 減鈉 + AHA 心臟友善魚類食譜改編",
        "url": "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/dash-diet/art-20047110"
      },
      "img": "images/p8.jpg",
      "imgCredit": {
        "title": "Hong Kong Village style steam Flathead grey mullet with salted lemon.jpg",
        "author": "Peachyeung316",
        "license": "CC BY-SA 4.0",
        "url": "https://commons.wikimedia.org/wiki/File:Hong_Kong_Village_style_steam_Flathead_grey_mullet_with_salted_lemon.jpg"
      }
    }
  ]
};
