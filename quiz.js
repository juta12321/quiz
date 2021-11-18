// quiz01.html

// ↓問題文（設定済み）
const quiz = [
    {
        question: "プログラミングにおいて次の3つの中で最も重要なもの？？",
        answers: ["知性", "コード量", "体格"],
        correct: 1,
        title: 1,
    },
    {
        question: "課題をつくるときに大事なことは？？",
        answers: ["斬新なアイデア", "コミットする時間", "洗練されたコード"],
        correct: 1,
        title: 2,
    },
    {
        question: "コードを書くことに疲れたときはどうするのがよいか．",
        answers: ["温泉に浸かる", "ビールを飲む", "更にコードを書く"],
        correct: 2,
        title: 3,
    },
    {
        question: "コードを書くことに疲れたときはどうするのがよいか．",
        answers: ["温泉に浸かる", "ビールを飲む", "更にコードを書く"],
        correct: 2,
        title: 4,
    },




];



// 1. 結果記録用の配列を用意
const result = [];

// 2. 問題文の表示
$("#question").text(quiz[result.length].question);

// 3. 選択肢の表示
$("#answer00").text(quiz[result.length].answers[0]);
$("#answer01").text(quiz[result.length].answers[1]);
$("#answer02").text(quiz[result.length].answers[2]);

// 4. `value`の設定
$("#answer00").val(0);
$("#answer01").val(1);
$("#answer02").val(2);


$("button").on("click", function (e) {
    if (Number(e.target.value) === quiz[result.length].correct) {
        $("#result").text("正解！！！");
        // 結果を配列に追加
        result.push("ok");
    } else {
        $("#result").text("不正解．．．");
        // 結果を配列に追加
        result.push("ng");
    }

    // 問題文と選択肢を更新
    $("#question").text(quiz[result.length].question);
    $("#answer00").text(quiz[result.length].answers[0]);
    $("#answer01").text(quiz[result.length].answers[1]);
    $("#answer02").text(quiz[result.length].answers[2]);

    //n問目更新
    $("#title").text(quiz[result.length].title);

    //最終問が終わったら「終了」アラートを表示
    console.log(quiz[result.length].title)
    if ((quiz[result.length].title) === 4) {
        alert("終わり！")
    }

});