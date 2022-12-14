import { google } from "googleapis";

export async function getDataFromSheets() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: process.env.SPREADSHEET_NAME,
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((column) => ({
        name: column[1],
        confirm: column[2],
        attendance: column[3],
        greeting: column[4],
        timestamp: column[5],
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
