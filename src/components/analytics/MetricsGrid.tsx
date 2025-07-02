import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 1200000, delays: 28.5, efficiency: 6.2 },
  { month: 'Feb', revenue: 1350000, delays: 25.2, efficiency: 6.5 },
  { month: 'Mar', revenue: 1180000, delays: 32.1, efficiency: 5.9 },
  { month: 'Apr', revenue: 1420000, delays: 22.8, efficiency: 6.8 },
  { month: 'May', revenue: 1650000, delays: 19.5, efficiency: 7.1 },
  { month: 'Jun', revenue: 1580000, delays: 24.7, efficiency: 6.8 }
];

const routePerformance = [
  { route: 'Lahore-Karachi', trips: 234, efficiency: 78, delay: 35 },
  { route: 'Islamabad-Lahore', trips: 189, efficiency: 85, delay: 18 },
  { route: 'Karachi-Faisalabad', trips: 156, efficiency: 82, delay: 22 },
  { route: 'Multan-Rawalpindi', trips: 98, efficiency: 88, delay: 15 },
  { route: 'Peshawar-Quetta', trips: 67, efficiency: 75, delay: 42 }
];

export const MetricsGrid = () => {
  return (
    <div className="space-y-6">
      {/* Monthly Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue performance with prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delay vs Efficiency Trends</CardTitle>
            <CardDescription>Monthly delay patterns and fuel efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs fill-muted-foreground" />
                <YAxis className="text-xs fill-muted-foreground" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="delays" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={2}
                  name="Avg Delay (min)"
                />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  name="Fuel Efficiency (km/L)"
                />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Route Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Top Route Performance Analysis</CardTitle>
          <CardDescription>Route efficiency vs delay correlation matrix</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {routePerformance.map((route) => (
              <div key={route.route} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">{route.route}</h4>
                    <p className="text-sm text-muted-foreground">{route.trips} trips completed</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={route.delay < 20 ? "default" : route.delay < 30 ? "secondary" : "destructive"}>
                      {route.delay}min avg delay
                    </Badge>
                    <Badge variant="outline">
                      {route.efficiency}% efficiency
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
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
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fleet Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Active Vehicles</span>
                  <span>156/200</span>
                </div>
                <Progress value={78} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Route Coverage</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Capacity Utilization</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>On-Time Delivery</span>
                  <span>87.3%</span>
                </div>
                <Progress value={87.3} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Customer Satisfaction</span>
                  <span>91%</span>
                </div>
                <Progress value={91} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Route Efficiency</span>
                  <span>83%</span>
                </div>
                <Progress value={83} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Fuel Efficiency</span>
                  <span>6.8 km/L</span>
                </div>
                <Progress value={68} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Cost per KM</span>
                  <span>PKR 45</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Profit Margin</span>
                  <span>18.2%</span>
                </div>
                <Progress value={82} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};