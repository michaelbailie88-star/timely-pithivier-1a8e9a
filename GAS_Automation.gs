/**
 * adaptED × CampED Revenue Automation
 * Zero-Cost Tracking & Logging via Google Apps Script
 */

const SHEET_LEADS = "Lead Log";
const SHEET_LICENSES = "License Log";
const SHEET_SUPPLY = "Supply Reports";

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(30000); // Wait for up to 30 seconds

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    const type = data.type || 'lead';

    if (type === 'lead') {
      let sheet = ss.getSheetByName(SHEET_LEADS);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_LEADS);
        sheet.appendRow(["Timestamp", "Name", "Email", "Role", "Tier Interest", "Source"]);
        sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#f3f3f3");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.name || "Not provided",
        data.email || "",
        data.role || "Not provided",
        data.tier_interest || data.tier || "unknown",
        data.source || "Direct"
      ]);
    } 
    else if (type === 'license') {
      let sheet = ss.getSheetByName(SHEET_LICENSES);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_LICENSES);
        sheet.appendRow(["Timestamp", "License Key", "Tier", "Email", "Status", "Source"]);
        sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#f3f3f3");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.key || "N/A",
        data.tier || "unknown",
        data.email || "N/A",
        data.status || "Verified",
        data.source || "App Verification"
      ]);
    }
    else if (type === 'supply_report') {
      let sheet = ss.getSheetByName(SHEET_SUPPLY);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_SUPPLY);
        sheet.appendRow(["Timestamp", "Supply Name", "Manager Name", "Teacher Name", "Class", "Mood", "Incidents", "Notes"]);
        sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#f3f3f3");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.supplyName || "N/A",
        data.managerName || "N/A",
        data.teacherName || "N/A",
        data.planAge || "N/A",
        data.moodLabel || data.mood || "N/A",
        data.incidents || "None",
        data.notes || ""
      ]);
    }
    else if (type === 'usage' || type === 'tracking') {
      let sheet = ss.getSheetByName("Usage Log");
      if (!sheet) {
        sheet = ss.insertSheet("Usage Log");
        sheet.appendRow(["Timestamp", "Key", "Action", "Source"]);
        sheet.getRange(1, 1, 1, 4).setFontWeight("bold").setBackground("#f3f3f3");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.key || "N/A",
        data.action || "Activation",
        data.source || "App"
      ]);
    }

    lock.releaseLock();
    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("adaptED GAS Automation is active.");
}
