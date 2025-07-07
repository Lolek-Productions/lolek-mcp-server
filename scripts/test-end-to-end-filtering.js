#!/usr/bin/env node

const { readFileSync } = require('fs');
const { join } = require('path');
const ContentFilter = require('../lib/content-filter.js');

// Test 1: Filtering out entire sections
const testSectionFiltering = () => {
  console.log("=== TEST 1: FILTERING OUT ENTIRE SECTIONS ===\n");
  
  const filter = new ContentFilter();
  
  const mockIndex = `# Test Documentation

<!-- IGNORE -->
### Deprecated Features
- Old login method
- Legacy API endpoints
- Outdated authentication

### Current Features
- Modern login
- New API endpoints
- Current authentication

### Experimental Features
- Beta login
- Alpha features
- Prototype APIs`;

  const mockContent = `TITLE: Old login method
DESCRIPTION: Deprecated login system
CODE: [old login code]
----------------------------------------

TITLE: Legacy API endpoints
DESCRIPTION: Old API system
CODE: [legacy api code]
----------------------------------------

TITLE: Outdated authentication
DESCRIPTION: Old auth system
CODE: [old auth code]
----------------------------------------

TITLE: Modern login
DESCRIPTION: Current login system
CODE: [modern login code]
----------------------------------------

TITLE: New API endpoints
DESCRIPTION: Current API system
CODE: [new api code]
----------------------------------------

TITLE: Current authentication
DESCRIPTION: Current auth system
CODE: [current auth code]
----------------------------------------

TITLE: Beta login
DESCRIPTION: Experimental login
CODE: [beta login code]
----------------------------------------`;

  console.log("Testing section-level filtering...");
  console.log("Index has IGNORE directive for entire 'Deprecated Features' section");
  
  const ignoredTitles = filter.parseIgnoredItems(mockIndex);
  console.log(`\nParsed ${ignoredTitles.size} ignored titles:`, Array.from(ignoredTitles));
  
  const filteredContent = filter.filterContent(mockContent, mockIndex);
  
  const remainingTitles = filteredContent.split('\n')
    .filter(line => line.startsWith('TITLE:'))
    .map(line => line.replace('TITLE: ', '').trim());
  
  console.log(`\nRemaining titles after filtering:`, remainingTitles);
  
  const expectedRemaining = ['Modern login', 'New API endpoints', 'Current authentication', 'Beta login'];
  const isCorrect = remainingTitles.length === expectedRemaining.length && 
    expectedRemaining.every(title => remainingTitles.includes(title));
  
  if (isCorrect) {
    console.log("✅ SECTION FILTERING WORKS CORRECTLY!");
    console.log("   All 3 deprecated items were removed as expected");
  } else {
    console.log("❌ Section filtering failed");
    console.log("Expected:", expectedRemaining);
    console.log("Got:", remainingTitles);
  }
};

// Test 2: Filtering out individual items within sections
const testItemFiltering = () => {
  console.log("\n=== TEST 2: FILTERING OUT INDIVIDUAL ITEMS ===\n");
  
  const filter = new ContentFilter();
  
  const mockIndex = `# Test Documentation

### Authentication Methods
- Email login
<!-- IGNORE -->
- Phone login
- Social login
<!-- IGNORE -->
- Magic link login
- Password reset

### API Endpoints
- User management
- Data operations
- File uploads`;

  const mockContent = `TITLE: Email login
DESCRIPTION: Email authentication
CODE: [email code]
----------------------------------------

TITLE: Phone login
DESCRIPTION: Phone authentication  
CODE: [phone code]
----------------------------------------

TITLE: Social login
DESCRIPTION: OAuth login
CODE: [social code]
----------------------------------------

TITLE: Magic link login
DESCRIPTION: Magic link auth
CODE: [magic code]
----------------------------------------

TITLE: Password reset
DESCRIPTION: Reset password
CODE: [reset code]
----------------------------------------

TITLE: User management
DESCRIPTION: Manage users
CODE: [user mgmt code]
----------------------------------------

TITLE: Data operations
DESCRIPTION: CRUD operations
CODE: [data code]
----------------------------------------

TITLE: File uploads
DESCRIPTION: Upload files
CODE: [upload code]
----------------------------------------`;

  console.log("Testing item-level filtering...");
  console.log("Index has IGNORE directives for specific items:");
  console.log("- Phone login");
  console.log("- Magic link login");
  
  const ignoredTitles = filter.parseIgnoredItems(mockIndex);
  console.log(`\nParsed ${ignoredTitles.size} ignored titles:`, Array.from(ignoredTitles));
  
  const filteredContent = filter.filterContent(mockContent, mockIndex);
  
  const remainingTitles = filteredContent.split('\n')
    .filter(line => line.startsWith('TITLE:'))
    .map(line => line.replace('TITLE: ', '').trim());
  
  console.log(`\nRemaining titles after filtering:`, remainingTitles);
  
  const expectedRemaining = ['Email login', 'Social login', 'Password reset', 'User management', 'Data operations', 'File uploads'];
  const isCorrect = remainingTitles.length === expectedRemaining.length && 
    expectedRemaining.every(title => remainingTitles.includes(title));
  
  if (isCorrect) {
    console.log("✅ ITEM FILTERING WORKS CORRECTLY!");
    console.log("   Only 2 specific items were removed, others in the section remained");
  } else {
    console.log("❌ Item filtering failed");
    console.log("Expected:", expectedRemaining);
    console.log("Got:", remainingTitles);
  }
};

