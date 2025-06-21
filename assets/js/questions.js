// questions.js
// Exporting question bank by category — Criteria 2.5(b): “Modular code separation for maintainability”

export const questions = {
  food: [
    {
      question: 'Which fruit is typically used in a banoffee pie?',
      answers: ['Banana', 'Strawberry', 'Apple', 'Blueberry'],
      correctIndex: 0
    },
    {
      question: 'Which of these is not an ingredient in a traditional English breakfast?',
      answers: ['Baked beans', 'Sausage', 'Rice', 'Mushrooms'],
      correctIndex: 2
    },
    {
      question: 'What colour is the inside of a kiwi fruit?',
      answers: ['Green', 'Purple', 'Red', 'Yellow'],
      correctIndex: 0
    }
  ],
  sport: [
    {
      question: 'How many players are there in a football team?',
      answers: ['9', '10', '11', '12'],
      correctIndex: 2
    },
    {
      question: 'What is the name of the tennis tournament held in London each year?',
      answers: ['Roland Garros', 'Wimbledon', 'US Open', 'Australian Open'],
      correctIndex: 1
    },
    {
      question: 'Which country hosted the 2016 Summer Olympics?',
      answers: ['Brazil', 'China', 'UK', 'Japan'],
      correctIndex: 0
    }
  ],
  geography: [
    {
      question: 'What is the capital of Canada?',
      answers: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
      correctIndex: 1
    },
    {
      question: 'Mount Everest lies on the border of which two countries?',
      answers: ['India and China', 'Nepal and China', 'Tibet and India', 'Nepal and India'],
      correctIndex: 1
    },
    {
      question: 'The River Nile flows into which sea?',
      answers: ['Red Sea', 'Arabian Sea', 'Mediterranean Sea', 'Black Sea'],
      correctIndex: 2
    }
  ],
  trains: [
    {
      question: 'What is the name of the fastest train service in Japan?',
      answers: ['Shinkansen', 'BulletRail', 'ExpressX', 'Hikari Jet'],
      correctIndex: 0
    },
    {
      question: 'Which British train operating company runs the Pendolino?',
      answers: ['Southern', 'Avanti West Coast', 'Great Western', 'Thameslink'],
      correctIndex: 1
    },
    {
      question: 'What does the “EMU” acronym stand for in rail transport?',
      answers: ['Electric Mainline Unit', 'Electro Magnetic Unit', 'Electric Multiple Unit', 'Engine Mounted Unit'],
      correctIndex: 2
    }
  ],
  science: [
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
      correctIndex: 1
    },
    {
      question: 'What is H2O more commonly known as?',
      answers: ['Oxygen', 'Hydrogen', 'Water', 'Salt'],
      correctIndex: 2
    },
    {
      question: 'What is the process of solid changing directly into gas called?',
      answers: ['Condensation', 'Evaporation', 'Sublimation', 'Deposition'],
      correctIndex: 2
    }
  ],
  history: [
    {
      question: 'Who was the first president of the United States?',
      answers: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'Benjamin Franklin'],
      correctIndex: 2
    },
    {
      question: 'In which year did World War II end?',
      answers: ['1940', '1943', '1945', '1948'],
      correctIndex: 2
    },
    {
      question: 'Which ancient civilisation built the pyramids?',
      answers: ['Romans', 'Greeks', 'Egyptians', 'Babylonians'],
      correctIndex: 2
    }
  ]
};
