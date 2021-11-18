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
        question: "コードを書くことに疲れたときはどうするのが良いか。",
        answers: ["温泉に浸かる", "ビールを飲む", "更にコードを書く"],
        correct: 2,
        title: 3,
    },
    {
        question: "自分よりプログラミングが上手い人を見つけた際はどうするのが良いか。",
        answers: ["PCにウイルスを仕掛ける", "キーボードに水をたらす", "じっくり研究し良いところを真似る"],
        correct: 2,
        title: 4,
    },
    {
        question: "問題５の内容",
        answers: ["回答１", "回答２", "回答３"],
        correct: 2,
        title: 5,
    },
    {
        question: "問題６の内容",
        answers: ["回答１", "回答２", "回答３"],
        correct: 2,
        title: 6,
    },
    {
        question: "問題６の内容",
        answers: ["回答１", "回答２", "回答３"],
        correct: 2,
        title: 7,
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

//正解数集計用の定義
var correctnum = 1;


$("button").on("click", function (e) {
    if (Number(e.target.value) === quiz[result.length].correct) {
        $("#result").text("正解！！！");
        // 結果を配列に追加
        result.push("ok");
        //正解数を積み上げ
        var correctnum_total = correctnum++



    } else {
        $("#result").text("不正解．．．");
        // 結果を配列に追加
        result.push("ng");
        var correctnum_total = correctnum + 0

    }



    // 問題文と選択肢を更新
    $("#question").text(quiz[result.length].question);
    $("#answer00").text(quiz[result.length].answers[0]);
    $("#answer01").text(quiz[result.length].answers[1]);
    $("#answer02").text(quiz[result.length].answers[2]);

    //n問目更新
    $("#title").text("第 " + quiz[result.length].title + " 問");

    console.log(correctnum_total)

    //最終問が終わったときの挙動
    if ((quiz[result.length].title) === 7) {
        //「終了」アラートを表示
        alert("終わり！")

        //回答数表示    
        $("#correct_total").text("あなたの正解数は" + correctnum_total + "でした！")

        //正解数が3か6の時ナベアツ表示
        if (correctnum_total === 3 || correctnum_total === 6) {
            $("#img").attr("src", "img/nabeatsu.jpg");
        }

        //正解率を表示  
        $("#correct_per").text("あなたの正解率は" + new Intl.NumberFormat('ja', { style: 'percent' }).format(correctnum_total / 6) + "でした！")



    }



});