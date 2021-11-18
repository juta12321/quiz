// quiz01.html

// ↓問題文（設定済み）
const quiz = {
    question: "プログラミングにおいて次の3つの中で最も重要なものはなにか．",
    answers: ["知性", "コード量", "体格"],
    correct: 1,
};

// 1. 問題文の表示
$("#question").text(quiz.question);

// 2. 選択肢の表示
$("#answer00").text(quiz.answers[0]);
$("#answer01").text(quiz.answers[1]);
$("#answer02").text(quiz.answers[2]);

// 3. `value`の設定
$("#answer00").val(0);
$("#answer01").val(1);
$("#answer02").val(2);


$("button").on("click", function (e) {
    // 1, 2 `value`を受け取り，条件分岐
    if (Number(e.target.value) === quiz.correct) {
        // 正解の表示
        $("#result").text("正解！！！");
        alert("正解")
    } else {
        // 不正解の表示
        $("#result").text("不正解．．．");
        alert("不正解．．．")
    }
});