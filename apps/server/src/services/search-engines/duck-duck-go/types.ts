export interface DuckDuckGoSearchResponse {
  Abstract: string;
  AbstractSource: string;
  AbstractText: string;
  AbstractURL: string;
  Answer: string;
  AnswerType: string;
  Definition: string;
  DefinitionSource: string;
  DefinitionURL: string;
  Entity: string;
  Heading: string;
  Image: string;
  ImageHeight: number;
  ImageIsLogo: number;
  ImageWidth: number;
  Infobox: Infobox;
  OfficialDomain: string;
  OfficialWebsite: string;
  Redirect: string;
  RelatedTopics: RelatedTopic[];
  Results: Result[];
  Type: string;
  meta: Meta;
}

export interface Infobox {
  content: Content[];
  meta: Meum[];
}

export interface Content {
  data_type: string;
  label: string;
  value: string | string[] | ContentValue;
  wiki_order: string | number;
}

export interface ContentValue {
  'entity-type': string;
  id: string;
  'numeric-id': number;
}

export interface Meum {
  data_type: string;
  label: string;
  value: string;
}

export interface RelatedTopic {
  FirstURL: string;
  Icon: Icon;
  Result: string;
  Text: string;
}

export interface Icon {
  Height: string;
  URL: string;
  Width: string;
}

export interface Result {
  FirstURL: string;
  Icon: Icon2;
  Result: string;
  Text: string;
}

export interface Icon2 {
  Height: number;
  URL: string;
  Width: number;
}

export interface Meta {
  attribution: string | null;
  blockgroup: string | null;
  created_date: string | null;
  description: string;
  designer: string | null;
  dev_date: string | null;
  dev_milestone: string;
  developer: Developer[];
  example_query: string;
  id: string;
  is_stackexchange: string | null;
  js_callback_name: string;
  live_date: string | null;
  maintainer: Maintainer;
  name: string;
  perl_module: string;
  producer: string | null;
  production_state: string;
  repo: string;
  signal_from: string;
  src_domain: string;
  src_id: number;
  src_name: string;
  src_options: SrcOptions;
  src_url: string | null;
  status: string;
  tab: string;
  topic: string[];
  unsafe: number;
}

export interface Developer {
  name: string;
  type: string;
  url: string;
}

export interface Maintainer {
  github: string;
}

export interface SrcOptions {
  directory: string;
  is_fanon: number;
  is_mediawiki: number;
  is_wikipedia: number;
  language: string;
  min_abstract_length: string;
  skip_abstract: number;
  skip_abstract_paren: number;
  skip_end: string;
  skip_icon: number;
  skip_image_name: number;
  skip_qr: string;
  source_skip: string;
  src_info: string;
}
