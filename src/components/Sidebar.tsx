
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  MapPin, 
  Calendar, 
  Megaphone, 
  Users,
  Home,
  Menu,
  X,
  LogOut
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Bảng điều khiển",
      icon: Home,
      path: "/dashboard",
      color: "text-blue-600"
    },
    {
      title: "Kế hoạch & Nhiệm vụ",
      icon: FileText,
      path: "/plans",
      color: "text-blue-600"
    },
    {
      title: "Giám sát Di tích",
      icon: MapPin,
      path: "/heritage",
      color: "text-green-600"
    },
    {
      title: "Sự kiện Du lịch",
      icon: Calendar,
      path: "/events",
      color: "text-orange-600"
    },
    {
      title: "Xúc tiến Du lịch",
      icon: Megaphone,
      path: "/promotion",
      color: "text-purple-600"
    },
    {
      title: "Thống kê Du khách",
      icon: Users,
      path: "/statistics",
      color: "text-indigo-600"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={cn(
      "bg-white border-r border-slate-200 h-screen flex flex-col transition-all duration-300 shadow-sm",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NBD</span>
              </div>
              <div>
                <h2 className="font-bold text-slate-800 text-sm">NBD-RMS</h2>
                <p className="text-xs text-slate-500">Núi Bà Đen</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-2">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start h-10 px-3",
                isCollapsed ? "px-2" : "px-3",
                location.pathname === item.path 
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600" 
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className={cn(
                "h-5 w-5 flex-shrink-0",
                location.pathname === item.path ? item.color : "",
                isCollapsed ? "mr-0" : "mr-3"
              )} />
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.title}</span>
              )}
            </Button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-slate-200">
        <Button
          variant="ghost"
          className="w-full justify-start h-10 px-3 text-slate-600 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className={cn(
            "h-5 w-5 flex-shrink-0",
            isCollapsed ? "mr-0" : "mr-3"
          )} />
          {!isCollapsed && <span className="text-sm font-medium">Đăng xuất</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
