export type DomainCategory = 
  | 'FOUNDATIONAL'
  | 'KNOWLEDGE'
  | 'ENGINEERING'
  | 'NAVIGATION'
  | 'SCIENCE'
  | 'MEDICINE'
  | 'MATERIALS'
  | 'ENERGY'
  | 'TRANSPORTATION'
  | 'COMMUNICATION'
  | 'COMPUTING'
  | 'SPACE'
  | 'AI';

export type EraId = 
  | 'PREHISTORY'
  | 'ANCIENT_WORLD'
  | 'CLASSICAL_PERIOD'
  | 'MEDIEVAL_PERIOD'
  | 'EARLY_MODERN'
  | 'INDUSTRIAL_REVOLUTION'
  | 'ELECTRIFICATION'
  | 'COMPUTING_AGE'
  | 'INTERNET_AGE'
  | 'AI_ERA';

export type RelationshipType = 
  | 'PRECEDED'
  | 'ENABLED'
  | 'INSPIRED'
  | 'DERIVED_FROM'
  | 'DEPENDS_ON'
  | 'IMPROVED'
  | 'REPLACED'
  | 'EXTENDED'
  | 'APPLIED'
  | 'INFLUENCED';

export type ConfidenceLevel = 
  | 'VERIFIED'
  | 'DOCUMENTED'
  | 'APPROXIMATE'
  | 'DISPUTED';

export type ContributorRole = 
  | 'inventor'
  | 'co-developer'
  | 'contributor'
  | 'popularizer'
  | 'theoretical_precursor'
  | 'institution'
  | 'collective_culture';

export interface Contributor {
  name: string;
  role: ContributorRole;
  periodOrLifespan?: string;
  affiliationOrRegion?: string;
  contributionNote?: string;
}

export interface HistoricalStage {
  stage: string;
  period: string;
  description: string;
}

export interface SourceCitation {
  source: string;
  sourceType: 'institutional' | 'academic' | 'encyclopedic' | 'primary_archive';
  sourceUrl?: string;
  retrievalDate?: string;
  confidenceNote?: string;
}

export interface MediaAsset {
  url: string;
  caption: string;
  attribution: string;
  license: string;
  type?: 'photo' | 'diagram' | 'artifact' | 'manuscript';
}

export interface Innovation {
  id: string;
  name: string;
  aliases?: string[];
  date: string; // e.g. "~3500 BCE", "1687 CE", "1969 CE"
  date_numeric: number; // numeric year for chronological sorting & timeline (e.g. -3500, 1687, 1969)
  date_start?: number;
  date_end?: number;
  date_precision: 'exact' | 'year' | 'decade' | 'century' | 'millennium' | 'approximate';
  era: EraId;
  domain: DomainCategory;
  type: string; // e.g., "Tool", "Theory", "System", "Machine", "Mathematical Concept", "Protocol"
  region: string;
  civilization: string;
  lat: number;
  lng: number;
  
  overview: string;
  why_it_matters: string;
  problem_solved: string;
  mechanism: string;
  historical_development: HistoricalStage[];
  contributors: Contributor[];
  
  predecessors: string[]; // Innovation IDs that directly enabled this
  successors: string[];   // Innovation IDs that this directly enabled
  
  modern_legacy: string;
  sources: SourceCitation[];
  media?: MediaAsset;
  
  confidence: ConfidenceLevel;
  confidence_note: string;
  
  tags?: string[];
}

export interface Relationship {
  id: string;
  source: string; // source innovation id
  target: string; // target innovation id
  relationship_type: RelationshipType;
  evidence: string;
  source_reference?: string;
}

export interface EraInfo {
  id: EraId;
  name: string;
  period: string;
  startYear: number;
  endYear: number;
  description: string;
  color: string;
}

export interface DomainInfo {
  id: DomainCategory;
  name: string;
  description: string;
  color: string;
  borderColor: string;
  bgRgba: string;
}

export interface CivilizationInfo {
  id: string;
  name: string;
  region: string;
  period: string;
  description: string;
  lat: number;
  lng: number;
  keyContributions: string[];
}

export type ViewMode = 
  | 'graph'
  | 'timeline'
  | 'map'
  | 'paths'
  | 'compare'
  | 'civilization'
  | '3d'
  | 'innovation-timeline';

export interface FilterState {
  searchQuery: string;
  selectedEras: EraId[];
  selectedDomains: DomainCategory[];
  selectedConfidence: ConfidenceLevel[];
  selectedCivilization?: string;
}

export interface PathStep {
  from: Innovation;
  to: Innovation;
  relationship: Relationship;
}

export interface PathResult {
  startId: string;
  endId: string;
  nodes: Innovation[];
  steps: PathStep[];
  found: boolean;
  message?: string;
}
