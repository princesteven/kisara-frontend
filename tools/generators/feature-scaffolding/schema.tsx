export interface FeatureScaffoldingSchema {
  type: 'crud' | 'single';
  name: string;
  description: string;
  project: string;
}