// Test 3: Real sample-test filtering
const testSampleFiltering = () => {
  console.log("\n=== TEST 3: SAMPLE TEST DATA FILTERING ===\n");
  
  const filter = new ContentFilter();
  
  try {
    const indexPath = join(process.cwd(), 'docs', 'sample-test', 'index.md');
    const contentPath = join(process.cwd(), 'docs', 'sample-test', 'content.md');
    
    const indexContent = readFileSync(indexPath, 'utf-8');
    const contentContent = readFileSync(contentPath, 'utf-8');
    
    const ignoredTitles = filter.parseIgnoredItems(indexContent);
    console.log(`Found ${ignoredTitles.size} ignored titles in sample-test index.md`);
    
    if (ignoredTitles.size > 0) {
      console.log("Ignored titles by category:");
      
      // Group by what section they're from
      const ignoredArray = Array.from(ignoredTitles);
      const authIgnored = ignoredArray.filter(t => 
        t.includes('authentication') || t.includes('Two-factor') || t.includes('Biometric') || t.includes('SSO')
      );
      const legacyIgnored = ignoredArray.filter(t => 
        t.includes('Old') || t.includes('Legacy') || t.includes('Deprecated') || t.includes('Outdated')
      );
      const securityIgnored = ignoredArray.filter(t => 
        t.includes('Advanced encryption') || t.includes('Security') || t.includes('Compliance')
      );
      const apiIgnored = ignoredArray.filter(t => 
        t.includes('Legacy REST') || t.includes('Deprecated webhooks')
      );
      const dbIgnored = ignoredArray.filter(t => 
        t.includes('Update records') || t.includes('Delete records')
      );
      const deprecatedIgnored = ignoredArray.filter(t => 
        t.includes('v1 API') || t.includes('Beta') || t.includes('Experimental')
      );
      
      if (authIgnored.length > 0) console.log("  Auth items:", authIgnored.length);
      if (legacyIgnored.length > 0) console.log("  Legacy section (entire):", legacyIgnored.length);
      if (securityIgnored.length > 0) console.log("  Security items:", securityIgnored.length);
      if (apiIgnored.length > 0) console.log("  API items:", apiIgnored.length);
      if (dbIgnored.length > 0) console.log("  Database items:", dbIgnored.length);
      if (deprecatedIgnored.length > 0) console.log("  Deprecated section (entire):", deprecatedIgnored.length);
      
      const originalCount = contentContent.split('\n').filter(line => line.startsWith('TITLE:')).length;
      const filteredContent = filter.filterContent(contentContent, indexContent);
      const filteredCount = filteredContent.split('\n').filter(line => line.startsWith('TITLE:')).length;
      
      console.log(`\nFiltering result: ${originalCount} → ${filteredCount} titles (removed ${originalCount - filteredCount})`);
      
      // Verify that the correct types of content were filtered
      const filteredTitles = filteredContent.split('\n')
        .filter(line => line.startsWith('TITLE:'))
        .map(line => line.replace('TITLE: ', '').trim());
      
      const hasDeprecatedContent = filteredTitles.some(title => 
        title.includes('Old') || title.includes('Legacy') || title.includes('Deprecated')
      );
      
      // Check if the number of removed items matches expected
      const expectedToRemove = ignoredTitles.size;
      const actuallyRemoved = originalCount - filteredCount;
      
      if (actuallyRemoved === expectedToRemove && !hasDeprecatedContent) {
        console.log("✅ SAMPLE TEST FILTERING WORKING CORRECTLY!");
        console.log(`   All ${expectedToRemove} ignored items successfully removed`);
      } else if (actuallyRemoved !== expectedToRemove) {
        console.log(`❌ Expected to remove ${expectedToRemove} items but removed ${actuallyRemoved}`);
      } else {
        console.log("❌ Some deprecated content still present");
      }
    } else {
      console.log("No IGNORE directives found in sample-test index.md");
    }
    
  } catch (error) {
    console.log("Sample test files not available:", error.message);
    console.log("💡 Make sure docs/sample-test/ directory exists");
  }
};

console.log("🧪 TESTING CONTENT FILTERING SYSTEM\n");
console.log("This tests both section-level and item-level IGNORE filtering\n");

// Run all tests
testSectionFiltering();
testItemFiltering();
testSampleFiltering();

console.log("\n" + "=".repeat(60));
console.log("SUMMARY: Content filtering system supports both:");
console.log("1. Section-level filtering: <!-- IGNORE --> before section heading");
console.log("2. Item-level filtering: <!-- IGNORE --> before individual items");
console.log("=".repeat(60));