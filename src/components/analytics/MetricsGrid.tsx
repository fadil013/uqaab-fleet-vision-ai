import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, ComposedChart, Area, AreaChart } from 'recharts';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { TrendingUp, Download, Calendar, AlertTriangle } from 'lucide-react';

// Enhanced data with all visualizations from the notebook
const monthlyRevenueData = [
  { month: 'Jan', revenue: 1200000, delays: 28.5, efficiency: 6.2, shipments: 245, prediction: 1250000 },
  { month: 'Feb', revenue: 1350000, delays: 25.2, efficiency: 6.5, shipments: 278, prediction: 1380000 },
  { month: 'Mar', revenue: 1180000, delays: 32.1, efficiency: 5.9, shipments: 234, prediction: 1200000 },
  { month: 'Apr', revenue: 1420000, delays: 22.8, efficiency: 6.8, shipments: 289, prediction: 1450000 },
  { month: 'May', revenue: 1650000, delays: 19.5, efficiency: 7.1, shipments: 312, prediction: 1680000 },
  { month: 'Jun', revenue: 1580000, delays: 24.7, efficiency: 6.8, shipments: 298, prediction: 1620000 }
];

const routePerformanceMatrix = [
  { route: 'Lahore-Karachi', trips: 234, efficiency: 78, delay: 35, revenue: 2400000, profitability: 480000 },
  { route: 'Islamabad-Lahore', trips: 189, efficiency: 85, delay: 18, revenue: 1890000, profitability: 378000 },
  { route: 'Karachi-Faisalabad', trips: 156, efficiency: 82, delay: 22, revenue: 1560000, profitability: 312000 },
  { route: 'Multan-Rawalpindi', trips: 98, efficiency: 88, delay: 15, revenue: 980000, profitability: 196000 },
  { route: 'Peshawar-Quetta', trips: 67, efficiency: 75, delay: 42, revenue: 670000, profitability: 134000 }
];

const fuelEfficiencyDistribution = [
  { range: '4-5 km/L', truck: 15, van: 2, trailer: 8, total: 25 },
  { range: '5-6 km/L', truck: 25, van: 5, trailer: 12, total: 42 },
  { range: '6-7 km/L', truck: 30, van: 8, trailer: 2, total: 40 },
  { range: '7-8 km/L', truck: 15, van: 15, trailer: 0, total: 30 },
  { range: '8-9 km/L', truck: 4, van: 15, trailer: 0, total: 19 }
];

const performanceScoreVsRevenue = [
  { performance: 65, revenue: 145000, delay: 45, size: 89, vehicle: 'Truck' },
  { performance: 88, revenue: 98000, delay: 15, size: 45, vehicle: 'Van' },
  { performance: 75, revenue: 210000, delay: 35, size: 22, vehicle: 'Trailer' },
  { performance: 82, revenue: 122000, delay: 25, size: 15, vehicle: 'Truck' },
  { performance: 91, revenue: 105000, delay: 12, size: 12, vehicle: 'Van' },
  { performance: 70, revenue: 195000, delay: 38, size: 8, vehicle: 'Trailer' }
];

const routeEfficiencyHeatmapData = [
  {
    id: 'Punjab',
    data: [
      { x: 'Sindh', y: 85 },
      { x: 'KPK', y: 78 },
      { x: 'Balochistan', y: 72 }
    ]
  },
  {
    id: 'Sindh',
    data: [
      { x: 'Punjab', y: 82 },
      { x: 'KPK', y: 75 },
      { x: 'Balochistan', y: 68 }
    ]
  },
  {
    id: 'KPK',
    data: [
      { x: 'Punjab', y: 76 },
      { x: 'Sindh', y: 73 },
      { x: 'Balochistan', y: 65 }
    ]
  },
  {
    id: 'Balochistan',
    data: [
      { x: 'Punjab', y: 70 },
      { x: 'Sindh', y: 67 },
      { x: 'KPK', y: 62 }
    ]
  }
];

const vehicleComparisonData = [
  { vehicle: 'Truck', fuelEff: 68, performance: 82, profit: 1450 },
  { vehicle: 'Van', fuelEff: 82, performance: 88, profit: 980 },
  { vehicle: 'Trailer', fuelEff: 51, performance: 75, profit: 2100 }
];

