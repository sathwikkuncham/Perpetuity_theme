// Perpetuity Theme - Sample JavaScript Code
import React, { useState, useEffect } from 'react';
import { LineChart, BarChart, PieChart } from './components/charts';
import { DataTable } from './components/ui/data-table';

/**
 * Dashboard component for displaying auto sales analytics
 * @param {Object} props Component properties
 */
function Dashboard(props) {
  // State management for sales data
  const [salesData, setSalesData] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Constants and configuration
  const CHART_COLORS = ['#06858e', '#1e9ea6', '#37b6be', '#5dc7ce', '#8ad8dd'];
  const DATE_FORMAT = 'MMM YYYY';
  
  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      try {
        setIsLoading(true);
        
        // API calls to fetch data
        const response = await fetch('/api/sales/monthly');
        if (!response.ok) {
          throw new Error('Failed to fetch sales data');
        }
        
        const data = await response.json();
        setSalesData(data);
        
        // Process manufacturer data
        const uniqueManufacturers = [...new Set(data.map(item => item.manufacturer))];
        setManufacturers(uniqueManufacturers);
        
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  /**
   * Calculate total sales by manufacturer
   * @returns {Array} Manufacturer sales data
   */
  function getManufacturerSales() {
    if (!salesData.length) return [];
    
    // Group and aggregate sales by manufacturer
    return manufacturers.map(manufacturer => {
      const manufacturerSales = salesData.filter(sale => 
        sale.manufacturer === manufacturer
      );
      
      return {
        name: manufacturer,
        value: manufacturerSales.reduce((total, sale) => total + sale.units, 0)
      };
    }).sort((a, b) => b.value - a.value);
  }
  
  /**
   * Generate monthly sales trend data
   * @returns {Array} Monthly trend data
   */
  function getMonthlySalesTrend() {
    if (!salesData.length) return [];
    
    // Group sales by month
    const monthlySales = {};
    
    salesData.forEach(sale => {
      const month = formatDate(sale.date);
      
      if (!monthlySales[month]) {
        monthlySales[month] = {
          month,
          totalSales: 0,
          sedanSales: 0,
          suvSales: 0,
          evSales: 0
        };
      }
      
      monthlySales[month].totalSales += sale.units;
      
      // Categorize by vehicle type
      if (sale.vehicleType === 'sedan') {
        monthlySales[month].sedanSales += sale.units;
      } else if (sale.vehicleType === 'suv') {
        monthlySales[month].suvSales += sale.units;
      }
      
      // Track electric vehicles
      if (sale.isElectric) {
        monthlySales[month].evSales += sale.units;
      }
    });
    
    // Convert to array and sort by date
    return Object.values(monthlySales).sort((a, b) => 
      new Date(a.month) - new Date(b.month)
    );
  }
  
  /**
   * Helper function to format dates
   * @param {string} dateString Date to format
   * @returns {string} Formatted date
   */
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  }
  
  /**
   * Calculate year-over-year growth
   * @returns {number} Growth percentage
   */
  function calculateYoYGrowth() {
    if (!salesData.length) return 0;
    
    // Implementation for YoY calculation
    const currentYearSales = salesData
      .filter(sale => new Date(sale.date).getFullYear() === new Date().getFullYear())
      .reduce((total, sale) => total + sale.units, 0);
      
    const previousYearSales = salesData
      .filter(sale => new Date(sale.date).getFullYear() === new Date().getFullYear() - 1)
      .reduce((total, sale) => total + sale.units, 0);
    
    if (previousYearSales === 0) return 0;
    
    return ((currentYearSales - previousYearSales) / previousYearSales) * 100;
  }
  
  // Render loading state
  if (isLoading) {
    return <div className="loading-container">Loading dashboard data...</div>;
  }
  
  // Render error state
  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }
  
  // Calculate derived metrics
  const monthlySalesTrend = getMonthlySalesTrend();
  const manufacturerSales = getManufacturerSales();
  const yoyGrowth = calculateYoYGrowth();
  
  // Render dashboard
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Auto Sales Analytics</h1>
        <div className="dashboard-actions">
          <button className="btn-primary">Export Report</button>
          <button className="btn-secondary">Filter Data</button>
        </div>
      </header>
      
      <div className="metrics-overview">
        <div className="metric-card">
          <h3>Total Sales</h3>
          <div className="metric-value">
            {salesData.reduce((total, sale) => total + sale.units, 0).toLocaleString()}
          </div>
          <div className="metric-trend">
            <span className={yoyGrowth >= 0 ? "trend-up" : "trend-down"}>
              {yoyGrowth.toFixed(1)}%
            </span> from previous year
          </div>
        </div>
        
        {/* Additional metric cards */}
      </div>
      
      <div className="chart-section">
        <div className="chart-container primary-chart">
          <h3>Monthly Sales Trend</h3>
          <LineChart 
            data={monthlySalesTrend}
            xKey="month"
            yKeys={["sedanSales", "suvSales", "evSales"]}
            labels={["Sedans", "SUVs", "Electric Vehicles"]}
            colors={CHART_COLORS.slice(0, 3)}
          />
        </div>
        
        <div className="chart-row">
          <div className="chart-container">
            <h3>Sales by Manufacturer</h3>
            <BarChart 
              data={manufacturerSales.slice(0, 5)}
              xKey="name"
              yKey="value"
              color={CHART_COLORS[0]}
            />
          </div>
          
          <div className="chart-container">
            <h3>Vehicle Type Distribution</h3>
            <PieChart 
              data={[
                { name: "Sedan", value: 35 },
                { name: "SUV", value: 40 },
                { name: "Hatchback", value: 15 },
                { name: "MPV", value: 10 }
              ]}
              colors={CHART_COLORS}
            />
          </div>
        </div>
      </div>
      
      <div className="table-section">
        <h3>Top Selling Models</h3>
        <DataTable 
          data={salesData}
          columns={[
            { key: 'model', header: 'Model' },
            { key: 'manufacturer', header: 'Manufacturer' },
            { key: 'units', header: 'Units Sold' },
            { key: 'vehicleType', header: 'Type' },
            { key: 'isElectric', header: 'Powertrain', formatter: value => value ? 'Electric' : 'Conventional' }
          ]}
          pagination={{ pageSize: 10 }}
          sortable={true}
        />
      </div>
    </div>
  );
}

export default Dashboard;
