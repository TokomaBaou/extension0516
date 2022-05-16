import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//ファイルの拡張子を取得する
let file = "samle.png";
//splitで分割
//得られる配列の結果からpop()で最後の値を取得している→複数の.がある場合があるため。
let file_type = file.split(".").pop();

console.log(file_type);

/**
 * 拡張子が正しいか判定する
 * @param {string}ファイル名.
 * @return {Boolean} true:正しい.
 * */
/**スペース以外の文字で始まって[.csv]で終わる文字（大文字、小文字を区別しない[i]） */
const isCorrectExtension = (name) => {
  const format = new RegExp("([^s]+(\\.(csv))$)", "i");
  return format.test(name);
};

/**
 * ^ 入力の先頭にマッチ
 * ＄　入力の末尾にマッチ
 * \s スペース、タブ、改ページ、改行を含むホワイトスペース文字にマッチ
 * */
