
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, TrendingUp, Calendar, MapPin, Download, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  // Mock data for charts
  const visitorsByMonth = [
    { month: 'T1', visitors: 12000 },
    { month: 'T2', visitors: 15000 },
    { month: 'T3', visitors: 18000 },
    { month: 'T4', visitors: 22000 },
    { month: 'T5', visitors: 25000 },
    { month: 'T6', visitors: 28000 },
  ];

  const visitorsBySource = [
    { name: 'Trong nước', value: 75, color: '#3B82F6' },
    { name: 'Quốc tế', value: 25, color: '#EF4444' },
  ];

  const topDestinations = [
    { name: 'Chùa Bà Đen', visitors: 45000 },
    { name: 'Cáp treo', visitors: 38000 },
    { name: 'Khu sinh thái', visitors: 32000 },
    { name: 'Khu vui chơi', visitors: 28000 },
    { name: 'Khu ẩm thực', visitors: 22000 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Thống kê Du khách</h1>
          <p className="text-slate-600 mt-1">Phân tích và báo cáo dữ liệu khách du lịch</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Năm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Bộ lọc
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Download className="h-4 w-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng du khách tháng này</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">28,450</div>
            <p className="text-xs text-green-600 mt-1">+12% so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Du khách quốc tế</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">7,120</div>
            <p className="text-xs text-blue-600 mt-1">25% tổng lượng khách</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Thời gian lưu trú TB</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2.3</div>
            <p className="text-xs text-slate-500 mt-1">ngày/khách</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Doanh thu ước tính</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">8.5B</div>
            <p className="text-xs text-slate-500 mt-1">VNĐ trong tháng</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Xu hướng Du khách theo Tháng
            </CardTitle>
            <CardDescription>Lượng khách tham quan trong 6 tháng gần nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Du khách']} />
                <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Visitor Source */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Phân bố Nguồn Du khách
            </CardTitle>
            <CardDescription>Tỷ lệ khách trong nước và quốc tế</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={visitorsBySource}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {visitorsBySource.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Tỷ lệ']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {visitorsBySource.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-slate-600">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Destinations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Điểm đến Phổ biến
            </CardTitle>
            <CardDescription>Top 5 địa điểm có lượng khách cao nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topDestinations} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={(value) => [value.toLocaleString(), 'Du khách']} />
                <Bar dataKey="visitors" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Visitor Satisfaction */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Thống kê theo Ngày trong Tuần
            </CardTitle>
            <CardDescription>Lượng khách trung bình theo các ngày</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: 'Thứ 2', visitors: 3200, percentage: 45 },
                { day: 'Thứ 3', visitors: 3800, percentage: 54 },
                { day: 'Thứ 4', visitors: 4200, percentage: 60 },
                { day: 'Thứ 5', visitors: 4800, percentage: 68 },
                { day: 'Thứ 6', visitors: 5500, percentage: 78 },
                { day: 'Thứ 7', visitors: 7000, percentage: 100 },
                { day: 'Chủ nhật', visitors: 6800, percentage: 97 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center w-20">
                    <span className="text-sm text-slate-600">{item.day}</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium">{item.visitors.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Báo cáo Chi tiết theo Tháng</CardTitle>
          <CardDescription>Dữ liệu thống kê tổng hợp theo từng tháng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Tháng</th>
                  <th className="text-right p-2">Tổng khách</th>
                  <th className="text-right p-2">Khách trong nước</th>
                  <th className="text-right p-2">Khách quốc tế</th>
                  <th className="text-right p-2">Tăng trưởng</th>
                  <th className="text-right p-2">Doanh thu (triệu VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { month: 'Tháng 1', total: 12000, domestic: 9000, international: 3000, growth: '+5%', revenue: 3600 },
                  { month: 'Tháng 2', total: 15000, domestic: 11250, international: 3750, growth: '+25%', revenue: 4500 },
                  { month: 'Tháng 3', total: 18000, domestic: 13500, international: 4500, growth: '+20%', revenue: 5400 },
                  { month: 'Tháng 4', total: 22000, domestic: 16500, international: 5500, growth: '+22%', revenue: 6600 },
                  { month: 'Tháng 5', total: 25000, domestic: 18750, international: 6250, growth: '+14%', revenue: 7500 },
                  { month: 'Tháng 6', total: 28000, domestic: 21000, international: 7000, growth: '+12%', revenue: 8400 },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-slate-50">
                    <td className="p-2 font-medium">{row.month}</td>
                    <td className="p-2 text-right">{row.total.toLocaleString()}</td>
                    <td className="p-2 text-right">{row.domestic.toLocaleString()}</td>
                    <td className="p-2 text-right">{row.international.toLocaleString()}</td>
                    <td className="p-2 text-right text-green-600">{row.growth}</td>
                    <td className="p-2 text-right">{row.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
