# Generate Phrase

This package functions to generate phrases EVM, SEI instantly. 

# Tutorial Install

First you must install this npm

 ```npm i generatephrase```
    
and then you must import {generateEVM, generateSEI} from "generatephrase"

    import {generateEVM, generateSEI} from "generatephrase"

    // for generate EVM
    console.log(generateEVM())

    // for generate SEI
    console.log(await generateSEI())
Done all, you only just run node yourfile.js.

example result : 

    // for generate EVM
    address = 0xde4bbbbbbbbbbbbbbbb
    phrase = yourphrase
    private key = yourprivatekey

    // for generate SEI
    phrase = yourphrase


aku membuat package npm untuk publish di teaprotocol dan aku membuat package untuk generate random phrase. terkadang kita malas untuk membuat phrase di dompetwallet seperti metamask, trustwallet. jadi aku membuat code untuk membuat phrase dengan simple.

untuk keterangan cara install nya ada di web npmjs nya

