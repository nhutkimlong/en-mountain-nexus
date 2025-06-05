import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Eye, Edit, Users, MapPin } from "lucide-react";
import AddEventDialog from "@/components/AddEventDialog";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for tourism events
  const events = [
    {
      id: 1,
      name: "Lễ hội Núi Bà Đen 2024",
      location: "Núi Bà Đen, Tây Ninh",
      startDate: "2024-03-15",
      endDate: "2024-03-17",
      status: "Đang diễn ra",
      expectedVisitors: 50000,
      actualVisitors: 35000,
      organizer: "Ban Quản lý Khu du lịch"
    },
    {
      id: 2,
      name: "Festival Văn hóa Dân gian",
      location: "Khu du lịch sinh thái",
      startDate: "2024-04-20",
      endDate: "2024-04-22",
      status: "Sắp diễn ra",
      expectedVisitors: 20000,
      actualVisitors: 0,
      organizer: "Sở Văn hóa & Thể thao"
    },
    {
      id: 3,
      name: "Đêm nhạc Acoustic",
      location: "Sân khấu ngoài trời",
      startDate: "2024-02-14",
      endDate: "2024-02-14",
      status: "Đã kết thúc",
      expectedVisitors: 5000,
      actualVisitors: 4500,
      organizer: "Công ty Sự kiện ABC"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đang diễn ra": return "bg-green-100 text-green-800";
      case "Sắp diễn ra": return "bg-blue-100 text-blue-800";
      case "Đã kết thúc": return "bg-gray-100 text-gray-800";
      case "Đã hủy": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Sự kiện Du lịch</h1>
          <p className="text-slate-600 mt-1">Quản lý và theo dõi các sự kiện du lịch tại khu vực</p>
        </div>
        <AddEventDialog />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Sự kiện tháng này</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">8</div>
            <p className="text-xs text-slate-500 mt-1">+3 so với tháng trước</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Đang diễn ra</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-xs text-slate-500 mt-1">Sự kiện hiện tại</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tổng du khách dự kiến</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">75K</div>
            <p className="text-xs text-slate-500 mt-1">Cho tháng này</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tỷ lệ tham gia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">87%</div>
            <p className="text-xs text-slate-500 mt-1">So với dự kiến</p>
          </CardContent>
        </Card>
      </div>

      {/* Event Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Lịch Sự kiện
          </CardTitle>
          <CardDescription>Tổng quan sự kiện trong tháng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map(day => (
              <div key={day} className="p-2 font-medium text-slate-600">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div key={i + 1} className={`p-2 rounded-lg border ${
                [15, 16, 17, 20, 21, 22].includes(i + 1) 
                  ? "bg-orange-100 border-orange-300 text-orange-800" 
                  : "border-slate-200"
              }`}>
                {i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Danh sách Sự kiện</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Tìm kiếm sự kiện..."
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
                <SelectItem value="Đang diễn ra">Đang diễn ra</SelectItem>
                <SelectItem value="Sắp diễn ra">Sắp diễn ra</SelectItem>
                <SelectItem value="Đã kết thúc">Đã kết thúc</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên sự kiện</TableHead>
                <TableHead>Địa điểm</TableHead>
                <TableHead>Thời gian</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Du khách</TableHead>
                <TableHead>Đơn vị tổ chức</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell className="text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">
                    {event.startDate} - {event.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-slate-600">
                      <Users className="h-4 w-4 mr-1" />
                      {event.actualVisitors.toLocaleString()}/{event.expectedVisitors.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600">{event.organizer}</TableCell>
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

export default Events;
