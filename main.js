const state = {
  currentQuestion: 0,
  answers: {},
  score: 0,
  correct: 0,
  wrong: 0,
  empty: 0,
  timerInterval: null,
  seconds: 0,
  filter: 'all',
  examFinished: false,
  showSolutions: false
};

const elements = {
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  scoreDisplay: document.getElementById('scoreDisplay'),
  correctCount: document.getElementById('correctCount'),
  wrongCount: document.getElementById('wrongCount'),
  emptyCount: document.getElementById('emptyCount'),
  questionNumber: document.getElementById('questionNumber'),
  questionCategory: document.getElementById('questionCategory'),
  questionText: document.getElementById('questionText'),
  questionImage: document.getElementById('questionImage'),
  optionsContainer: document.getElementById('optionsContainer'),
  answerFeedback: document.getElementById('answerFeedback'),
  solutionContainer: document.getElementById('solutionContainer'),
  solutionText: document.getElementById('solutionText'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  skipBtn: document.getElementById('skipBtn'),
  showSolutionBtn: document.getElementById('showSolutionBtn'),
  nextNavBtn: document.getElementById('nextNavBtn'),
  questionDots: document.getElementById('questionDots'),
  finishExamBtn: document.getElementById('finishExamBtn'),
  reviewBtn: document.getElementById('reviewBtn'),
  timerDisplay: document.getElementById('timer'),
  resultModal: document.getElementById('resultModal')
};

function getFilteredQuestions() {
  if (state.filter === 'all') return questions;
  return questions.filter(q => q.category === state.filter);
}

function init() {
  createDots();
  renderQuestion();
  startTimer();
  setupEventListeners();
}

function createDots() {
  const filtered = getFilteredQuestions();
  elements.questionDots.innerHTML = '';
  
  filtered.forEach((q, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.textContent = q.id;
    dot.dataset.index = index;
    
    if (state.answers[q.id] !== undefined) {
      if (state.answers[q.id] === q.correct) {
        dot.classList.add('correct');
      } else if (state.answers[q.id] === -1) {
        dot.classList.add('empty');
      } else {
        dot.classList.add('wrong');
      }
    }
    
    if (index === state.currentQuestion) {
      dot.classList.add('active');
    }
    
    dot.addEventListener('click', () => goToQuestion(index));
    elements.questionDots.appendChild(dot);
  });
}

function renderQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (!question) return;
  
  const progress = ((state.currentQuestion + 1) / filtered.length) * 100;
  elements.progressBar.style.width = `${progress}%`;
  elements.progressText.textContent = `${state.currentQuestion + 1} / ${filtered.length}`;
  
  elements.questionNumber.textContent = `Soru ${question.id}`;
  elements.questionCategory.textContent = getCategoryLabel(question.category);
  
  elements.questionText.textContent = question.question;
  elements.questionImage.innerHTML = '';
  
  elements.optionsContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = index;
    
    const isAnswered = state.answers[question.id] !== undefined;
    const selectedAnswer = state.answers[question.id];
    
    if (isAnswered) {
      btn.classList.add('disabled');
      if (index === question.correct) {
        btn.classList.add('correct');
      } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
        btn.classList.add('wrong');
      }
    }
    
    if (selectedAnswer === index && !isAnswered) {
      btn.classList.add('selected');
    }
    
    btn.innerHTML = `
      <span class="option-label">${labels[index]}</span>
      <span class="option-text">${option}</span>
    `;
    
    if (!isAnswered) {
      btn.addEventListener('click', () => selectAnswer(index));
    }
    
    elements.optionsContainer.appendChild(btn);
  });
  
  elements.answerFeedback.style.display = 'none';
  elements.answerFeedback.className = 'answer-feedback';
  
  if (state.answers[question.id] !== undefined) {
    const isCorrect = state.answers[question.id] === question.correct;
    elements.answerFeedback.textContent = isCorrect ? '✓ Doğru Cevap!' : '✗ Yanlış Cevap';
    elements.answerFeedback.classList.add(isCorrect ? 'correct' : 'wrong');
    elements.answerFeedback.style.display = 'block';
    
    if (state.showSolutions) {
      elements.solutionContainer.classList.add('visible');
      elements.solutionText.textContent = question.explanation;
    }
  } else {
    elements.solutionContainer.classList.remove('visible');
  }
  
  elements.prevBtn.disabled = state.currentQuestion === 0;
  elements.nextNavBtn.disabled = state.currentQuestion === filtered.length - 1;
  
  updateStats();
  createDots();
}

function selectAnswer(index) {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (state.answers[question.id] !== undefined) return;
  
  state.answers[question.id] = index;
  
  if (index === question.correct) {
    state.correct++;
    state.score += 10;
  } else {
    state.wrong++;
  }
  
  renderQuestion();
}

function skipQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (state.answers[question.id] === undefined) {
    state.answers[question.id] = -1;
    state.empty++;
  }
  
  nextQuestion();
}

function showSolution() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  state.showSolutions = true;
  elements.solutionContainer.classList.add('visible');
  elements.solutionText.textContent = question.explanation;
  elements.showSolutionBtn.textContent = 'Açıklamayı Gizle';
  elements.showSolutionBtn.onclick = hideSolution;
}

function hideSolution() {
  state.showSolutions = false;
  elements.solutionContainer.classList.remove('visible');
  elements.showSolutionBtn.textContent = 'Açıklamayı Göster';
  elements.showSolutionBtn.onclick = showSolution;
}

function nextQuestion() {
  const filtered = getFilteredQuestions();
  if (state.currentQuestion < filtered.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
}

function goToQuestion(index) {
  state.currentQuestion = index;
  renderQuestion();
}

function updateStats() {
  elements.scoreDisplay.textContent = state.score;
  elements.correctCount.textContent = state.correct;
  elements.wrongCount.textContent = state.wrong;
  elements.emptyCount.textContent = state.empty;
}

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.seconds++;
    const mins = Math.floor(state.seconds / 60);
    const secs = state.seconds % 60;
    elements.timerDisplay.innerHTML = `
      <span class="timer-icon">⏱</span>
      <span id="timerDisplay">${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}</span>
    `;
    
    if (state.seconds % 1800 === 0) {
      elements.timerDisplay.classList.add('warning');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

function finishExam() {
  const filtered = getFilteredQuestions();
  
  filtered.forEach(q => {
    if (state.answers[q.id] === undefined) {
      state.answers[q.id] = -1;
      state.empty++;
    }
  });
  
  state.examFinished = true;
  stopTimer();
  showResults();
}

function showResults() {
  const filtered = getFilteredQuestions();
  const total = filtered.length;
  const percentage = Math.round((state.correct / total) * 100);
  
  document.getElementById('resultTotal').textContent = total;
  document.getElementById('resultCorrect').textContent = state.correct;
  document.getElementById('resultWrong').textContent = state.wrong;
  document.getElementById('resultEmpty').textContent = state.empty;
  document.getElementById('resultGrade').textContent = `${percentage}%`;
  
  let message = '';
  if (percentage >= 90) {
    message = 'Mükemmel! Togg konusunda çok iyisin! 🎉';
  } else if (percentage >= 70) {
    message = 'Tebrikler! Elektrikli araç konusunda bilgilisin! 👏';
  } else if (percentage >= 50) {
    message = 'İyi bir başlangıç! Biraz daha çalışmanda fayda var. 📚';
  } else {
    message = 'Daha fazla çalışmaya ihtiyacın var. Togg ve elektrikli araçlar hakkında daha fazla bilgi edin! 💪';
  }
  document.getElementById('resultMessage').textContent = message;
  
  elements.resultModal.classList.add('active');
}

function closeModal() {
  elements.resultModal.classList.remove('active');
}

function retryExam() {
  state.currentQuestion = 0;
  state.answers = {};
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.empty = 0;
  state.examFinished = false;
  state.showSolutions = false;
  state.seconds = 0;
  
  elements.resultModal.classList.remove('active');
  elements.showSolutionBtn.textContent = 'Açıklamayı Göster';
  elements.showSolutionBtn.onclick = showSolution;
  elements.timerDisplay.classList.remove('warning');
  
  createDots();
  renderQuestion();
  startTimer();
}

function reviewAnswers() {
  state.examFinished = true;
  state.currentQuestion = 0;
  state.showSolutions = true;
  
  closeModal();
  renderQuestion();
}

function getCategoryLabel(category) {
  const labels = {
    motor: 'Elektrik Motoru',
    batarya: 'Batarya',
    sarz: 'Şarj',
    teknoloji: 'Teknoloji',
    cevre: 'Çevre'
  };
  return labels[category] || category;
}

function setupEventListeners() {
  elements.prevBtn.addEventListener('click', prevQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.nextNavBtn.addEventListener('click', nextQuestion);
  elements.skipBtn.addEventListener('click', skipQuestion);
  elements.showSolutionBtn.addEventListener('click', showSolution);
  elements.finishExamBtn.addEventListener('click', finishExam);
  elements.reviewBtn.addEventListener('click', reviewAnswers);
  
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  document.getElementById('retryBtn').addEventListener('click', retryExam);
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      state.currentQuestion = 0;
      createDots();
      renderQuestion();
    });
  });
  
  elements.resultModal.addEventListener('click', (e) => {
    if (e.target === elements.resultModal) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
