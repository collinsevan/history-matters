const questions = [
  {
      "question": "Who was the first President of the United States?",
      "options": ["George Washington", "Thomas Jefferson", "John Adams"],
      "answer": "George Washington"
  },
  {
      "question": "What year did World War II end?",
      "options": ["1945", "1939", "1918"],
      "answer": "1945"
  },
  {
      "question": "Which country gifted the Statue of Liberty to the USA?",
      "options": ["France", "Italy", "Germany"],
      "answer": "France"
  },
  {
      "question": "Who was the British Prime Minister during World War II?",
      "options": ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher"],
      "answer": "Winston Churchill"
  },
  {
      "question": "What ancient civilization built the pyramids?",
      "options": ["Egyptians", "Romans", "Mayans"],
      "answer": "Egyptians"
  },
  {
      "question": "In what year did the American Civil War begin?",
      "options": ["1861", "1776", "1812"],
      "answer": "1861"
  },
  {
      "question": "Who was known as the 'Maid of Orleans'?",
      "options": ["Joan of Arc", "Catherine the Great", "Marie Antoinette"],
      "answer": "Joan of Arc"
  },
  {
      "question": "What empire was ruled by Julius Caesar?",
      "options": ["Roman Empire", "Ottoman Empire", "Byzantine Empire"],
      "answer": "Roman Empire"
  },
  {
      "question": "The Magna Carta was signed in which country?",
      "options": ["England", "France", "Germany"],
      "answer": "England"
  },
  {
      "question": "Which US president issued the Emancipation Proclamation?",
      "options": ["Abraham Lincoln", "George Washington", "Theodore Roosevelt"],
      "answer": "Abraham Lincoln"
  },
  {
      "question": "The Battle of Hastings occurred in what year?",
      "options": ["1066", "1215", "1415"],
      "answer": "1066"
  },
  {
      "question": "Which philosopher is known for the Socratic Method?",
      "options": ["Socrates", "Plato", "Aristotle"],
      "answer": "Socrates"
  },
  {
      "question": "What war was fought between the North and South regions in the United States?",
      "options": ["Civil War", "Revolutionary War", "World War I"],
      "answer": "Civil War"
  },
  {
      "question": "Which queen was the mother of Elizabeth I of England?",
      "options": ["Anne Boleyn", "Catherine of Aragon", "Mary, Queen of Scots"],
      "answer": "Anne Boleyn"
  },
  {
      "question": "The Berlin Wall fell in which year?",
      "options": ["1989", "1961", "1991"],
      "answer": "1989"
  },
  {
      "question": "Which explorer is credited with discovering America?",
      "options": ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
      "answer": "Christopher Columbus"
  },
  {
      "question": "Who was the leader of the Soviet Union during World War II?",
      "options": ["Joseph Stalin", "Vladimir Lenin", "Mikhail Gorbachev"],
      "answer": "Joseph Stalin"
  },
  {
      "question": "Which event started World War I?",
      "options": ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Sinking of the Lusitania"],
      "answer": "Assassination of Archduke Franz Ferdinand"
  },
  {
      "question": "The Renaissance began in which country?",
      "options": ["Italy", "France", "Germany"],
      "answer": "Italy"
  },
  {
      "question": "What was the primary language of the Roman Empire?",
      "options": ["Latin", "Greek", "Italian"],
      "answer": "Latin"
  },
  {
      "question": "Who was the first man to set foot on the moon?",
      "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
      "answer": "Neil Armstrong"
  },
  {
      "question": "Which city was the capital of the Byzantine Empire?",
      "options": ["Constantinople", "Rome", "Athens"],
      "answer": "Constantinople"
  },
  {
      "question": "The Great Fire of London occurred in what year?",
      "options": ["1666", "1766", "1866"],
      "answer": "1666"
  },
  {
      "question": "Who was the last Czar of Russia?",
      "options": ["Nicholas II", "Alexander III", "Peter the Great"],
      "answer": "Nicholas II"
  },
  {
      "question": "Which battle is considered the turning point of the American Revolutionary War?",
      "options": ["Battle of Saratoga", "Battle of Yorktown", "Battle of Bunker Hill"],
      "answer": "Battle of Saratoga"
  },
  {
      "question": "What famous ship sank in 1912?",
      "options": ["Titanic", "Lusitania", "Britannic"],
      "answer": "Titanic"
  },
  {
      "question": "The Hundred Years' War was fought between which two countries?",
      "options": ["England and France", "Spain and Portugal", "Germany and Austria"],
      "answer": "England and France"
  },
  {
      "question": "What was the name of the first artificial Earth satellite?",
      "options": ["Sputnik", "Apollo", "Explorer"],
      "answer": "Sputnik"
  },
  {
      "question": "Who was the first emperor of China?",
      "options": ["Qin Shi Huang", "Han Wudi", "Liu Bang"],
      "answer": "Qin Shi Huang"
  },
  {
      "question": "The Cold War was primarily between which two countries?",
      "options": ["USA and USSR", "USA and China", "USSR and China"],
      "answer": "USA and USSR"
  },
  {
      "question": "Which war was fought between the US and Mexico in the 19th century?",
      "options": ["Mexican-American War", "Spanish-American War", "War of 1812"],
      "answer": "Mexican-American War"
  },
  {
      "question": "The Treaty of Versailles ended which war?",
      "options": ["World War I", "World War II", "Franco-Prussian War"],
      "answer": "World War I"
  },
  {
      "question": "Who was the first female Prime Minister of the United Kingdom?",
      "options": ["Margaret Thatcher", "Theresa May", "Angela Merkel"],
      "answer": "Margaret Thatcher"
  },
  {
      "question": "What ancient wonder was located in Babylon?",
      "options": ["Hanging Gardens", "Great Pyramid", "Colossus of Rhodes"],
      "answer": "Hanging Gardens"
  },
  {
      "question": "Who was the last Pharaoh of Egypt?",
      "options": ["Cleopatra", "Tutankhamun", "Ramses II"],
      "answer": "Cleopatra"
  },
  {
      "question": "What event is often considered to mark the end of the Middle Ages?",
      "options": ["Fall of Constantinople", "Discovery of America", "Magna Carta"],
      "answer": "Fall of Constantinople"
  },
  {
      "question": "What was the first permanent English colony in America?",
      "options": ["Jamestown", "Plymouth", "Roanoke"],
      "answer": "Jamestown"
  },
  {
      "question": "Who was the Greek god of the underworld?",
      "options": ["Hades", "Zeus", "Poseidon"],
      "answer": "Hades"
  },
  {
      "question": "What battle marked the final defeat of Napoleon?",
      "options": ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig"],
      "answer": "Battle of Waterloo"
  },
  {
      "question": "Which empire was known for its highly disciplined army and road networks?",
      "options": ["Roman Empire", "Ottoman Empire", "Mongol Empire"],
      "answer": "Roman Empire"
  },
  {
      "question": "What famous wall was built to keep out the Picts in Britain?",
      "options": ["Hadrian's Wall", "Berlin Wall", "Great Wall of China"],
      "answer": "Hadrian's Wall"
  },
  {
      "question": "Who wrote the 'Iliad' and the 'Odyssey'?",
      "options": ["Homer", "Virgil", "Sophocles"],
      "answer": "Homer"
  },
  {
      "question": "In which year did the French Revolution begin?",
      "options": ["1789", "1776", "1799"],
      "answer": "1789"
  },
  {
      "question": "Which US state was the last to join the Union?",
      "options": ["Hawaii", "Alaska", "Arizona"],
      "answer": "Hawaii"
  },
  {
      "question": "Which civilization is credited with developing the first writing system?",
      "options": ["Sumerians", "Egyptians", "Indus Valley"],
      "answer": "Sumerians"
  },
  {
      "question": "Who was the leader of the Indian independence movement?",
      "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
      "answer": "Mahatma Gandhi"
  },
  {
      "question": "Which ancient Greek philosopher was the teacher of Alexander the Great?",
      "options": ["Aristotle", "Socrates", "Plato"],
      "answer": "Aristotle"
  },
  {
      "question": "The Rosetta Stone was crucial in deciphering which ancient language?",
      "options": ["Egyptian Hieroglyphs", "Sumerian", "Mayan"],
      "answer": "Egyptian Hieroglyphs"
  },
  {
      "question": "What was the primary goal of the Crusades?",
      "options": ["Control of the Holy Land", "Expansion of territory", "Conversion of non-Christians"],
      "answer": "Control of the Holy Land"
  }
];

window.questions = questions;