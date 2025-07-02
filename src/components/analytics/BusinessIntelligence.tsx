import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle, TrendingUp, Target, Lightbulb, DollarSign, Clock, Fuel, Users } from "lucide-react";

const businessMetrics = {
  totalRevenue: 15420000,
  totalShipments: 2847,
  profitMargin: 18.2,
  onTimeRate: 87.3,
  fuelEfficiency: 6.8,
  customerSatisfaction: 91.5
};

const profitableRoutes = [
  { route: 'Lahore-Karachi', totalProfit: 480000, avgProfit: 2051, trips: 234 },
  { route: 'Islamabad-Lahore', totalProfit: 378000, avgProfit: 2000, trips: 189 },
  { route: 'Karachi-Faisalabad', totalProfit: 312000, avgProfit: 2000, trips: 156 },
  { route: 'Multan-Rawalpindi', totalProfit: 196000, avgProfit: 2000, trips: 98 },
  { route: 'Peshawar-Quetta', totalProfit: 134000, avgProfit: 2000, trips: 67 }
];

const vehicleEfficiencyRanking = [
  { type: 'Van', fuelEff: 8.2, performance: 88, profit: 98000 },
  { type: 'Truck', fuelEff: 6.8, performance: 82, profit: 145000 },
  { type: 'Trailer', fuelEff: 5.1, performance: 75, profit: 210000 }
];

const regionalPerformance = [
  { region: 'Punjab', revenue: 6800000, avgDelay: 22.5, onTimeRate: 89.2 },
  { region: 'Sindh', revenue: 4900000, avgDelay: 28.3, onTimeRate: 85.1 },
  { region: 'KPK', revenue: 2100000, avgDelay: 35.1, onTimeRate: 78.4 },
  { region: 'Balochistan', revenue: 1620000, avgDelay: 42.8, onTimeRate: 72.8 }
];

const strategicOpportunities = [
  {
    title: 'Revenue Optimization',
    description: 'Potential 15% revenue increase through efficiency improvements',
    impact: 2313000,
    timeframe: '3-6 months',
    icon: DollarSign,
    type: 'revenue'
  },
  {
    title: 'Fuel Cost Reduction',
    description: '10% fuel savings through route optimization and maintenance',
    impact: 420000,
    timeframe: '1-3 months',
    icon: Fuel,
    type: 'cost'
  },
  {
    title: 'On-Time Performance',
    description: 'Achieve 95% on-time delivery rate (current: 87.3%)',
    impact: 7.7,
    timeframe: '2-4 months',
    icon: Clock,
    type: 'performance'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Reach 95% satisfaction through service improvements',
    impact: 3.5,
    timeframe: '6-12 months',
    icon: Users,
    type: 'satisfaction'
  }
];

const keyInsights = [
  {
    title: 'High-Delay Routes Need Attention',
    description: 'Routes like Lahore-Karachi show 35+ minute delays but generate highest revenue. Focus optimization here.',
    severity: 'high',
    actionItems: ['Deploy additional resources', 'Implement real-time tracking', 'Route optimization analysis']
  },
  {
    title: 'Vehicle Type Efficiency Gaps',
    description: 'Trailers show poor fuel efficiency (5.1 km/L) but highest profitability. Maintenance focus needed.',
    severity: 'medium',
    actionItems: ['Schedule trailer maintenance', 'Driver training program', 'Fuel system optimization']
  },
  {
    title: 'Regional Performance Disparities',
    description: 'Balochistan shows 42.8 min average delays vs Punjab 22.5 min. Infrastructure and logistics gaps.',
    severity: 'medium',
    actionItems: ['Regional logistics review', 'Local partnership opportunities', 'Resource redistribution']
  },
  {
    title: 'Van Fleet Expansion Opportunity',
    description: 'Vans show highest efficiency (8.2 km/L) and performance (88%). Scale for short-distance routes.',
    severity: 'low',
    actionItems: ['Fleet expansion planning', 'Route assignment optimization', 'Driver recruitment']
  }
];

