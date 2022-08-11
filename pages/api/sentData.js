import { google } from "googleapis";

async function sentDataCell(req, res) {
  let valueConfirm,
    valueAttend = null;
  let timeStamp = new Date();
  if (req.method === "POST") {
    const { namaHadir, ucapan, akanDatang, datangBersama } = req.body;
    try {
      const target = ["https://www.googleapis.com/auth/spreadsheets"];
      const jwt = new google.auth.JWT(
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        null,
        (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
        target
      );

      if (akanDatang == true) {
        valueConfirm = "Y";
        valueAttend = datangBersama;
      } else {
        valueConfirm = "N";
        valueAttend = "Tidak Hadir";
      }

      const sheets = google.sheets({ version: "v4", auth: jwt });
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: process.env.SPREADSHEET_NAME,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              null,
              namaHadir,
              valueConfirm,
              valueAttend,
              ucapan,
              timeStamp.toLocaleString(),
            ],
          ],
        },
      });

      res.status(201).json({ message: "It works!", response });
      if (res.status >= 200 || res.status === 201) {
        console.log("Data Sent");
      }
    } catch (err) {
      console.log(err);
    }
    return [];
  }
}

export default sentDataCell;
