
const progressCalc = (value: number): number => {
    const maxValue = 300
    return Math.round((value * 100) / maxValue)
}

export default progressCalc

