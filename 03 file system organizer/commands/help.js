function helpFn() {
    console.log(`
    List of all commands:
        okay tree "directoryPath"
        okay organize "directoryPath"
        okay help
    `);
}

module.exports={
    helpKey: helpFn
}