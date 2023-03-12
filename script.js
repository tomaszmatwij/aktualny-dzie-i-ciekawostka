const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')
// const date = new Date()
const day = new Date().toLocaleString('default', { weekday: 'long' })

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
]

currentDay.textContent = day

const showRandom = () => {
	funFact.textContent = facts[Math.floor(Math.random() * facts.length)]
}

showRandom()
