
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Plus, Eye, Edit, AlertTriangle } from "lucide-react";

const Heritage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for heritage sites
  const heritageSites = [
    {
      id: 1,
      name: "Đình làng Bàu Cua",
      location: "Xã Bàu Cua, Tây Ninh",
      type: "Di tích lịch sử",
      status: "Tốt",
      lastInspection: "2024-01-15",
      issues: 0
    },
    {
      id: 2,
      name: "Chùa Bà Đen",
      location: "Núi Bà Đen, Tây Ninh",
      type: "Di tích tôn giáo",
      status: "Cần bảo trì",
      lastInspection: "2024-01-20",
      issues: 2
    },
    {
      id: 3,
      name: "Hầm địa đạo Cù Chi",
      location: "Huyện Cù Chi, TP.HCM",
      type: "Di tích chiến tranh",
      status: "Tốt",
      lastInspection: "2024-01-25",
      issues: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tốt": return "bg-green-100 text-green-800";
      case "Cần bảo trì": return "bg-yellow-100 text-yellow-800";
      case "Hư hỏng": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredSites = heritageSites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || site.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Giám sát Di tích</h1>
          <p className="text-slate-600 mt-1">Quản lý và theo dõi tình trạng các di tích lịch sử</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Thêm Di tích mới
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng số di tích</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">24</div>
            <p className="text-xs text-slate-500 mt-1">+2 so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tình trạng tốt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">18</div>
            <p className="text-xs text-slate-500 mt-1">75% tổng số</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Cần bảo trì</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">5</div>
            <p className="text-xs text-slate-500 mt-1">21% tổng số</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Cần sửa chữa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-xs text-slate-500 mt-1">4% tổng số</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Danh sách Di tích</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm di tích..."
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
                <SelectItem value="Tốt">Tốt</SelectItem>
                <SelectItem value="Cần bảo trì">Cần bảo trì</SelectItem>
                <SelectItem value="Hư hỏng">Hư hỏng</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên di tích</TableHead>
                <TableHead>Vị trí</TableHead>
                <TableHead>Loại hình</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Kiểm tra cuối</TableHead>
                <TableHead>Vấn đề</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSites.map((site) => (
                <TableRow key={site.id}>
                  <TableCell className="font-medium">{site.name}</TableCell>
                  <TableCell className="text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {site.location}
                    </div>
                  </TableCell>
                  <TableCell>{site.type}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(site.status)}>
                      {site.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">{site.lastInspection}</TableCell>
                  <TableCell>
                    {site.issues > 0 ? (
                      <div className="flex items-center text-red-600">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {site.issues}
                      </div>
                    ) : (
                      <span className="text-green-600">Không có</span>
                    )}
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

export default Heritage;
