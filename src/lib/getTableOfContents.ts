import slugger from 'github-slugger';

export function getTableOfContents(mdxContent: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  const headings = [...Array.from(mdxContent.matchAll(regexp))];
  let tableOfContents: object = [];

  if (headings.length) {
    tableOfContents = headings.map(heading => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
      const headingLink = slugger.slug(headingText, false);

      return {
        id: headingLink,
        text: headingText,
        level: headingType,
      };
    });
  }

  return tableOfContents;
}