const delayPatternsByDay = [
  { day: 'Mon', avgDelay: 18.5, frequency: 15, above_avg: false },
  { day: 'Tue', avgDelay: 22.3, frequency: 18, above_avg: false },
  { day: 'Wed', avgDelay: 25.8, frequency: 22, above_avg: true },
  { day: 'Thu', avgDelay: 28.2, frequency: 25, above_avg: true },
  { day: 'Fri', avgDelay: 32.1, frequency: 28, above_avg: true },
  { day: 'Sat', avgDelay: 19.7, frequency: 12, above_avg: false },
  { day: 'Sun', avgDelay: 16.2, frequency: 8, above_avg: false }
];

const performanceDistribution = [
  { category: 'Poor (0-60)', count: 12, percentage: 8, color: '#ef4444' },
  { category: 'Below Avg (60-75)', count: 28, percentage: 18, color: '#f97316' },
  { category: 'Average (75-85)', count: 45, percentage: 29, color: '#eab308' },
  { category: 'Good (85-95)', count: 52, percentage: 33, color: '#22c55e' },
  { category: 'Excellent (95-100)', count: 19, percentage: 12, color: '#10b981' }
];

const routeCategoryRevenue = [
  { category: 'Short (<300km)', percentage: 25, revenue: 3200000, color: 'hsl(var(--chart-1))' },
  { category: 'Medium (300-500km)', percentage: 35, revenue: 4800000, color: 'hsl(var(--chart-2))' },
  { category: 'Long (500-700km)', percentage: 30, revenue: 5600000, color: 'hsl(var(--chart-3))' },
  { category: 'Very Long (>700km)', percentage: 10, revenue: 1880000, color: 'hsl(var(--chart-4))' }
];

const treemapData = {
  name: 'Shipments',
  children: [
    {
      name: 'Punjab',
      children: [
        { name: 'Truck', value: 156, color: 'hsl(var(--chart-1))' },
        { name: 'Van', value: 89, color: 'hsl(var(--chart-2))' },
        { name: 'Trailer', value: 45, color: 'hsl(var(--chart-3))' }
      ]
    },
    {
      name: 'Sindh',
      children: [
        { name: 'Truck', value: 98, color: 'hsl(var(--chart-1))' },
        { name: 'Van', value: 67, color: 'hsl(var(--chart-2))' },
        { name: 'Trailer', value: 34, color: 'hsl(var(--chart-3))' }
      ]
    },
    {
      name: 'KPK',
      children: [
        { name: 'Truck', value: 56, color: 'hsl(var(--chart-1))' },
        { name: 'Van', value: 34, color: 'hsl(var(--chart-2))' },
        { name: 'Trailer', value: 23, color: 'hsl(var(--chart-3))' }
      ]
    }
  ]
};

const distanceVsDelayRegression = [
  { distance: 150, delay: 12, predicted: 15 },
  { distance: 200, delay: 18, predicted: 18 },
  { distance: 350, delay: 22, predicted: 25 },
  { distance: 400, delay: 28, predicted: 30 },
  { distance: 550, delay: 35, predicted: 38 },
  { distance: 600, delay: 42, predicted: 42 },
  { distance: 750, delay: 48, predicted: 50 },
  { distance: 800, delay: 55, predicted: 55 }
];

