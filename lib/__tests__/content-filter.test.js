const ContentFilter = require('../content-filter');

describe('ContentFilter', () => {
  let contentFilter;

  beforeEach(() => {
    contentFilter = new ContentFilter();
  });

  describe('parseIgnoredItems', () => {
    it('should parse individual ignored items', () => {
      const indexContent = `
## 1. Introduction
- Item 1
<!-- IGNORE -->
- Item 2 to ignore
- Item 3
`;
      const ignored = contentFilter.parseIgnoredItems(indexContent);
      expect(ignored.has('Item 2 to ignore')).toBe(true);
      expect(ignored.has('Item 1')).toBe(false);
      expect(ignored.has('Item 3')).toBe(false);
    });

    it('should parse ignored sections with all items', () => {
      const indexContent = `
## 1. Introduction
- Keep this item

<!-- IGNORE -->
## 2. Deprecated Section
- All these items
- Should be ignored
- Including this one

## 3. Active Section
- This should not be ignored
`;
      const ignored = contentFilter.parseIgnoredItems(indexContent);
      expect(ignored.has('All these items')).toBe(true);
      expect(ignored.has('Should be ignored')).toBe(true);
      expect(ignored.has('Including this one')).toBe(true);
      expect(ignored.has('Keep this item')).toBe(false);
      expect(ignored.has('This should not be ignored')).toBe(false);
    });

    it('should handle numbered lists', () => {
      const indexContent = `
## Items
- First item
<!-- IGNORE -->
- Second item to ignore
- Third item
`;
      const ignored = contentFilter.parseIgnoredItems(indexContent);
      expect(ignored.has('Second item to ignore')).toBe(true);
      expect(ignored.has('First item')).toBe(false);
      expect(ignored.has('Third item')).toBe(false);
    });
  });

  describe('filterContent', () => {
    it('should filter out ignored titles from content', () => {
      const indexContent = `
## Components
- PublicHeader
<!-- IGNORE -->
- DeprecatedComponent
- MainSidebar
`;
      const content = `
TITLE: PublicHeader
DESCRIPTION: Header component
CODE: // header code

----------------------------------------

TITLE: DeprecatedComponent
DESCRIPTION: Old component
CODE: // deprecated code

----------------------------------------

TITLE: MainSidebar
DESCRIPTION: Sidebar component
CODE: // sidebar code
`;
      
      const filtered = contentFilter.filterContent(content, indexContent);
      expect(filtered).toContain('TITLE: PublicHeader');
      expect(filtered).toContain('TITLE: MainSidebar');
      expect(filtered).not.toContain('TITLE: DeprecatedComponent');
      expect(filtered).not.toContain('Old component');
      expect(filtered).not.toContain('deprecated code');
    });

    it('should handle dividers correctly', () => {
      const indexContent = `
## Components
<!-- IGNORE -->
- IgnoredComponent
`;
      const content = `
TITLE: GoodComponent
DESCRIPTION: Good

----------------------------------------

TITLE: IgnoredComponent
DESCRIPTION: Ignored

----------------------------------------

TITLE: AnotherGoodComponent
DESCRIPTION: Also good
`;
      
      const filtered = contentFilter.filterContent(content, indexContent);
      // Should not have double dividers
      expect(filtered.match(/^-{3,}$/gm)?.length || 0).toBe(1);
      expect(filtered).toContain('TITLE: GoodComponent');
      expect(filtered).toContain('TITLE: AnotherGoodComponent');
      expect(filtered).not.toContain('TITLE: IgnoredComponent');
    });

    it('should clean up trailing dividers', () => {
      const indexContent = `
## Components
- FirstComponent
<!-- IGNORE -->
- LastComponent
`;
      const content = `
TITLE: FirstComponent
DESCRIPTION: First

----------------------------------------

TITLE: LastComponent
DESCRIPTION: Last

----------------------------------------
`;
      
      const filtered = contentFilter.filterContent(content, indexContent);
      // The filter should remove trailing dividers
      expect(filtered.trim()).not.toMatch(/-{3,}$/);
      expect(filtered).toContain('TITLE: FirstComponent');
      expect(filtered).not.toContain('TITLE: LastComponent');
    });

    it('should return content unchanged if no index content provided', () => {
      const content = `
TITLE: Component
DESCRIPTION: Test
`;
      
      const filtered = contentFilter.filterContent(content, null);
      expect(filtered).toBe(content);
    });
  });

  describe('getFilteredHeadings', () => {
    it('should extract filtered titles', () => {
      const indexContent = `
## Components
- Component1
<!-- IGNORE -->
- Component2
- Component3
`;
      const content = `
TITLE: Component1
DESCRIPTION: First

TITLE: Component2
DESCRIPTION: Second

TITLE: Component3
DESCRIPTION: Third
`;
      
      const headings = contentFilter.getFilteredHeadings(content, 'titles', indexContent);
      expect(headings).toEqual(['Component1', 'Component3']);
      expect(headings).not.toContain('Component2');
    });

    it('should extract markdown headings', () => {
      const content = `
# Main Title
## Section 1
### Subsection
## Section 2
`;
      
      const headings = contentFilter.getFilteredHeadings(content, 'markdown', null);
      expect(headings).toEqual([
        '# Main Title',
        '## Section 1',
        '### Subsection',
        '## Section 2'
      ]);
    });
  });

  describe('getFilteredSections', () => {
    it('should extract sections excluding ignored ones', () => {
      const indexContent = `
# Documentation

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
      expect(sections).not.toContain('Deprecated API');
      expect(sections).not.toContain('Legacy Support');
    });

    it('should handle sections without numbers', () => {
      const indexContent = `
## 1. First Section
## 2. Second Section
## Third Section (no number)
## 4. Fourth Section
`;
      
      const sections = contentFilter.getFilteredSections(indexContent);
      expect(sections).toEqual(['First Section', 'Second Section', 'Fourth Section']);
    });
  });

  describe('isTopicAllowed', () => {
    it('should always return true', () => {
      expect(contentFilter.isTopicAllowed('any-topic')).toBe(true);
      expect(contentFilter.isTopicAllowed('another-topic')).toBe(true);
    });
  });
});