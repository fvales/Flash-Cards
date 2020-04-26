import { AsyncStorage } from "react-native";
import { DECKS_KEY } from "./_Data";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    return JSON.parse(results);
  });
}

export function saveDeck(key, deck) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [key]: deck
    })
  );
}

export function saveCard(key, question, answer) {
  AsyncStorage.getItem(DECKS_KEY).then(result => {
    let decks = JSON.parse(result);
    decks[key].questions.push({ question: question, answer: answer });
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks));
  });
}
