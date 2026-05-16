const questions = {
  pop: [
    {
    lyric: "Keep it one hundred on the…",
    answer: "low",
    choices: ["low", "floor", "go", "show"],
    video: "ko70cExuzZM",
    start: 73,
    end: 74
  },
  {
    lyric: "I take one look at you you’re taking me out…",
    answer: "of the ordinary",
    choices: ["of the normal", "of the amazing", "of the ordinary", "of the lovely"],
    video: "byxFUKxhT3s",
    start: 32,
    end: 35
  },
  {
    lyric: "Hottie hottie, like a bag of…",
    answer: "takis",
    choices: ["chips", "takis", "flames", "snacks"],
    video: "MEv8cNXi8tw",
    start: 45,
    end: 48
  },
  {
    lyric: "Just come be the…",
    answer: "man I need",
    choices: ["man I need", "one I want", "love I see", "guy for me"],
    video: "JGKgbmz_gcU",
    start: 57,
    end: 59
  },
  {
    lyric: "I would like a…",
    answer: "husband",
    choices: ["husband", "lover", "boyfriend", "wedding"],
    video: "Dml0JEgRpc0",
    start: 139,
    end: 140
  },
  {
    lyric: "In a room full of people…",
    answer: "I look for you",
    choices: ["I look for you", "I see only you", "I wait for you", "I think of you"],
    video: "TMf9RrPZDSY",
    start: 67,
    end: 68
  },
  {
    lyric: "Haven’t you heard I’m the…",
    answer: "internet girl",
    choices: ["internet girl", "it girl", "pretty girl", "main girl"],
    video: "WafvNKk7Tco",
    start: 0,
    end: 2
  },
  {
    lyric: "Cause you're hot then you're…",
    answer: "cold",
    choices: ["bold", "cold", "gone", "mine"],
    video: "kTHNpusq654",
    start: 32,
    end: 33
  },
  {
    lyric: "And, oh, it’s hard to see you, but…",
    answer: "I wish you well",
    choices: ["I wish you well", "I love you still", "I know you tried", "I see you now"],
    video: "HfpR4tAmI7E",
    start: 40,
    end: 46
  },
  ],

  rap: [
    {
      lyric: "Don't save her, she don't wanna be…",
      answer: "saved",
      choices: ["saved", "changed", "claimed", "named"],
      video: "0EnRK5YvBwU",
      start: 105,
      end: 107
    },
    {
      lyric: "Starships were meant to fly…",
      answer: "hands up and touch the sky",
      choices: [
        "we were born to shine",
        "hands up and touch the sky",
        "we can go all night",
        "baby one more time"
      ],
      video: "g7X9X6TlrUo",
      start: 45,
      end: 49
    },
    {
      lyric: "Girls you know you better, watch out, some guys some guys are only about…",
      answer: "that thing that thing that thing",
      choices: [
        "some guys, some guys",
        "some food, some food",
        "that thing that thing that thing",
        "that girl, that girl, that girl"
      ],
      video: "OYzKrmDYAYQ",
      start: 3,
      end: 12
    },
    {
      lyric: "Princess or queen, tomboy or king, you've heard a lot you've never seen...",
      answer: "Mother Earth, Mother Mary rise to the top, divine feminine I'm feminine",
      choices: [
        "Mother Mary, Mother Mary rise to the top, divine feminine I'm feminine",
        "Mother Earth, Mother Mary rise to the top, divine feminine I'm feminine",
        "rise to the top",
        "Feminine is divine, so you can rise"
      ],
      video: "g7X9X6TlrUo",
      start: 126,
      end: 130
    },
    {
      lyric: "I want it, I got it, I want it, I got it, I want it, I got it, I want it, I got it...",
      answer: "You like my hair? Gee thanks, just bought it, I see it, I like it, I want it, I got it",
      choices: ["I like my hair I like my hair I like my hair", "I want it, I got it, I want it, I got it", "You like my rings?, Gee thanks just bought it", "You like my hair? Gee thanks, just bought it, I see it, I like it, I want it, I got it"],
      video: "QYh6mYIJG2Y",
      start: 59,
      end: 62
    },

  ],

  rnb: [
    {
      lyric: "A tornado flew around my room before you came…",
      answer: "excuse the mess it made",
      choices: [
        "I hope you feel the same",
        "excuse the mess it made",
        "nothing was the same",
        "I never knew your name"
      ],
      video: "6JHu3b-pbh8",
      start: 6,
      end: 11
    }
  ],

  musicals: [
    {
      lyric: "I am not throwing away my…",
      answer: "shot",
      choices: ["dream", "chance", "shot", "name"],
      video: "lZ4UmlFNdSI",
      start: 80,
      end: 83
    },
    {
      lyric: "I mean it's crazy. What? We finish each other's…",
      answer: "sandwiches",
      choices: ["sentences", "sandwiches", "stories", "songs"],
      video: "j6nnoWgbdvg",
      start: 60,
      end: 65
    }
  ]
};

let currentGenre;
let currentQuestion;

function getGenreFromURL() {
  let params = new URLSearchParams(window.location.search);
  return params.get("genre");
}

function setTheme(genre) {
  const colors = {
    pop: "#FF63F6",
    rap: "#A3362A",
    rnb: "#2DAD3B",
    musicals: "#BEABE0"
  };

  document.getElementById("gameBody").style.background = colors[genre];
  document.getElementById("genreTitle").innerText = genre.toUpperCase();
}

function getRandomQuestion() {
  let list = questions[currentGenre];
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}

function shuffleChoices(choices) {
  let shuffled = [...choices];

  for (let i = shuffled.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temp;
  }

  return shuffled;
}

function loadQuestion() {
  currentQuestion = getRandomQuestion();

  document.getElementById("lyric").innerText = currentQuestion.lyric;

  document.getElementById("video").src =
    "https://www.youtube-nocookie.com/embed/" +
    currentQuestion.video +
    "?start=" +
    currentQuestion.start +
    "&end=" +
    currentQuestion.end +
    "&rel=0";

  document.getElementById("result").innerText = "";

  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  let shuffledChoices = shuffleChoices(currentQuestion.choices);

  for (let i = 0; i < shuffledChoices.length; i++) {
    let button = document.createElement("button");
    button.innerText = shuffledChoices[i];
    button.onclick = function () {
      checkAnswer(button, shuffledChoices[i]);
    };
    choicesDiv.appendChild(button);
  }
}

function checkAnswer(button, selectedAnswer) {
  let buttons = document.querySelectorAll("#choices button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;

    if (buttons[i].innerText === currentQuestion.answer) {
      buttons[i].classList.add("correct");
    }
  }

  if (selectedAnswer === currentQuestion.answer) {
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    button.classList.add("wrong");
    document.getElementById("result").innerText = "❌ Wrong!";
  }
}

window.onload = function () {
  currentGenre = getGenreFromURL();

  if (!currentGenre || !questions[currentGenre]) {
    window.location.href = "index.html";
    return;
  }

  setTheme(currentGenre);
  loadQuestion();
};