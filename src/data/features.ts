export interface Feature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export const features: Feature[] = [
  { icon: 'server', titleKey: 'dockerStack', descriptionKey: 'dockerStack' },
  { icon: 'cpu', titleKey: 'aiTools', descriptionKey: 'aiTools' },
  { icon: 'terminal', titleKey: 'cliWizard', descriptionKey: 'cliWizard' },
  { icon: 'bot', titleKey: 'telegramBot', descriptionKey: 'telegramBot' },
  { icon: 'globe', titleKey: 'deployModes', descriptionKey: 'deployModes' },
  { icon: 'shield', titleKey: 'security', descriptionKey: 'security' },
];
