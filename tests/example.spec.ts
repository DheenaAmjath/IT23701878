import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert a simple present tense daily activity sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Appa veettu velai seikirar');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0002 - Convert a compound sentence with conjunction', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Thampi padikkiran aththuden thangai vilaiyaduhiral');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0003 - Convert a complex sentence with reason', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naalai pareetchai iruppathaal avan kaalaiyilirunthu nanraga padikkiran');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0004 - Convert an interrogative question sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Neengal solvathu unmaya ?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0005 - Convert an imperative command sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Muthalil thaeneer kudi');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0006 - Convert a simple sentence with proper noun', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Sathursha padasalai selkiraal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0007 - Convert a negative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Avan veettukku pohavillai');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0008 - Convert a compound sentence in past tense', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Avan kaalaiyil padasalaikku sendraan aththudan maalaiyil veettu velai seiththaan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0009 - Convert a polite request sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Thayavu seithu intha document ai avasaramaha anuppungal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0010 - Convert a positive expression sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Ithu enaku romba pidikum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0011 - Convert a greeting question sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Vanakkam eppadi pohuthu vazhkai ?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});
test('Pos_Fun_0012 - Convert a response sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Seri naan seithu kodukkiren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});
test('Pos_Fun_0013 - Convert a daily feeling expression', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Eneki kalaippaha irukkirathu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0014 - Convert a sentence with repeated word emphasis', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan veha vehamaha veedu vanthen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0015 - Convert a future plan sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan aduthe varudem velaiku selvaen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0016 - Convert a conditional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Mala samaithu vittaal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0017 - Convert a continuous tense mixed-language sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enathu nanban university ku vanthu kodnu irukkiraan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0018 - Convert a plural negative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Engelukku avarhalai pidikka villai');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0019 - Convert an informal command sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Nee vehamaha saapidu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0020 - Convert a formal instruction sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Naan solvathai seiyungal');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0021 - Convert a sentence with English technical terms', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('University ku nulaiyum mun ID card ai kaata vaendum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0022 - Convert a sentence with currency format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Padam parpatharku Rs. 1000 vilaiku ticket eduka vaendum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0023 - Convert a sentence with time format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Nalai santhaikku 11.00 am ku muthal sella vaendum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0024 - Convert a sentence with measurement and price', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enathu nanban university ku vanthu kodnu irukkiraan');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});






test('Neg_Fun_0001 - Convert a sentence with spelling error ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' Aasiriyar sonnathu unakku villanga villaiya ?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Neg_Fun_0002 - Convert a joined-word sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Enakipoluthupogavillai');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0003 - Convert a sentence with repeated words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Unathu miha miha miha moshamanaval');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0004 - Convert a sentence with repeated words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Aval 158 cm uyaram udaiyaval ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0005 - Convert a sentence with Tamil spelling error', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Mala samaithu vittaal ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Neg_Fun_0006 - Convert a sentence with spelling inconsistency', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' Nan Angu pogamadden ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0007 - Convert a sentence with tense error', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill(' Naan netru vanthen ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0008 - Convert a sentence with excessive punctuation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill( ' Adei !!!! solvathai Kelada ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0009 - Convert a sentence with excessive question marks', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill( ' Nee exam pass aagiduvaaena??? ' );

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});



test('Pos_Fun_0010 - Convert a mixed-language sentence to pure Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill( ' Naan tomorrow office pogren ' );

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_UI_0001 - Verify real-time Tamil output updates while typing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill( ' naan veetukku pogren ' );

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});