export const BusinessIntelligence = () => {
  const { toast } = useToast();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDownloadReport = () => {
    toast({
      title: "Business Report Download",
      description: "Generating comprehensive business intelligence report...",
    });
    
    // Simulate download process
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Your full business report has been downloaded successfully.",
      });
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      default: return '🟢';
    }
  };

  return (
    <div className="space-y-6">
      {/* Executive Summary */}
      <Card className="bg-gradient-primary border-0">
        <CardHeader>
          <CardTitle className="text-primary-foreground text-2xl">Business Intelligence Summary</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Strategic insights and recommendations for Uqaab Logistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-primary-foreground">
            <div className="text-center">
              <h4 className="text-lg font-bold">{formatCurrency(businessMetrics.totalRevenue)}</h4>
              <p className="text-sm text-primary-foreground/80">Total Revenue</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{businessMetrics.totalShipments.toLocaleString()}</h4>
              <p className="text-sm text-primary-foreground/80">Shipments</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{businessMetrics.profitMargin}%</h4>
              <p className="text-sm text-primary-foreground/80">Profit Margin</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{businessMetrics.onTimeRate}%</h4>
              <p className="text-sm text-primary-foreground/80">On-Time Rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{businessMetrics.fuelEfficiency} km/L</h4>
              <p className="text-sm text-primary-foreground/80">Fuel Efficiency</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold">{businessMetrics.customerSatisfaction}%</h4>
              <p className="text-sm text-primary-foreground/80">Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Routes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Top 5 Most Profitable Routes
          </CardTitle>
          <CardDescription>Routes generating highest profit margins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {profitableRoutes.map((route, index) => (
              <div key={route.route} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge variant={index === 0 ? "default" : "outline"}>#{index + 1}</Badge>
                  <div>
                    <h4 className="font-medium">{route.route}</h4>
                    <p className="text-sm text-muted-foreground">{route.trips} trips completed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{formatCurrency(route.totalProfit)}</p>
                  <p className="text-sm text-muted-foreground">Avg: {formatCurrency(route.avgProfit)}/trip</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vehicle and Regional Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Type Efficiency Ranking</CardTitle>
            <CardDescription>Performance metrics by vehicle category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vehicleEfficiencyRanking.map((vehicle, index) => (
                <div key={vehicle.type} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{vehicle.type}</h4>
                    <Badge variant={index === 0 ? "default" : "outline"}>
                      Rank #{index + 1}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Fuel Eff.</p>
                      <p className="font-bold">{vehicle.fuelEff} km/L</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Performance</p>
                      <p className="font-bold">{vehicle.performance}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Profit</p>
                      <p className="font-bold">{formatCurrency(vehicle.profit)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regional Performance Analysis</CardTitle>
            <CardDescription>Revenue and efficiency by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalPerformance.map((region, index) => (
                <div key={region.region} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{region.region}</h4>
                    <Badge variant={region.onTimeRate > 85 ? "default" : "secondary"}>
                      {region.onTimeRate}% on-time
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Revenue</p>
                      <p className="font-bold">{formatCurrency(region.revenue)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Delay</p>
                      <p className="font-bold">{region.avgDelay} min</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategic Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Strategic Growth Opportunities
          </CardTitle>
          <CardDescription>Data-driven recommendations for business expansion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategicOpportunities.map((opportunity) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={opportunity.title} className="p-4 border rounded-lg hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{opportunity.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {opportunity.timeframe}
                        </Badge>
                        <span className="font-bold text-primary">
                          {opportunity.type === 'revenue' || opportunity.type === 'cost' 
                            ? formatCurrency(opportunity.impact)
                            : `+${opportunity.impact}%`
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights & Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Key Business Insights & Action Items
          </CardTitle>
          <CardDescription>Critical findings requiring management attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {keyInsights.map((insight) => (
              <div key={insight.title} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getSeverityIcon(insight.severity)}</span>
                    <h4 className="font-medium">{insight.title}</h4>
                  </div>
                  <Badge variant={getSeverityColor(insight.severity)}>
                    {insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1)} Priority
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <div>
                  <p className="font-medium text-sm mb-2">Recommended Actions:</p>
                  <ul className="space-y-1">
                    {insight.actionItems.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Recommendations */}
      <Card className="bg-gradient-secondary border-0">
        <CardHeader>
          <CardTitle className="text-secondary-foreground">Strategic Decision Points</CardTitle>
          <CardDescription className="text-secondary-foreground/80">
            Critical decisions for the next quarter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-secondary-foreground">
            <div className="text-center p-4">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Immediate Actions</h4>
              <p className="text-sm text-secondary-foreground/80">
                Address high-delay routes and trailer maintenance within 30 days
              </p>
            </div>
            <div className="text-center p-4">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Growth Investment</h4>
              <p className="text-sm text-secondary-foreground/80">
                Expand van fleet and optimize Punjab region operations
              </p>
            </div>
            <div className="text-center p-4">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Target Metrics</h4>
              <p className="text-sm text-secondary-foreground/80">
                95% on-time rate, 8+ km/L efficiency, 20%+ profit margin
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="secondary" size="lg" onClick={handleDownloadReport}>
              Download Full Business Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};