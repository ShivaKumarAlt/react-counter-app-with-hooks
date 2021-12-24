export const decreaseCount = (currentCount) => {
  return {
    type: "DECREASE_COUNT",
    payload: currentCount - 1
  }
}

export const increaseCount = (currentCount) => {
  return {
    type: "INCREASE_COUNT",
    payload: currentCount + 1
  }
}

export const resetCount = () => {
  return {
    type: "RESET_COUNT",
    payload: 0
  }
}