import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const retunButtonMaling = (inputText) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttomn(戻す)生成
  const returnButton = document.createElement("Button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    alert("戻す");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(returnButton);

  // 完了リストに追加
  document.getElementById("complete-list").appendChild(div);
};

// 未完了リストから指定の親リストを削除
const deleteTargetIncompeteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // buttomn(完了)生成
  const completeButton = document.createElement("Button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteTargetIncompeteList(completeButton.parentNode);

    // // 削除ボタン生成（自作）
    // retunButtonMaling(inputText);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン生成
    const backButton = document.createElement("Button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // buttomn(削除)生成
  const deleteButton = document.createElement("Button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteTargetIncompeteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
