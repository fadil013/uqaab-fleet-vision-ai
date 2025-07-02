import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const monthlyRevenue = [
  { month: 'Jan', revenue: 1200000, profit: 216000, margin: 18 },
  { month: 'Feb', revenue: 1350000, profit: 256500, margin: 19 },
  { month: 'Mar', revenue: 1180000, profit: 189000, margin: 16 },
  { month: 'Apr', revenue: 1420000, profit: 284000, margin: 20 },
  { month: 'May', revenue: 1650000, profit: 330000, margin: 20 },
  { month: 'Jun', revenue: 1580000, profit: 300000, margin: 19 }
];

const revenueByRoute = [
  { route: 'Lahore-Karachi', revenue: 2400000, trips: 234, avgRevenue: 10256 },
  { route: 'Islamabad-Lahore', revenue: 1890000, trips: 189, avgRevenue: 10000 },
  { route: 'Karachi-Faisalabad', revenue: 1560000, trips: 156, avgRevenue: 10000 },
  { route: 'Multan-Rawalpindi', revenue: 980000, trips: 98, avgRevenue: 10000 },
  { route: 'Peshawar-Quetta', revenue: 670000, trips: 67, avgRevenue: 10000 }
];

const revenueByVehicle = [
  { type: 'Truck', revenue: 6450000, percentage: 42, color: 'hsl(var(--chart-1))' },
  { type: 'Trailer', revenue: 4620000, percentage: 30, color: 'hsl(var(--chart-2))' },
  { type: 'Van', revenue: 4410000, percentage: 28, color: 'hsl(var(--chart-3))' }
];

const profitabilityAnalysis = [
  { category: 'Short Routes (<300km)', revenue: 3200000, cost: 2560000, profit: 640000, margin: 20 },
  { category: 'Medium Routes (300-500km)', revenue: 4800000, cost: 3840000, profit: 960000, margin: 20 },
  { category: 'Long Routes (500-700km)', revenue: 5600000, cost: 4760000, profit: 840000, margin: 15 },
  { category: 'Very Long Routes (>700km)', revenue: 1880000, cost: 1692000, profit: 188000, margin: 10 }
];

export const RevenueAnalysis = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
  const totalProfit = monthlyRevenue.reduce((sum, month) => sum + month.profit, 0);
  const avgMargin = (totalProfit / totalRevenue) * 100;

  return (
    <div className="space-y-6">
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-primary border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-sm font-medium">Total Revenue</p>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  {formatCurrency(totalRevenue)}
                </h3>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-xs mt-2">Last 6 months</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-success border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-success-foreground/80 text-sm font-medium">Total Profit</p>
                <h3 className="text-2xl font-bold text-success-foreground">
                  {formatCurrency(totalProfit)}
                </h3>
              </div>
            </div>
            <p className="text-success-foreground/60 text-xs mt-2">Net profit margin</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Profit Margin</p>
                <h3 className="text-2xl font-bold text-foreground">
                  {avgMargin.toFixed(1)}%
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-2">Average margin</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">Growth Rate</p>
                <h3 className="text-2xl font-bold text-foreground">
                  +23.4%
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-2">vs previous period</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue and Profit Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue and Profit Trends</CardTitle>
          <CardDescription>Monthly revenue performance with profit margins</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyRevenue}>
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
                  name === 'margin' ? `${value}%` : formatCurrency(Number(value)),
                  name === 'revenue' ? 'Revenue' : name === 'profit' ? 'Profit' : 'Margin'
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
                name="Revenue"
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stackId="2" 
                stroke="hsl(var(--chart-2))" 
                fill="hsl(var(--chart-2))" 
                fillOpacity={0.6}
                name="Profit"
              />
              <Line 
                type="monotone" 
                dataKey="margin" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                name="Margin %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue by Route and Vehicle Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Revenue Routes</CardTitle>
            <CardDescription>Highest performing routes by revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByRoute} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" className="text-xs fill-muted-foreground" />
                <YAxis dataKey="route" type="category" className="text-xs fill-muted-foreground" width={100} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [formatCurrency(Number(value)), 'Revenue']}
                />
                <Bar dataKey="revenue" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue by Vehicle Type</CardTitle>
            <CardDescription>Revenue distribution across vehicle categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueByVehicle}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, percentage }) => `${type}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {revenueByVehicle.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Revenue']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Profitability Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Profitability Analysis by Route Category</CardTitle>
          <CardDescription>Cost, revenue, and profit margins across different route distances</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={profitabilityAnalysis}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="category" className="text-xs fill-muted-foreground" />
              <YAxis className="text-xs fill-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value, name) => [
                  name === 'margin' ? `${value}%` : formatCurrency(Number(value)),
                  name === 'revenue' ? 'Revenue' : name === 'cost' ? 'Cost' : name === 'profit' ? 'Profit' : 'Margin'
                ]}
              />
              <Legend />
              <Bar dataKey="revenue" fill="hsl(var(--chart-1))" name="Revenue" />
              <Bar dataKey="cost" fill="hsl(var(--chart-4))" name="Cost" />
              <Bar dataKey="profit" fill="hsl(var(--chart-2))" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Optimization Opportunities</CardTitle>
          <CardDescription>Strategic insights for revenue growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <h4 className="font-medium text-foreground mb-2">💰 High-Value Routes</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Lahore-Karachi generates highest revenue ({formatCurrency(2400000)}). Consider increasing frequency and capacity.
              </p>
              <Badge variant="outline">Revenue Leader</Badge>
            </div>
            
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 className="font-medium text-foreground mb-2">📈 Growth Potential</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Medium routes (300-500km) show best margin (20%). Opportunity to expand this segment by 25%.
              </p>
              <Badge variant="outline">Expansion Opportunity</Badge>
            </div>
            
            <div className="p-4 bg-info/10 rounded-lg border border-info/20">
              <h4 className="font-medium text-foreground mb-2">⚡ Quick Wins</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Van operations contribute 28% revenue with high efficiency. Scale van fleet for short-distance deliveries.
              </p>
              <Badge variant="outline">Immediate Action</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};