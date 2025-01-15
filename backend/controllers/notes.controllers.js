const connection = require("../config/db")

const getNotes = async (req, res) => {
    const query = `
        SELECT * FROM notes;
    `
    connection.query(query, async (err, rows) => {
        if(err) {
            return res.status(400).json({
                message: "Error"
            })
        }
        res.status(200).json({
            message: "Berhasil mengambil data notes",
            data: rows
        })
    })
}

const postNote = async (req, res) => {
    const { judul, tanggal, isi } = req.body
    
    if(!judul || !tanggal || !isi) {
        return res.status(400).json({
            message: "Semua field dibutuhkan"
        })
    }
    connection.query("INSERT INTO notes (judul, tanggal, isi) VALUES(?, ?, ?)", [judul, tanggal, isi], (err, rows) => {
        if(err) {
            return res.status(400).json({
                message: "Error"
            })
        }
        res.status(201).json({
            message: "Berhasil menambahkan note baru"
        })
    })

}


const editNote = async (req, res) => {
    const noteId = req.params.noteId
    const { judul, tanggal, isi } = req.body
    if(!judul || !tanggal || !isi) {
        return res.status(400).json({
            message: "Semua field dibutuhkan"
        })
    }
    const query = `
        UPDATE notes
        SET judul = '${judul}', tanggal = '${tanggal}', isi = '${isi}'
        WHERE id = ${+noteId}
    `
    connection.query(query, (err, row) => {
        console.log(err)
        if(err) {
            return res.status(400).json({
                message: "Error"
            })
        }
        if(row.changedRows === 0) {
            return res.status(200).json({
                message: "Request berhasil, tetapi tidak ada data yang berubah"
            })
        }
        res.status(200).json({
            message: "Note berhasil diedit"
        })
    })
}

const deleteNote = async (req, res) => {
    const noteId = req.params.noteId
    const query = `
        DELETE FROM notes WHERE id = ${noteId}
    `
    connection.query(query, (err) => {
        if(err) {
            return res.status(400).json({
                message: "Error"
            })
        }
        res.status(200).json({
            message: "Note berhasil dihapus"
        })
    })
}

module.exports = {
    getNotes,
    postNote,
    editNote,
    deleteNote
}