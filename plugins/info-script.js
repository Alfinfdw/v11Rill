import fs from 'fs'

let handler = async (m, { conn }) => {
	let krtu = `Thanks To :
	
• Script Private

My Support : All Creator Bot`;
	await conn.sendButton(m.chat, krtu, botdate, fotonya2, [['\nAku pedo dan Aku bangga','huuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Yaemiko-Multidevice',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
handler.command = /^(thankstoo|thanksto|credits|tqto)$/i;
handler.group = false;

export default handler;
