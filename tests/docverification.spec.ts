import * as mammoth from 'mammoth';
import { test } from '@playwright/test';

async function extractTextFromWordDocument(filePath: string): Promise<string> {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value; // Extract the 'value' property from the result
}

async function verifyContentInWordDocument(filePath: string, expectedContent: string): Promise<boolean> {
    const extractedText = await extractTextFromWordDocument(filePath);
    return extractedText.includes(expectedContent);
}

test('test qbank login recorded', async () => {
    const wordFilePath = 'files/Automation_Review_Process.docx';

    const extractedText = await extractTextFromWordDocument(wordFilePath);
    console.log('Extracted text from Word document:', extractedText);
    const expectedContent = 'Present the automated test suite for approval to stakeholders.';

    const isContentPresent = await verifyContentInWordDocument(wordFilePath, expectedContent);
    if (isContentPresent) {
        console.log(`The expected content "${expectedContent}" is present in the Word document.`);
    } else {
        console.log(`The expected content "${expectedContent}" is NOT present in the Word document.`);
    }
  });