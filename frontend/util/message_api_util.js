export const speak = (data) => {
  return App.cable.subscriptions.subscriptions[0].speak(data)
}

export const load = (data) => {
  return App.cable.subscriptions.subscriptions[0].load(data)
}