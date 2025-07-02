import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const vehicleTypes = [
  { type: 'Truck', count: 89, fuelEff: 6.8, performance: 82, profitability: 145000, maintenance: 15 },
  { type: 'Van', count: 45, fuelEff: 8.2, performance: 88, profitability: 98000, maintenance: 8 },
  { type: 'Trailer', count: 22, fuelEff: 5.1, performance: 75, profitability: 210000, maintenance: 25 }
];

const fuelEfficiencyTrend = [
  { month: 'Jan', truck: 6.2, van: 7.8, trailer: 4.9 },
  { month: 'Feb', truck: 6.5, van: 8.1, trailer: 5.2 },
  { month: 'Mar', truck: 6.1, van: 7.9, trailer: 4.8 },
  { month: 'Apr', truck: 6.8, van: 8.3, trailer: 5.4 },
  { month: 'May', truck: 7.1, van: 8.6, trailer: 5.7 },
  { month: 'Jun', truck: 6.8, van: 8.2, trailer: 5.1 }
];

const vehiclePerformanceRadar = [
  { subject: 'Fuel Efficiency', truck: 68, van: 82, trailer: 51 },
  { subject: 'Speed', truck: 75, van: 85, trailer: 65 },
  { subject: 'Reliability', truck: 82, van: 88, trailer: 75 },
  { subject: 'Capacity', truck: 90, van: 60, trailer: 95 },
  { subject: 'Cost Efficiency', truck: 78, van: 85, trailer: 70 },
  { subject: 'Maintenance', truck: 85, van: 92, trailer: 75 }
];

const efficiencyVsProfitability = [
  { x: 6.8, y: 145000, type: 'Truck', size: 89 },
  { x: 8.2, y: 98000, type: 'Van', size: 45 },
  { x: 5.1, y: 210000, type: 'Trailer', size: 22 },
  { x: 7.2, y: 122000, type: 'Truck', size: 15 },
  { x: 8.5, y: 105000, type: 'Van', size: 12 },
  { x: 4.8, y: 195000, type: 'Trailer', size: 8 }
];

export const VehiclePerformance = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 85) return 'default';
    if (score >= 75) return 'secondary';
    if (score >= 65) return 'outline';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      {/* Vehicle Type Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicleTypes.map((vehicle) => (
          <Card key={vehicle.type} className="hover:shadow-glow transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {vehicle.type}
                <Badge variant="outline">{vehicle.count} units</Badge>
              </CardTitle>
              <CardDescription>Fleet performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Performance Score</span>
                    <span className="font-medium">{vehicle.performance}%</span>
                  </div>
                  <Progress value={vehicle.performance} className="h-2" />
                  <Badge variant={getPerformanceColor(vehicle.performance)} className="mt-2">
                    {vehicle.performance >= 85 ? 'Excellent' : 
                     vehicle.performance >= 75 ? 'Good' : 
                     vehicle.performance >= 65 ? 'Average' : 'Needs Improvement'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Fuel Efficiency</p>
                    <p className="font-bold text-lg">{vehicle.fuelEff} km/L</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Profitability</p>
                    <p className="font-bold text-lg">{formatCurrency(vehicle.profitability)}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Maintenance Needs</span>
                    <span className="font-medium">{vehicle.maintenance}% of fleet</span>
                  </div>
                  <Progress value={100 - vehicle.maintenance} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fuel Efficiency Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Fuel Efficiency Trends by Vehicle Type</CardTitle>
          <CardDescription>Monthly fuel efficiency performance comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={fuelEfficiencyTrend}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value) => [`${value} km/L`, 'Fuel Efficiency']}
              />
              <Legend />
              <Bar dataKey="truck" fill="hsl(var(--chart-1))" name="Truck" />
              <Bar dataKey="van" fill="hsl(var(--chart-2))" name="Van" />
              <Bar dataKey="trailer" fill="hsl(var(--chart-3))" name="Trailer" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Performance Radar</CardTitle>
            <CardDescription>Multi-dimensional performance comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={vehiclePerformanceRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs fill-muted-foreground" />
                <PolarRadiusAxis className="text-xs fill-muted-foreground" />
                <Radar 
                  name="Truck" 
                  dataKey="truck" 
                  stroke="hsl(var(--chart-1))" 
                  fill="hsl(var(--chart-1))" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
                <Radar 
                  name="Van" 
                  dataKey="van" 
                  stroke="hsl(var(--chart-2))" 
                  fill="hsl(var(--chart-2))" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
                <Radar 
                  name="Trailer" 
                  dataKey="trailer" 
                  stroke="hsl(var(--chart-3))" 
                  fill="hsl(var(--chart-3))" 
                  fillOpacity={0.3} 
                  strokeWidth={2}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Efficiency vs Profitability</CardTitle>
            <CardDescription>Scatter plot showing relationship between fuel efficiency and profitability</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Fuel Efficiency" 
                  unit=" km/L" 
                  className="text-xs fill-muted-foreground"
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Profitability" 
                  unit=" PKR" 
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
                    name === 'y' ? formatCurrency(Number(value)) : `${value} km/L`,
                    name === 'y' ? 'Profitability' : 'Fuel Efficiency'
                  ]}
                />
                <Scatter name="Truck" data={efficiencyVsProfitability.filter(d => d.type === 'Truck')} fill="hsl(var(--chart-1))" />
                <Scatter name="Van" data={efficiencyVsProfitability.filter(d => d.type === 'Van')} fill="hsl(var(--chart-2))" />
                <Scatter name="Trailer" data={efficiencyVsProfitability.filter(d => d.type === 'Trailer')} fill="hsl(var(--chart-3))" />
                <Legend />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Optimization Recommendations</CardTitle>
          <CardDescription>Data-driven insights for fleet improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <h4 className="font-medium text-success mb-2">🚐 Van Fleet Optimization</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Vans show highest efficiency (8.2 km/L) and performance (88%). Consider expanding van fleet for short-distance routes.
              </p>
              <Badge variant="outline" className="border-success text-success">Recommended Action</Badge>
            </div>
            
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 className="font-medium text-warning mb-2">🚛 Trailer Maintenance</h4>
              <p className="text-sm text-muted-foreground mb-3">
                25% of trailers need maintenance. Poor fuel efficiency (5.1 km/L) indicates mechanical issues requiring immediate attention.
              </p>
              <Badge variant="outline" className="border-warning text-warning">Action Required</Badge>
            </div>
            
            <div className="p-4 bg-info/10 rounded-lg border border-info/20">
              <h4 className="font-medium text-info mb-2">🚚 Truck Optimization</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Balanced performance but opportunity for 15% fuel efficiency improvement through route optimization and driver training.
              </p>
              <Badge variant="outline" className="border-info text-info">Growth Opportunity</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};