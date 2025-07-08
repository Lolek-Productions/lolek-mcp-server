const ContentFilter = require('../content-filter');
const { readFileSync, writeFileSync, mkdirSync, rmSync } = require('fs');
const { join } = require('path');

describe('ContentFilter Integration Tests', () => {
  const contentFilter = new ContentFilter();
  const testDir = join(process.cwd(), 'test-temp-docs');
  
  beforeEach(() => {
    // Create test directory
    mkdirSync(testDir, { recursive: true });
  });

  afterEach(() => {
    // Clean up
    rmSync(testDir, { recursive: true, force: true });
  });

  describe('Real file filtering', () => {
    it('should filter content based on index.md IGNORE directives', () => {
      // Create index.md with IGNORE directives
      const indexContent = `# Test Documentation

## 1. Active Component
- Active Component

## 2. Another Active Component  
- Another Active Component

<!-- IGNORE -->
## 3. Deprecated Component
- Deprecated Component

## 4. Current Component
- Current Component
`;
      writeFileSync(join(testDir, 'index.md'), indexContent);

      // Create content.md with matching titles
      const contentMd = `TITLE: Active Component
DESCRIPTION: This is an active component
CODE: console.log('active');

----------------------------------------

TITLE: Another Active Component
DESCRIPTION: Another component that should be visible
CODE: console.log('another active');

----------------------------------------

TITLE: Deprecated Component
DESCRIPTION: This deprecated component should be filtered out
CODE: console.log('deprecated');

----------------------------------------

TITLE: Current Component
DESCRIPTION: Current component that should be found
CODE: console.log('current');
`;
      writeFileSync(join(testDir, 'content.md'), contentMd);

      // Read both files
      const indexData = readFileSync(join(testDir, 'index.md'), 'utf-8');
      const contentData = readFileSync(join(testDir, 'content.md'), 'utf-8');

      // Apply filtering
      const filtered = contentFilter.filterContent(contentData, indexData);

      // Verify filtering
      expect(filtered).toContain('TITLE: Active Component');
      expect(filtered).toContain('TITLE: Another Active Component');
      expect(filtered).toContain('TITLE: Current Component');
      expect(filtered).not.toContain('TITLE: Deprecated Component');
      expect(filtered).not.toContain('This deprecated component should be filtered out');
      
      // Verify no trailing dividers
      expect(filtered.trim()).not.toMatch(/-{3,}$/);
    });

    it('should handle complex IGNORE patterns', () => {
      const indexContent = `# Documentation

## 1. Keep This
Good content

<!-- IGNORE -->
## 2. Remove This
- Item 1
- Item 2
- Item 3

## 3. Keep This Too
More good content

<!-- IGNORE -->
## 4. Also Remove This
- Also Remove This
`;
      
      const contentMd = `TITLE: Keep This
DESCRIPTION: Should be found

----------------------------------------

TITLE: Item 1
DESCRIPTION: Should not be found

----------------------------------------

TITLE: Item 2
DESCRIPTION: Should not be found

----------------------------------------

TITLE: Keep This Too
DESCRIPTION: Should also be found

----------------------------------------

TITLE: Also Remove This
DESCRIPTION: Should also not be found
`;

      writeFileSync(join(testDir, 'index2.md'), indexContent);
      writeFileSync(join(testDir, 'content2.md'), contentMd);
      
      const indexData = readFileSync(join(testDir, 'index2.md'), 'utf-8');
      const contentData = readFileSync(join(testDir, 'content2.md'), 'utf-8');
      
      const filtered = contentFilter.filterContent(contentData, indexData);
      
      expect(filtered).toContain('TITLE: Keep This');
      expect(filtered).toContain('TITLE: Keep This Too');
      expect(filtered).not.toContain('TITLE: Item 1');
      expect(filtered).not.toContain('TITLE: Item 2');
      expect(filtered).not.toContain('TITLE: Also Remove This');
      
      // Check that dividers are properly managed
      const dividerCount = (filtered.match(/^-{3,}$/gm) || []).length;
      expect(dividerCount).toBe(1); // Should only have one divider between the two kept items
    });

    it('should parse ignored items from sections correctly', () => {
      const indexContent = `# Test

<!-- IGNORE -->
## 1. Ignored Section
- Component A
- Component B
- Component C

## 2. Active Section
- Component D
`;

      const ignored = contentFilter.parseIgnoredItems(indexContent);
      
      expect(ignored.has('Component A')).toBe(true);
      expect(ignored.has('Component B')).toBe(true);
      expect(ignored.has('Component C')).toBe(true);
      expect(ignored.has('Component D')).toBe(false);
    });

    it('should get filtered sections', () => {
      const indexContent = `# Documentation

## 1. Introduction
Brief intro

<!-- IGNORE -->
## 2. Deprecated API
Old stuff

## 3. Current API
New stuff

<!-- IGNORE -->
## 4. Legacy Support
Legacy items
`;
      
      const sections = contentFilter.getFilteredSections(indexContent);
      expect(sections).toEqual(['Introduction', 'Current API']);
    });
  });
});