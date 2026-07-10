//Quiz Elements
let choices_dspy = document.getElementById("choices");
let answer_counter_dspy = document.getElementById("answerd_counts");
let settings_dspy = document.getElementsByClassName("initial_settings")[0];
let ans_htry_dspy = document.getElementById("answer_history");
let submit_rpt_button = document.getElementById("report");
let time_hours = document.getElementsByClassName("hours")[0];
let time_minutes = document.getElementsByClassName("minutes")[0];
let time_seconds = document.getElementsByClassName("seconds")[0];
let timer_dspy = document.getElementsByClassName("timerOutput")[0];

let question_with_answers = "";

function timerStart() {
    time_seconds.style.animation = "none";
    time_seconds.offsetHeight;
    time_seconds.style.removeProperty("animation");
    time_seconds.style.setProperty("--delay-seconds", "0s");
    
    time_minutes.style.animation = "none";
    time_minutes.offsetHeight;
    time_minutes.style.removeProperty("animation");
    time_minutes.style.setProperty("--delay-minutes", "0s");
    
    time_hours.style.animation = "none";
    time_hours.offsetHeight;
    time_hours.style.removeProperty("animation");
    time_hours.style.setProperty("--delay-hours", "0s");

    try {
        time_hours.classList.remove("paused");
        time_minutes.classList.remove("paused");
        time_seconds.classList.remove("paused");
    } catch (err) {
    }
}
function timerStops() {
    time_hours.classList.add("paused");
    time_minutes.classList.add("paused");
    time_seconds.classList.add("paused");
}

function shuffleArray(array) {// randomizing function
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function show_Ans_List() {//showing summary of the quiz
    let tbl_dspy = document.getElementsByClassName("ans_list")[0];
    tbl_dspy.innerHTML ="";

    for (let i = 0; i < quiz_total; i++) {
        let tbl_row = document.createElement("tr");
        let question_arr = [ quiz_kanji[ quiz_randomized[ i ] ], quiz_answer[ quiz_randomized[ i ] ], user_answer_list[ i ] ];
        let td_array = [];

            let q_number = document.createElement("td");
            q_number.innerHTML = i+1;
            tbl_row.appendChild(q_number);

        for (let j = 0; j < 3; j++) {
            let tbl_dt = document.createElement("td");
            tbl_dt.innerHTML = question_arr[j];
            if (j == 0) {
                tbl_dt.className = "kanji_q_list";
            } 
            else if (j == 1) {
                tbl_dt.className = "kanji_ans_list";
            }
            else if (j == 2 && question_arr[j] != "") {
                tbl_dt.className = "red_border";
            }
            tbl_row.appendChild(tbl_dt);
        }
        tbl_dspy.appendChild(tbl_row);
    }
}

function showQuizElements() {//showing quiz visual and hiding settings ui
    choices_dspy.style.display = "grid";
    answer_counter_dspy.style.display = "block";
    kanji_out.style.display = "block";
    settings_dspy.style.display = "none";
    btn_start.style.display = "none";
    prev_kanji_dspy.style.display = "none";
    submit_rpt_button.style.display = "none";
    
    ans_htry_dspy.style.display = "none";
    timer_dspy.style.display = "flex";
    timerStart();
}

function hideQuizElements() {//inverted function of showQuizElements
    prev_kanji_dspy.style.display = "none";
    choices_dspy.style.display = "none";
    kanji_out.style.display = "none";
    settings_dspy.style.display = "block";
    btn_start.style.display = "inline";
    submit_rpt_button.style.display = "block";


    ans_htry_dspy.style.display = "flex";
    show_Ans_List();
    timerStops();
}

function testFuncSeeQuiz() {
    console.log(quiz_kanji);
    console.log(quiz_answer);
    console.log(quiz_randomized);
    let question_list = "";
    for (let i = 0; i < quiz_total; i++) {
        question_list += quiz_kanji [ quiz_randomized [ i ] ] + " : " + quiz_answer[ quiz_randomized[ i ] ] + "\n";
    }
    console.log(question_list);
}

function testFuncSeeCurrentQ() {//getting current question and choices and adding them to text string
    let choices_in_current_question = "";
    for (let i = 0; i < 4; i++) {
        choices_in_current_question += get_q_btns[ i ].innerHTML + "\n";
    }
    question_with_answers += (current_question+1) + ": " + 
                            quiz_kanji[ quiz_randomized [ current_question ] ] + "\n" + 
                            choices_in_current_question + "\n"; 
}

function reportFunc() {//adding kanji, answer list, question list, and the flow of question (for analyzing)
    let report_conclusion = "";
    let ans_count = quiz_randomized.length;

    report_conclusion = "Question Data\n\n";
    for (let i = 0; i < quiz_total; i++) {
        report_conclusion += (i+1) + " : " + quiz_kanji[ i ] + " " + quiz_answer[ i ] + "\n";
    }
    report_conclusion += "\n\nQuestion Sequence with Ans List\n\n";
    for (let i = 0; i < ans_count; i++) {
        if (i >= quiz_total) {
            report_conclusion += (i+1) + " :  " + quiz_answer[ quiz_randomized[i] ] + "\n";
        } else {
            report_conclusion += (i+1) + " : " + quiz_kanji[ quiz_randomized[i] ] + " " + quiz_answer[ quiz_randomized[i] ] + "\n";
        }
    }
    
    report_conclusion += "\n\nQuiz Run Time\n\n";
    
    report_conclusion += question_with_answers;
    navigator.clipboard.writeText(report_conclusion);
    alert("Copied");
     //console.log(report_conclusion);
}

submit_rpt_button.onclick = reportFunc;

function testOut(data) {//testing output for insuring correct index
    let index_correction = data -1;
    if (index_correction > 583 && index_correction < 669) {
        index_correction--;
    } else if (index_correction > 668) {
        index_correction-=2;
    }
    console.log(kanji_meaning[index_correction]);
}
