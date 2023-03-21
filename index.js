function superbowlWin(record){
    const goalYear = record.find(game => game.result === "W");
    return goalYear ? goalYear.year : undefined
}
