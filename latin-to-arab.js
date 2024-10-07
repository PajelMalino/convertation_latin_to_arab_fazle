function latinToArabic(latinText) {
    const arabicAlphabet = {
      a: "ا",
      b: "ب",
      c: "ت",
      d: "ث",
      e: "ج",
      f: "ح",
      g: "خ",
      h: "د",
      i: "ذ",
      j: "ر",
      k: "ز",
      l: "س",
      m: "ش",
      n: "ص",
      o: "ض",
      p: "ط",
      q: "ظ",
      r: "ع",
      s: "غ",
      t: "ف",
      u: "ق",
      v: "ك",
      w: "ل",
      x: "م",
      y: "ن",
      z: "ه",
      " ": " ", // untuk spasi
      // tambahkan lebih banyak sesuai kebutuhan
    };
    let arabicText = "";
    for (let char of latinText.toLowerCase()) {
      arabicText += arabicAlphabet[char] || char; // menggunakan karakter asli jika tidak ada padanan
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
  }
  const arabicMapping = {
    "a": ["ا", "ا", "ا", "ا"], 
    "b": ["ب", "بـ", "ـبـ", "ـب"], 
    "c": ["ج", "جـ", "ـجـ", "ـج"],  
    "d": ["د", "د", "د", "د"],  
    "e": ["ه", "هـ", "ـهـ", "ـه"], 
    "f": ["ف", "فـ", "ـفـ", "ـف"], 
    "g": ["غ", "غـ", "ـغـ", "ـغ"], 
    "h": ["ح", "حـ", "ـحـ", "ـح"], 
    "i": ["ي", "يـ", "ـيـ", "ـي"], 
    "j": ["ي", "يـ", "ـيـ", "ـي"], 
    "k": ["ك", "كـ", "ـكـ", "ـك"], 
    "l": ["ل", "لـ", "ـلـ", "ـل"], 
    "m": ["م", "مـ", "ـمـ", "ـم"], 
    "n": ["ن", "نـ", "ـنـ", "ـن"], 
    "o": ["و", "و", "و", "و"],  
    "p": ["ب", "بـ", "ـبـ", "ـب"], 
    "q": ["ق", "قـ", "ـقـ", "ـق"], 
    "r": ["ر", "ر", "ر", "ر"],  
    "s": ["س", "سـ", "ـسـ", "ـس"], 
    "t": ["ت", "تـ", "ـتـ", "ـت"], 
    "u": ["و", "و", "و", "و"], 
    "v": ["ف", "فـ", "ـفـ", "ـف"],  
    "w": ["و", "و", "و", "و"],  
    "x": ["س", "سـ", "ـسـ", "ـس"],
    "y": ["ي", "يـ", "ـيـ", "ـي"],
    "z": ["ز", "ز", "ز", "ز"],  
  };
  function textToArabicWithHarokat(text) {
    const chars = text.split("");
    let result = "";
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i].toLowerCase();
      const nextChar = chars[i + 1] ? chars[i + 1].toLowerCase() : null;
      const prevChar = chars[i - 1] ? chars[i - 1].toLowerCase() : null;
      if (!arabicMapping[char]) {
        result += char; 
        continue;
      }
      let formIndex = 0; 
      if (prevChar && arabicMapping[prevChar] && arabicMapping[prevChar][3] !== arabicMapping[prevChar][0]) {
        formIndex = 1; 
      }
      if (nextChar && arabicMapping[nextChar] && arabicMapping[nextChar][1] !== arabicMapping[nextChar][0]) {
        formIndex = 2; 
      }
      if (nextChar && !arabicMapping[nextChar]) {
        formIndex = 3;
      }
      result += arabicMapping[char][formIndex];
    }
  
    return arabicText;
    return result;
  }
  
  // Contoh penggunaan
  const textLatin = "abc";
  const textArabic = latinToArabic(textLatin);
  console.log(textArabic); // Output: "ا ب ت"
  (async () => {
    const latinText = await askQuestion('Nama Anda: '); 
    const arabicText = textToArabicWithHarokat(latinText);
    
    console.log(`Teks dalam Arab: ${arabicText}`);
    rl.close();
  })();