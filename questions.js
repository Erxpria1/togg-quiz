const questions = [
  {
    id: 1,
    category: "motor",
    question: "Togg'un elektrik motoru tipi aşağıdakilerden hangisidir?",
    options: [
      "Asenkron motor",
      "Fırçasız DC motor (BLDC)",
      "Kalıcı mıknatıslı senkron motor (PMSM)",
      "Endüksiyon motoru"
    ],
    correct: 2,
    explanation: "Togg, kalıcı mıknatıslı senkron motor (PMSM) kullanmaktadır. Bu motor tipi yüksek verimlilik, yüksek tork ve kompakt boyut avantajları sunar."
  },
  {
    id: 2,
    category: "batarya",
    question: "Togg'un batarya paketi hücre tipi aşağıdakilerden hangisidir?",
    options: [
      "Lityum Demir Fosfat (LFP)",
      "Nikel Manganez Kobalt (NMC)",
      "Lityum Polimer (Li-Po)",
      "Katı Hal Batarya"
    ],
    correct: 1,
    explanation: "Togg, NMC (Nikel Manganez Kobalt) kimyasına sahip lityum iyon batarya hücreleri kullanmaktadır. Bu kimya yüksek enerji yoğunluğu sağlar."
  },
  {
    id: 3,
    category: "sarz",
    question: "Togg C-SUV'un DC hızlı şarjda %20'den %80'e şarj süresi ne kadardır?",
    options: [
      "30 dakika",
      "40 dakika",
      "50 dakika",
      "60 dakika"
    ],
    correct: 2,
    explanation: "Togg, 150 kW'a kadar DC hızlı şarj desteği ile yaklaşık 50 dakikada %20'den %80'e şarj edilebilmektedir."
  },
  {
    id: 4,
    category: "motor",
    question: "Togg'un çift motorlu (AWD) versiyonunda toplam sistem gücü ne kadardır?",
    options: [
      "280 kW",
      "320 kW",
      "350 kW",
      "400 kW"
    ],
    correct: 1,
    explanation: "Togg'un AWD versiyonunda iki elektrik motoru toplam 320 kW (yaklaşık 435 BG) sistem gücü üretmektedir."
  },
  {
    id: 5,
    category: "batarya",
    question: "Togg'un batarya kapasitesi (Long Range) ne kadardır?",
    options: [
      "52 kWh",
      "62 kWh",
      "82 kWh",
      "100 kWh"
    ],
    correct: 2,
    explanation: "Togg Long Range versiyonu 82 kWh kapasiteli batarya paketine sahiptir ve bu da yaklaşık 500 km'ye kadar menzil sağlamaktadır."
  },
  {
    id: 6,
    category: "teknoloji",
    question: "Togg'da bulunan sürüş modları arasında aşağıdakilerden hangisi yoktur?",
    options: [
      "Eco",
      "Comfort",
      "Sport",
      "Race"
    ],
    correct: 3,
    explanation: "Togg'da Eco, Comfort, Sport ve Snow (Karlı) olmak üzere dört sürüş modu bulunmaktadır. 'Race' modu bulunmamaktadır."
  },
  {
    id: 7,
    category: "teknoloji",
    question: "Togg'un dijital iç ayna sistemi hangi teknolojiyi kullanır?",
    options: [
      "Optik fiber kablo",
      "Kamera ve ekran",
      "Yansıtıcı ayna",
      "Projeksiyon sistemi"
    ],
    correct: 1,
    explanation: "Togg'da dijital iç ayna bulunur. Bu sistem aracın arkasındaki kameradan aldığı görüntüyü iç aynada yer alan ekrana aktarır."
  },
  {
    id: 8,
    category: "cevre",
    question: "Elektrikli araçların CO2 emisyonunu azaltmadaki en büyük avantajı nedir?",
    options: [
      "Daha hızlı加速",
      "Sessiz çalışma",
      "Kademeli sıfır emisyon",
      "Daha ucuz yakıt"
    ],
    correct: 2,
    explanation: "Elektrikli araçlar doğrudan egzoz emisyonu üretmez. Elektrik enerjisi yenilenebilir kaynaklardan sağlandığında tamamen sıfır emisyonlu hale gelirler."
  },
  {
    id: 9,
    category: "motor",
    question: "Elektrik motorlarının en yüksek verimlilik değeri genellikle hangi aralıktadır?",
    options: [
      "%60-70",
      "%75-85",
      "%85-95",
      "%95-99"
    ],
    correct: 3,
    explanation: "Elektrik motorları %95-99 arasında verimlilik değerlerine ulaşabilir. Bu, iç yanmalı motorların %25-35 verimliliğine kıyasla çok yüksektir."
  },
  {
    id: 10,
    category: "batarya",
    question: "Batarya yönetim sistemi (BMS) hangi işlevi gerçekleştirmez?",
    options: [
      "Hücre dengeleme",
      "Sıcaklık yönetimi",
      "Motor tork kontrolü",
      "Şarj durumu (SOC) hesaplama"
    ],
    correct: 2,
    explanation: "BMS, batarya performansını optimize eder ancak motor tork kontrolü motor kontrol ünitesi (MCU) tarafından yapılır."
  },
  {
    id: 11,
    category: "sarz",
    question: "AC şarj (Ev tipi/duvar kutusu) için Tip 2 konnektörünün gücü ne kadardır?",
    options: [
      "7 kW",
      "11 kW",
      "22 kW",
      "50 kW"
    ],
    correct: 1,
    explanation: "Togg'da Tip 2 konnektör ile 11 kW'a kadar AC şarj desteği bulunmaktadır. Bu, ev tipi şarj üniteleri için yaygın bir değerdir."
  },
  {
    id: 12,
    category: "teknoloji",
    question: "Togg'da kullanılan的信息娱乐 sistemi markası nedir?",
    options: [
      "Android Auto",
      "Apple CarPlay",
      "Flyme Automotive",
      "Windows Automotive"
    ],
    correct: 2,
    explanation: "Togg, Türkiye'nin yerli bilgi-eğlence sistemi Flyme Automotive'i kullanmaktadır. Bu sistem aracın büyük dokunmatik ekranında çalışır."
  },
  {
    id: 13,
    category: "cevre",
    question: "Rejeneratif fren sistemi nasıl enerji üretir?",
    options: [
      "Güneş panelleri",
      "Frenleme sırasında motoru jeneratör olarak kullanarak",
      "Rüzgar türbini",
      "Piezoelektrik malzemeler"
    ],
    correct: 1,
    explanation: "Rejeneratif fren, frenleme sırasında elektrik motorunu tersine çalıştırarak kinetik enerjiyi elektrik enerjisine dönüştürür ve bataryayı şarj eder."
  },
  {
    id: 14,
    category: "motor",
    question: "Togg'un elektrik motorunun maksimum tork değeri yaklaşık ne kadardır?",
    options: [
      "350 Nm",
      "420 Nm",
      "500 Nm",
      "700 Nm"
    ],
    correct: 2,
    explanation: "Togg'un elektrik motoru yaklaşık 500 Nm maksimum tork üretir. Elektrik motorları anlık olarak maksimum torka ulaşabilir."
  },
  {
    id: 15,
    category: "teknoloji",
    question: "Togg'un akıllı şarj istasyonu (TruGo) 150 kW DC şarj için hangi standartı kullanır?",
    options: [
      "CHAdeMO",
      "CCS Combo 2",
      "GB/T",
      "Tesla Supercharger"
    ],
    correct: 1,
    explanation: "Togg, Avrupa standardı olan CCS Combo 2 (Combined Charging System) kullanmaktadır. Bu standart hem AC hem DC şarjı destekler."
  },
  {
    id: 16,
    category: "batarya",
    question: "Lityum iyon bataryaların ömrünü etkileyen en önemli faktörlerden biri nedir?",
    options: [
      "Yüksek sıcaklık",
      "Düşük rakım",
      "manyetik alan",
      "Hava basıncı"
    ],
    correct: 0,
    explanation: "Yüksek sıcaklık, lityum iyon bataryaların ömrünü önemli ölçüde azaltır. Bu nedenle batarya termal yönetim sistemi kritik öneme sahiptir."
  },
  {
    id: 17,
    category: "cevre",
    question: "Togg'un üretildiği fabrika (Bursa Gemlik) hangi özelliğiyle öne çıkmaktadır?",
    options: [
      "Sadece robotik üretim",
      "Karbon nötr üretim",
      "En büyük Avrupa fabrikası",
      "En eski otomotiv fabrikası"
    ],
    correct: 1,
    explanation: "Togg'un üretim tesisi, karbon nötr (sıfır karbon emisyonu) hedefiyle tasarlanmıştır ve çevre dostu üretim teknolojileri kullanmaktadır."
  },
  {
    id: 18,
    category: "teknoloji",
    question: "Togg'da OTA (Over-The-Air) güncelleme desteği ne anlama gelir?",
    options: [
      "Fiziksel servis ziyareti gerekli",
      "Kablosuz yazılım güncelleme",
      "Sadece harita güncelleme",
      "Bluetooth ile güncelleme"
    ],
    correct: 1,
    explanation: "OTA güncellemeleri, aracın yazılımının kablosuz olarak uzaktan güncellenebilmesini sağlar. Bu sayede yeni özellikler eklenebilir ve hatalar düzeltilebilir."
  },
  {
    id: 19,
    category: "motor",
    question: "Elektrikli araçlarda motor torkunun anlık olarak maksimum değere ulaşmasının avantajı nedir?",
    options: [
      "Daha düşük enerji tüketimi",
      "Daha hızlı hızlanma ve daha iyi performans",
      "Daha sessiz sürüş",
      "Daha uzun menzil"
    ],
    correct: 1,
    explanation: "Elektrik motorları anlık maksimum tork sağlayabildiğinden, elektrikli araçlar benzersiz hızlanma performansı sunar ve vites kutusuna ihtiyaç duymaz."
  },
  {
    id: 20,
    category: "sarz",
    question: "Ev tipi prizden (Schuko) şarj etmenin dezavantajı nedir?",
    options: [
      "Bataryaya zarar verir",
      "Çok yavaş şarj (tam şarj için 24+ saat)",
      "Sadece gece şarj edilebilir",
      "Yasal değildir"
    ],
    correct: 1,
    explanation: "Standart ev prizi (230V/10A) yaklaşık 2.3 kW güç sağlar ve tam şarj için 30-40 saat gerekebilir. Bu nedenle duvar kutusu (wallbox) önerilir."
  },
  {
    id: 21,
    category: "batarya",
    question: "Batarya kapasitesi 52 kWh olan bir aracın %100 dolulukta kaç kWh enerji depolar?",
    options: [
      "52 kWh",
      "62 kWh",
      "72 kWh",
      "82 kWh"
    ],
    correct: 0,
    explanation: "Batarya kapasitesi, kullanılabilir enerji miktarını doğrudan belirtir. 52 kWh batarya, %100 dolulukta 52 kWh enerji depolar."
  },
  {
    id: 22,
    category: "teknoloji",
    question: "Togg'un orta konsolundaki döner kontrol cihazının adı nedir?",
    options: [
      "iDrive",
      "Touchpad Controller",
      "Togg Wheels",
      "Jog Dial"
    ],
    correct: 2,
    explanation: "Togg'un özgün döner kontrol cihazı 'Togg Wheels' olarak adlandırılmıştır ve bilgi-eğlence sistemi kontrolü için kullanılır."
  },
  {
    id: 23,
    category: "cevre",
    question: "Elektrikli araçların hava kirliliğine etkisi hakkında hangisi doğrudur?",
    options: [
      "Hava kirliliğini artırır",
      "Sadece egzoz emisyonlarını azaltır",
      "HEM egzoz HEM de diğer hava kirleticilerini azaltır",
      "Hiçbir etkisi yoktur"
    ],
    correct: 2,
    explanation: "Elektrikli araçlar sıfır egzoz emisyonuna ek olarak, fosil yakıtlı araçlara kıyasla daha az fren tozu ve lastik aşınması üretir."
  },
  {
    id: 24,
    category: "motor",
    question: " inverter'in elektrikli araçtaki temel görevi nedir?",
    options: [
      "Batarya şarj kontrolü",
      "DC'yi AC'ye dönüştürerek motoru kontrol etmek",
      "Sıcaklık düşürme",
      "Navigasyon işleme"
    ],
    correct: 1,
    explanation: "İnvertör, bataryadan gelen DC elektriğini AC'ye dönüştürerek elektrik motorunun hızını ve torkunu kontrol eder."
  },
  {
    id: 25,
    category: "sarz",
    question: "Kablosuz (indüktif) şarj sistemi nasıl çalışır?",
    options: [
      "Güneş enerjisi ile",
      "Elektromanyetik indüksiyon yoluyla",
      "Bataryayı çıkarıp prize takarak",
      "Bluetooth bağlantısı ile"
    ],
    correct: 1,
    explanation: "Kablosuz şarj, iki bobin arasında elektromanyetik indüksiyon yoluyla enerji aktarır. Yerdeki bobin (birincil) aracın altındaki bobini (ikincil) şarj eder."
  },
  {
    id: 26,
    category: "teknoloji",
    question: "Togg'un sürücü destek sistemlerinin genel adı nedir?",
    options: [
      "AutoPilot",
      "Togg Drive",
      "Super Cruise",
      "ProPILOT"
    ],
    correct: 1,
    explanation: "Togg'un sürücü destek ve güvenlik sistemleri 'Togg Drive' markası altında toplanmıştır ve adaptif cruise control, şerit takip gibi özellikleri içerir."
  },
  {
    id: 27,
    category: "batarya",
    question: "Batarya soğutma sistemi neden gereklidir?",
    options: [
      "Sadece estetik amaçlı",
      "Batarya ömrünü uzatmak ve performansı optimize etmek için",
      "Motoru soğutmak için",
      "Sessiz çalışma için"
    ],
    correct: 1,
    explanation: "Batarya soğutma sistemi, batarya hücrelerinin ideal sıcaklık aralığında kalmasını sağlar. Aşırı sıcaklık batarya ömrünü kısaltır, aşırı soğuk ise performansı düşürür."
  },
  {
    id: 28,
    category: "cevre",
    question: "Elektrikli araçların menzil hesaplamasında hangi faktör en az etkilidir?",
    options: [
      "Hız",
      "Hava sıcaklığı",
      "Lastik basıncı",
      "Radyo sesi"
    ],
    correct: 3,
    explanation: "Radyo sesi enerji tüketimi üzerinde ihmal edilebilir bir etkiye sahiptir. Hız, hava sıcaklığı ve lastik basıncı menzili önemli ölçüde etkiler."
  },
  {
    id: 29,
    category: "motor",
    question: "DC-DC dönüştürücünün görevi nedir?",
    options: [
      "AC'yi DC'ye dönüştürmek",
      "Yüksek voltaj bataryadan düşük voltaj sistemlere enerji sağlamak",
      "Motor gücünü artırmak",
      "Batarya kapasitesini artırmak"
    ],
    correct: 1,
    explanation: "DC-DC dönüştürücü, yüksek voltajlı batarya paketinden (400V) 12V düşük voltaj sistemlere (ışıklar, elektronikler) enerji sağlar."
  },
  {
    id: 30,
    category: "sarz",
    question: "Bir aracın 100 km'de 18 kWh enerji tükettiği biliniyor. 88 kWh batarya ile teorik menzil ne kadardır?",
    options: [
      "388 km",
      "488 km",
      "588 km",
      "688 km"
    ],
    correct: 1,
    explanation: "Teorik menzil = Batarya kapasitesi / Enerji tüketimi = 88 kWh / 18 kWh/100km = 488 km. Gerçek menzil sürüş koşullarına bağlı olarak değişir."
  },
  {
    id: 31,
    category: "teknoloji",
    question: "Togg'un ikinci modeli hangisidir?",
    options: [
      "Togg C-Hatchback",
      "Togg D-SUV",
      "Togg X-Coupe",
      "Togg B-Sedan"
    ],
    correct: 0,
    explanation: "Togg'un ikinci modeli C-Hatchback olarak duyurulmuştur. Şirket dört farklı segmentte (C-SUV, C-Hatchback, D-SUV, D-Sedan) araç üretmeyi planlamaktadır."
  },
  {
    id: 32,
    category: "cevre",
    question: "Türkiye'nin ilk yerli elektrikli otomobili olma özelliği Togg'a aittir. Bu araç hangi şehirde üretilmektedir?",
    options: [
      "İstanbul",
      "Ankara",
      "Bursa (Gemlik)",
      "İzmir"
    ],
    correct: 2,
    explanation: "Togg, Bursa'nın Gemlik ilçesinde bulunan ve 'Teknoloji Vadisi' olarak adlandırılan üretim tesisinde üretilmektedir."
  },
  {
    id: 33,
    category: "motor",
    question: "Elektrikli araçlarda neden vites kutusu (şanzıman) ihtiyacı azdır?",
    options: [
      "Maliyet tasarrufu sağlar",
      "Elektrik motorları geniş bir hız aralığında yüksek verimlilik sunar",
      "Ağırlığı azaltır",
      "Güvenlik gereksinimidir"
    ],
    correct: 1,
    explanation: "Elektrik motorları 0'dan maksimum hıza kadar yüksek tork ve verimlilik sağlayabilir. Bu nedenle çok katlı vites kutusuna gerek kalmaz, tek vites yeterlidir."
  },
  {
    id: 34,
    category: "batarya",
    question: "Batarya sağlığı (SOH - State of Health) neyi ifade eder?",
    options: [
      "Anlık şarj seviyesi",
      "Bataryanın orijinal kapasitesine kıyasla mevcut kapasitesi",
      "Batarya sıcaklığı",
      "Batarya voltajı"
    ],
    correct: 1,
    explanation: "SOH (State of Health), bataryanın zaman içinde ne kadar aşındığını gösterir. %100 SOH, bataryanın hala orijinal kapasitesinde olduğu anlamına gelir."
  },
  {
    id: 35,
    category: "sarz",
    question: "Togg'un batarya garantisi kaç yıldır veya kaç km'dir?",
    options: [
      "5 yıl / 100.000 km",
      "8 yıl / 160.000 km",
      "10 yıl / 200.000 km",
      "Ömür boyu garanti"
    ],
    correct: 1,
    explanation: "Togg, batarya için 8 yıl veya 160.000 km (hangisi önce dolursa) garanti sunmaktadır. Bu, sektör standartlarına uygun bir garantidir."
  },
  {
    id: 36,
    category: "teknoloji",
    question: "Togg'un otomatik park sistemi hangi sensörleri kullanır?",
    options: [
      "Sadece ultrasonik sensörler",
      "Ultrasonik sensörler ve kameralar",
      "Sadece kameralar",
      "Radar sensörleri"
    ],
    correct: 1,
    explanation: "Togg'un otomatik park sistemi, çevreyi algılamak için ultrasonik sensörler ve kameraların kombinasyonunu kullanır."
  },
  {
    id: 37,
    category: "cevre",
    question: "Elektrikli araçların üretim sürecinde karbon ayak izi neden daha yüksektir?",
    options: [
      "Daha fazla işçilik gerektirir",
      "Batarya üretiminin enerji yoğun süreç olması",
      "Daha büyük fabrika gerektirir",
      "Daha pahalı malzemeler kullanılır"
    ],
    correct: 1,
    explanation: "Batarya üretimi enerji yoğun bir süreçtir. Ancak kullanım sürecinde sağlanan emisyon tasarrufuyla bu fark kısa sürede telafi edilir."
  },
  {
    id: 38,
    category: "motor",
    question: "Hibrit araçlarda '串行 hybrid' (seri hibrit) ne anlama gelir?",
    options: [
      "İki elektrik motoru var",
      "İç yanmalı motor sadece jeneratör olarak çalışır, tekerlekleri doğrudan sürmez",
      "İki batarya var",
      "Dört tekerlekten çekiş var"
    ],
    correct: 1,
    explanation: "Seri hibritte, iç yanmalı motor sadece jeneratör görevi görür ve bataryayı şarj eder. Tekerlekler tamamen elektrik motoru tarafından süpürülür."
  },
  {
    id: 39,
    category: "teknoloji",
    question: "Togg'un arka görüş kamerası hangi özelliği sunar?",
    options: [
      "Gece görüşü",
      "180 derece geniş açı",
      "Su geçirmez lens",
      "Kayıt özelliği"
    ],
    correct: 1,
    explanation: "Togg'un arka görüş kamerası geniş açı lens ile 180 derece görüş sağlar ve dijital iç ayna sistemiyle entegre çalışır."
  },
  {
    id: 40,
    category: "cevre",
    question: "Togg'un 'kullanım ömrü sonu' batarya stratejisi hakkında hangisi doğrudur?",
    options: [
      "Geri dönüşüm yok, çöp sahnesine gider",
      "Enerji depolama sistemlerinde ikinci yaşam kullanımı",
      "Sadece Türkiye'de işlenir",
      "Okyanusa bırakılır"
    ],
    correct: 1,
    explanation: "Togg, kullanım ömrünü tamamlayan bataryaları enerji depolama sistemlerinde (ESS) ikinci yaşam uygulamaları için değerlendirmektedir."
  }
];
