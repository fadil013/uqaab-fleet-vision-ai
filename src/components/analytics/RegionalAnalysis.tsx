import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const regionalData = [
  { region: 'Punjab', shipments: 1247, revenue: 6800000, delays: 22.5, efficiency: 85 },
  { region: 'Sindh', shipments: 892, revenue: 4900000, delays: 28.3, efficiency: 78 },
  { region: 'KPK', shipments: 456, revenue: 2100000, delays: 35.1, efficiency: 72 },
  { region: 'Balochistan', shipments: 252, revenue: 1620000, delays: 42.8, efficiency: 68 }
];

const routeDistribution = [
  { name: 'Inter-city', value: 45, color: 'hsl(var(--chart-1))' },
  { name: 'Intra-city', value: 30, color: 'hsl(var(--chart-2))' },
  { name: 'Cross-border', value: 15, color: 'hsl(var(--chart-3))' },
  { name: 'Rural', value: 10, color: 'hsl(var(--chart-4))' }
];

const delayByRegionVehicle = [
  { region: 'Punjab', truck: 18, van: 15, trailer: 25 },
  { region: 'Sindh', truck: 22, van: 19, trailer: 32 },
  { region: 'KPK', truck: 28, van: 24, trailer: 41 },
  { region: 'Balochistan', truck: 35, van: 30, trailer: 48 }
];

export const RegionalAnalysis = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Regional Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Revenue Performance</CardTitle>
          <CardDescription>Revenue and efficiency metrics by region</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={regionalData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="region" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'revenue' ? formatCurrency(Number(value)) : value,
                  name === 'revenue' ? 'Revenue' : name === 'shipments' ? 'Shipments' : 'Efficiency %'
                ]}
              />
              <Legend />
              <Bar dataKey="revenue" fill="hsl(var(--chart-1))" name="Revenue" />
              <Bar dataKey="efficiency" fill="hsl(var(--chart-2))" name="Efficiency" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Regional Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regionalData.map((region) => (
          <Card key={region.region}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{region.region}</CardTitle>
              <CardDescription>{region.shipments} shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(region.revenue)}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Revenue</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Efficiency</span>
                  <Badge variant={region.efficiency > 80 ? "default" : region.efficiency > 70 ? "secondary" : "destructive"}>
                    {region.efficiency}%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Delay</span>
                  <Badge variant={region.delays < 25 ? "default" : region.delays < 35 ? "secondary" : "destructive"}>
                    {region.delays}min
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Route Distribution and Delay Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Route Distribution</CardTitle>
            <CardDescription>Shipment volume by route category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={routeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {routeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regional Delay Analysis by Vehicle Type</CardTitle>
            <CardDescription>Average delay minutes across regions and vehicle types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={delayByRegionVehicle}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="region" className="text-xs fill-muted-foreground" />
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
      </div>

      {/* Regional Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Performance Insights</CardTitle>
          <CardDescription>Key observations and opportunities by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-success mb-2">🏆 Top Performers</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-success/10 rounded">
                    <span className="text-sm">Punjab - Highest Revenue</span>
                    <Badge variant="outline" className="border-success text-success">
                      {formatCurrency(6800000)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-success/10 rounded">
                    <span className="text-sm">Punjab - Best Efficiency</span>
                    <Badge variant="outline" className="border-success text-success">85%</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-warning mb-2">⚠️ Improvement Areas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-warning/10 rounded">
                    <span className="text-sm">Balochistan - High Delays</span>
                    <Badge variant="outline" className="border-warning text-warning">42.8min</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-warning/10 rounded">
                    <span className="text-sm">KPK - Low Efficiency</span>
                    <Badge variant="outline" className="border-warning text-warning">72%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};