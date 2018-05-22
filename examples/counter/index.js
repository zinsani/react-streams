import React from "react"
import { mergePlans, plan, streamProps } from "react-streams"
import { map, delay } from "rxjs/operators"
import { of } from "rxjs"

const onInc = plan(map(() => state => ({ count: state.count + 2 })))
const onDec = plan(map(() => state => ({ count: state.count - 2 })))
const onReset = plan(map(() => state => ({ count: 4 })))

const Count = streamProps(mergePlans({ onInc, onDec, onReset }))

export default () => (
  <Count count={4}>
    {({ count, onInc, onDec, onReset }) => (
      <div>
        <button id="dec" onClick={onDec} aria-label="decrement">
          -
        </button>
        <span id="count" aria-label="count">
          {count}
        </span>
        <button id="inc" onClick={onInc} aria-label="increment">
          +
        </button>
        <button onClick={onReset} aria-label="reset">
          Reset
        </button>
      </div>
    )}
  </Count>
)
