import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, LineChart, Line } from 'recharts';

const performanceMetrics = [
  { metric: 'On-Time Delivery', current: 87.3, target: 95, trend: 'up' },
  { metric: 'Fuel Efficiency', current: 6.8, target: 8.0, trend: 'down' },
  { metric: 'Route Efficiency', current: 83.2, target: 90, trend: 'up' },
  { metric: 'Customer Satisfaction', current: 91.5, target: 95, trend: 'stable' },
  { metric: 'Cost per KM', current: 45, target: 40, trend: 'down' },
  { metric: 'Vehicle Utilization', current: 78.4, target: 85, trend: 'up' }
];

const weeklyPerformance = [
  { week: 'Week 1', onTime: 85, efficiency: 82, satisfaction: 89 },
  { week: 'Week 2', onTime: 88, efficiency: 84, satisfaction: 91 },
  { week: 'Week 3', onTime: 86, efficiency: 81, satisfaction: 90 },
  { week: 'Week 4', onTime: 89, efficiency: 85, satisfaction: 93 }
];

const performanceDistribution = [
  { range: 'Poor (0-60)', count: 12, percentage: 8 },
  { range: 'Below Avg (60-75)', count: 28, percentage: 18 },
  { range: 'Average (75-85)', count: 45, percentage: 29 },
  { range: 'Good (85-95)', count: 52, percentage: 33 },
  { range: 'Excellent (95-100)', count: 19, percentage: 12 }
];

const clusterAnalysis = [
  { cluster: 'High Performers', vehicles: 45, avgPerformance: 92, efficiency: 8.2, onTime: 94 },
  { cluster: 'Standard Performers', vehicles: 78, avgPerformance: 78, efficiency: 6.8, onTime: 85 },
  { cluster: 'Improvement Needed', vehicles: 33, avgPerformance: 64, efficiency: 5.4, onTime: 72 }
];

const delayPatterns = [
  { dayOfWeek: 'Monday', avgDelay: 18.5, frequency: 15 },
  { dayOfWeek: 'Tuesday', avgDelay: 22.3, frequency: 18 },
  { dayOfWeek: 'Wednesday', avgDelay: 25.8, frequency: 22 },
  { dayOfWeek: 'Thursday', avgDelay: 28.2, frequency: 25 },
  { dayOfWeek: 'Friday', avgDelay: 32.1, frequency: 28 },
  { dayOfWeek: 'Saturday', avgDelay: 19.7, frequency: 12 },
  { dayOfWeek: 'Sunday', avgDelay: 16.2, frequency: 8 }
];

export const PerformanceInsights = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'default';
      case 'down': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {performanceMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                {metric.metric}
                <span className="text-lg">{getTrendIcon(metric.trend)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">{metric.current}{metric.metric.includes('Efficiency') || metric.metric.includes('Cost') ? '' : '%'}</span>
                  <Badge variant={getTrendColor(metric.trend)} className="text-xs">
                    Target: {metric.target}{metric.metric.includes('Efficiency') || metric.metric.includes('Cost') ? '' : '%'}
                  </Badge>
                </div>
                <Progress 
                  value={(metric.current / metric.target) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-muted-foreground">
                  {metric.current >= metric.target ? 
                    `Exceeding target by ${((metric.current - metric.target) / metric.target * 100).toFixed(1)}%` :
                    `${((metric.target - metric.current) / metric.target * 100).toFixed(1)}% below target`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance Trends</CardTitle>
          <CardDescription>Key performance indicators over the last 4 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={weeklyPerformance}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="week" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  `${value}%`,
                  name === 'onTime' ? 'On-Time Rate' : 
                  name === 'efficiency' ? 'Route Efficiency' : 'Customer Satisfaction'
                ]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="onTime" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={3}
                name="On-Time Rate"
                dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                name="Route Efficiency"
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                name="Customer Satisfaction"
                dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Distribution and Delay Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Score Distribution</CardTitle>
            <CardDescription>Fleet performance categorization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="range" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => [
                    `${value} vehicles`,
                    'Count'
                  ]}
                />
                <Bar dataKey="count" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delay Patterns by Day of Week</CardTitle>
            <CardDescription>Average delay minutes and frequency analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={delayPatterns}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="dayOfWeek" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => [
                    name === 'avgDelay' ? `${value} minutes` : `${value}%`,
                    name === 'avgDelay' ? 'Avg Delay' : 'Frequency'
                  ]}
                />
                <Legend />
                <Bar dataKey="avgDelay" fill="hsl(var(--chart-1))" name="Avg Delay (min)" />
                <Bar dataKey="frequency" fill="hsl(var(--chart-2))" name="Frequency %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Cluster Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Cluster Analysis</CardTitle>
          <CardDescription>Fleet segmentation based on performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clusterAnalysis.map((cluster, index) => (
              <div key={cluster.cluster} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-foreground">{cluster.cluster}</h4>
                  <Badge variant={index === 0 ? "default" : index === 1 ? "secondary" : "destructive"}>
                    {cluster.vehicles} vehicles
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Performance Score</p>
                    <p className="text-xl font-bold">{cluster.avgPerformance}%</p>
                    <Progress value={cluster.avgPerformance} className="h-2 mt-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Efficiency</p>
                    <p className="text-xl font-bold">{cluster.efficiency} km/L</p>
                    <Progress value={(cluster.efficiency / 10) * 100} className="h-2 mt-1" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">On-Time Rate</p>
                    <p className="text-xl font-bold">{cluster.onTime}%</p>
                    <Progress value={cluster.onTime} className="h-2 mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Improvement Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Improvement Action Plan</CardTitle>
          <CardDescription>Data-driven recommendations for operational excellence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-foreground mb-3">🎯 Immediate Actions (0-30 days)</h4>
              <div className="space-y-3">
                <div className="p-3 bg-destructive/10 rounded border border-destructive/20">
                  <p className="font-medium text-sm">Address Thursday-Friday Delays</p>
                  <p className="text-xs text-muted-foreground">Deploy additional resources during peak delay days</p>
                </div>
                <div className="p-3 bg-warning/10 rounded border border-warning/20">
                  <p className="font-medium text-sm">Fuel Efficiency Training</p>
                  <p className="text-xs text-muted-foreground">33 vehicles need immediate efficiency coaching</p>
                </div>
                <div className="p-3 bg-info/10 rounded border border-info/20">
                  <p className="font-medium text-sm">Route Optimization</p>
                  <p className="text-xs text-muted-foreground">Focus on high-delay routes for quick wins</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground mb-3">🚀 Strategic Initiatives (30-90 days)</h4>
              <div className="space-y-3">
                <div className="p-3 bg-success/10 rounded border border-success/20">
                  <p className="font-medium text-sm">High Performer Recognition</p>
                  <p className="text-xs text-muted-foreground">Implement incentive program for top 45 vehicles</p>
                </div>
                <div className="p-3 bg-primary/10 rounded border border-primary/20">
                  <p className="font-medium text-sm">Technology Upgrade</p>
                  <p className="text-xs text-muted-foreground">GPS tracking and route optimization for all vehicles</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded border border-secondary/20">
                  <p className="font-medium text-sm">Predictive Maintenance</p>
                  <p className="text-xs text-muted-foreground">Prevent performance degradation through data analytics</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};