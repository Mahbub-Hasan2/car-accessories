

import Papa from "papaparse";

export async function GET() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/1rHypvbs4XquG6v97B4UTy1hEisWtCyy3TTWXBEiBl3M/export?format=csv&gid=0",
    {
      cache: "no-store",
    }
  );

  const csvText = await res.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return Response.json(parsed.data);
}