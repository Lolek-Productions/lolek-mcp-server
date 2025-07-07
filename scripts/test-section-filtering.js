#!/usr/bin/env node

const ContentFilter = require("../lib/content-filter.js");
const { readFileSync } = require("fs");
const { join } = require("path");

// Initialize content filter
const contentFilter = new ContentFilter();

// Test with different filter profiles
const profiles = ["default", "public", "developer"];

console.log("Testing Section Filtering for index.md files\n");
console.log("=" .repeat(60));

// Test with nextjs index.md
const indexPath = join(process.cwd(), "docs", "nextjs", "index.md");
const indexContent = readFileSync(indexPath, "utf-8");

profiles.forEach(profile => {
  console.log(`\n## Filter Profile: ${profile}`);
  console.log("-".repeat(40));
  
  // Get filtered sections
  const sections = contentFilter.getFilteredSections(indexContent, profile);
  
  console.log(`Total sections found: ${sections.length}`);
  console.log("\nSections included:");
  sections.forEach((section, index) => {
    console.log(`  ${index + 1}. ${section}`);
  });
  
  // Get profile config for reference
  const profileConfig = contentFilter.getProfileConfig(profile);
  console.log("\nProfile excludes:");
  console.log(`  - Feature Status: ${profileConfig.excludeFeatureStatus?.join(", ") || "none"}`);
  console.log(`  - Access levels: ${profileConfig.excludeAccess?.join(", ") || "none"}`);
  console.log(`  - Tags: ${profileConfig.excludeTags?.join(", ") || "none"}`);
});

// Show which sections were filtered out
console.log("\n\n## Sections Filtered Out by Profile");
console.log("=" .repeat(60));

const allSections = indexContent
  .split("\n")
  .filter(line => line.trim().match(/^##\s+\d+\.\s/))
  .map(line => line.trim().replace(/^##\s+\d+\.\s+/, ""));

profiles.forEach(profile => {
  const filteredSections = contentFilter.getFilteredSections(indexContent, profile);
  const removedSections = allSections.filter(section => !filteredSections.includes(section));
  
  if (removedSections.length > 0) {
    console.log(`\n${profile} profile removed ${removedSections.length} sections:`);
    removedSections.forEach(section => {
      console.log(`  - ${section}`);
    });
  } else {
    console.log(`\n${profile} profile: No sections removed`);
  }
});

console.log("\n\nTest completed!");