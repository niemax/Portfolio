export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
}

export interface LineBreakProps {
  width: string | number;
  marginTop?: number;
  mb?: number;
}

export interface MemojiProps {
  height?: number | string;
  width?: number | string;
  ml?: number;
  padding?: number;
}

export interface NavLinkProps {
  fontSize?: number;
  padding?: number;
  onClick?: () => void;
}

export interface HeaderProps {
  siteTitle: string;
}
