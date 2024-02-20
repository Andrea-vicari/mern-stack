import React from 'react'

function Timer(props) {
  return (
    <div className="modal-body py-3 text-white">
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    </div>
  )
}

export default Timer