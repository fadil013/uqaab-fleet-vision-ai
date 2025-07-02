import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Truck, MapPin, DollarSign, Clock, Fuel, AlertTriangle } from "lucide-react";
import { MetricsGrid } from "./analytics/MetricsGrid";
import { RegionalAnalysis } from "./analytics/RegionalAnalysis";
import { VehiclePerformance } from "./analytics/VehiclePerformance";
import { RevenueAnalysis } from "./analytics/RevenueAnalysis";
import { PerformanceInsights } from "./analytics/PerformanceInsights";
import { BusinessIntelligence } from "./analytics/BusinessIntelligence";

export const Dashboard = () => {
  // Mock data for executive summary
  const executiveMetrics = {
    totalShipments: 2847,
    totalRevenue: 15420000,
    onTimeDeliveryRate: 87.3,
    avgDelay: 24.7,
    totalDistance: 1240000,
    fuelEfficiency: 6.8,
    activeVehicles: 156,
    profitMargin: 18.2
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-primary">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-primary-foreground mb-2">
                Uqaab Fleet Intelligence
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Advanced Analytics Dashboard for Logistics Operations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Live Analytics
              </Badge>
              <Button variant="secondary" size="sm">
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Executive Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-foreground/80 text-sm font-medium">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-primary-foreground">
                      {formatCurrency(executiveMetrics.totalRevenue)}
                    </h3>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary-foreground/60" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-primary-foreground/80 text-sm">+12.5% vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-success border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-success-foreground/80 text-sm font-medium">On-Time Rate</p>
                    <h3 className="text-2xl font-bold text-success-foreground">
                      {executiveMetrics.onTimeDeliveryRate}%
                    </h3>
                  </div>
                  <Clock className="h-8 w-8 text-success-foreground/60" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-warning mr-1" />
                  <span className="text-success-foreground/80 text-sm">+3.2% improvement</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Total Shipments</p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {executiveMetrics.totalShipments.toLocaleString()}
                    </h3>
                  </div>
                  <Truck className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-muted-foreground text-sm">+8.1% this quarter</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">Fuel Efficiency</p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {executiveMetrics.fuelEfficiency} km/L
                    </h3>
                  </div>
                  <Fuel className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                  <span className="text-muted-foreground text-sm">-2.1% needs attention</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="regional">Regional</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <MetricsGrid />
          </TabsContent>

          <TabsContent value="revenue">
            <RevenueAnalysis />
          </TabsContent>

          <TabsContent value="regional">
            <RegionalAnalysis />
          </TabsContent>

          <TabsContent value="vehicles">
            <VehiclePerformance />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceInsights />
          </TabsContent>

          <TabsContent value="insights">
            <BusinessIntelligence />
          </TabsContent>
        </Tabs>

        {/* Alert Section */}
        <div className="mt-8">
          <Card className="border-warning bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <AlertTriangle className="h-5 w-5" />
                Immediate Actions Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">High Delay Routes</p>
                    <p className="text-sm text-muted-foreground">Lahore-Karachi route showing 35+ min delays</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Vehicle Maintenance</p>
                    <p className="text-sm text-muted-foreground">12 vehicles need immediate fuel system check</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-info rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Revenue Opportunity</p>
                    <p className="text-sm text-muted-foreground">Punjab region shows 15% growth potential</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};