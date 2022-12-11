function addUser()
{
    P1 = document.getElementById("P1_input").value;
    P2 = document.getElementById("P2_input").value;

localStorage.setItem("P1", P1);
localStorage.setItem("P2", P2);

window.location.replace("game_page.html")
}

function chose_no()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "<h4>"+ number_1 +"X"+ number_2+"</h4>"
input_box = "<br>Answer : input type='text' id='input_check_box'>"
check_button="<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = " ";
document.getElementById("number_2").value = " ";

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box ").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else      
          {
            update_player2_score = player2_score +1;
            document.getElementById("player1_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else 
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
}

