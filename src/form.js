// 英語の半角→全角の変換
function alphHankaku2Zenkaku(str) {
  return str.replace(/[A-Za-z]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
  });
}
function numZenkaku2Hankaku(str) {
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
}

// ハーメルン式のルビからhtmlを生成
function harmelnRuby2Html(str) {
  s = str.replace(/\|/g, "<ruby><rb>");
  s = s.replace(/《/g, "</rb><rp>（</rp><rt>");
  s = s.replace(/》/g, "</rt><rp>）</rp></ruby>");
  return s;
}

function textcopy() {
  // エフェクトの内容を取得

  let e_name = document.getElementById("e-name").value;
  let maxlv = document.getElementById("maxlv").value;
  let timing = document.getElementById("timing").value;
  if (timing === "free") {
    timing = document.getElementById("timing-free").value;
  }
  let skill = document.getElementById("skill").value;
  let difficulty = document.getElementById("difficulty").value;
  if (difficulty === "free") {
    difficulty = document.getElementById("difficulty-free").value;
  }
  let target = document.getElementById("target").value;
  if (target === "free") {
    target = document.getElementById("target-free").value;
  }
  let range = document.getElementById("range").value;
  if (range === "free") {
    range = document.getElementById("range-free").value;
  }
  let cost = document.getElementById("cost").value;
  if (cost === "free") {
    cost = document.getElementById("cost-free").value;
  }

  let limit = document.getElementById("limit").value;
  if (limit === "free") {
    limit = document.getElementById("limit-free").value;
  }
  let effect = document.getElementById("effect").value;
  console.log("e-name:" + e_name);
  console.log("maxlv:" + maxlv);
  console.log("timing:" + timing);
  console.log("effect:" + effect);

  // 文字列処理
  // ルビのhtml化
  e_name = harmelnRuby2Html(e_name);
  // "ー"にする処理
  if (maxlv == "0" || maxlv == "") {
    maxlv = "ー";
  }
  // 英語の全角化
  effect = alphHankaku2Zenkaku(effect);
  // 数字の半角化
  effect = numZenkaku2Hankaku(effect);
  // 改行の反映
  effect = effect.replace(/\n/g, "<br>");

  // 下枠の要素の中を指定内容で書き換え
  document.getElementsByClassName("e-name-value")[0].innerHTML = e_name;
  document.getElementsByClassName("e-maxlv-value")[0].innerHTML = maxlv;
  document.getElementsByClassName("e-timing-value")[0].innerHTML = timing;
  document.getElementsByClassName("e-skill-value")[0].innerHTML = skill;
  document.getElementsByClassName("e-difficulty-value")[0].innerHTML =
    difficulty;
  document.getElementsByClassName("e-target-value")[0].innerHTML = target;
  document.getElementsByClassName("e-range-value")[0].innerHTML = range;
  document.getElementsByClassName("e-cost-value")[0].innerHTML = cost;
  document.getElementsByClassName("e-limit-value")[0].innerHTML = limit;
  document.getElementsByClassName("e-effect-value")[0].innerHTML = effect;
}

function changeWatermark() {
  console.log("watermark changing..");
  checked = document.getElementById("toggle").checked;
  if (checked == true) {
    document.getElementsByClassName("watermark")[0].innerHTML =
      "自作<br>　エフェクト";
  } else {
    document.getElementsByClassName("watermark")[0].innerHTML = "";
  }
}
