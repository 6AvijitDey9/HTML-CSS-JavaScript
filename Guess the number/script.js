var Msg1 = Document.GetElementById("Message1");
var Msg2 = Document.GetElementById("Message2"); 
var Msg3 = Document.GetElementById("Message3"); 
var Answer = Math.Floor(Math.Random() * 100) + 1;
var No_of_guesses = 0;
var Guesses_num = [];

function Play() {
    var User_guess = Document.GetElementById("Guess").Value;
    if (User_guess < 1 || User_guess > 100) {
        Alert("Please Enter A Number Between 1 To 100");
    } else {
        Guesses_num.Push(User_guess);
        No_of_guesses += 1;
        if (User_guess < Answer) {
            Msg1.TextContent = "Your Guess Is Too Low"
            Msg2.TextContent = "No. Of Guesses : " + No_of_guesses;
            Msg3.TextContent = "Guessed Number Are: " + Guesses_num;
        } else if (User_guess > Answer) {
            Msg1.TextContent = "Your Guess Is Too High"
            Msg2.TextContent = "No. Of Guesses : " + No_of_guesses;
            Msg3.TextContent = "Guessed Number Are: " + Guesses_num;
        } else if (User_guess == Answer) {
            Msg1.TextContent = "Yahhhh You Won It!!"
            Msg2.TextContent = "The Number Was " + Answer;
            Msg3.TextContent = " You Guessd It In " + No_of_guesses + "Guesses";
        }
    }
}