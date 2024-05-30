const Send = [
    '$createCallback[send;',
        '$reply[',
            '$setCode[%PARAM_0%]',
            '$setType[%PARAM_1]',
            '$setBody[%param_2%]',
        ']',
    ']'
].join('\n')

module.exports = {
    Send
}