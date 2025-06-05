
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Megaphone, Search, Plus, Eye, Edit, TrendingUp, Globe, Users } from "lucide-react";

const Promotion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // Mock data for promotion campaigns
  const campaigns = [
    {
      id: 1,
      name: "Quảng bá Núi Bà Đen trên Social Media",
      type: "Digital Marketing",
      platform: "Facebook, Instagram",
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      status: "Đang chạy",
      budget: "50,000,000",
      reach: "125,000",
      engagement: "8,500"
    },
    {
      id: 2,
      name: "Hợp tác với Travel Blogger",
      type: "Influencer Marketing",
      platform: "YouTube, Blog",
      startDate: "2024-02-15",
      endDate: "2024-04-15",
      status: "Đang chạy",
      budget: "30,000,000",
      reach: "75,000",
      engagement: "12,300"
    },
    {
      id: 3,
      name: "Quảng cáo trên Google Ads",
      type: "Search Marketing",
      platform: "Google Ads",
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      status: "Đang chạy",
      budget: "100,000,000",
      reach: "250,000",
      engagement: "15,600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đang chạy": return "bg-green-100 text-green-800";
      case "Đã hoàn thành": return "bg-blue-100 text-blue-800";
      case "Tạm dừng": return "bg-yellow-100 text-yellow-800";
      case "Đã hủy": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.platform.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || campaign.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Xúc tiến Du lịch</h1>
          <p className="text-slate-600 mt-1">Quản lý các chiến dịch quảng bá và xúc tiến du lịch</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Tạo Chiến dịch mới
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Chiến dịch đang chạy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">12</div>
            <p className="text-xs text-slate-500 mt-1">+4 so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng tiếp cận</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">450K</div>
            <p className="text-xs text-slate-500 mt-1">Người được tiếp cận</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tương tác</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">36.4K</div>
            <p className="text-xs text-slate-500 mt-1">Lượt tương tác</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Ngân sách sử dụng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">180M</div>
            <p className="text-xs text-slate-500 mt-1">VNĐ trong tháng</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Hiệu quả Chiến dịch
          </CardTitle>
          <CardDescription>Thống kê tiếp cận và tương tác theo tháng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <p className="text-slate-600">Biểu đồ hiệu quả chiến dịch</p>
              <p className="text-sm text-slate-500">Sẽ hiển thị dữ liệu thực tế khi tích hợp</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Digital Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-blue-600">8 chiến dịch</div>
            <p className="text-xs text-slate-500 mt-1">Facebook, Google, Instagram</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Influencer Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-green-600">3 chiến dịch</div>
            <p className="text-xs text-slate-500 mt-1">YouTuber, Blogger</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
              <Megaphone className="h-4 w-4 mr-2" />
              Traditional Media
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-purple-600">1 chiến dịch</div>
            <p className="text-xs text-slate-500 mt-1">TV, Radio, Báo chí</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Danh sách Chiến dịch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm chiến dịch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Lọc theo loại" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                <SelectItem value="Influencer Marketing">Influencer Marketing</SelectItem>
                <SelectItem value="Search Marketing">Search Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên chiến dịch</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Nền tảng</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngân sách</TableHead>
                <TableHead>Tiếp cận</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell className="text-slate-600">{campaign.type}</TableCell>
                  <TableCell className="text-slate-600">{campaign.platform}</TableCell>
                  <TableCell className="text-slate-600">
                    {campaign.startDate} - {campaign.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {parseInt(campaign.budget).toLocaleString()} VNĐ
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {parseInt(campaign.reach).toLocaleString()}
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
