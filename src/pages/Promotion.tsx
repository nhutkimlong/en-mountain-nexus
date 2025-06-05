import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { TrendingUp, Search, Eye, Edit, Target, Calendar } from "lucide-react";
import AddPromotionDialog from "@/components/AddPromotionDialog";

const Promotion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for promotion activities
  const promotionActivities = [
    {
      id: 1,
      title: "Quảng cáo Facebook Lễ hội Núi Bà Đen",
      type: "Quảng cáo trực tuyến",
      period: "15/03 - 17/03/2024",
      status: "Đang chạy",
      budget: 15000000,
      reach: 250000,
      engagement: 12500,
      conversion: 3.2
    },
    {
      id: 2,
      title: "Roadshow Hội chợ Du lịch TP.HCM",
      type: "Hội chợ du lịch",
      period: "20/04 - 22/04/2024",
      status: "Sắp triển khai",
      budget: 50000000,
      reach: 0,
      engagement: 0,
      conversion: 0
    },
    {
      id: 3,
      title: "Hợp tác KOL review điểm đến",
      type: "Hợp tác KOL",
      period: "01/02 - 28/02/2024",
      status: "Hoàn thành",
      budget: 25000000,
      reach: 180000,
      engagement: 18000,
      conversion: 5.8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đang chạy": return "bg-green-100 text-green-800";
      case "Sắp triển khai": return "bg-blue-100 text-blue-800";
      case "Hoàn thành": return "bg-gray-100 text-gray-800";
      case "Tạm dừng": return "bg-yellow-100 text-yellow-800";
      case "Hủy": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredActivities = promotionActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || activity.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Xúc tiến Du lịch</h1>
          <p className="text-slate-600 mt-1">Quản lý các hoạt động marketing và xúc tiến du lịch</p>
        </div>
        <AddPromotionDialog />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Hoạt động tháng này</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">12</div>
            <p className="text-xs text-slate-500 mt-1">+4 so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng ngân sách</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">2.8 tỷ</div>
            <p className="text-xs text-slate-500 mt-1">VNĐ cho quý này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng tiếp cận</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">1.2M</div>
            <p className="text-xs text-slate-500 mt-1">Lượt tiếp cận tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tỷ lệ chuyển đổi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4.2%</div>
            <p className="text-xs text-slate-500 mt-1">Trung bình các hoạt động</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Hiệu quả Hoạt động
          </CardTitle>
          <CardDescription>Tổng quan hiệu quả các hoạt động xúc tiến</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">650K</div>
              <p className="text-sm text-slate-600">Tổng Reach</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">32.5K</div>
              <p className="text-sm text-slate-600">Tổng Engagement</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">90M</div>
              <p className="text-sm text-slate-600">Tổng chi phí (VNĐ)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activities List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Danh sách Hoạt động</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm hoạt động..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Lọc theo trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="Đang chạy">Đang chạy</SelectItem>
                <SelectItem value="Sắp triển khai">Sắp triển khai</SelectItem>
                <SelectItem value="Hoàn thành">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tiêu đề hoạt động</TableHead>
                <TableHead>Loại hình</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngân sách</TableHead>
                <TableHead>Reach/Engagement</TableHead>
                <TableHead>Conversion</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.title}</TableCell>
                  <TableCell className="text-slate-600">{activity.type}</TableCell>
                  <TableCell className="text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {activity.period}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {(activity.budget / 1000000).toFixed(1)}M VNĐ
                  </TableCell>
                  <TableCell className="text-slate-600">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {activity.reach > 0 ? `${(activity.reach / 1000).toFixed(0)}K` : "-"} / 
                      {activity.engagement > 0 ? ` ${(activity.engagement / 1000).toFixed(1)}K` : " -"}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {activity.conversion > 0 ? `${activity.conversion}%` : "-"}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Promotion;
