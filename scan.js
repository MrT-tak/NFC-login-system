//Thx to this blog for code (japanease)https://tech.aptpod.co.jp/entry/2020/06/12/090000
const scan = async () => {
    try {
      const reader = new NDEFReader()
      await reader.scan()
  
      // Scanは起動しているが、NFCタグからデータが読み込めなかった
      reader.addEventListener('error', (event) => {
        console.log(error)
      })
  
      // データを読み込んだ
      reader.addEventListener('reading', ({ serialNumber, message }) => {
        const record = message.records[0]
        const { data, recordType } = record
        // recordTypeごとにdecode処理を実行する
      })
    } catch (error) {
      // Scan起動失敗
      console.error(error)
    }
  }
const { data, encoding, recordType } = record
    if (recordType === 'text') {
        const textDecoder = new TextDecoder(encoding)
        const text = textDecoder.decode(data)
        console.log(`login-data-on-NFC: ${text}`)
}
document.getElementById("logininfo").innerText("login data:"+text)