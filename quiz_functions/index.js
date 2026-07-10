let kanji_out = document.getElementById("kanji_character");
let kanji_choicies = document.getElementById("choices");
let answer_A = kanji_choicies.children[0];
let answer_B = kanji_choicies.children[1];
let answer_C = kanji_choicies.children[2];
let answer_D = kanji_choicies.children[3]; 
let choices_btns = [ answer_A, answer_B, answer_C, answer_D ];

//test values
let quiz_kanji = [];
let quiz_answer =[];
let quiz_indexes = [];
let quiz_randomized = [];
let quiz_answer_index = 0;
let current_question = 0;
let correct_answer = 0;
let wrong_answer = 0;
let user_answer_list = [];

let quiz_total = parseInt(document.getElementById("test_count").value);
let start_kanji_index = document.getElementById("index_start").value;

//test start fuction
let btn_start = document.getElementById("btn_start");
let current_q_dspy = document.getElementById("current_quiz");
let right_a_dspy = document.getElementById("right_answer");
let wrong_a_dspy = document.getElementById("wrong_answer");
let prev_kanji_dspy = document.getElementById("right_kanji_mean");

let input_notvalid = () => {
    
    let not_valid_input = false;
    start_kanji_index = parseInt(document.getElementById("index_start").value);
    quiz_total = parseInt(document.getElementById("test_count").value);
    let notif_message = "";

    if (start_kanji_index < 1) {
        notif_message = "Kanji Start : I don't know where to start\n";
    }else if (start_kanji_index > 1768) {
        notif_message = "Kanji Start : I need more\n";
    }
    if (quiz_total < 1) {
        notif_message += "Test Count : I don't want to quiz";
    }else if (quiz_total > 1768) {
        notif_message += "Test Count : I wanna test all day long";
    }
    if (notif_message == "") {
        return false;
    }
    alert(notif_message);
    return true;
}
let starto = (event) => {
    
    if (input_notvalid()) {
        return;
    }
    
    quiz_kanji = [];// value initialize
    quiz_answer =[];
    quiz_indexes = [];
    quiz_randomized = []
    user_answer_list = [];
    quiz_answer_index = 0;
    current_question = 0;
    correct_answer = 0;
    wrong_answer = 0;
    started_quiz = true;
    right_a_dspy.innerHTML = 0;
    wrong_a_dspy.innerHTML = 0;
    
    showQuizElements();
    
    current_q_dspy.innerHTML = current_question+1;
    document.getElementById("total_quiz").innerHTML = "/" + quiz_total;

    let index_correction = parseInt(start_kanji_index) -1;//correcting input(in code first question is started to 0)
        if (index_correction > 583 && index_correction < 669) {// missing 2 numbers in official list (584 & 669)
            index_correction--;
        } else if (index_correction > 668) {
            index_correction-=2;
        }

    let lastIndex =  index_correction + quiz_total;
    
        for (let i = index_correction; i < lastIndex; i++) {// list the questions and answers
            quiz_kanji.push(kanji_character[i]);
            quiz_answer.push(kanji_meaning[i]);     
        }

        for (let i = 0; i < quiz_total; i++) {
            quiz_indexes.push(i);
        }

    quiz_randomized = shuffleArray(quiz_indexes);
    
    for (let i = 0; i < 3; i++) {
        quiz_answer.push(kanji_meaning[i]);
        quiz_indexes.push(quiz_randomized[i]);
    }
    

    kanji_out.innerHTML = quiz_kanji[quiz_randomized[0]];

    let first_random_choices = shuffleArray([ 0, 1, 2, 3]);

    for (;quiz_answer_index < 4; quiz_answer_index++) {
        choices_btns[ first_random_choices[ quiz_answer_index ] ].innerHTML = quiz_answer[ quiz_randomized[ quiz_answer_index ] ];
    }
    //testFuncSeeQuiz();

}

btn_start.onclick = starto;

//choices buttons function


let get_q_btns = document.getElementsByClassName("c_bar");

let quiz_btns = (event) => {

    let this_choice = event.target;
    let user_answer = this_choice.innerHTML;
    prev_kanji_dspy.style.display = "block";
    user_answer_list.push(user_answer);

    testFuncSeeCurrentQ();// <-- for report purposes
    current_q_dspy.innerHTML = current_question+1;
    
    if ( user_answer == quiz_answer[ quiz_randomized[ current_question ] ] ) {//check if user is correct
        correct_answer++;   
        user_answer_list[ user_answer_list.length-1 ] = "";
        prev_kanji_dspy.style.display = "none";
    }else{
        wrong_answer++;
        document.getElementById("prev_kanji").innerHTML = quiz_kanji[ quiz_randomized[ current_question ] ];
        document.getElementById("prev_kanji_ans").innerHTML = quiz_answer[ quiz_randomized[ current_question ] ];
    }
    right_a_dspy.innerHTML = correct_answer;
    wrong_a_dspy.innerHTML = wrong_answer;
    
    if ((current_question+1) >= quiz_total) {//end the quiz if its reach the end
            hideQuizElements();
            return;
        }
    
    for (let i = 0; i < 4; i++) {//replace correct answer to next answer in pointer
        if(quiz_answer[ quiz_randomized[ current_question ] ] == get_q_btns[i].innerHTML){
            get_q_btns[i].innerHTML = quiz_answer[ quiz_randomized[ (quiz_answer_index) ] ];
            break;
        }
    }
    quiz_answer_index++;

    current_question++;//getting ready to next question
    kanji_out.innerHTML = quiz_kanji[ quiz_randomized[ current_question ] ];
}

for (let i = 0; i < 4; i++) {
    get_q_btns[i].onclick = quiz_btns;
}


