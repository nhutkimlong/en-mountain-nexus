import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Filter } from "lucide-react";
import AddPlanDialog from "@/components/AddPlanDialog";

const Plans = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const plans = [
    {
      id: 1,
      name: "Kế hoạch tổ chức Lễ hội mùa xuân 2024",
      documentNumber: "KH-001/2024",
      issueDate: "15/01/2024",
      status: "Đang thực hiện",
      statusColor: "bg-blue-500",
      tasks: 8,
      completedTasks: 5
    },
    {
      id: 2,
      name: "Chương trình bảo tồn di tích năm 2024",
      documentNumber: "KH-002/2024",
      issueDate: "20/01/2024",
      status: "Mới",
      statusColor: "bg-green-500",
      tasks: 12,
      completedTasks: 0
    },
    {
      id: 3,
      name: "Kế hoạch xúc tiến du lịch quý I/2024",
      documentNumber: "KH-003/2024",
      issueDate: "25/01/2024",
      status: "Hoàn thành",
      statusColor: "bg-gray-500",
      tasks: 6,
      completedTasks: 6
    },
    {
      id: 4,
      name: "Chương trình đào tạo hướng dẫn viên",
      documentNumber: "KH-004/2024",
      issueDate: "30/01/2024",
      status: "Đang thực hiện",
      statusColor: "bg-blue-500",
      tasks: 10,
      completedTasks: 7
    }
  ];

  const filteredPlans = plans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.documentNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Quản lý Kế hoạch</h1>
          <p className="text-slate-600 mt-1">Theo dõi và quản lý các kế hoạch công việc</p>
        </div>
        <AddPlanDialog />
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Tìm kiếm theo tên kế hoạch hoặc số hiệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Lọc
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlans.map((plan) => (
          <Card key={plan.id} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-slate-800 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="flex flex-col gap-1">
                    <span>Số hiệu: {plan.documentNumber}</span>
                    <span>Ngày ban hành: {plan.issueDate}</span>
                  </CardDescription>
                </div>
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={`${plan.statusColor} text-white`}>
                    {plan.status}
                  </Badge>
                  <div className="text-sm text-slate-600">
                    {plan.completedTasks}/{plan.tasks} nhiệm vụ
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Tiến độ</span>
                    <span className="text-slate-800 font-medium">
                      {Math.round((plan.completedTasks / plan.tasks) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(plan.completedTasks / plan.tasks) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Xem chi tiết
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Chỉnh sửa
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPlans.length === 0 && (
        <Card className="border-0 shadow-md">
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-800 mb-2">Không tìm thấy kế hoạch</h3>
            <p className="text-slate-600 mb-4">
              {searchTerm ? "Thử tìm kiếm với từ khóa khác" : "Chưa có kế hoạch nào được tạo"}
            </p>
            <AddPlanDialog />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Plans;
