
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, MapPin, Megaphone, Users, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Kế hoạch đang thực hiện",
      value: "12",
      icon: FileText,
      description: "Số kế hoạch đang được triển khai",
      color: "bg-blue-500"
    },
    {
      title: "Di tích cần giám sát",
      value: "8",
      icon: MapPin,
      description: "Trong tháng này",
      color: "bg-green-500"
    },
    {
      title: "Sự kiện sắp diễn ra",
      value: "3",
      icon: Calendar,
      description: "Trong 30 ngày tới",
      color: "bg-orange-500"
    },
    {
      title: "Nội dung xúc tiến",
      value: "25",
      icon: Megaphone,
      description: "Đã đăng tải tháng này",
      color: "bg-purple-500"
    }
  ];

  const recentActivities = [
    {
      title: "Cập nhật kế hoạch tổ chức lễ hội mùa xuân",
      time: "2 giờ trước",
      type: "plan"
    },
    {
      title: "Hoàn thành giám sát chùa Linh Sơn",
      time: "5 giờ trước", 
      type: "heritage"
    },
    {
      title: "Đăng bài viết xúc tiến trên fanpage",
      time: "1 ngày trước",
      type: "promotion"
    },
    {
      title: "Ghi nhận số liệu du khách tháng 11",
      time: "2 ngày trước",
      type: "stats"
    }
  ];

  const upcomingTasks = [
    {
      title: "Kiểm tra tình trạng QR code tại các điểm tham quan",
      dueDate: "Ngày mai",
      priority: "high"
    },
    {
      title: "Chuẩn bị báo cáo hoạt động tháng 11",
      dueDate: "3 ngày nữa",
      priority: "medium"
    },
    {
      title: "Họp bàn kế hoạch sự kiện Tết Nguyên đán",
      dueDate: "Tuần tới",
      priority: "high"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Bảng điều khiển</h1>
          <p className="text-slate-600 mt-1">Tổng quan hoạt động của Phòng Quản lý di tích và hoạt động du lịch</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Hôm nay</p>
          <p className="text-lg font-semibold text-slate-800">
            {new Date().toLocaleDateString('vi-VN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <TrendingUp className="h-5 w-5" />
              Hoạt động gần đây
            </CardTitle>
            <CardDescription>
              Các hoạt động được cập nhật mới nhất
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">{activity.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200 hover:bg-blue-50">
              Xem tất cả hoạt động
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Calendar className="h-5 w-5" />
              Nhiệm vụ sắp tới
            </CardTitle>
            <CardDescription>
              Các công việc cần hoàn thành
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                    task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800">{task.title}</p>
                    <p className="text-xs text-slate-500 mt-1">Hạn: {task.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 text-green-600 border-green-200 hover:bg-green-50">
              Xem tất cả nhiệm vụ
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-slate-800">Thao tác nhanh</CardTitle>
          <CardDescription>
            Các chức năng thường xuyên sử dụng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col gap-2 bg-blue-600 hover:bg-blue-700">
              <FileText className="h-6 w-6" />
              <span className="text-sm">Thêm kế hoạch</span>
            </Button>
            <Button className="h-20 flex-col gap-2 bg-green-600 hover:bg-green-700">
              <MapPin className="h-6 w-6" />
              <span className="text-sm">Ghi nhận giám sát</span>
            </Button>
            <Button className="h-20 flex-col gap-2 bg-orange-600 hover:bg-orange-700">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Tạo sự kiện</span>
            </Button>
            <Button className="h-20 flex-col gap-2 bg-purple-600 hover:bg-purple-700">
              <Megaphone className="h-6 w-6" />
              <span className="text-sm">Xúc tiến du lịch</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
