export interface Trend {
    // info when created
    id: string;
    createdAt: string;
    status: 'active' | 'archived';
    //details
    industry: string;
    dataSources: string[];
    keywords: string[];
    trendType: 'current' | 'predicted';
    timeframe: string;
    // outputted data
    title: string;
    engagementScore: number;
    prediction: string;
    actionItems: string[];
}
