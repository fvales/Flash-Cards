import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_KEY } from './_decks'

// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.


export function getDecks () {
    return AsyncStorage.getItem(DECKS_KEY)
    .then(formatDecksResults)
}

export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
        [key]: deck
    }))
}

export function saveCard(key, question, answer) {
    AsyncStorage.getItem(DECKS_KEY).then((result) => {
        let decks = JSON.parse(result)
        decks[key].questions.push({question: question, answer: answer})
        AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks))
    })
}