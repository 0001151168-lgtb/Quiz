const respostasCorretas = { q1: 'b', q2: 'd', q3: 'a' , q4: 'b', q5: 'b', q6: 'b', q7: 'c', q8: 'c', q9: 'b', q10: 'b', q11: 'd', q12: 'b', q13: 'b', q14: 'a', q15: 'b' };

const form = document.getElementById('quizForm');
const resultadoEl = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const totalQuestions = Object.keys(respostasCorretas).length;
    const formData = new FormData(form);
    for (let i = 1; i <= totalQuestions;  i++) {
        const key = `q${i}`;
        const userAnswer = formData.get(key);
        const correctAnswer = respostasCorretas[`q${i}`];
        const questionEl = document.querySelector(`.questão[data-q="${i}"]`);
        if (userAnswer === correctAnswer) {
            score++;
            questionEl.classList.add('correct');
            questionEl.classList.remove('wrong');
        } else {
            questionEl.classList.add('wrong');
            questionEl.classList.remove('correct');
        }
    }
    resultadoEl.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;

})


    