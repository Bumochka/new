document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const scoreMessage = document.getElementById('score-message');
    const answerExplanations = document.getElementById('answer-explanations');
 const tryAgainButton = document.querySelector('.try-again-button')
    const correctAnswers = {
        q1: 'c',
        q2: 'c',
        q3: 'a',
        q4: 'a',
        q5: 'd',
        q6: 'c',
        q7: 'b',
        q8: 'c',
        q9: 'b',
        q10: 'b',
    };
    const explanations = {
        q1: ' содержать цифры и буквы, знаки препинания и быть сложным для угадывания',
        q2: ' Фишинг',
        q3: ' реквизит электронного документа, предназначенный для защиты данного документа от подделки, позволяющий идентифицировать владельца, а также установить отсутствие искажения информации в электронном документе',
        q4: ' Владелец сети',
        q5: ' Аутентификация',
        q6: ' Атака на компьютерную систему крупного предприятия',
        q7: ' Троянские программы',
         q8: ' Android',
         q9: ' Троллинг',
         q10: ' Компьютерные сети, базы данных',
    };
    
    tryAgainButton.addEventListener('click', function() {
         resultContainer.style.display = 'none';
         quizForm.reset();
     })
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let score = 0;
        let explanationsHTML = '';


        for (const questionId in correctAnswers) {
             const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
             if (selectedAnswer) {
                   if(selectedAnswer.value === correctAnswers[questionId]) {
                       score++
                   }
                    explanationsHTML += `<p><strong>Вопрос:</strong> ${document.querySelector(`.question[data-question-id="${questionId.slice(1)}"] p`).textContent}<br>
                    <strong>Ваш ответ:</strong> ${selectedAnswer.parentNode.textContent}<br>
                     <strong>Правильный ответ:</strong> ${correctAnswers[questionId]}<br>`;
            }
         else {
                explanationsHTML += `<p><strong>Вопрос:</strong> ${document.querySelector(`.question[data-question-id="${questionId.slice(1)}"] p`).textContent}<br>
                    <strong>Ваш ответ:</strong> Вы не выбрали ответ.<br>
                     <strong>Правильный ответ:</strong> ${correctAnswers[questionId]}<br>`;
                }
        }
        
          let scoreMessageText = '';
        if (score >= 7) {
            scoreMessageText = 'Ты набрал ' + score*10 + '% ' + 'Отлично! Ты хорошо разбираешься в кибербезопасности. Продолжай в том же духе!';
        } else if (score >= 5) {
            scoreMessageText = 'Ты набрал ' + score*10 + '% ' + 'Хорошо! У тебя есть базовые знания, но есть куда расти. Ознакомься с материалами на нашем сайте, чтобы узнать больше.';
        } else {
            scoreMessageText = 'Ты набрал ' + score*10 + '% ' + 'Нужно поработать! Не переживай, мы здесь, чтобы помочь тебе. Изучи наши материалы, и ты станешь экспертом в кибербезопасности.';
        }
        scoreMessage.textContent = scoreMessageText;
        answerExplanations.innerHTML = explanationsHTML;
        resultContainer.style.display = 'block';


    });
});