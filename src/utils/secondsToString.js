const secondsToString = (sec) => {
    return `${(sec-sec%60)/60}:${sec%60 < 10 ? `0${sec%60}` : `${sec%60}`}`
}

export {secondsToString}