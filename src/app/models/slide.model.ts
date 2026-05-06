// ============================================================
// Slide data model
// To add a new slide: add an entry to SLIDES array in slides.data.ts
// To change slide type, set the `type` field
// ============================================================

export type SlideType =
  | 'title'
  | 'section'
  | 'bullets'
  | 'two-column'
  | 'architecture'
  | 'quote'
  | 'code'
  | 'references';

export interface BulletItem {
  text: string;
  sub?: string[];
}

export interface ColumnContent {
  title?: string;
  bullets: BulletItem[];
  accent?: 'blue' | 'teal' | 'purple';
}

export interface CodeBlock {
  language: string;
  code: string;
}

export interface CodeTab {
  label: string;
  description?: string;
  codeBlocks: CodeBlock[];
}

export interface ReferenceGroup {
  category: string;
  links: { label: string; url: string }[];
}

export interface ArchLayer {
  label: string;
  detail?: string;          // short explanation shown beside the rectangle
  accent?: 'blue' | 'teal' | 'purple';
}

export interface Slide {
  id: number;
  type: SlideType;

  // common
  title?: string;
  subtitle?: string;
  eyebrow?: string;   // small tag above title

  // bullets slide
  bullets?: BulletItem[];

  // two-column
  left?: ColumnContent;
  right?: ColumnContent;

  // architecture — list of layers with optional side detail
  layers?: ArchLayer[];
  /** When true, architecture layers reveal from bottom to top. */
  revealFromBottom?: boolean;

  // quote / takeaway
  quote?: string;
  attribution?: string;

  // code demo
  codeBlocks?: CodeBlock[];
  description?: string;
  /** When set, renders the code slide as a tabbed view. Overrides codeBlocks. */
  codeTabs?: CodeTab[];

  // references
  referenceGroups?: ReferenceGroup[];

  // presenter note (not shown on slide)
  note?: string;
}
