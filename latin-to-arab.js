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
    }
    return arabicText;
  }
  // Contoh penggunaan
  const textLatin = "abc";
  const textArabic = latinToArabic(textLatin);
  console.log(textArabic); // Output: "ا ب ت"