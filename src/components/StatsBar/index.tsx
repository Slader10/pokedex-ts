import StatsBar from "./StatsBar";

export interface StatsBarInterface {
    value: number,
    type: string
}

const StatsBarContainer = (props: StatsBarInterface) => {
    return <StatsBar {...props} />
}

export default StatsBarContainer