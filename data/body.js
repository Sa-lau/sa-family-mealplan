/* Elsapciz · 三人身體紀錄（智能體重磅報告）
 * 來源：Sa 提供嘅三張「體重報告」手機截圖，量度時間 07/11/2026 22:48–22:52（lb）。
 * 呢個檔係身體紀錄唯一來源；之後有新報告，WorkBuddy 改呢個檔 + push 就更新，唔使改 index.html。
 * 免責：生物電阻抗（BIA）磅嘅絕對值受水份／進食／運動影響，誤差可達數個百分點；
 *       以下分析係飲食規劃參考，唔係診斷、處方或醫療意見。
 * 相片標示：Eliz 未滿 18 歲，磅只提供部分量度結果，無內臟脂肪／腰臀比／體重建議，唔作推算。
 */
window.SA_BODY = {
  meta: {
    version: 1,
    updated: '2026-11-16',
    measured: '2026-11-07',
    measuredAt: '22:48–22:52',
    unit: 'lb',
    source: '用戶提供嘅智能體重磅「體重報告」截圖 ×3',
    note: '三張同一晚飯後量度；之後建議固定同一時段（例如起身後、如廁後、未食嘢）先好比較趨勢。'
  },
  members: {
    sa: {
      profile: 'Sa', name: 'Sa', role: '老婆（你）', emoji: '👩', color: '#7c3aed',
      date: '2026-11-07', time: '22:52',
      scale: '相比 6 日前無變化', weightTag: '標準',
      score: 77, scoreNote: '身體偏胖・建議減少攝取高油高熱量食物，並定期運動。',
      weight: 142.0, bmi: 23.9, bmiDelta: null, bmiTag: '標準',
      bodyfat: 32.9, bodyfatDelta: 0.1, bodyfatTag: '偏高',
      composition: { water: 73.4, fat: 46.7, bone: 5.7, protein: 15.0 },
      metrics: {
        muscle: 89.5, muscleDelta: -0.2, musclePct: 63.0, musclePctDelta: -0.2,
        waterPct: 51.7, waterPctDelta: -0.6, proteinPct: 10.6, proteinPctDelta: 0.5,
        bonePct: 4.0, skeletalMuscle: 51.8, skeletalMuscleDelta: -0.7,
        visceral: 9, visceralDelta: 1, visceralTag: '偏高',
        bmr: 1303, bmrDelta: -2, waistHip: 1.1, waistHipTag: '偏高',
        bodyAge: 49, lean: 95.2, leanDelta: -0.2, heartRate: 64
      },
      targets: { standardWeight: 124.3, weightControl: -17.6, fatControl: -18.1, muscleControl: '+0.4 lb' },
      bodyType: '偏胖',
      headline: '體重冇變，但體脂同內臟脂肪先係要盯實嗰個',
      points: [
        '142.0 lb（64.4 kg）／BMI 23.9：磅判「標準」，不過用亞洲成人標準 ≥23 已經算過重；更值得留意係體脂率 32.9%（↑0.1）同身體類型「偏胖」。更年期後脂肪傾向由皮下轉去肚腩，同膽固醇、血糖嘅關係大過體重本身。',
        '內臟脂肪等級 9（↑1，偏高）＋推測腰臀比 1.1（偏高）：呢兩個先係心代謝風險指標。目標唔係狂減磅，係減腰圍同內臟脂肪。',
        '肌肉量 89.5 lb（↓0.2）、骨骼肌 51.8 lb（↓0.7）、基礎代謝 1,303 kcal（↓2）：減脂時如果蛋白唔夠又無負重運動，會連肌肉都跌，腰酸背痛同更年期骨質流失會更明顯。',
        '身體年齡 49 歲（實際約 50）、得分 77 分：整體唔差，屬「調整就見效」嘅階段。'
      ],
      actions: [
        '鈣 1,200 mg／日分幾餐食（低脂奶／加鈣豆漿／硬豆腐／小魚乾／芝麻／芥蘭）＋維他命 D，配合快走同簡單阻力運動護住腰背同骨質。',
        '水溶性纖維 25–30 g（燕麥、豆類）幫手管理膽固醇；飽和脂肪盡量 <11 g／日。',
        '蛋白約 75 g／日、每餐都有，保住肌肉；用網站「體重日記」兩星期記一次就夠，唔好日日磅。',
        '甲狀腺邊緣：碘要足夠但唔好過量，唔好自行食海藻／碘片，定期覆驗 TSH；鎂／B 雜／Omega-3 對情緒同睡眠有幫助。'
      ],
      goalCheck: '網站 Sa 每日 1,700 kcal ≈ BMR 1,303 × 1.3，屬維持／極溫和赤字，啱用，唔建議再扣熱量。'
    },
    eddie: {
      profile: 'Pc', name: 'Eddie', role: '老公', emoji: '👨', color: '#2563eb',
      date: '2026-11-07', time: '22:48',
      scale: '相比 15 日前下降 1.3 lb', weightTag: '過高',
      score: 79, scoreNote: '建議控制飲食，減少攝取高油高熱量食物，同時循序漸進地增加運動量。',
      weight: 191.8, bmi: 31.2, bmiDelta: -0.2, bmiTag: '過高',
      bodyfat: 29.5, bodyfatDelta: -0.4, bodyfatTag: '偏高',
      composition: { water: 95.7, fat: 56.7, bone: 7.1, protein: 30.9 },
      metrics: {
        muscle: 128.1, muscleDelta: null, musclePct: 66.8, musclePctDelta: 0.4,
        waterPct: 49.9, waterPctDelta: 0.8, proteinPct: 16.1, proteinPctDelta: -0.5,
        bonePct: 3.7, skeletalMuscle: 68.8, skeletalMuscleDelta: 0.7,
        visceral: 13, visceralDelta: -1, visceralTag: '偏高',
        bmr: 1694, bmrDelta: -2, waistHip: 0.8, waistHipTag: '標準',
        bodyAge: 57, lean: 135.1, leanDelta: null, heartRate: 82
      },
      targets: { standardWeight: 134.3, weightControl: -57.5, fatControl: -36.6, muscleControl: '繼續保持' },
      bodyType: '肥胖',
      headline: '方向啱：15 日跌 1.3 lb，體脂同內臟脂肪都向下；下一步係保住肌肉、繼續減鈉',
      points: [
        '191.8 lb（87.0 kg）／BMI 31.2（↓0.2，過高）／體脂 29.5%（↓0.4，偏高）—— 三個數都跌緊，係好跡象，唔好心急加快。',
        '內臟脂肪 13（↓1，仍偏高）：同高血壓、胰島素抵抗、心臟負荷最直接相關，比磅數更值得跟住。',
        '肌肉量 128.1 lb、骨骼肌 68.8 lb（↑0.7）、去脂體重 135.1 lb、身體年齡 57 歲（實際 60）：肌肉底子好，減重時要保住佢，唔好靠淨係食少啲。',
        '得分 79 分、身體類型「肥胖」。磅計出嘅「標準體重 134.3 lb」係用 BMI≈22 推算，對 60 歲＋心臟手術史唔使當硬目標 —— 臨床上先減 5–10% 體重（約 9–19 lb）已經有血壓／血糖效益，而且要先問主診醫生。',
        '心率 82／分鐘（標準）；蛋白質率 16.1% 被標「偏高」唔代表要戒蛋白，但如有腎功能或心衰竭考量，高蛋白飲食要問醫生。'
      ],
      actions: [
        '鈉 ≤1,500 mg／日、添加糖 ≤25 g、飽和脂肪 <13 g；Zero 用「每日一罐 → 隔日 → 氣泡水加檸檬」逐步減（WHO 2023 唔建議靠代糖長期控重）。',
        '⚠️ 心臟手術後＋高血壓＋輕微糖尿：DASH 高鉀飲食、代鹽、鉀補充劑，或者大幅減重／極低碳飲食，必須先問主診醫生，尤其正服 ACEI／ARB／保鉀利尿劑。',
        '全穀取代白飯、少食多餐穩住飯後血糖；每餐有蛋白保肌肉；飯後散步 15–20 分鐘。',
        '繼續用同一時段量度，兩星期睇一次趨勢就夠；-1.3 lb／15 日係可持續嘅速度。'
      ],
      goalCheck: '網站 Eddie 每日 1,900 kcal ≈ BMR 1,694 × 1.12，屬溫和赤字；唔建議自行再扣到 1,500 kcal 以下。'
    },
    eliz: {
      profile: 'Eliz', name: 'Eliz', role: '阿女 · 2027 DSE', emoji: '👧', color: '#f59e0b',
      date: '2026-11-07', time: '22:51',
      scale: '相比 19 日前上升 1.1 lb', weightTag: null,
      score: null, scoreNote: null, minor: true,
      weight: 165.1, bmi: 29.3, bmiDelta: 0.2, bmiTag: null,
      bodyfat: 39.3, bodyfatDelta: 0.1, bodyfatTag: null,
      composition: { water: 80.7, fat: 64.8, bone: 6.2, protein: 12.3 },
      metrics: {
        muscle: 94.1, muscleDelta: 0.4, musclePct: 57.0, musclePctDelta: -0.1,
        waterPct: 48.9, waterPctDelta: 0.8, proteinPct: 7.5, proteinPctDelta: -0.7,
        bonePct: 3.7, bonePctDelta: 0.1, skeletalMuscle: 58.2, skeletalMuscleDelta: 1.3,
        visceral: null, bmr: 1353, bmrDelta: 7,
        bodyAge: 15, lean: 100.3, leanDelta: 0.7, heartRate: 59
      },
      targets: null,
      bodyType: null,
      headline: '+1.1 lb 唔使驚：肌肉同骨骼肌同時升咗，考 DSE 最忌節食',
      points: [
        '165.1 lb（74.9 kg）／BMI 29.3（↑0.2）／體脂 39.3%（↑0.1）。佢未滿 18 歲，BMI 要用兒青「年齡別 BMI 百分位」睇，唔好用成人 18.5–24 硬套；磅自己亦只提供部分結果。',
        '19 日 +1.1 lb，但同時肌肉量 94.1 lb（↑0.4）、骨骼肌 58.2 lb（↑1.3）、去脂體重 100.3 lb（↑0.7）、BMR 1,353 kcal（↑7）—— 唔似純粹肥咗，可能係發育、水份、經期週期，或者溫書期少咗郁；壓力大皮質醇高亦會令水份滯留。',
        '身體年齡 15 歲、心率 59／分鐘：呢兩項好好，唔好為咗減磅搞垮佢。',
        '因為未成年，磅無提供內臟脂肪、腰臀比、體重建議同得分 —— 我唔會幫佢估，亦唔建議設定進取嘅減重目標。'
      ],
      actions: [
        '每日約 1,900 kcal 溫和赤字就夠，千祈唔好跳餐／keto／斷食；食唔夠就無腦力記書。',
        '蛋白 95 g、低 GI 碳水（糙米／燕麥／全麥）、Omega-3（魚／合桃／奇亞籽）、蛋（膽鹼）、鐵同 B 雜、鈣 1,000 mg。',
        '減壓：規律早餐、每 2–3 小時一次小食、每日 20 分鐘散步、瞓夠、睡前避咖啡因；80/20 留返兩成食佢鍾意嘅嘢，開心先撐到 DSE。',
        '唔好日日磅，兩星期一次就夠；減重前先問醫生／註冊營養師。'
      ],
      goalCheck: '網站 Eliz 每日 1,900 kcal ≈ BMR 1,353 × 1.4，屬溫和範圍，配蛋白 95 g；重點係「食夠先有腦力」，唔係再扣熱量。'
    }
  },
  familyNote: [
    '三個人體脂率都偏高，但成因完全唔同：Sa 係更年期荷爾蒙轉變、Eddie 係心代謝風險、Eliz 係發育期＋溫書壓力。所以餐單唔應該三個人一式一樣，而係「同一道菜、唔同份量同提示」—— 正正係 Elsapciz 而家做緊嘅嘢。',
    '唯一共通目標：保住／增加肌肉（三人肌肉量底子都唔差）、減添加糖、減鈉、加纖維，唔好用極端節食。',
    '用 BMR 對照網站每日目標，三個都屬溫和範圍，唔建議再扣熱量；要改都應該先問醫生／註冊營養師。',
    '三張報告都係同一晚約 22:50 量度（飯後、水份偏高）。之後固定同一時段量度，趨勢先有得比。'
  ],
  disclaimer: '本結果僅供參考，不建議作為醫療或健康狀況依據（原文見磅報告）。生物電阻抗磅絕對值有誤差，趨勢比單次數字重要；Eddie 有心臟手術史同糖尿病，Eliz 未成年，任何飲食／減重改動請先問醫生或註冊營養師。'
};
