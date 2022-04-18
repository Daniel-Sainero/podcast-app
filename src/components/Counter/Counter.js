import { CounterStyled } from './Counter.styled'

const CounterComponent = (props) => {
  return <CounterStyled> {props.podcastLength}</CounterStyled>
}

export default CounterComponent
