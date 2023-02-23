# developing-code-quiz

This is for the week 4 assignment

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Actual Behaviour

```
WHEN you click 'start quiz'
THEN you are presented with a question with 3 answers,
THEN a timer for 60 seconds begins counting down.
WHEN you click the correct answer 'correct' appears,
IF you click a wrong answer 'wrong, the answer is...' appears
THEN 10 seconds is deducted from your time left.
WHEN time is up you can submit your initials
THEN your score is saved to local storage
AND you can view your highscores AND clear high scores OR 'go back' to the beginning.
IF you do not answer any questions after 'start quiz' is clicked
THEN time will run out and 'TIME IS UP! You scored 0'.
```

## Links for the project

```
GIF: ![Code Quiz (1)](https://user-images.githubusercontent.com/122907573/221030675-9491f113-dafb-44e0-a643-a91b6a558fd9.gif)

[Link to deployed website](https://faithscoding.github.io/developing-code-quiz/)

```
