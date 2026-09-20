import Papa from "papaparse";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1rHypvbs4XquG6v97B4UTy1hEisWtCyy3TTWXBEiBl3M/export?format=csv&gid=0";

/**
 * Fetches the product sheet and returns it as an array of product objects.
 *
 * - Cached for 60 seconds (Next.js "revalidate") instead of "no-store", so a
 *   single page view doesn't re-download the whole sheet from Google every
 *   time. Change the number below if you want fresher/staler data.
 * - The "op" column (your cost / purchase price) is stripped out before the
 *   data ever leaves the server, so it can never show up in the public
 *   /api/products response, page source, or dev tools network tab.
 */
export default async function getProducts() {
  const res = await fetch(SHEET_CSV_URL, {
    next: { revalidate: 60 },
  });

  const csvText = await res.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data.map((product) => {
    const { op, ...publicProduct } = product;
    return publicProduct;
  });
}