export const MetricsGrid = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const avgDelay = delayPatternsByDay.reduce((sum, day) => sum + day.avgDelay, 0) / delayPatternsByDay.length;

  return (
    <div className="space-y-6">
      {/* Revenue Trend with Prediction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Daily Revenue Trend with Prediction
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </CardTitle>
          <CardDescription>Monthly revenue performance with AI-powered forecasting</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'revenue' || name === 'prediction' ? formatCurrency(Number(value)) : value,
                  name === 'revenue' ? 'Actual Revenue' : 
                  name === 'prediction' ? 'Predicted Revenue' : 
                  name === 'shipments' ? 'Shipments' : 'Value'
                ]}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1"
                stroke="hsl(var(--chart-1))" 
                fill="hsl(var(--chart-1))" 
                fillOpacity={0.6}
                name="Actual Revenue"
              />
              <Line 
                type="monotone" 
                dataKey="prediction" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                strokeDasharray="8 8"
                name="Predicted Revenue"
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
              />
              <Bar dataKey="shipments" fill="hsl(var(--chart-3))" fillOpacity={0.3} name="Shipments" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Fuel Efficiency Distribution by Vehicle Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fuel Efficiency Distribution by Vehicle Type</CardTitle>
            <CardDescription>Efficiency patterns across fleet segments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={fuelEfficiencyDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="range" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="truck" stackId="a" fill="hsl(var(--chart-1))" name="Truck" />
                <Bar dataKey="van" stackId="a" fill="hsl(var(--chart-2))" name="Van" />
                <Bar dataKey="trailer" stackId="a" fill="hsl(var(--chart-3))" name="Trailer" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Score vs Revenue</CardTitle>
            <CardDescription>Correlation analysis with delay impact (color intensity)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  type="number" 
                  dataKey="performance" 
                  name="Performance Score" 
                  domain={[60, 95]}
                  className="text-xs fill-muted-foreground"
                />
                <YAxis 
                  type="number" 
                  dataKey="revenue" 
                  name="Revenue" 
                  className="text-xs fill-muted-foreground"
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => [
                    name === 'revenue' ? formatCurrency(Number(value)) : `${value}${name === 'performance' ? '%' : name === 'delay' ? 'min' : ''}`,
                    name === 'performance' ? 'Performance' : name === 'revenue' ? 'Revenue' : 'Delay'
                  ]}
                />
                <Scatter 
                  name="Truck" 
                  data={performanceScoreVsRevenue.filter(d => d.vehicle === 'Truck')} 
                  fill="hsl(var(--chart-1))" 
                />
                <Scatter 
                  name="Van" 
                  data={performanceScoreVsRevenue.filter(d => d.vehicle === 'Van')} 
                  fill="hsl(var(--chart-2))" 
                />
                <Scatter 
                  name="Trailer" 
                  data={performanceScoreVsRevenue.filter(d => d.vehicle === 'Trailer')} 
                  fill="hsl(var(--chart-3))" 
                />
                <Legend />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Route Efficiency Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Route Efficiency Heatmap</CardTitle>
          <CardDescription>Efficiency scores by origin-destination pairs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="text-xs font-medium">To →</div>
              <div className="text-xs font-medium">Sindh</div>
              <div className="text-xs font-medium">KPK</div>
              <div className="text-xs font-medium">Balochistan</div>
            </div>
            {routeEfficiencyHeatmapData.map((row) => (
              <div key={row.id} className="grid grid-cols-4 gap-2 items-center">
                <div className="text-xs font-medium text-right">{row.id}</div>
                {row.data.map((cell, idx) => (
                  <div 
                    key={idx}
                    className="h-12 flex items-center justify-center rounded text-xs font-bold text-white"
                    style={{ 
                      backgroundColor: cell.y > 80 ? '#22c55e' : 
                                     cell.y > 70 ? '#eab308' : 
                                     cell.y > 60 ? '#f97316' : '#ef4444'
                    }}
                  >
                    {cell.y}%
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Performance Comparison Matrix</CardTitle>
          <CardDescription>Multi-metric analysis across vehicle types</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={vehicleComparisonData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="vehicle" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'profit' ? formatCurrency(Number(value)) : `${value}${name === 'fuelEff' ? ' km/L' : '%'}`,
                  name === 'fuelEff' ? 'Fuel Efficiency' : name === 'performance' ? 'Performance' : 'Profit'
                ]}
              />
              <Legend />
              <Bar dataKey="fuelEff" fill="hsl(var(--chart-1))" name="Fuel Eff (km/L)" />
              <Bar dataKey="performance" fill="hsl(var(--chart-2))" name="Performance %" />
              <Bar dataKey="profit" fill="hsl(var(--chart-3))" name="Profit (÷100)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Delay Patterns and Performance Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Delay Patterns by Day of Week</CardTitle>
            <CardDescription>Average delay with frequency analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={delayPatternsByDay}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="avgDelay" 
                  fill="hsl(var(--chart-1))"
                  name="Avg Delay (min)"
                />
                <Line 
                  type="monotone" 
                  dataKey={avgDelay} 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  name="Average Delay"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Score Distribution</CardTitle>
            <CardDescription>Fleet categorization by performance levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={performanceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category.split(' ')[0]}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {performanceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} vehicles`, 'Count']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Route Category Revenue and Treemap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Route Category</CardTitle>
            <CardDescription>Revenue distribution by distance segments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={routeCategoryRevenue}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {routeCategoryRevenue.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Revenue']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipment Volume Treemap</CardTitle>
            <CardDescription>Hierarchical view: Region → Vehicle Type</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ height: '350px' }}>
              <ResponsiveTreeMap
                data={treemapData}
                identity="name"
                value="value"
                valueFormat=".02s"
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                labelSkipSize={12}
                labelTextColor={{
                  from: 'color',
                  modifiers: [['darker', 1.2]]
                }}
                parentLabelPosition="left"
                parentLabelTextColor={{
                  from: 'color',
                  modifiers: [['darker', 2]]
                }}
                borderColor={{
                  from: 'color',
                  modifiers: [['darker', 0.1]]
                }}
                animate={true}
                motionConfig="gentle"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Distance vs Delay Regression */}
      <Card>
        <CardHeader>
          <CardTitle>Delay vs Distance Regression Analysis</CardTitle>
          <CardDescription>Predictive correlation between route distance and delivery delays</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart data={distanceVsDelayRegression}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                type="number" 
                dataKey="distance" 
                name="Distance (km)" 
                className="text-xs fill-muted-foreground"
              />
              <YAxis 
                type="number" 
                dataKey="delay" 
                name="Delay (min)" 
                className="text-xs fill-muted-foreground"
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  `${value}${name === 'distance' ? ' km' : ' min'}`,
                  name === 'distance' ? 'Distance' : name === 'delay' ? 'Actual Delay' : 'Predicted Delay'
                ]}
              />
              <Scatter name="Actual Data" data={distanceVsDelayRegression} fill="hsl(var(--chart-1))" />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--destructive))" 
                strokeWidth={3}
                name="Regression Line"
                dot={false}
              />
              <Legend />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Route Performance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Route Optimization Matrix</CardTitle>
          <CardDescription>Comprehensive route analysis with profitability and efficiency metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {routePerformanceMatrix.map((route) => (
              <div key={route.route} className="space-y-2 p-4 border rounded-lg hover:shadow-soft transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">{route.route}</h4>
                    <p className="text-sm text-muted-foreground">{route.trips} trips completed</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={route.delay < 20 ? "default" : route.delay < 30 ? "secondary" : "destructive"}>
                      {route.delay}min delay
                    </Badge>
                    <Badge variant="outline">
                      {route.efficiency}% efficiency
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Efficiency</span>
                      <span>{route.efficiency}%</span>
                    </div>
                    <Progress value={route.efficiency} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Delay Impact</span>
                      <span>{Math.max(0, 100 - route.delay * 2)}%</span>
                    </div>
                    <Progress value={Math.max(0, 100 - route.delay * 2)} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Revenue</span>
                      <span>{formatCurrency(route.revenue)}</span>
                    </div>
                    <Progress value={(route.revenue / 2500000) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Profitability</span>
                      <span>{formatCurrency(route.profitability)}</span>
                    </div>
                    <Progress value={(route.profitability / 500000) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights Alert */}
      <Card className="border-warning bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            Advanced Analytics Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-foreground">Correlation Analysis</p>
                <p className="text-sm text-muted-foreground">Strong correlation between distance and delay (R² = 0.78)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-foreground">Performance Distribution</p>
                <p className="text-sm text-muted-foreground">33% of fleet in "Good" category, optimization potential for 45%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 bg-info rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-foreground">Route Efficiency Gaps</p>
                <p className="text-sm text-muted-foreground">Balochistan routes show 15-20% efficiency deficit vs Punjab</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};